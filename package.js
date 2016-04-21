Package.describe({
    name: 'universe:cookie-info',
    summary: 'Nag for informing about cookies.',
    version: '0.0.3',
    readme: 'README.md',
    git: 'https://github.com/vazco/universe-cookie-info'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.3');

    api.use([
        'modules',
        'ecmascript'
    ]);

    api.addFiles([
        'client/stylesheets/CookieInfo.css'
    ], 'client');

    api.mainModule('index.js');
});
