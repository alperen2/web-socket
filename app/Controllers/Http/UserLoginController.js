'use strict'

class UserLoginController {
    index({ request, response }) {
        response.route('profile', { id: 1 })
    }
}

module.exports = UserLoginController
