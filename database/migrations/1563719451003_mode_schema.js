'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModeSchema extends Schema {
  up () {
    this.create('modes', (table) => {
      table.increments()
      table.string('mode').notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('modes')
  }
}

module.exports = ModeSchema
