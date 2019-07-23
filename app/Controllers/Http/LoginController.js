'use strict'

const { getLoginURL, validate, getUserData } = use('App/Helpers/SteamOpenID');
const User = use('App/Models/User');

class LoginController {

    async index ({view}) {
        return view.render('welcome')
    }

    async login ({ response }) {
        return response.redirect(getLoginURL());
    }

    async auth ({ auth, request, response }) {
        return await validate(request.all()) 
            ? this.loginUser(auth, request, response)
            : response.route('LoginController.index')
    }

    async loginUser(auth, request, response) {
        let userData = await getUserData(request.input('openid.identity'));
        let user = await User.findOrCreate({steam_id: userData.steam_id}, userData);
        if (user) {
            await auth.remember(true).login(user);
            return response.route('HomeController.index');
        } else {
            return response.route('LoginController.index');
        }
    }
}

module.exports = LoginController
