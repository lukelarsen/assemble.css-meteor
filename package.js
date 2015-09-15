Package.describe({
  name: 'lukelarsen:assemble.css-meteor',
  version: '1.4.4',
  summary: 'Assemble.css as a Meteor Package. See assemblecss.com for more details.',
  git: 'https://github.com/lukelarsen/assemble.css-meteor',
});

Package.onUse(function(api) {

    api.use('fourseven:scss@2.0.0_1', ['client', 'server']);
    api.imply('fourseven:scss@2.0.0_1', ['client', 'server']);

    var jsAssets = [
          'assemble.css/javascript/tip.js',
          'assemble.css/javascript/vanilla-modal.js'
        ],
        scssAssets = [
          'assemble.css/_assemble.scss',
          'assemble.css/base/general/_general-extends.scss',
          'assemble.css/base/general/_general-mixins.scss',
          'assemble.css/base/general/_general-reset.scss',
          'assemble.css/base/general/_general-returns.scss',
          'assemble.css/base/type/_type-mixins.scss',
          'assemble.css/base/type/_type-print.scss',
          'assemble.css/objects/arrows/_arrows-extends.scss',
          'assemble.css/objects/arrows/_arrows-mixins.scss',
          'assemble.css/objects/buttons/_button-object.scss',
          'assemble.css/objects/buttons/_button-print.scss',
          'assemble.css/objects/code/_code-object.scss',
          'assemble.css/objects/forms/_forms-extends.scss',
          'assemble.css/objects/forms/_forms-mixins.scss',
          'assemble.css/objects/forms/_forms-object.scss',
          'assemble.css/objects/grids/_grids-extends.scss',
          'assemble.css/objects/grids/_grids-mixins.scss',
          'assemble.css/objects/grids/_grids-mixins.scss',
          'assemble.css/objects/icons/_icons-object.scss',
          'assemble.css/objects/lists/_list-object.scss',
          'assemble.css/objects/media/_media-object.scss',
          'assemble.css/objects/modals/_modal-object.scss',
          'assemble.css/objects/modals/_modal-print.scss',
          'assemble.css/objects/navs/_nav-object.scss',
          'assemble.css/objects/notifications/_notification-object.scss',
          'assemble.css/objects/notifications/_notification-print.scss',
          'assemble.css/objects/tables/_table-object.scss',
          'assemble.css/objects/tables/_table-print.scss',
          'assemble.css/objects/tips/_tip-object.scss',
        ];

    jsAssets.forEach(function(asset) {
      api.add_files(asset, 'client');
    });

    scssAssets.forEach(function(asset) {
      api.add_files(asset, ['server']);
    });
});
