(function(window, utils) {
    var categories = {
        'TOOLS': {
            'description': 'Tools',
            'img': '//cdn.optimizely.com/img/15721220395/19542c93bd1d432293de4104f8a51e42.png',
            'url': 'https://www.bunnings.com.au/our-range/tools',
            'alt': 'tools'
        },
        'BUILDING & HARDWARE': {
            'description': 'Builing &amp; Hardware',
            'img': '//cdn.optimizely.com/img/15721220395/919d8026f3c243d68073ab8f511338c9.png',
            'url': 'https://www.bunnings.com.au/our-range/building-hardware',
            'alt': 'building hardware'
        },
        'GARDEN': {
            'description': 'Garden',
            'img': '//cdn.optimizely.com/img/15721220395/5f85656ebd0948e2831c5c65b67d3c45.png',
            'url': 'https://www.bunnings.com.au/our-range/garden',
            'alt': 'garden'
        },
        'OUTDOOR LIVING': {
            'description': 'Outdoor Living',
            'img': '//cdn.optimizely.com/img/15721220395/8948798d7d914c8dae337e44cc3cd04e.png',
            'url': 'https://www.bunnings.com.au/our-range/outdoor-living',
            'alt': 'outdoor living'
        },
        'KITCHEN': {
            'description': 'Kitchen',
            'img': '//cdn.optimizely.com/img/15721220395/d7e8c896ba014505bcd6517edee9665f.png',
            'url': 'https://www.bunnings.com.au/our-range/kitchen',
            'alt': 'kitchen'
        },
        'BATHROOM & PLUMBING': {
            'description': 'Bathroom &amp; Plumbing',
            'img': '//cdn.optimizely.com/img/15721220395/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'url': 'https://www.bunnings.com.au/our-range/bathroom-plumbing',
            'alt': 'bathroom plumbing'
        },
        'CURTAINS & BLINDS': {
            'description': 'Curtains &amp; Blinds',
            'img': '//cdn.optimizely.com/img/15721220395/254e6edc8cde469f9f1b2fdbf2098539.png',
            'url': 'https://www.bunnings.com.au/our-range/curtains-blinds',
            'alt': 'curtains blinds'
        },
        'OFFICE FURNITURE': {
            'description': 'Office Furniture',
            'img': '//cdn.optimizely.com/img/15721220395/11648aad462f41e2bc8ecb815d6cd251.png',
            'url': 'https://www.bunnings.com.au/our-range/office-furniture',
            'alt': 'office furniture'
        },
        'PAINT & DECORATING': {
            'description': 'Paint &amp; Decorating',
            'img': '//cdn.optimizely.com/img/15721220395/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'url': 'https://www.bunnings.com.au/our-range/paint-decorating',
            'alt': 'paint decorating'
        },
        'STORAGE & CLEANING': {
            'description': 'Storage &amp; Cleaning',
            'img': '//cdn.optimizely.com/img/15721220395/3927e631136b459291019670d48ef7e1.png',
            'url': 'https://www.bunnings.com.au/our-range/storage-cleaning',
            'alt': 'storage cleaning'
        },
        'LIGHTING &amp; ELECTRICAL': {
            'description': 'Lighting &amp; Electrical',
            'img': '//cdn.optimizely.com/img/15721220395/9cf3088c320f41d1a991e2b721456987.png',
            'url': 'https://www.bunnings.com.au/our-range/lighting-electrical',
            'alt': 'lighting electrical'
        },
        'SMART HOME': {
            'description': 'Smart Home',
            'img': '//cdn.optimizely.com/img/15721220395/1796414c2be94a94b7e6ca2421a55285.png',
            'url': 'https://www.bunnings.com.au/our-range/smart-home',
            'alt': 'smart home'
        },
        'HIRE SHOP': {
            'description': 'Hire Shop',
            'img': '//cdn.optimizely.com/img/15721220395/62bce3bb94a04df0b67e91135eb7e248.png',
            'url': 'https://www.bunnings.com.au/our-range/hire-shop',
            'alt': 'hire shop'
        }
    };
  
    function getScreenWidth(){
        return window.innerWidth;
    }
  
    function waitingElements(){
        if(getScreenWidth() < 768) {
            return '#RefreshCarousel';
        } else {
            return '#RefreshHeader .header-navigation--lg.is-open';
        } 
    }
  
    function getCategories() {
        var categoriess = JSON.parse(window.localStorage.getItem('optimizely.categoryhistory'));
        var keys = Object.keys(categories);
      
        var description = [];
        var imgUrl = [];
        var url = [];
        var alt = [];
      
        Object.keys(categories).map(function(e) { 
            description.push(categories[e].description);
            imgUrl.push(categories[e].img);
            url.push(categories[e].url);
            alt.push(categories[e].alt);
        });
      
        var div = document.createElement('div');
        div.className = 'bun-product-section';
        div.id = 'bun-product';
      
        var continueText = document.createElement('p');
        continueText.className = 'bun-title';
        continueText.innerText = "Continue shopping:";
        div.appendChild(continueText);
      
        for(var i=0; i<categoriess.length; i++){
            for(var j=0; j<keys.length; j++){
            	if(categoriess[i] === keys[j]){
        			var product = document.createElement('div');
        			product.className = 'bun-product';
                  
                    var img = document.createElement('img');
        			img.className = 'bun-image';
                    img.src = imgUrl[j];
                    img.alt = alt[j];
                    product.appendChild(img);
                  
                    var paragraph = document.createElement('a');
        			paragraph.className = 'product-desc';
                    paragraph.innerText = keys[j];
                    paragraph.href = url[j];
                    product.appendChild(paragraph);
                  
                    div.appendChild(product);
                }
            }
        }
        console.log(div);
        var demoDiv = document.querySelector('#RefreshHeader .header-navigation-level--lg_content-title');
        demoDiv.after(div);
        
        return categoriess;
    }

    function observeNav() {
        var targetNode = document.querySelector('nav.header-navigation--lg');
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        var callback = function(mutationsList, observer) {
            if (document.querySelector('nav.header-navigation--lg').classList.contains('is-open')) {
          		  var categories = getCategories();
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    function observeHeader() {
        var targetNode = document.getElementsByClassName('header-store-information_title_text')[0];
        var config = { characterData: false, attributes: false, childList: true, subtree: false };
        var callback = function(mutationsList, observer) {
            var storeName = targetNode.innerText;
            document.getElementById('cc_banner_store').innerText = storeName;
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
  
  	function openChangeStore() {
        window.scrollTo(0, 0);
        var storeSelector = document.getElementsByClassName('header_top-trigger')[0];
        if (typeof(storeSelector) === 'undefined' || storeSelector === null || storeSelector.offsetParent === null) {
          storeSelector = document.getElementsByClassName('header-store-locator_trigger_link')[0];
        }
        storeSelector.click();
    }
    
    utils
        .waitForElement('nav.header-navigation--lg')
        .then(function(){
            observeNav();
        });

  })(window, window.optimizely.get('utils'));