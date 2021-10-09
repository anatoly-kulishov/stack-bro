const {
    override,
    disableChunk,
    addWebpackExternals
} = require("customize-cra");

function changeName(config) {

    config.output = {
        ...config.output,
        filename: `static/js/${process.env.REACT_APP_WEB_COMPONENT_NAME}.js`,
    };

    config.plugins.map((plugin, i) => {
        if (plugin.options && plugin.options.filename && plugin.options.filename.includes('static/css')) {
            config.plugins[i].options={
                ...config.plugins[i].options,
                filename : `static/css/${process.env.REACT_APP_WEB_COMPONENT_NAME}.css`,
            }
        }
    });

    return config;
}

module.exports = override(
    changeName,
    disableChunk(),
    addWebpackExternals({
        react: "React",
        "react-dom": "ReactDOM"
    })
);