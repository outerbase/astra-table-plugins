import {
    decodeAttributeByName_$PLUGIN_ID,
    OuterbaseColumnEvent_$PLUGIN_ID,
    OuterbaseEvent_$PLUGIN_ID,
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID
} from '../utils.js';

var templateCellAccessory_$PLUGIN_ID = document.createElement('template')
templateCellAccessory_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        height: 18px;
        width: 18px;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    svg {
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 16px;
        fill: var(--ob-text-color);
        cursor: pointer;
        padding: 2px;
    }
</style>

<div id="container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M216,48V96a8,8,0,0,1-16,0V67.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM106.34,138.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l50.35-50.34a8,8,0,0,0-11.32-11.32Z"></path></svg>
</div>
`

export class OuterbasePluginCellAccessory_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID
    }

    isHoveringCell = false
    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.appendChild(templateCellAccessory_$PLUGIN_ID.content.cloneNode(true))
    }
    
    connectedCallback() {
        this.shadow.querySelector('#container').addEventListener('click', () => {
            triggerEvent_$PLUGIN_ID(this, {
                action: "onedit",
                value: true,
            })
        })
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))

        let metadata = decodeAttributeByName_$PLUGIN_ID(this, "metadata")
        this.config.theme = metadata?.theme

        var element = this.shadow.querySelector("#container")
        element.classList.remove("dark")
        element.classList.add(this.config.theme);

        if (name === "ishoveringcell") {
            if (newValue === "true") {
                element.style.opacity = 0
                requestAnimationFrame(() => {
                    element.style.opacity = 1;
                })
            } else {
                requestAnimationFrame(() => {
                    element.style.opacity = 0;
                })
            }
        }
    }
}
