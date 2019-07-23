'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Region extends Model {

    cluster() {
        return this.belongsTo('App/Models/Cluster')
    }

    type() {
        return this.belongsTo('App/Models/RegionType')
    }

    biome() {
        return this.belongsTo('App/Models/Biome')
    }

    stats() {
        return this.hasMany('App/Models/RegionStat')
    }

}

module.exports = Region
