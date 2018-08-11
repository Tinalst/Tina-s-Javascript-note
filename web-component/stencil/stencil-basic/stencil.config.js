// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');

exports.config = {
    globalStyle: 'src/global/app.css',
    plugins: [
        sass()
    ]
};
