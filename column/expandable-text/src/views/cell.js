import { 
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    decodeAttributeByName_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID
} from '../utils.js';

var templateCell_$PLUGIN_ID = document.createElement('template')
templateCell_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        height: 100%;
        min-height: 34px;
        position: relative;
        padding: 0 8px 0 12px;
        display: flex;
        align-items: center;
        gap: 0px;
        transform: translateY(-1px);
    }

    input {
        height: 100%;
        flex: 1;
        background-color: transparent;
        border: 0;
        min-width: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--ob-text-color);
        font-size: 12px;
        font-family: "Inter", sans-serif;
        outline: none;
        padding: 0;
    }

    input:focus {
        outline: none;
    }

    svg {
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 16px;
        fill: var(--ob-text-color);
        cursor: pointer;
        padding: 2px;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    #container:hover svg {
        opacity: 1;
    }

    #outer-container {
        position: relative;
        width: 100%;
        height: 34px;
    }
</style>

<div id="container">
    <input type="text" id="image-value" placeholder="NULL">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M216,48V96a8,8,0,0,1-16,0V67.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM106.34,138.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l50.35-50.34a8,8,0,0,0-11.32-11.32Z"></path></svg>
</div>
`

export class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true))
    }
    
    connectedCallback() {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))
        this.render()

        // When the SVG is clicked, we want to trigger an event to the parent
        this.shadow.querySelector('svg').addEventListener('click', () => {
            triggerEvent_$PLUGIN_ID(this, {
                action: "onedit",
                value: true,
            })
        })

        // Listen to paste event on input
        this.shadow.querySelector('input').addEventListener('paste', (event) => {
            event.preventDefault()
            let text = event.clipboardData.getData('text/plain')
            document.execCommand('insertText', false, text)

            // Send the event to the parent
            triggerEvent_$PLUGIN_ID(this, {
                action: "updatecell",
                value: text,
            })
        })

        // Detect when input value changes
        this.shadow.querySelector('input').addEventListener('input', (event) => {
            let cellValue = event.target.value

            // Set the input value to the cell value
            this.setAttribute('cellvalue', cellValue)
            this.shadow.querySelector('input').value = cellValue

            // Send the event to the parent
            triggerEvent_$PLUGIN_ID(this, {
                action: "updatecell",
                value: cellValue,
            })
        })
    }

    render() {
        let cellValue = this.getAttribute('cellvalue')

        if (cellValue.length === 0 || (cellValue && cellValue.toLowerCase() === "null")) {
            this.shadow.querySelector('input').placeholder = "NULL"
        } else {
            this.shadow.querySelector('input').value = cellValue
        }
    }
}
