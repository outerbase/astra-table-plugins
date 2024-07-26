import {
    decodeAttributeByName_$PLUGIN_ID,
    OuterbaseColumnEvent_$PLUGIN_ID,
    OuterbaseEvent_$PLUGIN_ID,
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID
} from '../utils.js';

var templateCell_$PLUGIN_ID = document.createElement('template')
templateCell_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        height: 34px;
        min-height: 34px;
        position: relative;
        padding: 0 4px 0 12px;
    }

    #label {
        line-height: 34px;
        flex: 1;
        background-color: transparent;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--ob-text-color);
        font-size: 12px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        padding: 0;
    }
</style>

<div id="container" class="theme-container">
    <div id="label"></div>
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
        this.render();
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))

        let metadata = decodeAttributeByName_$PLUGIN_ID(this, "metadata")
        this.config.theme = metadata?.theme

        var element = this.shadow.querySelector(".theme-container")
        element.classList.remove("dark")
        element.classList.add(this.config.theme);
    }

    async render() {
        let cellValue = this.getAttribute('cellvalue')
        this.shadow.querySelector("#label").innerText = cellValue
    }
}
