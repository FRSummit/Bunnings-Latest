(function(window, utils) {
    var categories = {
        'TOOLS': {
            'description': 'Tools',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': 'https://www.bunnings.com.au/our-range/tools',
            'alt': 'tools'
        },
        'BUILDING & HARDWARE': {
            'description': 'Building & Hardware',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/1841b0d4fd134e729732baa85479f68d.png',
            'url': 'https://www.bunnings.com.au/our-range/building-hardware',
            'alt': 'building hardware'
        },
        'GARDEN': {
            'description': 'Garden',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/83026bd1077c40aba2ac112255a0792a.png',
            'url': 'https://www.bunnings.com.au/our-range/garden',
            'alt': 'garden'
        },
        'OUTDOOR LIVING': {
            'description': 'Outdoor Living',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': 'https://www.bunnings.com.au/our-range/outdoor-living',
            'alt': 'outdoor living'
        },
        'KITCHEN': {
            'description': 'Kitchen',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': 'https://www.bunnings.com.au/our-range/kitchen',
            'alt': 'kitchen'
        },
        'BATHROOM & PLUMBING': {
            'description': 'Bathroom & Plumbing',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/92f0e234940a4e0995274daf72cab9f7.png',
            'url': 'https://www.bunnings.com.au/our-range/bathroom-plumbing',
            'alt': 'bathroom plumbing'
        },
        'CURTAINS & BLINDS': {
            'description': 'Curtains & Blinds',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': 'https://www.bunnings.com.au/our-range/curtains-blinds',
            'alt': 'curtains blinds'
        },
        'OFFICE FURNITURE': {
            'description': 'Office Furniture',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/cb73b41b113e4995a21938dc23385e16.png',
            'url': 'https://www.bunnings.com.au/our-range/office-furniture',
            'alt': 'office furniture'
        },
        'PAINT & DECORATING': {
            'description': 'Paint & Decorating',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/a59eb75ad809402c9c03455c98558e5d.png',
            'url': 'https://www.bunnings.com.au/our-range/paint-decorating',
            'alt': 'paint decorating'
        },
        'STORAGE & CLEANING': {
            'description': 'Storage & Cleaning',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': 'https://www.bunnings.com.au/our-range/storage-cleaning',
            'alt': 'storage cleaning'
        },
        'LIGHTING & ELECTRICAL': {
            'description': 'Lighting & Electrical',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': 'https://www.bunnings.com.au/our-range/lighting-electrical',
            'alt': 'lighting electrical'
        },
        'SMART HOME': {
            'description': 'Smart Home',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': 'https://www.bunnings.com.au/our-range/smart-home',
            'alt': 'smart home'
        },
        'HIRE SHOP': {
            'description': 'Hire Shop',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': 'https://www.bunnings.com.au/our-range/hire-shop',
            'alt': 'hire shop'
        }
    };

    function observeNav() {
        var targetNode = document.querySelector('nav.header-navigation--lg');
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        var callback = function() {
            if (document.querySelector('nav.header-navigation--lg').classList.contains('is-open') && 
                document.querySelector('#headerMainMenu .header_primary-nav-link_item').classList.contains('is-active')) {
                  var categoryHistory = getCategoryHistory();
                  if (categoryHistory === null) {
                  		return;
                  }
                  var html = createDesign(categoryHistory);
                  appendHtml(html, 'desktop');
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    function getCategoryHistory() {
        var categoryHistory = JSON.parse(window.localStorage.getItem('optimizely.categoryhistory'));
        return categoryHistory;
    }

    function createDesign(categoryHistory) {

        var div = document.createElement('div');
        div.className = 'product_history_wrapper';
        div.id = 'product_history_wrapper';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner';
        div.appendChild(divInner);
      
        var continueText = document.createElement('p');
        continueText.className = 'main_title';
        continueText.innerText = "Continue shopping:";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        categoryHistory.slice(0, 4).forEach(function(categoryName) {

            var categoryDetails = categories[categoryName];

            var product = document.createElement('div');
            product.className = 'product-img';
            
            var link = document.createElement('a');
            link.href = categoryDetails.url;

            var img = document.createElement('img');
            img.src = categoryDetails.mobileimg;
            img.alt = categoryDetails.alt;
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            paragraph.innerHTML = '<span>' + categoryDetails.description + '</span>';
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        });

        return div;
    }

    function appendHtml(html, device) {
        if (device == 'mobile') {
            var mobileDiv = document.querySelector('#headerMainMenu');
            mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
        } else {
            var desktopDiv = document.querySelector('#RefreshHeader .header-navigation-level--lg_content-title');
            desktopDiv.parentNode.insertBefore(html, desktopDiv.nextSibling);
        } 
    }

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }

    if (isMobile()) {
        utils
            .waitForElement('#RefreshCarousel')
            .then(function(){
                var categoryHistory = getCategoryHistory();
                if (categoryHistory === null) {
                		return;
                }
                var html = createDesign(categoryHistory);
                appendHtml(html, 'mobile');
            });
    } else {
        utils
            .waitForElement('nav.header-navigation--lg')
            .then(function(){
                observeNav();
            });
    }

  })(window, window.optimizely.get('utils'));