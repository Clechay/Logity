const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const markdown = require( "markdown" ).markdown;

console.log( markdown.toHTML( "Hello *World*!" ) );

const perform = async () => {
	const mdFile = await readFile("./index.md","utf8")
	const md = mdFile
	const templateFile = await readFile("./template.html","utf8")
	const template = templateFile
	writeFile(
		'index.html', 
		template.replace("<!-- MARKDOWN_HOOK -->",markdown.toHTML(md)))
}
perform();
fs.watchFile("./index.md",perform);