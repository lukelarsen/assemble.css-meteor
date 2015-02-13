Package.describe({
  name: 'lukelarsen:assemble.css-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Assemble.css as a Meteor Package. See assemblecss.com for more details.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukelarsen/assemble.css-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('lukelarsen:assemble.css-meteor.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lukelarsen:assemble.css-meteor');
  api.addFiles('lukelarsen:assemble.css-meteor-tests.js');
});
