(function(window, utils) {
    var categories = {
        'POWER TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/d3bf1b6689ca4a6eb96f1c93b39322ea.jpg',
            'url': '/tools/power-tools'
        },
        'HAND TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/04e6206a7b514457af48a63d2b7aa926.jpg',
            'url': '/tools/hand-tools'
        },
        'TOOL ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/b6750c95aa334efabcec7ec72e426763.jpg',
            'url': '/tools/tool-accessories'
        },
        'WELDING & SOLDERING IRONS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/fc5c9ff30ea246e7a3b95bf674d4862b.jpg',
            'url': '/tools/welding-soldering'
        },
        'SAFETY & WORKWEAR': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/82b91dcf244d497bb2f2570c7e6f5847.jpg',
            'url': '/tools/safety-equipment-workwear'
        },
        'AUTOMOTIVE TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/c7c805dd64b54051b3fab5780109bae6.jpg',
            'url': '/tools/automotive'
        },
        'TOOL STORAGE': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/9016333431e145df9d1a24cae807e838.jpg',
            'url': '/tools/storage'
        },
        'PLUMBING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/c8fafbe461874911b2d67e637ebbb6dc.jpg',
            'url': '/tools/plumbing'
        },
        'HEAVY LIFTING EQUIPMENT': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5d5c8f29994c40e1b8842a6d00cd29f6.jpg',
            'url': '/tools/heavy-lifting-equipment'
        },
        'BUILDING & CONSTRUCTION': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/09a8dedee3ab45fba850e43073eb3264.jpg',
            'url': '/building-hardware/building-construction'
        },
        'DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/a5ec28e79c3148519fcaa47901b950b2.jpg',
            'url': '/building-hardware/decking'
        },
        'LANDSCAPE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/404d4694572f4702ada22ea5bff34fa4.jpg',
            'url': '/building-hardware/landscape'
        },
        'FENCING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/842ac79d28c24b28ad6c95e1e4a1e53d.jpg',
            'url': '/building-hardware/fencing'
        },
        'TIMBER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e1e04867a2fb401680f26e5d552b6128.jpg',
            'url': '/building-hardware/timber'
        },
        'BUILDING BOARDS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/5fea8dbf14024ed294ad61b0ff745a71.jpg',
            'url': '/building-hardware/building-boards'
        },
        'ROOFING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/941f2051a2624977ab7386a5e4b682d9.jpg',
            'url': '/building-hardware/roofing'
        },
        'CEMENT & CONCRETING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e78f8c5597d94267b398a52123f83d0e.jpg',
            'url': '/building-hardware/cement-concreting'
        },
        'STEEL & ALUMINIUM SECTIONS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/a7a87ece2c3b462b89e7b7fd175c5d3e.jpg',
            'url': '/building-hardware/steel-aluminium-sections'
        },
        'DOOR, WINDOW & GATE HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/46ee6b8a9df84a59955d6019f4646460.jpg',
            'url': '/building-hardware/door-window-gate-hardware'
        },
        'GENERAL HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1b4ac827e38440778b56f6ed9b85cd16.jpg',
            'url': '/building-hardware/general-hardware'
        },
        'FIXINGS & FASTENERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e7f0498d0d99453a866f6c397d3f09ca.jpg',
            'url': '/building-hardware/fixings-fasteners'
        },
        'PLANT POTS, PLANTERS & BASKETS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/37eb8d4a39cb47aca2d757b5c5619e0f.jpg',
            'url': '/garden/pots'
        },      
        'GARDEN DECOR & FEATURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/0fcd398158994e55aa6ab7b5aac2844f.jpg',
            'url': '/garden/garden-decor'
        },      
        'GARDEN SUPPLIES & MAINTENANCE': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/6237b849802b49d7b1eb6e22dacc4841.jpg',
            'url': '/garden/gardening'
        },      
        'GARDEN TOOLS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/0356f972166a4397aba2bec9adef6017.jpg',
            'url': '/garden/garden-tools'
        },      
        'GARDEN & OUTDOOR STRUCTURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/d77446ea06914258b235123009036d6f.jpg',
            'url': '/garden/outdoor-structures'
        },      
        'LANDSCAPING SUPPLIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/6f1a9ad318fc48a89ec4ea9e50b6ccce.jpg',
            'url': '/garden/landscaping'
        },      
        'PEST CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/637939d1d20b4effb7b33778934a4ec2.jpg',
            'url': '/garden/pest-control'
        },      
        'PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/b73b4a074ec9409aa20da0d0e43e0c7b.jpg',
            'url': '/garden/plants'
        },      
        'WATER SPRINKLERS & IRRIGATION SUPPLIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/51ed2d7ce7584744bbbc79247bfc501f.jpg',
            'url': '/garden/watering-accessories'
        },      
        'TURF, GRASS & LAWN CARE': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/a394e4e1b3c44932ac5951fa150cde30.jpg',
            'url': '/garden/lawn'
        },      
        'SEEDS & PROPAGATION': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/df64d1d061e24cbe8377dfe755b68443.jpg',
            'url': '/garden/seeds-propagation'
        },      
        'GARDEN CLOTHING & SAFETY GEAR': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/4dcf7aef691b42a38b2a5610849bb1d6.jpg',
            'url': '/garden/garden-safety-equipment'
        },
        'BBQS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/d96f577b78594693a58401cb691774e4.jpg',
            'url': '/outdoor-living/barbecue'
        },
        'OUTDOOR FURNITURE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/ad945432342c405b86afffe9b030d72c.jpg',
            'url': '/outdoor-living/outdoor-furniture'
        },
        'OUTDOOR HEATERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/138d9d9dbfcf4070bcd983484a82f309.jpg',
            'url': '/outdoor-living/outdoor-heating'
        },
        'OUTDOOR SHADE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/bc458357e13b4b5fb328c5e2bdf16ccb.jpg',
            'url': '/outdoor-living/outdoor-shade'
        },
        'SWIMMING POOLS & SPAS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/84501dc15924497aa0aed9865aed6da4.jpg',
            'url': '/outdoor-living/swimming-pools-spa'
        },
        'OUTDOOR PLAY EQUIPMENT': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/d350602755f4460ba757f4fa3e82234f.jpg',
            'url': '/outdoor-living/outdoor-play-equipment'
        },
        'COOLERS, ICE BOXES & ESKIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/8080c640bc14484ba1c39878dd5f3ff2.jpg',
            'url': '/outdoor-living/coolers'
        },
        'SUNSCREEN & INSECT REPELLENTS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/1c49244049234184aa71aa9f33476863.jpg',
            'url': '/outdoor-living/insect-control'
        },
        'PICNICWARE & WATER STORAGE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/d4df11070dce4168a3081af74feb5281.jpg',
            'url': '/outdoor-living/picnicware'
        },
        'KITCHEN INSPIRATION': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/kitchen'
        },
        'CABINETS & ACCESSORIES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/83299cf4cc464f5dadae161160d3cba8.jpg',
            'url': '/kitchen/cabinets-accessories'
        },
        'BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/263f80ce3f3744b28716c91ef2cfd2a4.jpg',
            'url': '/kitchen/benchtops'
        },
        'KITCHEN TAPS & SINKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/89220a6bd5c94f83ae0ecafdf98dd43b.jpg',
            'url': '/kitchen/kitchen-taps-sinks'
        },
        'SPLASHBACKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/4b4714e62b5945439db13af5c406adeb.jpg',
            'url': '/kitchen/splashbacks'
        },
        'APPLIANCES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ed56f0903faa4ebca041388f1b7a5c81.jpg',
            'url': '/kitchen/appliances'
        },
        'BATHROOM INSPIRATION': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing'
        },
        'BATHROOM': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/ff0a47e69c0041039ec4fd3265bfd250.jpg',
            'url': '/bathroom-plumbing/bathroom'
        },
        'PLUMBING': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/32c658ffdaae4a6abc3488efe2cceb33.jpg',
            'url': '/bathroom-plumbing/plumbing'
        },
        'INDOOR BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/5deddbcc6c2642daa974c05e554b0da6.jpg',
            'url': '/curtains-blinds/indoor-blinds'
        },
        'OUTDOOR BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/8825b9bf23fa48b29212e77a050428bc.jpg',
            'url': '/curtains-blinds/outdoor-blinds'
        },
        'CURTAINS & ACCESSORIES': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/b088412faa654210a9edf1d5e2f3ec91.jpg',
            'url': '/curtains-blinds/curtain-accessories'
        },
        'CUSTOM BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/1e3ea61134914143956d5093e87e0edc.jpg',
            'url': '/curtains-blinds/custom-made-blinds'
        },
        'OFFICE DESKS & TABLES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/4de1135a2ed347da872bdb03b68dda2d.jpg',
            'url': '/office-furniture/desks-tables'
        },
        'OFFICE CHAIRS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/4739a9f08a4d462eb639561af65b8805.jpg',
            'url': '/office-furniture/office-chairs'
        },
        'OFFICE STORAGE': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/0da4dc3d114e47f8873896c9576fdaee.jpg',
            'url': '/office-furniture/office-storage'
        },
        'OFFICE ACCESSORIES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/917f550c82d84054bf4802dc40b0171f.jpg',
            'url': '/office-furniture/office-accessories'
        },
        'OFFICE POWER & LIGHTING': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/c49ccc957ad046d98d3c6b8b74d332fe.jpg',
            'url': '/office-furniture/office-power-and-lighting'
        },
        'PAINT': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/5696c022d8f344eeba6ad480409f443a.jpg',
            'url': '/paint-decorating/paint'
        },
        'PAINT ACCESSORIES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/e1e2a7c5686842a3ad87509395d38be2.jpg',
            'url': '/paint-decorating/paint-accessories'
        },
        'FLOORING': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/f9dcb28ad6ff44c6a826464f34a5c8d2.jpg',
            'url': '/paint-decorating/flooring'
        },
        'WALLPAPER': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/9cbfb33167e44844869bbcec1b45b7ed.jpg',
            'url': '/paint-decorating/wallpaper'
        },
        'CLEANING': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/ef42709b4fa54cd3a0134b78c7226efc.jpg',
            'url': '/storage-cleaning/cleaning'
        },
        'LAUNDRY': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/ed5553144ae148ccbe1562bd2ebdcc3a.jpg',
            'url': '/storage-cleaning/laundry'
        },
        'STORAGE': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/e0a1616645dd4a56a14ab362356acfbc.jpg',
            'url': '/storage-cleaning/storage'
        },
        'ELECTRICAL': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/d0303591ff3d4603a3fc5b401dd55904.jpg',
            'url': '/lighting-electrical/electrical'
        },
        'LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/71f596af91364f748f289a2b7891ee33.jpg',
            'url': '/lighting-electrical/lighting'
        },
        'HEATERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/75c6920a31714e8298030226dc1d0dbb.jpg',
            'url': '/lighting-electrical/heaters'
        },
        'COOLING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/6b35d642027c4610ae2de34fe40606db.jpg',
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
  
  
  
  ---------------------------------------------------------
  
  
  
  .product_history_banner {
    background: #0d5257;
    width: 960px;
    margin: 24px auto;
    padding: 12px 0 8px;
}

