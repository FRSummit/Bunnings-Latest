(function(window, utils) {
    var categories = {
        'POWER TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/power-tools'
        },
        'HAND TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/hand-tools'
        },
        'TOOL ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/tool-accessories'
        },
        'WELDING & SOLDERING IRONS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/welding-soldering'
        },
        'SAFETY & WORKWEAR': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/safety-equipment-workwear'
        },
        'AUTOMOTIVE TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/automotive'
        },
        'TOOL STORAGE': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/storage'
        },
        'PLUMBING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/plumbing'
        },
        'HEAVY LIFTING EQUIPMENT': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/tools/heavy-lifting-equipment'
        },
        'BUILDING & CONSTRUCTION': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/building-construction'
        },
        'DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/decking'
        },
        'LANDSCAPE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/landscape'
        },
        'FENCING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/fencing'
        },
        'TIMBER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/timber'
        },
        'BUILDING BOARDS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/building-boards'
        },
        'ROOFING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/roofing'
        },
        'CEMENT & CONCRETING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/cement-concreting'
        },
        'STEEL & ALUMINIUM SECTIONS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/steel-aluminium-sections'
        },
        'DOOR, WINDOW & GATE HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/door-window-gate-hardware'
        },
        'GENERAL HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/general-hardware'
        },
        'FIXINGS & FASTENERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1841b0d4fd134e729732baa85479f68d.png',
            'url': '/building-hardware/fixings-fasteners'
        },
        'PLANT POTS, PLANTERS & BASKETS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/pots'
        },      
        'GARDEN DECOR & FEATURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/garden-decor'
        },      
        'GARDEN SUPPLIES & MAINTENANCE': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/gardening'
        },      
        'GARDEN TOOLS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/garden-tools'
        },      
        'GARDEN & OUTDOOR STRUCTURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/outdoor-structures'
        },      
        'LANDSCAPING SUPPLIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/landscaping'
        },      
        'PEST CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/pest-control'
        },      
        'PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/plants'
        },      
        'WATER SPRINKLERS & IRRIGATION SUPPLIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/watering-accessories'
        },      
        'TURF, GRASS & LAWN CARE': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/lawn'
        },      
        'SEEDS & PROPAGATION': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/seeds-propagation'
        },      
        'GARDEN CLOTHING & SAFETY GEAR': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/garden/garden-safety-equipment'
        },
        'BBQS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/barbecue'
        },
        'OUTDOOR FURNITURE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/outdoor-furniture'
        },
        'OUTDOOR HEATERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/outdoor-heating'
        },
        'OUTDOOR SHADE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/outdoor-shade'
        },
        'SWIMMING POOLS & SPAS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/swimming-pools-spa'
        },
        'OUTDOOR PLAY EQUIPMENT': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/outdoor-play-equipment'
        },
        'COOLERS, ICE BOXES & ESKIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/coolers'
        },
        'SUNSCREEN & INSECT REPELLENTS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/insect-control'
        },
        'PICNICWARE & WATER STORAGE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/outdoor-living/picnicware'
        },
        'KITCHEN INSPIRATION': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen'
        },
        'CABINETS & ACCESSORIES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen/cabinets-accessories'
        },
        'BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen/benchtops'
        },
        'KITCHEN TAPS & SINKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen/kitchen-taps-sinks'
        },
        'SPLASHBACKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen/splashbacks'
        },
        'APPLIANCES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen/appliances'
        },
        'BATHROOM INSPIRATION': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing'
        },
        'BATHROOM': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing/bathroom'
        },
        'PLUMBING': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing/plumbing'
        },
        'INDOOR BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/curtains-blinds/indoor-blinds'
        },
        'OUTDOOR BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/curtains-blinds/outdoor-blinds'
        },
        'CURTAINS & ACCESSORIES': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/curtains-blinds/curtain-accessories'
        },
        'CUSTOM BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/curtains-blinds/custom-made-blinds'
        },
        'OFFICE DESKS & TABLES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/office-furniture/desks-tables'
        },
        'OFFICE CHAIRS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/office-furniture/office-chairs'
        },
        'OFFICE STORAGE': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/office-furniture/office-storage'
        },
        'OFFICE ACCESSORIES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/office-furniture/office-accessories'
        },
        'OFFICE POWER & LIGHTING': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/office-furniture/office-power-and-lighting'
        },
        'PAINT': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/paint-decorating/paint'
        },
        'PAINT ACCESSORIES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/paint-decorating/paint-accessories'
        },
        'FLOORING': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/paint-decorating/flooring'
        },
        'WALLPAPER': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/paint-decorating/wallpaper'
        },
        'CLEANING': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/storage-cleaning/cleaning'
        },
        'LAUNDRY': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/storage-cleaning/laundry'
        },
        'STORAGE': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/storage-cleaning/storage'
        },
        'ELECTRICAL': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/lighting-electrical/electrical'
        },
        'LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/lighting-electrical/lighting'
        },
        'HEATERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/lighting-electrical/heaters'
        },
        'COOLING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/lighting-electrical/cooling'
        },
        'SMART HOME ASSISTANTS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/smart-home/smart-home-assistants'
        },
        'SMART HOME SECURITY': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/smart-home/smart-home-security'
        },
        'SMART LIGHTING & POWER': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/smart-home/smart-lighting-power'
        },
        'ROUTERS & MODEMS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/smart-home/routers-modems'
        },
        'CARPET CLEANING EQUIPMENT': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/hire-shop/carpet-cleaning-equipment'
        },
        'FLOOR SANDING EQUIPMENT': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/hire-shop/floor-sanding-equipment'
        },
        'GENERAL HIRE EQUIPMENT': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/hire-shop/general-hire-equipment'
        },
        'TRAILER AND VEHICLE HIRE': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/hire-shop/trailer-and-vehicle-hire'
        }
    };

    function getCategoryHistory() {
        var categoryHistory = JSON.parse(window.localStorage.getItem('optimizely.secondarycategoryhistory'));
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
        continueText.innerText = "Continue shopping where you left off";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        categoryHistory.slice(0, 4).forEach(function(categoryName) {

            var categoryDetails = categories[categoryName.secondarycategory];

            var product = document.createElement('div');
            product.className = 'product-img';
            
            var masterUrl = 'https://www.bunnings.com.au/our-range';
            var link = document.createElement('a');
            link.href = masterUrl + categoryDetails.url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.className = 'desktop-img';
            img.src = masterImgUrl + categoryDetails.img;
            img.alt = categoryName.secondarycategory.toLowerCase();
            link.appendChild(img);

            var masterMblImgUrl = '//cdn.optimizely.com/img/15721220395';
            var imgMbl = document.createElement('img');
            imgMbl.className = 'mbl-img';
            imgMbl.src = masterImgUrl + categoryDetails.mobileimg;
            imgMbl.alt = categoryName.secondarycategory.toLowerCase();
            link.appendChild(imgMbl);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            paragraph.innerHTML = '<span>' + categoryName.secondarycategory.charAt(0).toUpperCase() + categoryName.secondarycategory.substr(1).toLowerCase() + '<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span>';
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        });
      
        var reBottomText = document.createElement('div');
        reBottomText.className = 're-bottom-text';
        reBottomText.innerHTML = '<p class="save-time-text">Save time with <a href="https://www.bunnings.com.au/our-range">Click &amp; Collect</a></p><p class="shop-online-text">Shop online and collect in-store at a time that\'s convenient for you.</p>';
        divInner.appendChild(reBottomText);

        return div;
    }

    function appendHtml(html, device) {
        if (device == 'mobile') {
            var mobileDiv = document.querySelector('#responsivebody_0_TrackingPanelAlertBar');
            mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
        } else {
            var carousel = document.getElementById('RefreshCarousel');
            carousel.parentElement.insertBefore(html, carousel.parentElement.childNodes[2]);
        } 
    }

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }
  
    function getDesign() {
        var categoryHistory = getCategoryHistory();
            if (categoryHistory === null) {
            return;
        }
        var html = createDesign(categoryHistory);
        return html;
    }
  
    if (isMobile()) {
        utils
            .waitForElement('#RefreshCarousel')
            .then(function(){
                appendHtml(getDesign(), 'mobile');
            });
    } else {
        utils
            .waitForElement('nav.header-navigation--lg')
            .then(function(){
                appendHtml(getDesign(), 'desktop');
            });
    }


  })(window, window.optimizely.get('utils'));