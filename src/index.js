require('main.scss');

const MainTemplate = require('./main.njk');
document.getElementById('content').innerHTML = MainTemplate.render({});