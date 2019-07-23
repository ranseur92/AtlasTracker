'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group('at', () => {
    Route.get('/', 'HomeController.index')
}).middleware('auth').prefix('at')


Route.group('login', () => {
    Route.get('/', 'LoginController.index')
    Route.get('/auth', 'LoginController.auth')
    Route.get('/login', 'LoginController.login')
}).middleware('guest');