# Immutable Sorted Map
[![Build Status](https://travis-ci.org/rongierlach/immutable-sorted-map.svg?branch=master)](https://travis-ci.org/rongierlach/immutable-sorted-map) [![Coverage Status](https://coveralls.io/repos/github/rongierlach/immutable-trees/badge.svg?branch=master)](https://coveralls.io/github/rongierlach/immutable-trees?branch=master) [![Dependency Status](https://david-dm.org/rongierlach/range-life.svg)](https://david-dm.org/rongierlach/immutable-sorted-map) [![devDependency Status](https://david-dm.org/rongierlach/immutable-sorted-map/dev-status.svg)](https://david-dm.org/rongierlach/immutable-sorted-map#info=devDependencies) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  

Ever wish Immutable.js Maps would insert new items sorted by key?  
Issue [#88](https://github.com/facebook/immutable-js/issues/88) inspired me to extend Immutable's Map to do just this.

## Installation
Using npm:  
`$ npm install immutable-sorted-map`  
Using yarn:  
`$ yarn install immutable-sorted-map`

## Usage
```javaScript
import SortedMap from 'immutable-sorted-map'

const myData = {
  '0.01': 'hundredth',
  '0.001': 'thousandth',
  '0.1': 'tenth'
}

const myImmutableData = new SortedMap(myData)

myImmutableData.toJS()
/* {
  '0.001': 'thousandth',
  '0.01': 'hundredth',
  '0.1': 'tenth'
} */
```

## Api
<p><details>
  <summary><b>Construction</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Static methods</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Members</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Persistent changes</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Deep persistent changes</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Transient changes</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Sequence algorithms</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Conversion to JavaScript types</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Conversion to Seq</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Sequence functions</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Value equality</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Reading values</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Reading deep values</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Conversion to Collections</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Iterators</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Collections</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Side effects</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Creating subsets</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Combination</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Reducing a value</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Search for value</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
<p><details>
  <summary><b>Comparison</b></summary>
  <ul>
    <!-- <li><a href="">Get</a></li> -->
  </ul>
</details></p>
