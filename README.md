## Purpose

This project is intented for any aplication looking to scrape realtime data off a Fitbit device.

## Libaries

To do this the embedded code is written in javascript. with the help of Fitbits [fitbit/sdk](https://github.com/Fitbit/fitbit-sdk-toolchain) and [fitbit/sdk-cli](https://github.com/Fitbit/developer-bridge)

See the [Fitbit documenation](https://dev.fitbit.com/getting-started) for more info.

## Typescript

This project is setup using typescript. All .ts files will be compiled using typescript.

## First time setup

To install the packages used for this app NPM is reqiured. simply run `npm install` from the base project directory.

## Running

While this app can run on a fitbit device directly it its not neccicary instead for development purpouses the [Fitbit OS Simulator](https://dev.fitbit.com/release-notes/fitbit-os-simulator/) can be used to run this appication.

## Building

To build and deloy to the OS simulator (or a real fitbit) the fitbit CLI is used to deploy this application.

The process for building then running is:

`npx fitbit-build`

`npx fitbit`

this will open Fitbit's cli app then once is has launched type:

`$ install`

Assuming the OS simulator is running this will install then launch the application. If this is the first time running the OS simulator it will requre you to login with a fitbit account for more info see: [Documenation](https://dev.fitbit.com/build/guides/command-line-interface/)

The app can be exited anytime with Control + C (windows)

## Storage API

This project comes with a proof of concept HTTP API that the companion app sends it data to. This can be done with websockets or any other protocol however for an example of how to consume and store the data (in my case the data is stored in a MongoDB database). This service uses the [Serverless](https://www.serverless.com/) framework to create an AWS lambda function. It has a seperate package.json as it dosn't depend on the fitbit sdk nor does the base project use serverless hence a second `npm install` must be run in this directory.