export class OuterbasePluginConfig_$PLUGIN_ID {
    theme = "light";
    preferredColumn = "";

    constructor(object) {
        this.theme = object?.theme ? object.theme : "light";
        this.preferredColumn = object?.preferredColumn ? object.preferredColumn : "";
    }
}

export const privileges_$PLUGIN_ID = [
    "cellValue",
    "rowValue",
    "tableValue",
    "tableSchemaValue",
    "databaseSchemaValue",
    "configuration",
    "metadata"
];

export const OuterbaseEvent_$PLUGIN_ID = {
    onSave: "onSave",
};

export const OuterbaseColumnEvent_$PLUGIN_ID = {
    onEdit: "onEdit",
    onStopEdit: "onStopEdit",
    onCancelEdit: "onCancelEdit",
    updateCell: "updateCell",
};

export const triggerEvent_$PLUGIN_ID = (fromClass, data) => {
    const event = new CustomEvent("custom-change", {
        detail: data,
        bubbles: true,
        composed: true
    });

    fromClass.dispatchEvent(event);
};

export const decodeAttributeByName_$PLUGIN_ID = (fromClass, name) => {
    const encodedJSON = fromClass.getAttribute(name);
    const decodedJSON = encodedJSON
        ?.replace(/&quot;/g, '"')
        ?.replace(/&#39;/g, "'");
    return decodedJSON ? JSON.parse(decodedJSON) : {};
};
