import { 
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    decodeAttributeByName_$PLUGIN_ID 
} from '../utils.js';

var templateEditor_$PLUGIN_ID = document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        position: absolute;
        left: 0;
        transform: translateY(4px);
        margin-top: 4px;
        width: 360px;
        height: 368px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        overflow: hidden;
        background-color: #f5f5f5;
        color: var(--ob-text-color);
        font-family: Inter, sans-serif;
    }

    .dark {
        border: 1px solid #262626 !important;
        background-color: #171717 !important;
    }
</style>

<div id="container" class="theme-container">
    
</div>
`;

export class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges_$PLUGIN_ID;
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

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
    }
    
    connectedCallback() {
        
    }
}
