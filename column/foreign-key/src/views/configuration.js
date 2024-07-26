import { 
    OuterbasePluginConfig_$PLUGIN_ID,
    privileges_$PLUGIN_ID,
    OuterbaseEvent_$PLUGIN_ID,
    triggerEvent_$PLUGIN_ID,
    decodeAttributeByName_$PLUGIN_ID 
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
    <h1>Select Foreign Key Column</h1>

    <select>
    
    </select>

    <button id="saveButton">Save View</button>
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

        var saveButton = this.shadow.getElementById("saveButton");
        saveButton.addEventListener("click", () => {
            // Clear FK cache
            const cacheName = 'pluginForeignKeyCache'
            localStorage.removeItem(cacheName)

            triggerEvent_$PLUGIN_ID(this, {
                action: OuterbaseEvent_$PLUGIN_ID.onSave,
                value: this.config
            })
        });

        // Listen to when the select option changes and store the selected option
        this.shadow.querySelector('select').addEventListener('change', (event) => {
            this.config.preferredColumn = event.target.value
        })

        this.fetchConstraintMetadata()
    }

    async fetchConstraintMetadata() {
        try {
            // Based on the information provided to our plugin, we need to identify
            // what the column constraints are and what database table it is linked to.
            // This will allow us to construct a SQL query to fetch the value from the
            // linked table.
            const column = this.getAttribute('columnName')
            const table = JSON.parse(this.getAttribute('tableSchemaValue')).name
            const schema = JSON.parse(this.getAttribute('tableSchemaValue')).schema ?? "public"
            const databaseSchemaValue = JSON.parse(this.getAttribute('databaseSchemaValue'))    
            const schemaColumns = databaseSchemaValue?.[schema]
            const schemaTable = schemaColumns.find(t => t.name === table)
            const constraints = schemaTable?.constraints

            let fkName = ""
            let fkTable = ""
            let fkSchema = ""
            // let cellValue = this.getAttribute('cellValue')
    
            // Loop through `constraints` and find where type === `FOREIGN KEY`
            for (const constraint of constraints) {
                if (constraint.type === "FOREIGN KEY" && constraint.table === table && constraint.column === column) {    
                    const fkColumn = constraint.columns?.[0]
                    fkName = fkColumn.name
                    fkTable = fkColumn.table
                    fkSchema = fkColumn.schema ?? "public"
                }
            }

            // Necessary information is graciously stored by Outerbase in the `localStorage`
            // for us to make the necessary network request to fetch the value from the linked table.
            const session = JSON.parse(localStorage.getItem('session'))
            const workspaceId = localStorage.getItem('workspace_id')
            const sourceId = localStorage.getItem('source_id')

            // Create a unique cache key based on the `schema.table.column.value`
            // const cacheKey = `${fkSchema}.${fkTable}.${fkName}.${cellValue}`

            // // If the `cacheKey` already exists in the cache, use the cached value instead
            // // of making another network request to fetch it.
            // if (this.getValueFromCache(cacheKey)) {
            //     this.shadow.querySelector('#label').innerText = this.getValueFromCache(cacheKey)
            //     this.shadow.querySelector('#loader').style.display = 'none'
            //     return
            // }

            // When a cached value does not exist for this `schema.table.column.value`, fetch the value
            // from the database and store it in the cache for future re-use.
            await fetch(`https://app.dev.outerbase.com/api/v1/workspace/${workspaceId}/source/${sourceId}/query/raw`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': session?.state?.session?.token
                },
                body: JSON.stringify({
                    query: `SELECT * FROM ${fkSchema}.${fkTable} LIMIT 1`,
                    options: {}
                })
            }).then(response => response.json()).then(data => {
                const item = data.response?.items?.[0] ?? {}
                const keys = Object.keys(item)

                // Add a new `option` in the `select` for each keys object
                let select = this.shadow.querySelector('select')
                keys.forEach(key => {
                    let option = document.createElement('option')
                    option.value = key
                    option.text = key
                    select.appendChild(option)
                })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
