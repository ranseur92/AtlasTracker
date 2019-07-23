'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {


    clusters() {
        return this.hasMany('App/Models/Cluster')
    }
    
}

module.exports = Country
