// package metadata file for Meteor.js

Package.describe({
  name: 'lidiexy:cubacomfort-bootstrap',  // http://atmospherejs.com/lidiexy/cubacomfort-bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web. Now for the CubaComfort Project.',
  version: '3.3.4',
  git: 'https://github.com/lidiexy/cubacomfort-bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
    'dist/fonts/glyphicons-halflings-regular.woff2',
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js',
  ], 'client');
});
