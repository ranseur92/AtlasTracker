'use strict'

class HomeController {

    async index ({view}) {
        return view.render('loggedin')
    }
    
}

module.exports = HomeController
