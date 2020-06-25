    var Ziggy = {
        namedRoutes: {"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"register.attempt":{"uri":"register","methods":["POST"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"login.attempt":{"uri":"login","methods":["POST"],"domain":null},"users.approve":{"uri":"{user}\/approve","methods":["POST"],"domain":null},"users.unapprove":{"uri":"{user}\/unapprove","methods":["POST"],"domain":null},"posts.index":{"uri":"posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"posts","methods":["POST"],"domain":null},"posts.show":{"uri":"posts\/{post}","methods":["GET","HEAD"],"domain":null},"posts.edit":{"uri":"posts\/{post}\/edit","methods":["GET","HEAD"],"domain":null},"posts.update":{"uri":"posts\/{post}","methods":["PUT","PATCH"],"domain":null},"posts.destroy":{"uri":"posts\/{post}","methods":["DELETE"],"domain":null},"users.index":{"uri":"users","methods":["GET","HEAD"],"domain":null},"users.create":{"uri":"users\/create","methods":["GET","HEAD"],"domain":null},"users.store":{"uri":"users","methods":["POST"],"domain":null},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"domain":null},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"domain":null},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"domain":null},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"domain":null}},
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
