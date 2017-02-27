[![npm version](https://badge.fury.io/js/oscars.svg)](https://badge.fury.io/js/oscars)
[![Build status](https://travis-ci.org/gswalden/oscars.svg?branch=master)](https://travis-ci.org/gswalden/oscars)
[![Dependencies](https://david-dm.org/gswalden/oscars.svg)](https://david-dm.org/gswalden/oscars)

### 2017 results: `complete in v1.0.1`

### Use
```sh
npm install oscars
```
```js
const oscarNominations = require('oscars/2017');
console.log(oscarNominations);
```

### Structure
This module exports an Object indexed by Oscar categories. Here is an example:
```json
{
  "Actor in a Supporting Role": [
    {
      "film": "Moonlight",
      "persons": [
        "Mahershala Ali"
      ],
      "winner": null
    },
    {
      "film": "Hell or High Water",
      "persons": [
        "Jeff Bridges"
      ],
      "winner": null
    },
    {
      "film": "Manchester by the Sea",
      "persons": [
        "Lucas Hedges"
      ],
      "winner": null
    },
    {
      "film": "Lion",
      "persons": [
        "Dev Patel"
      ],
      "winner": null
    },
    {
      "film": "Nocturnal Animals",
      "persons": [
        "Michael Shannon"
      ],
      "winner": null
    }
  ]
}
```

If the `winner` property is `null`, no winner has been announced. If it is `true` or `false`, a winner has been announced and an item should have `winner: true`. See [below](#useful-operations) for an easy way to find the winner.

### Useful operations
Using the [lodash](//lodash.com) library, you can easily search/filter/transform this data set.

```js
const _ = require('lodash');
const oscars2017 = require('oscars/2017');

// Get an Array of all categories
const categories = _.map(oscars2017, (nominees, category) => {
  return { category, nominees };
});
/* [
     {
       category: 'Best Picture',
       nominees: [ … ]
     },
     …
] */

// Find the winner of Best Picture
const bestPicture = _.find(oscars2017['Best Picture'], 'winner');
/* { film: '…', persons: [ … ] } */
```

### Sources
Much of the data was sourced from [ordinaryzelig/oscars-madness](https://github.com/ordinaryzelig/oscars-madness), which originally pulled from the official [Oscars](http://oscar.go.com/) site.
