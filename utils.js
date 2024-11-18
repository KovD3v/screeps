module.exports = {
	harvestEnergy: function (creep, sources = creep.room.find(FIND_SOURCES)) {
		if (!sources) {
			var sources = creep.room.find(FIND_SOURCES);
		}
		var source = sources[0];
		if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
			creep.moveTo(source, {
				visualizePathStyle: { stroke: "#ffaa00" },
			});
		} else {
			creep.say("harvesting");
		}
	},
	handleCreepDeath: function (creep) {
		for (const resourceType in creep.carry) {
			creep.drop(resourceType);
		}
		// TODO Inform a Spawner to replace the creep.
		delete Memory.creeps[creep.name];
	},
};
