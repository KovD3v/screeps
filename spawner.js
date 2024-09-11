var spawner = {
	/** @param {string} role **/
	spawn: function (role) {
        var newName = role + Game.time;
        console.log('Spawning new ' + role + ': ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, {
            memory: { role: role },
        });
	},
};

module.exports = spawner;
