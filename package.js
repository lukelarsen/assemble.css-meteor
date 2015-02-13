Package.describe({
  name: 'lukelarsen:assemble.css-meteor',
  version: '0.0.2',
  summary: 'Assemble.css as a Meteor Package. See assemblecss.com for more details.',
  git: 'https://github.com/lukelarsen/assemble.css-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  //api.addFiles('lukelarsen:assemble.css-meteor.js');
});
