'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');

_(yaml.safeLoad(fs.readFileSync('src/2017.yaml', 'utf8')))
.mapValues(category => {
  if (_.isInteger(category.winner)) {
    _.each(category.nominees, (nominee, i) => {
      nominee.winner = i === category.winner;
    })
    delete category.winner;
  } else {
    _.each(category.nominees, nominee => {
      nominee.winner = null;
    })
  }
  return category.nominees;
})
.tap(categories => {
  fs.writeFileSync('2017.json', JSON.stringify(categories, null, 2));
  fs.writeFileSync('dist/2017.json', JSON.stringify(categories, null , 2));
})
.value()
