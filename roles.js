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
			_.filter(Game.creeps, (creep) => creep.memory.role == "upgrader"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "upgrader")
				.length,
		func: roleUpgrader.run,
	},
	builder: {
		parts: [WORK, CARRY, MOVE],
		amount: 1,
		entity: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "builder"),
		counter: () =>
			_.filter(Game.creeps, (creep) => creep.memory.role == "builder")
				.length,
		func: roleBuilder.run,
	},
};
