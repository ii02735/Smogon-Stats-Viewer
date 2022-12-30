/* Update names */

'use strict';

const Path = require('path');
const FileSystem = require('fs');

const Names_File = Path.resolve(__dirname, "../resources/names.json");
const Names_File_Min = Path.resolve(__dirname, "../resources/names-min.js");

function updateNames(formatsData) {
	let names = {};
	let n = 0;

	try {
		names = require(Names_File);
	} catch (err) {
		console.log("Creating new names file...");
	}

	for (let format of formatsData) {
		if (!format.name) continue;
		let id = toId(format.name);
		if (!id) continue;
		names[id] = format.name;
		n++;
	}

	FileSystem.writeFileSync(Names_File_Min, "/*Formats*/ window.FormatNames = " + JSON.stringify(names) + ";");
	FileSystem.writeFileSync(Names_File, JSON.stringify(names, null, 4));

	console.log("DONE: Loaded " + n + " format names.");
}

exports.start = function () {
	console.log("Getting formats data...");
	let pokemonShowdownPath = null;
	if("POKEMON_SHOWDOWN_REPO" in process.env){
		const fullPath = require('path').dirname(require.main.filename)
		pokemonShowdownPath = /^(.*?)node_modules/.exec(fullPath)[1]+process.env.POKEMON_SHOWDOWN_REPO
	}else
		pokemonShowdownPath = "pokemon-showdown"
	const { Dex } = require(Path.join(pokemonShowdownPath,'dist','sim','dex.js'));
	updateNames(Dex.formats.all());
};
