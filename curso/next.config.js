/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {    sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/sass')],
    prependData: '@import "main.sass"'
    }
};

module.exports = nextConfig
