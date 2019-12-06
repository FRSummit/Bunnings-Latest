(function(window, utils) {
    var categories = {
        'POWER TOOLS': {
            'mobileimg' : '/d3bf1b6689ca4a6eb96f1c93b39322ea.jpg',
            'url': '/tools/power-tools'
        },
        'HAND TOOLS': {
            'mobileimg' : '/04e6206a7b514457af48a63d2b7aa926.jpg',
            'url': '/tools/hand-tools'
        },
        'TOOL ACCESSORIES': {
            'mobileimg' : '/b6750c95aa334efabcec7ec72e426763.jpg',
            'url': '/tools/tool-accessories'
        },
        'WELDING & SOLDERING IRONS': {
            'mobileimg' : '/fc5c9ff30ea246e7a3b95bf674d4862b.jpg',
            'url': '/tools/welding-soldering'
        },
        'SAFETY & WORKWEAR': {
            'mobileimg' : '/82b91dcf244d497bb2f2570c7e6f5847.jpg',
            'url': '/tools/safety-equipment-workwear'
        },
        'AUTOMOTIVE TOOLS': {
            'mobileimg' : '/c7c805dd64b54051b3fab5780109bae6.jpg',
            'url': '/tools/automotive'
        },
        'TOOL STORAGE': {
            'mobileimg' : '/9016333431e145df9d1a24cae807e838.jpg',
            'url': '/tools/storage'
        },
        'PLUMBING TOOLS': {
            'mobileimg' : '/c8fafbe461874911b2d67e637ebbb6dc.jpg',
            'url': '/tools/plumbing'
        },
        'HEAVY LIFTING EQUIPMENT': {
            'mobileimg' : '/5d5c8f29994c40e1b8842a6d00cd29f6.jpg',
            'url': '/tools/heavy-lifting-equipment'
        },
        'BUILDING & CONSTRUCTION': {
            'mobileimg' : '/09a8dedee3ab45fba850e43073eb3264.jpg',
            'url': '/building-hardware/building-construction'
        },
        'DECKING': {
            'mobileimg' : '/a5ec28e79c3148519fcaa47901b950b2.jpg',
            'url': '/building-hardware/decking'
        },
        'LANDSCAPE': {
            'mobileimg' : '/404d4694572f4702ada22ea5bff34fa4.jpg',
            'url': '/building-hardware/landscape'
        },
        'FENCING': {
            'mobileimg' : '/842ac79d28c24b28ad6c95e1e4a1e53d.jpg',
            'url': '/building-hardware/fencing'
        },
        'TIMBER': {
            'mobileimg' : '/e1e04867a2fb401680f26e5d552b6128.jpg',
            'url': '/building-hardware/timber'
        },
        'BUILDING BOARDS': {
            'mobileimg' : '/5fea8dbf14024ed294ad61b0ff745a71.jpg',
            'url': '/building-hardware/building-boards'
        },
        'ROOFING': {
            'mobileimg' : '/941f2051a2624977ab7386a5e4b682d9.jpg',
            'url': '/building-hardware/roofing'
        },
        'CEMENT & CONCRETING': {
            'mobileimg' : '/e78f8c5597d94267b398a52123f83d0e.jpg',
            'url': '/building-hardware/cement-concreting'
        },
        'STEEL & ALUMINIUM SECTIONS': {
            'mobileimg' : '/a7a87ece2c3b462b89e7b7fd175c5d3e.jpg',
            'url': '/building-hardware/steel-aluminium-sections'
        },
        'DOOR, WINDOW & GATE HARDWARE': {
            'mobileimg' : '/46ee6b8a9df84a59955d6019f4646460.jpg',
            'url': '/building-hardware/door-window-gate-hardware'
        },
        'GENERAL HARDWARE': {
            'mobileimg' : '/1b4ac827e38440778b56f6ed9b85cd16.jpg',
            'url': '/building-hardware/general-hardware'
        },
        'FIXINGS & FASTENERS': {
            'mobileimg' : '/e7f0498d0d99453a866f6c397d3f09ca.jpg',
            'url': '/building-hardware/fixings-fasteners'
        },
        'PLANT POTS, PLANTERS & BASKETS': {
            'mobileimg' : '/37eb8d4a39cb47aca2d757b5c5619e0f.jpg',
            'url': '/garden/pots'
        },      
        'GARDEN DECOR & FEATURES': {
            'mobileimg' : '/0fcd398158994e55aa6ab7b5aac2844f.jpg',
            'url': '/garden/garden-decor'
        },      
        'GARDEN SUPPLIES & MAINTENANCE': {
            'mobileimg' : '/6237b849802b49d7b1eb6e22dacc4841.jpg',
            'url': '/garden/gardening'
        },      
        'GARDEN TOOLS': {
            'mobileimg' : '/0356f972166a4397aba2bec9adef6017.jpg',
            'url': '/garden/garden-tools'
        },      
        'GARDEN & OUTDOOR STRUCTURES': {
            'mobileimg' : '/d77446ea06914258b235123009036d6f.jpg',
            'url': '/garden/outdoor-structures'
        },      
        'LANDSCAPING SUPPLIES': {
            'mobileimg' : '/6f1a9ad318fc48a89ec4ea9e50b6ccce.jpg',
            'url': '/garden/landscaping'
        },      
        'PEST CONTROL': {
            'mobileimg' : '/637939d1d20b4effb7b33778934a4ec2.jpg',
            'url': '/garden/pest-control'
        },      
        'PLANTS': {
            'mobileimg' : '/b73b4a074ec9409aa20da0d0e43e0c7b.jpg',
            'url': '/garden/plants'
        },      
        'WATER SPRINKLERS & IRRIGATION SUPPLIES': {
            'mobileimg' : '/51ed2d7ce7584744bbbc79247bfc501f.jpg',
            'url': '/garden/watering-accessories'
        },      
        'TURF, GRASS & LAWN CARE': {
            'mobileimg' : '/a394e4e1b3c44932ac5951fa150cde30.jpg',
            'url': '/garden/lawn'
        },      
        'SEEDS & PROPAGATION': {
            'mobileimg' : '/df64d1d061e24cbe8377dfe755b68443.jpg',
            'url': '/garden/seeds-propagation'
        },      
        'GARDEN CLOTHING & SAFETY GEAR': {
            'mobileimg' : '/4dcf7aef691b42a38b2a5610849bb1d6.jpg',
            'url': '/garden/garden-safety-equipment'
        },
        'BBQS': {
            'mobileimg' : '/d96f577b78594693a58401cb691774e4.jpg',
            'url': '/outdoor-living/barbecue'
        },
        'OUTDOOR FURNITURE': {
            'img': '/cafb3f52045f40e0b1257527e570951c.jpg',
            'mobileimg' : '/ad945432342c405b86afffe9b030d72c.jpg',
            'url': '/outdoor-living/outdoor-furniture'
        },
        'OUTDOOR HEATERS': {
            'mobileimg' : '/138d9d9dbfcf4070bcd983484a82f309.jpg',
            'url': '/outdoor-living/outdoor-heating'
        },
        'OUTDOOR SHADE': {
            'mobileimg' : '/bc458357e13b4b5fb328c5e2bdf16ccb.jpg',
            'url': '/outdoor-living/outdoor-shade'
        },
        'SWIMMING POOLS & SPAS': {
            'mobileimg' : '/84501dc15924497aa0aed9865aed6da4.jpg',
            'url': '/outdoor-living/swimming-pools-spa'
        },
        'OUTDOOR PLAY EQUIPMENT': {
            'mobileimg' : '/d350602755f4460ba757f4fa3e82234f.jpg',
            'url': '/outdoor-living/outdoor-play-equipment'
        },
        'COOLERS, ICE BOXES & ESKIES': {
            'mobileimg' : '/8080c640bc14484ba1c39878dd5f3ff2.jpg',
            'url': '/outdoor-living/coolers'
        },
        'SUNSCREEN & INSECT REPELLENTS': {
            'mobileimg' : '/1c49244049234184aa71aa9f33476863.jpg',
            'url': '/outdoor-living/insect-control'
        },
        'PICNICWARE & WATER STORAGE': {
            'mobileimg' : '/d4df11070dce4168a3081af74feb5281.jpg',
            'url': '/outdoor-living/picnicware'
        },
        'KITCHEN INSPIRATION': {
            'mobileimg' : '/29ac66dc86bd483997ff928c708efbeb.jpg',
            'url': '/kitchen'
        },
        'CABINETS & ACCESSORIES': {
            'mobileimg' : '/83299cf4cc464f5dadae161160d3cba8.jpg',
            'url': '/kitchen/cabinets-accessories'
        },
        'BENCHTOPS': {
            'mobileimg' : '/263f80ce3f3744b28716c91ef2cfd2a4.jpg',
            'url': '/kitchen/benchtops'
        },
        'KITCHEN TAPS & SINKS': {
            'mobileimg' : '/89220a6bd5c94f83ae0ecafdf98dd43b.jpg',
            'url': '/kitchen/kitchen-taps-sinks'
        },
        'SPLASHBACKS': {
            'mobileimg' : '/4b4714e62b5945439db13af5c406adeb.jpg',
            'url': '/kitchen/splashbacks'
        },
        'APPLIANCES': {
            'mobileimg' : '/ed56f0903faa4ebca041388f1b7a5c81.jpg',
            'url': '/kitchen/appliances'
        },
        'BATHROOM INSPIRATION': {
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing'
        },
        'BATHROOM': {
            'mobileimg' : '/ff0a47e69c0041039ec4fd3265bfd250.jpg',
            'url': '/bathroom-plumbing/bathroom'
        },
        'PLUMBING': {
            'mobileimg' : '/32c658ffdaae4a6abc3488efe2cceb33.jpg',
            'url': '/bathroom-plumbing/plumbing'
        },
        'INDOOR BLINDS': {
            'mobileimg' : '/5deddbcc6c2642daa974c05e554b0da6.jpg',
            'url': '/curtains-blinds/indoor-blinds'
        },
        'OUTDOOR BLINDS': {
            'mobileimg' : '/8825b9bf23fa48b29212e77a050428bc.jpg',
            'url': '/curtains-blinds/outdoor-blinds'
        },
        'CURTAINS & ACCESSORIES': {
            'mobileimg' : '/b088412faa654210a9edf1d5e2f3ec91.jpg',
            'url': '/curtains-blinds/curtain-accessories'
        },
        'CUSTOM BLINDS': {
            'mobileimg' : '/1e3ea61134914143956d5093e87e0edc.jpg',
            'url': '/curtains-blinds/custom-made-blinds'
        },
        'OFFICE DESKS & TABLES': {
            'mobileimg' : '/4de1135a2ed347da872bdb03b68dda2d.jpg',
            'url': '/office-furniture/desks-tables'
        },
        'OFFICE CHAIRS': {
            'mobileimg' : '/4739a9f08a4d462eb639561af65b8805.jpg',
            'url': '/office-furniture/office-chairs'
        },
        'OFFICE STORAGE': {
            'mobileimg' : '/0da4dc3d114e47f8873896c9576fdaee.jpg',
            'url': '/office-furniture/office-storage'
        },
        'OFFICE ACCESSORIES': {
            'mobileimg' : '/917f550c82d84054bf4802dc40b0171f.jpg',
            'url': '/office-furniture/office-accessories'
        },
        'OFFICE POWER & LIGHTING': {
            'mobileimg' : '/c49ccc957ad046d98d3c6b8b74d332fe.jpg',
            'url': '/office-furniture/office-power-and-lighting'
        },
        'PAINT': {
            'mobileimg' : '/5696c022d8f344eeba6ad480409f443a.jpg',
            'url': '/paint-decorating/paint'
        },
        'PAINT ACCESSORIES': {
            'mobileimg' : '/e1e2a7c5686842a3ad87509395d38be2.jpg',
            'url': '/paint-decorating/paint-accessories'
        },
        'FLOORING': {
            'mobileimg' : '/f9dcb28ad6ff44c6a826464f34a5c8d2.jpg',
            'url': '/paint-decorating/flooring'
        },
        'WALLPAPER': {
            'mobileimg' : '/9cbfb33167e44844869bbcec1b45b7ed.jpg',
            'url': '/paint-decorating/wallpaper'
        },
        'CLEANING': {
            'mobileimg' : '/ef42709b4fa54cd3a0134b78c7226efc.jpg',
            'url': '/storage-cleaning/cleaning'
        },
        'LAUNDRY': {
            'mobileimg' : '/ed5553144ae148ccbe1562bd2ebdcc3a.jpg',
            'url': '/storage-cleaning/laundry'
        },
        'STORAGE': {
            'mobileimg' : '/e0a1616645dd4a56a14ab362356acfbc.jpg',
            'url': '/storage-cleaning/storage'
        },
        'ELECTRICAL': {
            'mobileimg' : '/d0303591ff3d4603a3fc5b401dd55904.jpg',
            'url': '/lighting-electrical/electrical'
        },
        'LIGHTING': {
            'mobileimg' : '/71f596af91364f748f289a2b7891ee33.jpg',
            'url': '/lighting-electrical/lighting'
        },
        'HEATERS': {
            'mobileimg' : '/75c6920a31714e8298030226dc1d0dbb.jpg',
            'url': '/lighting-electrical/heaters'
        },
        'COOLING': {
            'mobileimg' : '/6b35d642027c4610ae2de34fe40606db.jpg',
            'url': '/lighting-electrical/cooling'
        },
        'SMART HOME ASSISTANTS': {
            'mobileimg' : '/9babe290f23f4051b4d93af884ab3fbb.jpg',
            'url': '/smart-home/smart-home-assistants'
        },
        'SMART HOME SECURITY': {
            'mobileimg' : '/b5de14eb6d8b4d72b7100203beefcd36.jpg',
            'url': '/smart-home/smart-home-security'
        },
        'SMART LIGHTING & POWER': {
            'mobileimg' : '/b341e0f65d854ac08717e4a89ec5491a.jpg',
            'url': '/smart-home/smart-lighting-power'
        },
        'ROUTERS & MODEMS': {
            'mobileimg' : '/139725c444f146fea8f3672724d6d715.jpg',
            'url': '/smart-home/routers-modems'
        },
        'CARPET CLEANING EQUIPMENT': {
            'mobileimg' : '/8c5d6be0ffeb4e0bb0421392f16fc55c.jpg',
            'url': '/hire-shop/carpet-cleaning-equipment'
        },
        'FLOOR SANDING EQUIPMENT': {
            'mobileimg' : '/ab915a65b4ef489981966494487a32f7.jpg',
            'url': '/hire-shop/floor-sanding-equipment'
        },
        'GENERAL HIRE EQUIPMENT': {
            'mobileimg' : '/9075b43c1d2245159c495733505fdd3b.jpg',
            'url': '/hire-shop/general-hire-equipment'
        },
        'TRAILER AND VEHICLE HIRE': {
            'mobileimg' : '/887ad48e5d1c4147bfc45df07b29877e.jpg',
            'url': '/hire-shop/trailer-and-vehicle-hire'
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
        continueText.innerText = "Continue shopping:";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        categoryHistory.slice(0, 4).forEach(function(categoryName) {
          
            if((categoryName.secondarycategory) == 'RETREAT BATHROOM'){
                categoryName.secondarycategory = 'BATHROOM INSPIRATION';
            }
            var categoryDetails = categories[categoryName.secondarycategory];

            var product = document.createElement('div');
            product.className = 'product-img';
            
            var masterUrl = 'https://www.bunnings.com.au/our-range';
            var link = document.createElement('a');
            link.href = masterUrl + categoryDetails.url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.src = masterImgUrl + categoryDetails.mobileimg;
            img.alt = categoryName.secondarycategory.toLowerCase();
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            var paraDesc = categoryName.secondarycategory.charAt(0).toUpperCase() + categoryName.secondarycategory.substr(1).toLowerCase();
            if(categoryName.secondarycategory == 'BBQS'){
              	paraDesc = 'BBQs';
            }
            paragraph.innerHTML = '<span>' + paraDesc + '</span>';
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