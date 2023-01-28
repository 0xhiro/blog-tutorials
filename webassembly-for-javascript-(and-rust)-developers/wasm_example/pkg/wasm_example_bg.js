import * as wasm from './wasm_example_bg.wasm';

/**
* @param {number} left
* @param {number} right
* @returns {number}
*/
export function add(left, right) {
    const ret = wasm.add(left, right);
    return ret >>> 0;
}

