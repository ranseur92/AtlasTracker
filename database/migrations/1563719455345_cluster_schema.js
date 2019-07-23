'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClusterSchema extends Schema {
  up () {
    this.create('clusters', (table) => {
      table.increments()
      table.integer('mode_id').unsigned().notNullable().references('id').inTable('modes').onDelete('cascade');
      table.integer('country_id').unsigned().notNullable().references('id').inTable('countries').onDelete('cascade');
      table.unique(['mode_id', 'country_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('clusters')
  }
}

module.exports = ClusterSchema
