#!/usr/bin/env node

const pckJosn = require('./package.json')
const welcome = require('cli-welcome');

// Use it.
welcome({title: `Welcome CLI`, tagLine: `by Ahmad Awais`});

// OR with all the options set like this:
welcome({
    title: `${pckJosn.name}`,
    description:`${pckJosn.description}`,
	tagLine: `Get to know zyd-cli`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `${pckJosn.version}`
});
console.log(`
zyd(赵元达)
河北科技大学计算机学生
Github: https://github.com/zhaoyuanmeng
Blog: https://zhaoyuanmeng.github.io/
(⊙o⊙)…
`)