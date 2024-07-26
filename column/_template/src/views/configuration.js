import {
    decodeAttributeByName_$PLUGIN_ID,
    OuterbaseColumnEvent_$PLUGIN_ID,
    OuterbaseEvent_$PLUGIN_ID,
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID
} from '../utils.js';

var templateConfiguration_$PLUGIN_ID = document.createElement("template")
templateConfiguration_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        display: flex;
        height: 100%;
        overflow-y: scroll;
        padding: 40px 50px 65px 40px;
    }

    h1 {
        color: var(--ob-text-color);
    }
</style>

<div id="container">
    <h1>My Configuration View</h1>
</div>
`

export class OuterbasePluginConfiguration_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" })
        this.shadow.appendChild(templateConfiguration_$PLUGIN_ID.content.cloneNode(true))
    }

    connectedCallback() {
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(decodeAttributeByName_$PLUGIN_ID(this, "configuration"))
        this.config.cellValue = decodeAttributeByName_$PLUGIN_ID(this, "cellValue")
    }
}