.product_history_banner p {
    margin: 0;
}

.product_history_banner .main_title {
    font-family: futura-w01-heavy, Helvetica, Arial, sans-serif;
    font-size: 26px;
    line-height: normal;
    color: #feffff;
    margin-left: 25px;
}

.product_history_banner .img-section {
    margin-top: 12px;
}

.product_history_banner .product-img {
    width: 200px;
    display: inline-block;
    margin-left: 25px;
    background: #fff;
    border: 2px solid #fff;
}

.product_history_banner .product-img img {
    width: 100%;
    height: 76px;
}

.product_history_banner .product-img .mbl-img {
    display: none;
}

.product_history_banner .product-desc {
    color: #0d5257;
    font-weight: bold;
    padding: 3px 0 0;
}

.product_history_banner .product-desc span {
    margin-left: 9px;
}

.product_history_banner .shop_button_chevron {
    height: 14px;
    width: 22px;
    vertical-align: middle; 
    float: right;
    margin-top: 2px;
}

.product_history_banner .re-bottom-text {
    margin-top: 8px;
    margin-left: 25px;
}

.product_history_banner .save-time-text {
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    margin-right: 6px;
    color: #fff;
}

.product_history_banner .save-time-text a {
    color: #fff;
    font-size: 13px;
    font-weight: 900;
}

