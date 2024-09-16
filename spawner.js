var manager = require("roles");

var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
		if (
			Game.spawns["Spawn1"].store.getUsedCapacity(RESOURCE_ENERGY) >= 200
		) {
			var newName = role + Game.time;
			console.log("Spawning new " + role + ": " + newName);
			Game.spawns["Spawn1"].spawnCreep(
				manager.roles[role].parts,
				newName,
				{
					memory: { role: role },
				}
			);
		}
	},
	spawnByPriority: function () {
		const roles = Object.keys(manager.roles);
		roles.sort(
			(a, b) => manager.roles[b].priority - manager.roles[a].priority
		);

		for (const role of roles) {
			if (manager.roles[role].counter() < manager.roles[role].amount) {
				this.spawn(role);
				break;
			}
		}
	},
};

module.exports = spawner;
