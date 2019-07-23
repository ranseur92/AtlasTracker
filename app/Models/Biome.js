'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Biome extends Model {

    regions() {
        return this.hasMany('App/Models/Region')
    }
}

module.exports = Biome
