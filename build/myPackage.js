"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.init = void 0;
/**
 *
 * @param {object} config
 * @returns {boolean}
 */
function init(config) {
    return true;
}
exports.init = init;
/**
 *
 * @param {number} code
 * @returns {number}
 */
function exit(code) {
    return code + 1;
}
exports.exit = exit;
