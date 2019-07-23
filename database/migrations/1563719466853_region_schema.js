'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegionSchema extends Schema {
  up () {
    this.create('regions', (table) => {
      table.increments()
      table.integer('cluster_id').unsigned().notNullable().references('id').inTable('clusters').onDelete('cascade');
      table.integer('biome_id').unsigned().notNullable().references('id').inTable('biomes').onDelete('cascade');
      table.integer('type_id').unsigned().notNullable().references('id').inTable('region_types').onDelete('cascade');
      table.string('region').notNullable();
      table.string('ip').nullable().defaultTo(null);
      table.integer('port').unsigned().nullable().defaultTo(null);
      table.unique(['ip', 'port'])
      table.unique(['region', 'cluster_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('regions')
  }
}

module.exports = RegionSchema
