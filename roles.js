const roleBuilder = require("./role.builder");
const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");

module.exports.creeps = {
	harvester: {
		parts: [WORK, CARRY, MOVE],
		amount: 4,
		counter: () => _.filter(Game.creeps, (creep) => creep.memory.role == "harvester").length,
		func: roleHarvester.run,
	},
	upgrader: {
		parts: [WORK, CARRY, MOVE],
		amount: 4,
		counter: () => _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader").length,
		func: roleUpgrader.run,
	},
	builder: {
		parts: [WORK, CARRY, MOVE],
		amount: 1,
		counter: () => _.filter(Game.creeps, (creep) => creep.memory.role == "builder").length,
		func: roleBuilder.run,
	},
};
