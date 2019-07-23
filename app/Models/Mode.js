'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mode extends Model {


    clusters() {
        return this.hasMany('App/Models/Cluster')
    }

}

module.exports = Mode
