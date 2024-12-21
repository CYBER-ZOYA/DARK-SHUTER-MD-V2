const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=jF1nBLLB#jX4jxWnOTtatdze_lkd2LuMr6fOUxiUhvo3gs3qeQPY',
GITHUB_AUTH_TOKEN: '70RVhlIUXAh8EHT0VeMJPSY563O5eH3Z0mtQ', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'CYBER-ZOYA',

};