.product_history_banner .shop-online-text {
    display: inline-block;
    font-size: 12px;
    margin: 0;
    color: #fff;
}

@media (max-width: 560px) {
  .product_history_banner {
    width: 100%;
    padding: 12px 0 5px;
    margin-bottom: 0;
    margin-top: 12px;
  }
  
  .product_history_banner .main_title {
    margin-left: 12px;
    width: 60%;
  }
  
  .product_history_banner .img-section {
    width: 98%;
    margin-top: 0;
  }
  
  .product_history_banner .product-img {
    width: 46%;
    margin-left: 12px;
    margin-top: 12px;
  }
  
  .product_history_banner .product-img img {
    width: 56px;
    height: 58px;
    display: inline-block;
  }

  .product_history_banner .product-img .desktop-img {
      display: none;
  }

  .product_history_banner .product-img .mbl-img {
      display: inline-block;
  }
  
  .product_history_banner .product-desc {
    display: inline-block;
    width: 66%;
    vertical-align: middle;
    padding: 0;
    margin-left: 4px;
  }
  .product_history_banner .product-desc span {
    margin: 0;
  }
  
  .product_history_banner .re-bottom-text {
    margin-left: 12px;
    margin-top: 4px;
  }
  .product_history_banner .shop_button_chevron {
    width: 10px;
  }
}