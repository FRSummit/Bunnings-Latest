(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your bathroom',
        categories: [
            {
                'description': 'Vanities & Mirrors',
                'mobileimg' : '/05750cef0bf04626ab1d4fc03b110a60.png',
                'url': '/bathroom-plumbing/bathroom/vanities-mirrors',
                'alt': 'vanities & mirrors'
            },
            {
                'description': 'Showers',
                'mobileimg' : '/8fe3a9631fec4a93a9ada548f4e9136b.png',
                'url': '/bathroom-plumbing/bathroom/showers',
                'alt': 'showers'
            },
            {
                'description': 'Bathroom Tapware',
                'mobileimg' : '/5f4eb24f172a46f8baa12f0df3f25670.png',
                'url': '/bathroom-plumbing/bathroom/tapware',
                'alt': 'bathroom tapware'
            },
            {
                'description': 'Plumbing',
                'mobileimg' : '/a0423077cb1d4825aa9fd3dc1bb8d15f.png',
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
            library.addVariationClass1('v1');
        });

})(window, window.optimizely.get('utils'), window.abtesting.bun079);