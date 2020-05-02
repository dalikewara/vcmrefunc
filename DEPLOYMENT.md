### Global Dependencies
```console
sudo npm i -g browserify uglify-js uglify-es
```

### Browserify
```console
browserify app.js --s vcmrefunc > dist/vcmrefunc.js && browserify app.js --s vcmrefunc | uglifyjs -cm > dist/vcmrefunc.min.js
```