var sourceManager = require("sources");

var roleHarvester = {
	/** @param {Creep} creep **/
	run: function (creep) {
		if (creep.store.getFreeCapacity() > 0) {
			var s = sourceManager.assign(creep);
			var source = creep.memory.sourceId;
			if (creep.harvest(Game.getObjectById(source)) == ERR_NOT_IN_RANGE) {
				creep.moveTo(Game.getObjectById(source));
			}
		} else {
			var targets = creep.room.find(FIND_STRUCTURES, {
				filter: (structure) => {
					return (
						(structure.structureType == STRUCTURE_EXTENSION ||
							structure.structureType == STRUCTURE_SPAWN ||
							structure.structureType == STRUCTURE_TOWER) &&
						structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					);
				},
			});
			if (targets.length > 0) {
				if (
					creep.transfer(targets[0], RESOURCE_ENERGY) ==
					ERR_NOT_IN_RANGE
				) {
					creep.moveTo(targets[0]);
				}
			} else {
				creep.moveTo(Game.flags["Harvesters"].pos);
			}
		}
	},
};

module.exports = roleHarvester;
