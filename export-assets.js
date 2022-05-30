const fs = require('fs-extra')
const path = require('path')
const { argv } = require('process')
const sourceDirectory = path(__dirname,'data')
const destDirectory = argv[2]

if(fs.existsSync(destDirectory))
    fs.rmSync(destDirectory,{ recursive: true })

fs.copySync(sourceDirectory,destDirectory,{ overwrite: true },(err) => {
    if(err)
        console.log(err)
})