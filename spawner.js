var roles = require("roles");

var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
		if (
			Game.spawns["Spawn1"].store.getUsedCapacity(RESOURCE_ENERGY) >= 200
		) {
			var newName = role + Game.time;
			console.log("Spawning new " + role + ": " + newName);
			Game.spawns["Spawn1"].spawnCreep(
				roles.creeps[role].parts,
				newName,
				{
					memory: { role: role },
				}
			);
		}
	},
};

module.exports = spawner;
