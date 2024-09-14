var roleUpgrader = {
	/** @param {Creep} creep **/
	run: function (creep) {
		var isUpgrading = creep.memory.upgrading;
		if (isUpgrading && creep.store[RESOURCE_ENERGY] == 0) {
			isUpgrading = false;
			creep.say("🔄 harvest");
		}
		if (!isUpgrading && creep.store.getFreeCapacity() == 0) {
			isUpgrading = true;
			creep.say("⚡ upgrade");
		}

		if (isUpgrading) {
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
