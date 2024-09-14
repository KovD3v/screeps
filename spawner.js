var manager = require("creeps.manager");

var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
		var newName = role + Game.time;
		console.log("Spawning new " + role + ": " + newName);
		Game.spawns["Spawn1"].spawnCreep(manager.creeps[role].parts, newName, {
			memory: { role: role },
		});
	},
};

module.exports = spawner;
