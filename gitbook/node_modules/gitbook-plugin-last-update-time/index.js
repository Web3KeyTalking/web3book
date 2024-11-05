var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'lastUpdateTime.css'
    ],
    js: [
      "lastUpdateTime.js"
    ]
  },
  hooks: {
    'page:before': function(page) {
      var _label = '最后更新时间: ',
          _format = 'YYYY-MM-DD HH:mm:ss';
      if(this.options.pluginsConfig['last-update-time']) {
        _label = this.options.pluginsConfig['last-update-time']['label'] || _label;
        _format = this.options.pluginsConfig['last-update-time']['format'] || _format;
      }
      var now = new Date();
      var str = ' \n\n<footer class="page-footer">' +
      '<span class="footer-modification">' +
      _label +
      '\n{{now | date("' + _format +
      '")}}\n</span></footer>';
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function(d, format) {
      return moment(d).format(format)
    }
  }
};
