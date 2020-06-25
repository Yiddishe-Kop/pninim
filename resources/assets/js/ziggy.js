    var Ziggy = {
        namedRoutes: [],
        baseUrl: 'https://pninim.test/',
        baseProtocol: 'https',
        baseDomain: 'pninim.test',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
