const roleBuilder = require("./role.builder");
const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");

module.exports.roles = {
	harvester: {
		parts: [WORK, CARRY, MOVE],
		amount: 5,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester")
				.length,
		func: roleHarvester.run,
	},
	upgrader: {
		parts: [WORK, CARRY, MOVE],
		amount: 5,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester")
				.length,
		func: roleUpgrader.run,
	},
	builder: {
		parts: [WORK, CARRY, MOVE],
		amount: 1,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester")
				.length,
		func: roleBuilder.run,
	},
};
