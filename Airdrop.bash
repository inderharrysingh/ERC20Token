#!/bin/bash

VALUE=$1
RECEIVER=$2

npx hardhat run scripts/send.js --value $VALUE --receiver $RECEIVER --network goerli --show-stack-traces

