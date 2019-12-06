(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your garden',
        categories: [
            {
                'description': 'Outdoor Structures',
                'sub_description': 'Garages, Sheds, Patio covers and more',
                'mobileimg' : '/ba41a294e43c40ff87c99340fe627522.png',
                'url': '/garden/outdoor-structures',
                'alt': 'outdoor structures'
            },
            {
                'description': 'Plants',
                'sub_description': 'Great range for every type of garden',
                'mobileimg' : '/ebe5d0d825c54a2cb88a54a5463128a1.png',
                'url': '/garden/plants',
                'alt': 'plants'
            },
            {
                'description': 'Pots',
                'sub_description': 'Indoor Pots, Self-Watering Pots, Plant Baskets and more',
                'mobileimg' : '/0fa39f47fcce494ea52c78e681b6dbb1.png',
                'url': '/garden/pots',
                'alt': 'pots'
            },
            {
                'description': 'Garden Tools',
                'sub_description': 'To help tidy up any backyard or garden',
                'mobileimg' : '/5af4a0f2908d4b978061dfe1a36a652a.png',
                'url': '/garden/garden-tools',
                'alt': 'garden tools'
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