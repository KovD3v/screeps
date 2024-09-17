const roleBuilder = require("./role.builder");
const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");

module.exports.roles = {
	harvester: {
		parts: [WORK, CARRY, MOVE],
		amount: 6,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "harvester")
				.length,
		func: roleHarvester.run,
		priority: 1,
	},
	upgrader: {
		parts: [WORK, WORK, CARRY, CARRY, MOVE],
		amount: 6,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "upgrader"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "upgrader")
				.length,
		func: roleUpgrader.run,
		priority: 1,
	},
	builder: {
		parts: [WORK, WORK, CARRY, CARRY, MOVE],
		amount: 4,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "builder"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "builder")
				.length,
		func: roleBuilder.run,
		priority: 2,
	},
};
