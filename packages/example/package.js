(function() {
  Package.info = {
    name: 'example',
    version: '0.0.1',
    documentation: 'README.md',
  };
  Package.describe(Package.info);

  Npm.depends({
    "unicode": "0.6.1"
  });

  Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use('ecmascript');

    api.mainModule('example.js');
  });

  Package.onTest(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use('ecmascript');
  });
})();
