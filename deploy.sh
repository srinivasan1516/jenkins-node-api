#!/bin/bash

echo "Starting deployment..."

APP_NAME="jenkins-node-api"

npm install

pm2 stop $APP_NAME || true
pm2 delete $APP_NAME || true

pm2 start src/app.js --name $APP_NAME
pm2 save

echo "Deployment completed"
