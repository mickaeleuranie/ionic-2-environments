#!/bin/bash

################
# Lauch ionic application and set environment by editing src/environments/environment.ts file
# @author mickael euranie <mickael.euranie@gmail.com>
# @version 1.0
################

if [[ $# -ne 1 ]]; then
    echo "Illegal number of parameters";
    echo "usage : ./switch.sh [environment]"
    exit 1;
fi

ENV=dev;
PORT=8100;

if [[ "$1" == "dev" ]]; then
    ENV=development
    PORT=8100

elif [[ "$1" == "test" ]]; then
    ENV=test
    PORT=8102

elif [[ "$1" == "preprod" ]]; then
    ENV=preproduction
    PORT=8101

elif [[ "$1" == "prod" ]]; then
    ENV=production
    PORT=8100

else
    echo "Illegal environment : must be 'dev', 'test', 'preprod' or 'prod')"
    echo "usage : ./switch.sh [environment]"
    exit 1;
fi

echo "Set selected environment : $ENV"

echo " > cleaning old environment configuration"
awk '!/{{ENV_REMOVE}}/' ./src/environments/environment.ts > ./src/environments/environment.new
mv ./src/environments/environment.ts ./src/environments/environment.old
mv ./src/environments/environment.new ./src/environments/environment.ts

echo " > set new environment"
awk '/{{ENV}}/ { print; print "public static currentEnvironment: string = \"'"$ENV"'\"; // {{ENV_REMOVE}}"; next }1' ./src/environments/environment.ts > ./src/environments/environment.new
mv ./src/environments/environment.ts ./src/environments/environment.old
mv ./src/environments/environment.new ./src/environments/environment.ts
