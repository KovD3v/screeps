var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            // Se il creep non ha un nodo minerario assegnato, assegnagliene uno
            if (!creep.memory.sourceId) {
                var sources = creep.room.find(FIND_SOURCES);
                var source = sources[0];

                // Controlla se ci sono più di 4 harvester nel nodo minerario
                var harvestersAtSource = _.filter(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.sourceId == source.id).length;
                if (harvestersAtSource > 4) {
                    // Trova il nodo minerario più vicino senza nemici
                    var safeSources = creep.room.find(FIND_SOURCES, {
                        filter: (s) => {
                            var hostiles = s.pos.findInRange(FIND_HOSTILE_CREEPS, 5);
                            return hostiles.length == 0;
                        }
                    });

                    if (safeSources.length > 0) {
                        source = safeSources[0];
                    }
                }

                creep.memory.sourceId = source.id;
            }

            // Raccogli energia dal nodo minerario assegnato
            var source = Game.getObjectById(creep.memory.sourceId);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        } else {
            // Se il creep ha energia, trasferiscila al nucleo o a un'estensione solo se il suo inventario è pieno
            if (creep.store[RESOURCE_ENERGY] > 0) {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) &&
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });

                if (targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
    }
};

module.exports = roleHarvester;