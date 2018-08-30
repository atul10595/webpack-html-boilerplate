# webpack-html-boilerplate
HTML boilerplate using yarn, webpack, bootstrap, jquery
----
```
git clone https://github.com/atul10595/webpack-html-boilerplate.git
yarn
```

compile all files into one bundle (bundle:prod is defined in package.json)
```
yarn run build:prod
```

run webpack server (this server will autoload on change in your css/js)
```
yarn run dev
```

Note: the changes made while server on might not reflect in bundled `.js` file. 

After finalising the changes with hot load, run following command again:
```
yarn run build:prod` 
```
