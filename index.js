#!/usr/bin/env node
const pckJosn = require('./package.json')
const welcome = require('cli-welcome');
// chalk 添加颜色的
const chalk = require('chalk');
// import chalk from 'chalk';
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const github = chalk.hex(`#1da1f2`).bold.inverse;
const blog = chalk.hex('#6cc644').bold.inverse;
// 欢迎项
welcome({
	title: `${pckJosn.name}`,
	description: `${pckJosn.description}`,
	tagLine: `Get to know zyd-cli`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `${pckJosn.version}`
});
log(
`
${italic(`
zyd(赵元达)
河北科技大学计算机学生这里是我的简历河北科技大学计算机学生
这里是我的简历河北科技大学计算机学生这里是我的简历河北科技
大学计算机学生这里是我的简历`
)}

${github(' Github ')} ${dim('https://github.com/zhaoyuanmeng')}

${blog(' Blog ')} ${dim('https://zhaoyuanmeng.github.io/')}

`
);