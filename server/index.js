const path = require('path')

require('ignore-styles')

require('@babel/register')({
    configFile: path.resolve('__dirname', '../babel.config.js')
})

require('./express')
