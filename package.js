Package.describe({
    name: 'universe:cookie-info',
    summary: 'Nag for informing about cookies.',
    version: '0.0.2',
    readme: 'README.md',
    git: 'https://github.com/vazco/universe-cookie-info'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3-rc.10');

    api.use([
        'modules',
        'ecmascript'
    ]);

    api.addFiles([
        'index.js',

        'components/CookieInfo.jsx'
    ]);

    api.addFiles([
        'client/stylesheets/CookieInfo.css'
    ], 'client');

    api.mainModule('index.js');
});
