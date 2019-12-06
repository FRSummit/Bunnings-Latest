(function(window, utils, library) {
    var details = {
        title: 'The widest range of products for your bathroom',
        categories: [
            {
                'description': 'Vanities & Mirrors',
                'sub_description': 'On trend styles at warehouse prices',
                'mobileimg' : '/e89e2d71dcbc4b779cab943453377be9.png',
                'url': '/bathroom-plumbing/bathroom/vanities-mirrors',
                'alt': 'vanities & mirrors'
            },
            {
                'description': 'Showers',
                'sub_description': 'Shower Screens, Accessories and more',
                'mobileimg' : '/6d5cdc3f444c4aeebefa3d8a52eb41bc.png',
                'url': '/bathroom-plumbing/bathroom/showers',
                'alt': 'showers'
            },
            {
                'description': 'Bathroom Tapware',
                'sub_description': 'Bathroom Tapware to complete every bathroom',
                'mobileimg' : '/e7975d4567fc441291fa3c1b4ab1f436.png',
                'url': '/bathroom-plumbing/bathroom/tapware',
                'alt': 'bathroom tapware'
            },
            {
                'description': 'Plumbing',
                'sub_description': 'Hot Water Units, Pumps, Water Tanks and more',
                'mobileimg' : '/d08f46948adb4b0fb8445d4d37c744c6.png',
                'url': '/bathroom-plumbing/plumbing',
                'alt': 'plumbing'
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