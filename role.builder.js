var roleBuilder = {
	/** @param {Creep} creep **/
	run: function (creep) {
		var isBuilding = creep.memory.building;

		if (isBuilding && creep.store[RESOURCE_ENERGY] == 0) {
			isBuilding = false;
			creep.say("🔄 harvest");
		}
		if (!isBuilding && creep.store.getFreeCapacity() == 0) {
			isBuilding = true;
			creep.say("🚧 build");
		}

		if (isBuilding) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {
						visualizePathStyle: { stroke: "#ffffff" },
					});
				}
			} else {
				creep.moveTo(Game.flags["Builders"].pos, {
					visualizePathStyle: { stroke: "#ffffff" },
				});
			}
		} else {
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], {
					visualizePathStyle: { stroke: "#ffaa00" },
				});
			}
		}
	},
};

module.exports = roleBuilder;
