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
        height: 26px;
        width: 26px;
    }

    svg {
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 16px;
        fill: var(--ob-text-color);
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        opacity: 0.5;
        transition: opacity 0.2s ease;
        background-color: #f5f5f5;
        color: var(--ob-text-color);
    }

    .dark svg {
        background-color: #171717;
    }

    svg:hover {
        background-color: #e5e5e5;
        opacity: 1;
    }

    .dark svg:hover {
        background-color: #262626;
    }
</style>

<div id="container" class="theme-container">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7132 4.67808C12.6718 3.63669 10.9834 3.63669 9.94196 4.67808C9.24461 5.37543 9.01337 6.36329 9.25147 7.25487L9.35068 7.62638L5.59883 11.3782L5.12594 13.2653L7.01304 12.7924L8.26146 11.544L8.18368 9.75515L9.97256 9.83292L10.7649 9.04059L11.1364 9.1398C12.028 9.3779 13.0158 9.14666 13.7132 8.44931C14.7546 7.40791 14.7546 5.71948 13.7132 4.67808ZM8.99916 3.73528C10.5612 2.17319 13.0939 2.17319 14.656 3.73528C16.2181 5.29737 16.2181 7.83002 14.656 9.39212C13.7091 10.339 12.4058 10.7112 11.18 10.5111L10.5006 11.1905L9.57893 11.1504L9.61901 12.0721L7.68545 14.0056L3.34403 15.0472L4.38563 10.7058L7.88014 7.21131C7.68004 5.98543 8.05225 4.68219 8.99916 3.73528Z" fill="currentColor"/>
        <circle cx="12.0633" cy="6.328" r="0.666665" transform="rotate(45 12.0633 6.328)" fill="currentColor"/>
    </svg>
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

    disconnectedCallback() {
        this.shadow.querySelector('#container').removeEventListener('click')
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
