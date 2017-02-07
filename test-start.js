'use strict'

const program = require('commander');
const BiSheng = require('bisheng/lib');

program
    .option('-c, --config <path>', 'set config path. defaults to ./bisheng.config.js')
    .option('--no-livereload', 'disabled livereload.')
    // .parse(['-c ./site/bisheng.config.js', '--no-livereload']);
    .parse(process.argv);

BiSheng.start(program);
