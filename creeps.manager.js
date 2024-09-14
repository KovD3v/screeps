const roleBuilder = require("./role.builder");
const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");

module.exports.creeps = {
	harvester: {
		parts: [WORK, CARRY, MOVE],
		amount: 2,
		entity: [],
        func: roleHarvester.run,
	},
	upgrader: {
		parts: [WORK, CARRY, MOVE],
		amount: 2,
		counter: 0,
        func: roleUpgrader.run,
	},
	builder: {
		parts: [WORK, CARRY, MOVE],
		amount: 2,
		counter: 0,
        func: roleBuilder.run,
	},
};
