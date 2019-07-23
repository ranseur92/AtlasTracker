'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cluster extends Model {

    mode() {
        return this.belongsTo('App/Models/Mode')
    }

    country() {
        return this.belongsTo('App/Models/Country')
    }

    regions() {
        return this.hasMany('App/Models/Region')
    }

}

module.exports = Cluster
