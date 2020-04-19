const { ResponseUtil, BodyParser } = require('dcm-lambda-utils');

const getEnvironmentArray = () => {
    const keys = Object.keys(process.env);

    return keys.map(k => {
        return { key: k, value: process.env[k] };
    } );
}

exports.handler = async (event, context) => {
    try {
        const body = event.queryStringParameters;
        
        const response = {
            request: body,
            alive: true,
            env: getEnvironmentArray()
        };
        
        return ResponseUtil.OK(response);
    } 
    catch (err) {
        console.log(err)
        return ResponseUtil.Error(err);
    }

    return response
};
