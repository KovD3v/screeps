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
		var sources = Object.values(Memory.sources);
		sources.sort((a, b) => {
			a.creeps.length - b.creeps.length;
		});
		var source = sources[0];
		console.log(source.id);
		Memory.sources[source.id].creeps.push(creep.name);
		creep.memory.sourceId = source.id;
		return source;
	},
};
