'use strict';

module.exports = {
  name: 'ember-uploader',
  treeForAddon: function(dir) {
    const version      = require('./lib/version');
    const merge        = require('broccoli-merge-trees');

    return this._super.treeForAddon.call(this, merge([version(), dir]));
  }
};
