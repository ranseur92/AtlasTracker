'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BiomeSchema extends Schema {
  up () {
    this.create('biomes', (table) => {
      table.increments()
      table.string('biome').notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('biomes')
  }
}

module.exports = BiomeSchema
