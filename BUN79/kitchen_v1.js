(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your kitchen',
        categories: [
            {
                'description': 'Cabinets & Accessories',
                'mobileimg' : '/307e8ba78c374c7e921b12b3eb021b8e.png',
                'url': '/kitchen/cabinets-accessories',
                'alt': 'cabinets & accessories'
            },
            {
                'description': 'Benchtops',
                'mobileimg' : '/ee07c33ff51a4eed971681c39ce97bf4.png',
                'url': '/kitchen/benchtops',
                'alt': 'benchtops'
            },
            {
                'description': 'Taps & Sinks',
                'mobileimg' : '/2cf8b06640c44e939103f7e52b743aa8.png',
                'url': '/kitchen/kitchen-taps-sinks',
                'alt': 'taps & sinks'
            },
            {
                'description': 'Appliances',
                'mobileimg' : '/56ccbda741ee464f8361188b6642d376.png',
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
            library.addVariationClass1('v1');
        });

})(window, window.optimizely.get('utils'), window.abtesting.bun079);