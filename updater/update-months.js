/* Update months */

'use strict';

const Path = require('path');
const FileSystem = require('fs');
const Http = require('https');
const Parser = require(Path.resolve(__dirname, "parse-file.js"));

const Smogon_Stats_URL = "https://www.smogon.com/stats/";
const path = process.env.USAGE_PATH ? [process.env.USAGE_PATH] : [__dirname,"..","data"]
const Months_File = Path.resolve(...path, "months-available.json");

exports.start = function () {
	console.log("Getting months data...");
	Http.get(Smogon_Stats_URL, res => {
		let data = '';
		res.on('data', chunk => {
			data += chunk;
		});
		res.on('end', () => {
			console.log("GET: " + Smogon_Stats_URL);
			let months = Parser.parseMonthsList(data);
			FileSystem.writeFileSync(Months_File, JSON.stringify(months));
			console.log("DONE: Loaded months list.");
		});
	}).on('error', e => {
		console.error(e);
	});
};

exports.check = function () {
	let months = {list: []};
	const path = process.env.USAGE_PATH ? [process.env.USAGE_PATH] : [__dirname,"..","data"]
	let files = FileSystem.readdirSync(Path.resolve(...path,"months"));
	for (let file of files) {
		if ((/[0-9][0-9][0-9][0-9]-[0-9][0-9]/).test(file)) {
			months.list.push(file);
		}
	}
	return months;
};

exports.checkAndUpdate = function () {
	let months = exports.check();
	const path = process.env.USAGE_PATH ? [process.env.USAGE_PATH] : [__dirname,"..","data"]
	FileSystem.writeFileSync(Path.resolve(...path,"months.json"), JSON.stringify(months));
};
