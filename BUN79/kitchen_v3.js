(function(window, utils, library) {
    var details = {
        title: 'Check out our wide range of kitchen products',
        categories: [
            {
                'description': 'Cabinets & Accessories',
                'mobileimg' : '/819d2e0761c2437d9440a0b05b6bcc32.png',
                'url': '/kitchen/cabinets-accessories',
                'alt': 'cabinets & accessories'
            },
            {
                'description': 'Benchtops',
                'mobileimg' : '/5adba871e0a145a1a5d139013bb1b92c.png',
                'url': '/kitchen/benchtops',
                'alt': 'benchtops'
            },
            {
                'description': 'Taps & Sinks',
                'mobileimg' : '/0dc02316db02488a8578bf61f1d951f1.png',
                'url': '/kitchen/kitchen-taps-sinks',
                'alt': 'taps & sinks'
            },
            {
                'description': 'Appliances',
                'mobileimg' : '/a4f9540aaec14250bc2c3ec43d651d79.png',
                'url': 'https:/kitchen/appliances',
                'alt': 'appliances'
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