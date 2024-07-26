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
        height: 24px;
        width: 24px;
    }
</style>

<div id="container">
    <button>Click me</button>
</div>
`

export class OuterbasePluginCellAccessory_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.appendChild(templateCellAccessory_$PLUGIN_ID.content.cloneNode(true))
    }
    
    connectedCallback() {
        
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))

        let metadata = decodeAttributeByName_$PLUGIN_ID(this, "metadata")
        this.config.theme = metadata?.theme

        var element = this.shadow.querySelector("#container")
        element.classList.remove("dark")
        element.classList.add(this.config.theme);
    }
}
