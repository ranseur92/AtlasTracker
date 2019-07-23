'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegionTypeSchema extends Schema {
  up () {
    this.create('region_types', (table) => {
      table.increments()
      table.string('type').notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('region_types')
  }
}

module.exports = RegionTypeSchema
