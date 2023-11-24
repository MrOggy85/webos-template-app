# WebOS App Template
Use this repo as a starting point. It has all the nescessary base components to run on a WebOS TV. Please make sure to update `appinfo.json` with your details and follow the guides below to setup your PC and TV.

## Setup
- Follow the instructions on [WebOS TV Developer](https://webostv.developer.lge.com/develop/getting-started/build-your-first-web-app) to get your local environment ready.
- Download latest webOS.js library [here](https://webostv.developer.lge.com/develop/references/webostvjs-introduction) and put it in `vendor` folder

## Run in Simulator
- Download Simulator [here](https://webostv.developer.lge.com/develop/tools/simulator-installation)
- Start the simulator and choose this folder

## Run on your TV
First make sure your WebOS TV is in [Developer Mode](https://webostv.developer.lge.com/develop/getting-started/developer-mode-app) and is the default target device.

then run on tv using `scripts/run-on-tv.sh` script
