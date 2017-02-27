'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');

_(yaml.safeLoad(fs.readFileSync('src/2017.yaml', 'utf8')))
.mapValues(category => {
  _.each(category.nominees, (nominee, i) => {
    nominee.winner = _.isInteger(category.winner)
    ? i === category.winner
    : null;
  })
  return category.nominees;
})
.tap(categories => {
  const json = JSON.stringify(categories, null, 2);
  fs.writeFileSync('2017.json', json);
  fs.writeFileSync('dist/2017.json', json);
})
.value()
