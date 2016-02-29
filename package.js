Package.describe({
  name: 'perbjorklund:meteor-git',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple package wrapper for nodegit',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  nodegit: "0.11.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('meteor-git.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('perbjorklund:meteor-git');
  api.addFiles('meteor-git-tests.js');
});
