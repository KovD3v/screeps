var sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES_ACTIVE);
Memory.sources = {};
for (let source of sources) {
    Memory.sources[source.id] = {
        id: source.id,
        pos: source.pos,
        creeps: [],
    };
}
