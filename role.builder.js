var roleBuilder = {
	/** @param {Creep} creep **/
	run: function (creep) {
		var isReady = creep.memory.building;

		if (isReady && creep.store[RESOURCE_ENERGY] == 0) {
			isReady = false;
			creep.say("🔄 harvest");
		}
		if (!isReady && creep.store.getFreeCapacity() == 0) {
			isReady = true;
			creep.say("🚧 ready");
		}

		if (isReady) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			} else {
				creep.moveTo(Game.flags["Builders"].pos);
			}
		} else {
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0]);
			}
		}
	},
};

module.exports = roleBuilder;
