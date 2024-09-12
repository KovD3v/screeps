var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
        switch (role) {
			case "harvester":
				parts = [WORK, CARRY, MOVE];
				break;
			case "upgrader":
				parts = [WORK, CARRY, MOVE];
				break;
			case "builder":
				parts = [WORK, CARRY, MOVE];
				break;
			default:
				console.log("Invalid role");
				return;
		}
		var newName = role + Game.time;
        console.log("Spawning new " + role + ": " + newName);
		Game.spawns["Spawn1"].spawnCreep(parts, newName, {
            memory: { role: role },
		});
	},
	spawner: function () {
		var harvester = [];
		var upgrader = [];
		var builder = [];
		for (var name in Game.creeps) {
			var creep = Game.creeps[name];
			var role = creep.memory.role;
			switch (role) {
				case "harvester":
					harvester.push(creep)
					break;
				case "upgrader":
					upgrader.push(creep)
					break;
				case "builder":
					builder.push(creep)
					break;
			}
		}
		if (harvester.length < 2) {
			this.spawn("harvester");
		}
		else if (upgrader.length < 2) {
			this.spawn("upgrader");
		}
		else if (builder.length <= 2)
		    {this.spawn('builder')}
	},
};

module.exports = spawner;
