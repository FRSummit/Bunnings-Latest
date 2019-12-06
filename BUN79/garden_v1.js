(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your garden',
        categories: [
            {
                'description': 'Outdoor Structures',
                'mobileimg' : '/7079a6cf783a471fb0ee231ad1700c01.png',
                'url': '/garden/outdoor-structures',
                'alt': 'outdoor structures'
            },
            {
                'description': 'Plants',
                'mobileimg' : '/3d188f638364478e855c20346c2e1fbe.png',
                'url': '/garden/plants',
                'alt': 'plants'
            },
            {
                'description': 'Pots',
                'mobileimg' : '/a7a091542d174ffe8135886c7ff94a6c.png',
                'url': '/garden/pots',
                'alt': 'pots'
            },
            {
                'description': 'Garden Tools',
                'mobileimg' : '/1d7763d827054bfdbbb7ff672c658166.png',
                'url': '/garden/garden-tools',
                'alt': 'garden tools'
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