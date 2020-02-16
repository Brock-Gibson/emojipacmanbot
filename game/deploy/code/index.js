'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
// Main composition plan for the pacman game service.

const handle
  = event => {
    console.log('handle', event);

    return Promise.resolve({})
  };

exports.handle = handle;
