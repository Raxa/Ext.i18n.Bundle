genericConfig = {
    extend: 'Ext.data.Model',
    idProperty: 'key',
    fields: ['key', 'value']
};

Ext.define('Ext.i18n.model.Property', Util.platformizeModelConfig(genericConfig));