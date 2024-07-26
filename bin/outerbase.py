#!/usr/bin/env python3

import os
import shutil
import argparse

def copy_template(template_folder, destination_folder):
    try:
        shutil.copytree(template_folder, destination_folder)
        print(f"Template copied to {destination_folder}")
    except Exception as e:
        print(f"Error copying template: {e}")

def remove_unwanted_files(destination_folder, selected_option, include_configuration):
    files_to_keep = {
        1: ["cell.js"],
        2: ["cell-accessory.js"],
        3: ["cell.js", "cell-accessory.js"],
        4: ["cell.js", "cell-accessory.js", "editor.js"],
        5: ["cell-accessory.js", "editor.js"]
    }

    if include_configuration:
        for key in files_to_keep:
            files_to_keep[key].append("configuration.js")

    all_files = ["cell.js", "cell-accessory.js", "configuration.js", "editor.js"]
    files_to_remove = [f for f in all_files if f not in files_to_keep[selected_option]]

    for file in files_to_remove:
        file_path = os.path.join(destination_folder, "src", "views", file)
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"Removed {file_path}")

def edit_index_js(destination_folder, plugin_id, selected_option, include_configuration):
    index_file_path = os.path.join(destination_folder, "src", "index.js")
    
    import_lines = {
        1: "import { OuterbasePluginCell_$PLUGIN_ID } from './views/cell.js';\n",
        2: "import { OuterbasePluginCellAccessory_$PLUGIN_ID } from './views/cell-accessory.js';\n",
        4: "import { OuterbasePluginEditor_$PLUGIN_ID } from './views/editor.js';\n",
        6: "import { OuterbasePluginConfiguration_$PLUGIN_ID } from './views/configuration.js';\n"
    }
    
    define_lines = {
        1: "window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID);\n",
        2: "window.customElements.define('outerbase-plugin-cell-accessory-$PLUGIN_ID', OuterbasePluginCellAccessory_$PLUGIN_ID);\n",
        4: "window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID);\n",
        6: "window.customElements.define('outerbase-plugin-configuration-$PLUGIN_ID', OuterbasePluginConfiguration_$PLUGIN_ID);\n"
    }

    imports_to_write = ""
    defines_to_write = ""
    
    if selected_option in [1, 3, 4]:
        imports_to_write += import_lines[1]
        defines_to_write += define_lines[1]
    if selected_option in [2, 3, 4, 5]:
        imports_to_write += import_lines[2]
        defines_to_write += define_lines[2]
    if selected_option in [4, 5]:
        imports_to_write += import_lines[4]
        defines_to_write += define_lines[4]
    if include_configuration:
        imports_to_write += import_lines[6]
        defines_to_write += define_lines[6]

    with open(index_file_path, "w") as f:
        f.write(imports_to_write + "\n" + defines_to_write)

    print(f"Edited index.js for plugin ID: {plugin_id}")

def create_plugin(template_path):
    options = [
        "Cell",
        "Accessory",
        "Cell + Accessory",
        "Cell + Accessory + Editor",
        "Accessory + Editor"
    ]
    
    print("Select what type of plugin you want to create:")
    for i, option in enumerate(options, 1):
        print(f"{i}. {option}")
    
    while True:
        try:
            choice = int(input("Enter the number of your choice: "))
            if 1 <= choice <= len(options):
                break
            else:
                print("Invalid choice. Please select a number between 1 and 5.")
        except ValueError:
            print("Invalid input. Please enter a number.")

    plugin_type = options[choice - 1]
    plugin_name = input(f"Enter the name for your {plugin_type} plugin: ").strip()
    plugin_id = plugin_name.replace(" ", "_")

    include_configuration = False
    config_response = input("Will your plugin require user configuration to use? Y/N: ").strip().upper()
    if config_response == 'Y':
        include_configuration = True

    template_folder = os.path.join(template_path, "./plugins/column/_template")
    destination_folder = os.path.join(os.getcwd(), "./plugins/column", plugin_name)
    
    copy_template(template_folder, destination_folder)
    remove_unwanted_files(destination_folder, choice, include_configuration)
    edit_index_js(destination_folder, plugin_id, choice, include_configuration)

def main():
    parser = argparse.ArgumentParser(prog='outerbase')
    subparsers = parser.add_subparsers(dest='command', required=True)

    plugin_parser = subparsers.add_parser('plugin', help='Plugin related commands')
    plugin_subparsers = plugin_parser.add_subparsers(dest='subcommand', required=True)
    
    create_parser = plugin_subparsers.add_parser('create', help='Create a new plugin')
    create_parser.set_defaults(func=create_plugin)
    
    args = parser.parse_args()
    template_path = os.getenv('OUTERBASE_PLUGIN_TEMPLATE_PATH')
    if not template_path:
        print("OUTERBASE_PLUGIN_TEMPLATE_PATH environment variable is not set.")
        return

    args.func(template_path)

if __name__ == "__main__":
    main()
