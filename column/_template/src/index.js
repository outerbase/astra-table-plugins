import { OuterbasePluginCell_$PLUGIN_ID } from './views/cell.js';
import { OuterbasePluginCellAccessory_$PLUGIN_ID } from './views/cell.js';
import { OuterbasePluginEditor_$PLUGIN_ID } from './views/editor.js';
import { OuterbasePluginConfiguration_$PLUGIN_ID } from './views/configuration.js';

window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID);
window.customElements.define('outerbase-plugin-cell-accessory-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID);
window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID);
window.customElements.define('outerbase-plugin-configuration-$PLUGIN_ID', OuterbasePluginConfiguration_$PLUGIN_ID);
