'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SteamLoginSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('email', 254).nullable().alter();
      table.string('password', 60).nullable().alter();
      table.string('steam_id');
      table.string('steam_avatar');
    })
  }

  down () {
    this.table('users', (table) => {
      table.string('email', 254).notNullable().alter();
      table.string('password', 60).notNullable().alter();
      table.dropColumn('steam_id');
      table.dropColumn('steam_avatar');
    })
  }
}

module.exports = SteamLoginSchema
