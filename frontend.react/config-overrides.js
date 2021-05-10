/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { useBabelRc, override } = require('customize-cra')

module.exports = override(useBabelRc())
