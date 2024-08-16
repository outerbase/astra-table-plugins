import { 
    OuterbasePluginConfig_$PLUGIN_ID,
    decodeAttributeByName_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID
} from '../utils.js';

var templateEditor_$PLUGIN_ID = document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        width: 400px;
        height: 200px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        overflow: hidden;
        background-color: #f5f5f5;
        color: var(--ob-text-color);
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: Inter, sans-serif;
    }

    .dark {
        border: 1px solid #262626 !important;
        background-color: #171717 !important;
    }

    p {
        margin: 0;
        font-size: 12px;
        opacity: 0.5;
    }

    textarea {
        resize: none;
        flex: 1;
        background: #f5f5f5;
        border: transparent;
        font-family: Inter, sans-serif;
        font-size: 12px;
    }

    .dark textarea {
        background: #171717 !important;
        color: white;
    }

    textarea:focus { 
        outline: none !important;
    }

    #header {
        display: flex;
        flex: 1;
        padding: 16px 16px 4px 16px;
    }

    #footer {
        display: flex;
        gap: 8px;
        align-items: center;
        border-top: 1px solid #e5e5e5;
        padding: 8px 12px 8px 18px;
    }

    .dark #footer {
        border-top: 1px solid #262626;
    }

    #footer > span {
        font-size: 12px;
        font-family: Inter, sans-serif;
        flex: 1;
    }

    svg {
        fill: var(--ob-text-color);
        opacity: 0.5;
    }

    #cancel-button {
        color: var(--ob-text-color);
        padding: 8px 10px;
        font-size: 12px;
        line-height: 16px;
        cursor: pointer;
    }

    #null-placeholder {
        position: absolute;
        top: 18px;
        left: 18px;
        pointer-events: none;
        color: #a3a3a3;
    }

    .dark #null-placeholder {
        color: #525252;
    }
</style>

<div id="container" class="theme-container">
    <div id="header">
        <textarea></textarea>
        <p id="null-placeholder">NULL</p>
    </div>

    <div id="footer">
        <span id="character-count"></span>
        <div id="cancel-button">Discard</div>
        <astra-button id="update-button" size="compact">Update</astra-button>
    </div>
</div>
`;

export class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID;
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})
    tableSchema = {}
    metadata = {}

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true))
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))
        let metadata = decodeAttributeByName_$PLUGIN_ID(this, "metadata")
        this.config.theme = metadata?.theme

        var element = this.shadow.querySelector(".theme-container")
        element.classList.remove("dark")
        element.classList.add(this.config.theme);

        this.render()
    }
    
    connectedCallback() {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))
        this.tableSchema = decodeAttributeByName_$PLUGIN_ID(this, "tableschemavalue")
        this.metadata = decodeAttributeByName_$PLUGIN_ID(this, "metadata")
        const columnName = this.getAttribute('columnname')
        this.render()

        const availableColumns = this.tableSchema.columns

        // Get the column object from the table schema
        const column = availableColumns?.find(column => column.name === columnName)
        this.maximumCharacterCount = column?.character_maximum_length || null
        this.updateCharacterCount()

        // Listen to input changes in textarea
        this.shadow.querySelector('textarea').addEventListener('input', (event) => {
            const cellValue = event.target.value

            if (cellValue.length === 0 || (cellValue && cellValue.toLowerCase() === "null")) {
                this.shadow.querySelector('#null-placeholder').style.display = "block"
            } else {
                this.shadow.querySelector('#null-placeholder').style.display = "none"
            }

            this.updateCharacterCount()
        })
        
        // Listen to `update-button` and `cancel-button` clicks
        this.shadow.querySelector('#update-button').addEventListener('click', () => {
            // Get value of textarea
            let value = this.shadow.querySelector('textarea').value

            triggerEvent_$PLUGIN_ID(this, {
                action: "updatecell",
                value,
            })

            triggerEvent_$PLUGIN_ID(this, {
                action: "onstopedit"
            })

            // Close the editor after event has saved changes
            setTimeout(() => {
                triggerEvent_$PLUGIN_ID(this, {
                    action: "onstopedit"
                })
            }, 500);
        })

        this.shadow.querySelector('#cancel-button').addEventListener('click', () => {
            triggerEvent_$PLUGIN_ID(this, {
                action: "oncanceledit",
                value: true,
            })
        })
    }

    render() {
        // Get the `cellValue` and populate it in the `textarea`
        let cellValue = this.getAttribute('cellvalue')
        this.shadow.querySelector('textarea').value = cellValue

        if (cellValue.length === 0 || (cellValue && cellValue.toLowerCase() === "null")) {
            // this.shadow.querySelector('textarea').placeholder = "NULL"
            this.shadow.querySelector('textarea').value = ""
            this.shadow.querySelector('#null-placeholder').style.display = "block"
        } else {
            this.shadow.querySelector('textarea').value = cellValue
            this.shadow.querySelector('#null-placeholder').style.display = "none"
        }

        // If `this.metadata.editable` is false, hide the button
        if (this.metadata.editable === false) {
            this.shadow.querySelector('#footer').style.display = "none"

            // Set textarea to readonly
            this.shadow.querySelector('textarea').readOnly = true
        } else {
            this.shadow.querySelector('#footer').style.display = "flex"

            // Set textarea to readonly
            this.shadow.querySelector('textarea').readOnly = false
        }
    }

    updateCharacterCount() {
        const currentCharacterLength = this.shadow.querySelector('textarea').value.length

        if (this.maximumCharacterCount) {
            const formattedCharacterLength = Number(currentCharacterLength).toLocaleString();
            const formattedMaxNumber = Number(this.maximumCharacterCount).toLocaleString();
            this.shadow.querySelector('#character-count').textContent = `${formattedCharacterLength}/${formattedMaxNumber}`;
        } else {
            this.shadow.querySelector('#character-count').textContent = ``;
        }

        // If the character length exceeds the maximum character count, show the text in red
        if (currentCharacterLength > this.maximumCharacterCount) {
            this.shadow.querySelector('#character-count').style.color = "#F0384E";
            this.shadow.querySelector('#character-count').style.opacity = 1;
        } else {
            this.shadow.querySelector('#character-count').style.color = "var(--ob-text-color)";
            this.shadow.querySelector('#character-count').style.opacity = 0.5;
        }
    }
}
