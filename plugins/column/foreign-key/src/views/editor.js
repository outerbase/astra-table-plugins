import { 
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    decodeAttributeByName_$PLUGIN_ID 
} from '../utils.js';

var templateEditor_$PLUGIN_ID = document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        width: 360px;
        height: 368px;
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

    #top {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    #footer {
        border-top: 1px solid #e5e5e5;
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
        item-align: center;
    }

    .dark #footer {
        border-top: 1px solid #262626;
    }

    #footer-right {
        display: flex;
        gap: 8px;
        item-align: center;
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .item > label {
        color: #525252;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;   
    }

    .dark .item > label {
        color: #A3A3A3;
    }

    .item > p {
        margin: 0;
        color: var(--ob-text-color);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        user-select: text;
    }

    .item-value-null {
        opacity: 0.5;
    }

    astra-button > span {
        color: #525252;
    }

    astra-button > svg > path {
        fill: #525252;
    }

    .dark astra-button > span {
        color: #A3A3A3;
    }

    .dark astra-button > svg > path {
        fill: #A3A3A3;
    }
</style>

<div id="container" class="theme-container">
    <div style="height: 310px; position: relative;">
        <astra-scroll-area>
            <div id="top">

            </div>
        </astra-scroll-area>
    </div>
    

    <div id="footer">
        <astra-button size="compact" variant="transparent" theme="light" id="view-table">
            <span>View Table</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0ZM11 11H1V1H11V11ZM3.64625 8.35375C3.59976 8.30731 3.56288 8.25217 3.53772 8.19147C3.51256 8.13077 3.49961 8.06571 3.49961 8C3.49961 7.93429 3.51256 7.86923 3.53772 7.80853C3.56288 7.74783 3.59976 7.69269 3.64625 7.64625L6.79313 4.5H5C4.86739 4.5 4.74021 4.44732 4.64645 4.35355C4.55268 4.25979 4.5 4.13261 4.5 4C4.5 3.86739 4.55268 3.74021 4.64645 3.64645C4.74021 3.55268 4.86739 3.5 5 3.5H8C8.13261 3.5 8.25979 3.55268 8.35355 3.64645C8.44732 3.74021 8.5 3.86739 8.5 4V7C8.5 7.13261 8.44732 7.25979 8.35355 7.35355C8.25979 7.44732 8.13261 7.5 8 7.5C7.86739 7.5 7.74021 7.44732 7.64645 7.35355C7.55268 7.25979 7.5 7.13261 7.5 7V5.20687L4.35375 8.35375C4.30731 8.40024 4.25217 8.43712 4.19147 8.46228C4.13077 8.48744 4.06571 8.50039 4 8.50039C3.93429 8.50039 3.86923 8.48744 3.80853 8.46228C3.74783 8.43712 3.69269 8.40024 3.64625 8.35375Z" fill="currentColor"/>
            </svg>
        </astra-button>
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

    fkName = ""
    fkTable = ""
    fkSchema = ""

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

        this.shadow.querySelector('#view-table').setAttribute("theme", this.config.theme)
    }
    
    connectedCallback() {
        this.shadow.querySelector('#view-table').addEventListener('click', this.handleClick);
        this.loadForeignRow();
    }

    disconnectedCallback() {
        this.shadow.querySelector('#view-table').removeEventListener('click', this.handleClick);
    }

    handleClick() {
        const event = new CustomEvent("table-tab-open-event", {
            detail: {
                schema: this.fkSchema,
                table: this.fkTable,
                filter: {
                    [this.fkName]: this.getAttribute('cellValue')
                }
            },
            bubbles: true,
            composed: true
        });
    
        this.dispatchEvent(event);
    }


    async loadForeignRow() {
        const column = this.getAttribute('columnName')
        const table = JSON.parse(this.getAttribute('tableSchemaValue')).name
        const schema = JSON.parse(this.getAttribute('tableSchemaValue')).schema ?? "public"
        const databaseSchemaValue = JSON.parse(this.getAttribute('databaseSchemaValue'))    
        const schemaColumns = databaseSchemaValue?.[schema]
        const schemaTable = schemaColumns.find(t => t.name === table)
        const constraints = schemaTable?.constraints

        if (constraints.length === 0) {
            this.shadow.querySelector('#loader').style.display = 'none'
            return
        }

        let cellValue = this.getAttribute('cellValue')

        // Loop through `constraints` and find where type === `FOREIGN KEY`
        for (const constraint of constraints) {
            if (constraint.type === "FOREIGN KEY" && constraint.table === table && constraint.column === column) {    
                const fkColumn = constraint.columns?.[0]
                this.fkName = fkColumn.name
                this.fkTable = fkColumn.table
                this.fkSchema = fkColumn.schema ?? "public"
            }
        }

        const session = JSON.parse(localStorage.getItem('session'))
        const workspaceId = localStorage.getItem('workspace_id')
        const sourceId = localStorage.getItem('source_id')

        await fetch(`https://app.outerbase.com/api/v1/workspace/${workspaceId}/source/${sourceId}/query/raw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': session?.state?.session?.token
            },
            body: JSON.stringify({
                query: `SELECT * FROM ${this.fkSchema}.${this.fkTable} WHERE ${this.fkName} = '${cellValue}'`,
                options: {}
            })
        }).then(response => response.json()).then(data => {
            const item = data.response?.items?.[0] ?? {}
            
            let top = this.shadow.querySelector("#top")
            top.innerHTML = ""

            let items = []

            for (const key in item) {
                items.push(this.createItem(key, item[key]))
            }

            items.forEach(item => top.appendChild(item))
        })
            
    }

    createItem(title, value) {
        let item = document.createElement("div")
        item.classList.add("item")

        let label = document.createElement("label")
        label.textContent = title
        item.appendChild(label)

        let input = document.createElement("p")
        input.textContent = value?.length ? value : "NULL"
        
        if (!value?.length) {
            input.classList.add("item-value-null")
        }

        item.appendChild(input)

        return item
    }
}
