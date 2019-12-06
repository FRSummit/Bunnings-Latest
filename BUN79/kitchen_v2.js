(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your kitchen',
        categories: [
            {
                'description': 'Cabinets & Accessories',
                'sub_description': 'Cabinets, doors, drawers and more',
                'mobileimg' : '/b2a088a34e8a43c79f8a3284abb7e9e9.png',
                'url': '/kitchen/cabinets-accessories',
                'alt': 'cabinets & accessories'
            },
            {
                'description': 'Benchtops',
                'sub_description': 'On trend styles at warehouse prices',
                'mobileimg' : '/3f3588ca4f5841cb99b678c3e5375fb8.png',
                'url': '/kitchen/benchtops',
                'alt': 'benchtops'
            },
            {
                'description': 'Taps & Sinks',
                'sub_description': 'Great range to complete every kitchen',
                'mobileimg' : '/04c6e5c14e434a50ad6abfae1d0e9afe.png',
                'url': '/kitchen/kitchen-taps-sinks',
                'alt': 'taps & sinks'
            },
            {
                'description': 'Appliances',
                'sub_description': 'Ovens, Cooktops, Rangehoods and more',
                'mobileimg' : '/17d3a596d9dd4d7cb0fa0f504850572b.png',
                'url': 'https:/kitchen/appliances',
                'alt': 'appliances'
            }
        ]
    };

    function addBodyClass() {
        document.querySelector('body').classList.add('bun079');
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
            document.querySelector('body').classList.add('safari');
        }
    }

    utils
        .waitForElement('#RefreshCarousel')
        .then(function(){
            addBodyClass();
            library.appendHtml(library.createV1Html(details));
            library.addVariationClass2('v2');
        });

})(window, window.optimizely.get('utils'), window.abtesting.bun079);