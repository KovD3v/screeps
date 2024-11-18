var roles = require("roles");

var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
		Game.spawns["Spawn1"].spawnCreep(role.parts, role.name + Game.time, {
			memory: { role: role },
		});
	},

	autospawn: function () {
		roles.sort((a, b) => a.priority - b.priority);

		for (const role of roles) {
			if (role.counter() < role.amount) {
				this.spawn(role);
				break;
			}
		}
	},
};

module.exports = spawner;
