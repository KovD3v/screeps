var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
        switch (role) {
			case "harvester":
				parts = [WORK, CARRY, MOVE];
				break;
			case "upgrater":
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
	autospawn: function () {
		var _ = 0;
		var harvester = 0;
		var upgrader = 0;
		var builder = 0;
		for (var name in Game.creeps) {
			var creep = Game.creeps[name];
			var role = creep.memory.role;
			switch (role) {
				case "harvester":
					harvester += 1;
					break;
				case "upgrater":
					upgrater += 1;
					break;
				case "builder":
					builder += 1;
					break;
				default:
					_ += 1;
					break;
			}
		}
		if (harvester < 2) {
			spawner.spawn("harvester");
		}
		if (upgrader < 2) {
			spawner.spawn("upgrader");
		}
		// if (builder <= 2)
		//     {spawner.spawn('builder')}
	},
};

module.exports = spawner;
