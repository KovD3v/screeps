const roleBuilder = require("./role.builder");
const roleHarvester = require("./role.harvester");
const roleUpgrader = require("./role.upgrader");

const createRole = (roleName, parts, amount, func, priority) => ({
	parts,
	amount,
	entity: () =>
		_.filter(Game.creeps, (creep) => creep.memory.role === roleName),
	counter: () =>
		_.filter(Game.creeps, (creep) => creep.memory.role === roleName).length,
	func,
	priority,
});

module.exports.roles = {
	harvester: createRole(
		"harvester",
		[WORK, WORK, CARRY, MOVE, MOVE],
		6,
		roleHarvester.run,
		1
	),
	upgrader: createRole(
		"upgrader",
		[WORK, CARRY, MOVE],
		6,
		roleUpgrader.run,
		1
	),
	builder: createRole(
		"builder",
		[WORK, WORK, CARRY, CARRY, MOVE],
		4,
		roleBuilder.run,
		2
	),
};
