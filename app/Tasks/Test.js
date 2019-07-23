'use strict'

const Task = use('Task')

class Test extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    console.log('Task Test handle')
  }
}

module.exports = Test
