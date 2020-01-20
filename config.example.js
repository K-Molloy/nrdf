var config = {
        "securityToken": "security-token",
        "stompHost": "datafeeds.networkrail.co.uk",
        "stompPort": 61618,
        "tdChannel": "TD_ALL_SIG_AREA", // find which one you want to subscribe to here http://nrodwiki.rockshore.net/index.php/TD
        'movementChannel': 'TRAIN_MVT_ALL_TOC', // find which one you want to subscribe to here http://nrodwiki.rockshore.net/index.php/TD
        "username": "username@username",
        "password": "password",
        "mongo": {
                'connectionString': 'mongodb://localhost:27017/',
            	'databaseName':'nrdf'
        },
        "feeds": {              // feeds which are enabled
                'TD' : [
                        'C', // have this here to enable processing C class messages
                        'S'  // have this here to enable processing S class messages
                ],
                'TRUST': true, // enable processing TRUST messages
                'VSTP': true,  // enable processing VSTP messges (not implemented yet)
                'SCHEDULE': true // enable processing SCHEDULE feed
        }
}

module.exports = config
