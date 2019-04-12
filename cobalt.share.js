(function(cobalt) {
    var plugin = {
        classes: {
        	ios: 'CobaltSharePlugin',
			android: 'io.kristal.shareplugin.SharePlugin'
        },
        init: function() {
            cobalt.share = this.shareItem.bind(this);
        },
        shareItem: function(data, callback) {
            cobalt.plugins.send(this, "share", data, callback)
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});

