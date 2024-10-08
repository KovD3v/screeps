var sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES_ACTIVE);
Memory.sources = {};
for (let source of sources) {
	Memory.sources[source.id] = {
		id: source.id,
		pos: source.pos,
		creeps: [],
	};
}

var manager = {
	/** @param {Creep} creep **/
	assign: function (creep) {
		if (!creep.memory.sourceId) {
			var sources = Object.values(Memory.sources);
			sources.sort((a, b) => {
				return a.creeps.length - b.creeps.length;
			});
			var source = sources[0];
			if (!Memory.sources[source.id].creeps.includes(creep.name)) {
				Memory.sources[source.id].creeps.push(creep.name);
				creep.memory.sourceId = source.id;
			}
			return source;
		}
		return creep.memory.sourceId;
	},
};

module.exports = manager;
