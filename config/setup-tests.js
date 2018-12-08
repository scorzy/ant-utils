// @ts-nocheck

// add here any code that you wanna execute before tests like
// - polyfills
// - some custom code
// for more docs check see https://jestjs.io/docs/en/configuration.html#setupfiles-array

const BDecimal = require("break_infinity.js")
global.Decimal = BDecimal
