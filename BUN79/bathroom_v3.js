(function(window, utils, library) {
    var details = {
        title: 'Check out our wide range of bathroom products',
        categories: [
            {
                'description': 'Vanities & Mirrors',
                'mobileimg' : '/1c3506936339409d84734b8b0e183601.png',
                'url': '/bathroom-plumbing/bathroom/vanities-mirrors',
                'alt': 'vanities & mirrors'
            },
            {
                'description': 'Showers',
                'mobileimg' : '/030f241a138e421c89109a571c454423.png',
                'url': '/bathroom-plumbing/bathroom/showers',
                'alt': 'showers'
            },
            {
                'description': 'Bathroom Tapware',
                'mobileimg' : '/f8d6373ea22b4906bd92dc00b36ab4f4.png',
                'url': '/bathroom-plumbing/bathroom/tapware',
                'alt': 'bathroom tapware'
            },
            {
                'description': 'Plumbing',
                'mobileimg' : '/984c38a39b984fa888c2be109f9ce65e.png',
                'url': '/bathroom-plumbing/plumbing',
                'alt': 'plumbing'
            }
        ]
    };

    function addBodyClass() {
        document.querySelector('body').classList.add('bun079');
    }

    utils
        .waitForElement('#RefreshCarousel')
        .then(function(){
            addBodyClass();
            library.appendHtml(library.createV1Html(details));
            library.addVariationClass3('v3');
        });

})(window, window.optimizely.get('utils'), window.abtesting.bun079);