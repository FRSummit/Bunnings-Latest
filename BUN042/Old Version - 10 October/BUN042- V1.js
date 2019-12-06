(function(window, utils) {
    var categories = {
        'TOOLS': {
            'description': 'Tools',
            'img': '//cdn.optimizely.com/img/15721220395/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': 'https://www.bunnings.com.au/our-range/tools',
            'alt': 'tools'
        },
        'BUILDING & HARDWARE': {
            'description': 'Building & Hardware',
            'img': '//cdn.optimizely.com/img/15721220395/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/1841b0d4fd134e729732baa85479f68d.png',
            'url': 'https://www.bunnings.com.au/our-range/building-hardware',
            'alt': 'building hardware'
        },
        'GARDEN': {
            'description': 'Garden',
            'img': '//cdn.optimizely.com/img/15721220395/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/83026bd1077c40aba2ac112255a0792a.png',
            'url': 'https://www.bunnings.com.au/our-range/garden',
            'alt': 'garden'
        },
        'OUTDOOR LIVING': {
            'description': 'Outdoor Living',
            'img': '//cdn.optimizely.com/img/15721220395/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': 'https://www.bunnings.com.au/our-range/outdoor-living',
            'alt': 'outdoor living'
        },
        'KITCHEN': {
            'description': 'Kitchen',
            'img': '//cdn.optimizely.com/img/15721220395/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': 'https://www.bunnings.com.au/our-range/kitchen',
            'alt': 'kitchen'
        },
        'BATHROOM & PLUMBING': {
            'description': 'Bathroom & Plumbing',
            'img': '//cdn.optimizely.com/img/15721220395/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/92f0e234940a4e0995274daf72cab9f7.png',
            'url': 'https://www.bunnings.com.au/our-range/bathroom-plumbing',
            'alt': 'bathroom plumbing'
        },
        'CURTAINS & BLINDS': {
            'description': 'Curtains & Blinds',
            'img': '//cdn.optimizely.com/img/15721220395/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': 'https://www.bunnings.com.au/our-range/curtains-blinds',
            'alt': 'curtains blinds'
        },
        'OFFICE FURNITURE': {
            'description': 'Office Furniture',
            'img': '//cdn.optimizely.com/img/15721220395/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/cb73b41b113e4995a21938dc23385e16.png',
            'url': 'https://www.bunnings.com.au/our-range/office-furniture',
            'alt': 'office furniture'
        },
        'PAINT & DECORATING': {
            'description': 'Paint & Decorating',
            'img': '//cdn.optimizely.com/img/15721220395/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/a59eb75ad809402c9c03455c98558e5d.png',
            'url': 'https://www.bunnings.com.au/our-range/paint-decorating',
            'alt': 'paint decorating'
        },
        'STORAGE & CLEANING': {
            'description': 'Storage & Cleaning',
            'img': '//cdn.optimizely.com/img/15721220395/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': 'https://www.bunnings.com.au/our-range/storage-cleaning',
            'alt': 'storage cleaning'
        },
        'LIGHTING & ELECTRICAL': {
            'description': 'Lighting & Electrical',
            'img': '//cdn.optimizely.com/img/15721220395/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': 'https://www.bunnings.com.au/our-range/lighting-electrical',
            'alt': 'lighting electrical'
        },
        'SMART HOME': {
            'description': 'Smart Home',
            'img': '//cdn.optimizely.com/img/15721220395/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': 'https://www.bunnings.com.au/our-range/smart-home',
            'alt': 'smart home'
        },
        'HIRE SHOP': {
            'description': 'Hire Shop',
            'img': '//cdn.optimizely.com/img/15721220395/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '//cdn.optimizely.com/img/15721220395/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': 'https://www.bunnings.com.au/our-range/hire-shop',
            'alt': 'hire shop'
        }
    };

    function observeNav() {
        var targetNode = document.querySelector('nav.header-navigation--lg');
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        var callback = function() {
            if (document.querySelector('nav.header-navigation--lg').classList.contains('is-open')) {
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











///////////////////////////////////////////////////////////////////////////////////////////////////////////////














#RefreshHeader .header-navigation-level--lg_content-title {
    margin-bottom: 0;
}

.product_history_wrapper {
    width: 100%;
    min-height: 150px;
    background-color: #f5f5f5;
}

.product_history_banner {
    margin: 0 auto;
    position: relative;
    min-height: 150px;
}

.product_history_banner .main_title {
    font-size: 14px;
    font-family: futura-w01-heavy, Helvetica, Arial, sans-serif;
    color: #3a3a3a;
    padding-left: 5px;
    margin-bottom: 5px;
}

.product_history_banner .img-section:before {
    content: " ";
    display: table;
}

.product_history_banner .img-section:after {
    content: " ";
    display: table;
    clear: both;
}

.product_history_banner .product-img {
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-left: 5px;
    padding-right: 5px;
    float: left;
}

.product_history_banner .product-img a {
    display: block;
    color: #ffffff;
    text-decoration: none;
}

.product_history_banner .product-img img {
    height: auto;
    width: 100%;
}

.product_history_banner .product-img .product-desc {
    min-height: 35px;
    background-color: #0b5257;
    position: absolute;
    bottom:0;
    left:5px;
    right:5px;
    font-family: futura-w01-medium, Helvetica, Arial, sans-serif;
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
    padding:4px;
}

@media (min-width: 560px) {

    #RefreshHeader .product_history_wrapper {
        padding: 0 15px;
        min-height: 150px;
        background-color: inherit;
    }
    
    #RefreshHeader .product_history_banner {
        margin: 0 auto;
        position: relative;
        min-height: 150px;
        border-bottom: 1px solid #333;
    }
    
    #RefreshHeader .product_history_banner .main_title {
        font-size: 14px;
        font-family: 'Futura W01 Heavy',sans-serif;
        font-weight: bold;
        color: #ffffff;
        padding-left: 4px;
        margin-bottom: 5px;
    }
    
    .product_history_banner .img-section:before {
        content: " ";
        display: table;
    }
    
    .product_history_banner .img-section:after {
        content: " ";
        display: table;
        clear: both;
    }
    
    #RefreshHeader .product_history_banner .product-img {
        width: 25%;
        position: relative;
        min-height: 1px;
        padding-left: 4px;
        padding-right: 4px;
        float: left;
    }
    
    #RefreshHeader .product_history_banner .product-img a {
        display: block;
        color: #ffffff;
        text-decoration: none;
    }
    
    #RefreshHeader .product_history_banner .product-img img {
        height: auto;
        width: 100%;
        border-radius: 2px;
    }
    
    #RefreshHeader .product_history_banner .product-img p.product-desc {
        min-height: 35px;
        padding:4px;
        background-color: inherit;
        position: static;
        font-family: futura-w01-medium, Helvetica, Arial, sans-serif;
        font-size: 12px;
        text-align: center;
        line-height: 1.2;
    }
}