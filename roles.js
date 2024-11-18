let roles = [
	{ name: "builder", parts: [WORK, CARRY, MOVE], amount: 1, priority: 3 },
	{ name: "harvester", parts: [WORK, CARRY, MOVE], amount: 2, priority: 2 },
	{ name: "upgrader", parts: [WORK, CARRY, MOVE], amount: 4, priority: 1 },
];

roles = roles.map((role) => ({
	...role,
	func: require(`./role.${role.name}`).run,
	counter: () =>
		_.filter(Game.creeps, (creep) => creep.memory.role.name === role.name)
			.length,
}));

module.exports = roles;
