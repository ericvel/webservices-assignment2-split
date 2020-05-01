// global.config = require('./config');
const http = require('http');

//JWT verification
module.exports =
{
    Verification: function (header_value)
    {
        return new Promise ((resolve, reject) => {
            http.get('http://localhost:2000/user/token', async (res) => {
                if (res.statusCode == 200) {
                    // Get JWT from response header
                    const loginToken = res.headers['x-access-token'];
                    console.log("Response header: " + loginToken);
                    if (loginToken == header_value) 
                    {
                        console.log('Access Granted');
                        resolve(true);
                    }
                    else
                    {
                        console.log('Access Denied');
                        resolve(false);
                    }  
                } else {
                    reject(res.statusMessage);
                }    
            });
        })
        
        
    }
}