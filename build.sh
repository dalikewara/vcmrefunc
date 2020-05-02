#! /bin/bash

browserify app.js --s vcmrefunc > dist/vcmrefunc.js && browserify app.js --s vcmrefunc | uglifyjs -cm > dist/vcmrefunc.min.js