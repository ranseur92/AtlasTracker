'use strict'

const querystring = use('querystring');
const request = use('request-promise');
const { format } = use('string-kit');
const Env = use('Env');
const _ = use('lodash');

function getLoginURL() {
    const appURL = Env.get('APP_URL'), openidURL = Env.get('STEAM_OPENID_URL');
    return openidURL + '?' + querystring.stringify({
        "openid.ns"         : `http://specs.openid.net/auth/2.0`,
        "openid.mode"       : `checkid_setup`,
        "openid.return_to"  : `${appURL}/auth`,
        "openid.realm"      : appURL,
        "openid.ns.sreg"    : `http://openid.net/extensions/sreg/1.1`,
        "openid.claimed_id" : `http://specs.openid.net/auth/2.0/identifier_select`,
        "openid.identity"   : `http://specs.openid.net/auth/2.0/identifier_select`
    });
}

async function validate(properties) {
    const openidURL = Env.get('STEAM_OPENID_URL');
    let form = { ...properties, 'openid.mode': 'check_authentication'}
    let _response = await request({ url: openidURL, method: 'POST', form});
    return !!_response.match(/(?:is_valid:true)/g);
}

async function getUserData(profileURL) {
    let apiKey = Env.get('STEAM_API_KEY'), profile = Env.get('STEAM_OPENID_PROFILE'), getPlayer = Env.get('STEAM_GET_PLAYER');
    let steamID = profileURL.replace(profile, '');
    let response = await request(format(getPlayer, apiKey, steamID));
    let userData =  _.get(JSON.parse(response), 'response.players[0]', null);
    return { username: userData.personaname, steam_id: userData.steamid, steam_avatar: userData.avatar }
}


module.exports = {
    getLoginURL,
    validate,
    getUserData
}