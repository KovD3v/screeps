var roleUpgrader = {
	/** @param {Creep} creep **/
	run: function (creep) {
		var isReady = creep.memory.upgrading;
		if (isReady && creep.store[RESOURCE_ENERGY] == 0) {
			isReady = false;
			creep.say("🔄 harvest");
		}
		if (!isReady && creep.store.getFreeCapacity() == 0) {
			isReady = true;
			creep.say("⚡ upgrade");
		}

		if (isReady) {
			if (
				creep.upgradeController(creep.room.controller) ==
				ERR_NOT_IN_RANGE
			) {
				creep.moveTo(creep.room.controller, {
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

module.exports = roleUpgrader;
