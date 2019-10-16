#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const showdown  = require('showdown')
showdown.setFlavor('github');
const converter = new showdown.Converter({
	omitExtraWLInCodeBlocks:true,
	customizedHeaderId:true,
	ghCompatibleHeaderId:true,
	literalMidWordUnderscores:true,
	strikethrough:true,
	tasklists:true, 
})

const perform = async () => {
	console.log("building...")
	const mdFile = await readFile("./index.md","utf8")
	const md = mdFile
	const templateFile = await readFile("./template.html","utf8")
	const template = templateFile
	writeFile(
		'index.html', 
		template.replace("<!-- MARKDOWN_HOOK -->",converter.makeHtml(md)))
}
perform();
fs.watchFile("./index.md",perform);