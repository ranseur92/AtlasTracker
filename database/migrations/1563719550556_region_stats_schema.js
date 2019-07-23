'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegionStatsSchema extends Schema {
  up () {
    this.create('region_stats', (table) => {
      table.increments()
      table.integer('region_id').unsigned().notNullable().references('id').inTable('regions').onDelete('cascade');
      table.integer('ping').unsigned().nullable().defaultTo(null);
      table.integer('players').unsigned().nullable().defaultTo(null);
      table.integer('max_players').unsigned().nullable().defaultTo(null);
      table.timestamps()
    })
  }

  down () {
    this.drop('region_stats')
  }
}

module.exports = RegionStatsSchema
