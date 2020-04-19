# Basic serverless project

This is a starter template for a basic website using serverless. For the backend we'll have AWS SAM using lambdas and for the frontend it's a simple React application.

## How to get started

To run the project there's a few required tools:

### Install the AWS Cli
First tool that needs installing is the AWS CLI. You can use the [Install link for MacOS](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-macOS.html). Once the Cli has been installed, you'll need to configure your cli. To do so, open the AWS console with your user:

 - Go to IAM
 - Once in the IAM console, find your user and go to Security Credentials
 - If you have an existing access key, you should have both the access key and a secret
 - If you don't have one, create it on the console

Once you have a key and a secret to connect the CLI with your account go to a command prompt and use

```
aws configure
```

Once you've run this command, follow the instructions.

### Install Docker

To be able to run the Api for local testing you will need to install docker in your Mac. To do so, you'll need to [download it from here](https://docs.docker.com/docker-for-mac/install/)

### Install the AWS SAM Cli

Our API runs as a serverless project, which means you'll need the AWS SAM Cli for running the project. You can [follow the official guide for installing it on MacOS](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html)

Now that the tools are installed, you can run the project. First thing we need to do is run the API build script so it installs dependencies on all the folders. To do this, go to the root of the `/api` folder and run the following command:

``` sam build ```

Once the build is complete every lambda should have the dependencies installed. 

Next up run `sam local start-api -n environment.dev.json`

This should start an instance of the API on port 3000. To be able to check if your api is running you can open the following on a browser:

``` http://localhost:3000/echo?hello=world ```

The response from the browser should be the following:

```
{
    "request" : {
        "hello":"world"
    },
    "alive":true
}
```

Once the Api is running, you'll need to leave the terminal window running the sam cli and open a new one to run react. To do so, open a new tab on terminal and head to the `/www` folder. Once there, run the following command:

```
yarn start
```

The script will tell you that port 3000 is in use and if you want to use another, that is because the API is running on that port. Select yes, your website should be running now on port 3001. To check go to the address on your browser:

```
http://localhost:3001/
```