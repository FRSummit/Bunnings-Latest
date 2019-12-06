(function (window, document, utils) {

    function addToStorageArray(storageItemName, item, limit) {
        var storageArray = JSON.parse(window.localStorage.getItem(storageItemName));
        if (storageArray === null) {
            storageArray = [];
        }
        if (storageArray.includes(item)) {
            storageArray.splice(storageArray.indexOf(item), 1);
        }
        storageArray.unshift(item);

        window.localStorage.setItem(storageItemName, JSON.stringify(storageArray.slice(0, limit)));
    }

    function addToCategoryHistory(category) {
        addToStorageArray('optimizely.categoryhistory', category, 8);
    }

    function addToSubcategoryHistory(subcategory, category) {
        var item = {
            'subcategory': subcategory,
            'category': category
        };
        addToStorageArray('optimizely.subcategoryhistory', item, 8);
    }

    utils
        .waitForElement('div.breadcrumbs')
        .then(function() {
            var breadcrumbs = document.querySelectorAll('div.breadcrumbs .breadcrumbs_breadcrumb span');
            var crumbs = [];
            breadcrumbs.forEach(function(crumb) {
              var item = crumb.textContent.trim();
              if (item !== '' && item !== "›") {
                crumbs.push(item);
              }
            });
            if (crumbs[0].toUpperCase() === 'OUR RANGE') {
                if (crumbs.length > 1) {
                    addToCategoryHistory(crumbs[1].toUpperCase());
                }
                if (crumbs.length > 2) {
                    addToSubcategoryHistory(crumbs[2].toUpperCase(), crumbs[1].toUpperCase());
                }
            }
        });
    
})(window, document, window.optimizely.get('utils'));