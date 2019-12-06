(function(window, utils) {
    var categories = {
        'POWER TOOLS': {
            'img': '/e11b562ae95949af85c02827f9c4d03d.jpg',
            'mobileimg' : '/d3bf1b6689ca4a6eb96f1c93b39322ea.jpg',
            'url': '/tools/power-tools'
        },
        'HAND TOOLS': {
            'img': '/1cfb53d5446c4ea1bdbae07cb82d364e.jpg',
            'mobileimg' : '/04e6206a7b514457af48a63d2b7aa926.jpg',
            'url': '/tools/hand-tools'
        },
        'TOOL ACCESSORIES': {
            'img': '/75599c2c987d451dabcc3f0c1447f7d8.jpg',
            'mobileimg' : '/b6750c95aa334efabcec7ec72e426763.jpg',
            'url': '/tools/tool-accessories'
        },
        'WELDING & SOLDERING IRONS': {
            'img': '/bc1836a4bc4441a79bc1d36329795a38.jpg',
            'mobileimg' : '/fc5c9ff30ea246e7a3b95bf674d4862b.jpg',
            'url': '/tools/welding-soldering'
        },
        'SAFETY & WORKWEAR': {
            'img': '/fa430df21003443bad29fa46e69cbc25.jpg',
            'mobileimg' : '/82b91dcf244d497bb2f2570c7e6f5847.jpg',
            'url': '/tools/safety-equipment-workwear'
        },
        'AUTOMOTIVE TOOLS': {
            'img': '/2151858045c348b1b8f8eae9be5877eb.jpg',
            'mobileimg' : '/c7c805dd64b54051b3fab5780109bae6.jpg',
            'url': '/tools/automotive'
        },
        'TOOL STORAGE': {
            'img': '/ec15bd17d30d4d65afa83ad6c5c32eb2.jpg',
            'mobileimg' : '/9016333431e145df9d1a24cae807e838.jpg',
            'url': '/tools/storage'
        },
        'PLUMBING TOOLS': {
            'img': '/b1d5917515eb482d8d521c679942d7e1.jpg',
            'mobileimg' : '/c8fafbe461874911b2d67e637ebbb6dc.jpg',
            'url': '/tools/plumbing'
        },
        'HEAVY LIFTING EQUIPMENT': {
            'img': '/e0e3fbf299374eb5a7258eef834e4538.jpg',
            'mobileimg' : '/5d5c8f29994c40e1b8842a6d00cd29f6.jpg',
            'url': '/tools/heavy-lifting-equipment'
        },
        'BUILDING & CONSTRUCTION': {
            'img': '/d9928962ab24441b9373ad018ea98a00.jpg',
            'mobileimg' : '/09a8dedee3ab45fba850e43073eb3264.jpg',
            'url': '/building-hardware/building-construction'
        },
        'DECKING': {
            'img': '/529652dc767841fcba08e25c3a38b8ae.jpg',
            'mobileimg' : '/a5ec28e79c3148519fcaa47901b950b2.jpg',
            'url': '/building-hardware/decking'
        },
        'LANDSCAPE': {
            'img': '/451ed4e567ca43818a02ba552679f986.jpg',
            'mobileimg' : '/404d4694572f4702ada22ea5bff34fa4.jpg',
            'url': '/building-hardware/landscape'
        },
        'FENCING': {
            'img': '/5b829bc69e85497abe8c40cbdb9ac5e2.jpg',
            'mobileimg' : '/842ac79d28c24b28ad6c95e1e4a1e53d.jpg',
            'url': '/building-hardware/fencing'
        },
        'TIMBER': {
            'img': '/80ade6ca058e41d3ad6600d2730598a6.jpg',
            'mobileimg' : '/e1e04867a2fb401680f26e5d552b6128.jpg',
            'url': '/building-hardware/timber'
        },
        'BUILDING BOARDS': {
            'img': '/615f89750e5e4b0c93170eb2a7d46d2e.jpg',
            'mobileimg' : '/5fea8dbf14024ed294ad61b0ff745a71.jpg',
            'url': '/building-hardware/building-boards'
        },
        'ROOFING': {
            'img': '/80e4a27fb4d94d7691bc338390f6d203.jpg',
            'mobileimg' : '/941f2051a2624977ab7386a5e4b682d9.jpg',
            'url': '/building-hardware/roofing'
        },
        'CEMENT & CONCRETING': {
            'img': '/2b1b89c163664113aba76eea5d1ae661.jpg',
            'mobileimg' : '/e78f8c5597d94267b398a52123f83d0e.jpg',
            'url': '/building-hardware/cement-concreting'
        },
        'STEEL & ALUMINIUM SECTIONS': {
            'img': '/97d3fe1db9d44a24a02735e6f4d302db.jpg',
            'mobileimg' : '/a7a87ece2c3b462b89e7b7fd175c5d3e.jpg',
            'url': '/building-hardware/steel-aluminium-sections'
        },
        'DOOR, WINDOW & GATE HARDWARE': {
            'img': '/ba7cfaa666fd46d8972f1d0a2bbfd2a9.jpg',
            'mobileimg' : '/46ee6b8a9df84a59955d6019f4646460.jpg',
            'url': '/building-hardware/door-window-gate-hardware'
        },
        'GENERAL HARDWARE': {
            'img': '/e8343467fd9b4e80aaaeb285196e03c7.jpg',
            'mobileimg' : '/1b4ac827e38440778b56f6ed9b85cd16.jpg',
            'url': '/building-hardware/general-hardware'
        },
        'FIXINGS & FASTENERS': {
            'img': '/7f20a33231eb4112b82e0b4106204942.jpg',
            'mobileimg' : '/e7f0498d0d99453a866f6c397d3f09ca.jpg',
            'url': '/building-hardware/fixings-fasteners'
        },
        'PLANT POTS, PLANTERS & BASKETS': {
            'img': '/5c0eefa2ba2c446aa91389499aaf872b.jpg',
            'mobileimg' : '/37eb8d4a39cb47aca2d757b5c5619e0f.jpg',
            'url': '/garden/pots'
        },      
        'GARDEN DECOR & FEATURES': {
            'img': '/c903088a060b4af7a76462e8776deca8.jpg',
            'mobileimg' : '/0fcd398158994e55aa6ab7b5aac2844f.jpg',
            'url': '/garden/garden-decor'
        },      
        'GARDEN SUPPLIES & MAINTENANCE': {
            'img': '/e642e50ef72b489384c92efd92730644.jpg',
            'mobileimg' : '/6237b849802b49d7b1eb6e22dacc4841.jpg',
            'url': '/garden/gardening'
        },      
        'GARDEN TOOLS': {
            'img': '/3213e4495f044faca60a7de52e68a93a.jpg',
            'mobileimg' : '/0356f972166a4397aba2bec9adef6017.jpg',
            'url': '/garden/garden-tools'
        },      
        'GARDEN & OUTDOOR STRUCTURES': {
            'img': '/dd0aae721f9b4d44bc274f19d378863a.jpg',
            'mobileimg' : '/d77446ea06914258b235123009036d6f.jpg',
            'url': '/garden/outdoor-structures'
        },      
        'LANDSCAPING SUPPLIES': {
            'img': '/6bc403a49a84481a9474c394c334e1bb.jpg',
            'mobileimg' : '/6f1a9ad318fc48a89ec4ea9e50b6ccce.jpg',
            'url': '/garden/landscaping'
        },      
        'PEST CONTROL': {
            'img': '/c351f9b0e2364ff09b8dbea15cafa123.jpg',
            'mobileimg' : '/637939d1d20b4effb7b33778934a4ec2.jpg',
            'url': '/garden/pest-control'
        },      
        'PLANTS': {
            'img': '/0156cf7fd1e841979d81f28761ff235d.jpg',
            'mobileimg' : '/b73b4a074ec9409aa20da0d0e43e0c7b.jpg',
            'url': '/garden/plants'
        },      
        'WATER SPRINKLERS & IRRIGATION SUPPLIES': {
            'img': '/93db3628b2234130ab5cfd8faac66e59.jpg',
            'mobileimg' : '/51ed2d7ce7584744bbbc79247bfc501f.jpg',
            'url': '/garden/watering-accessories'
        },      
        'TURF, GRASS & LAWN CARE': {
            'img': '/8c59e8ab23904bd0a5601c2afeba0901.jpg',
            'mobileimg' : '/a394e4e1b3c44932ac5951fa150cde30.jpg',
            'url': '/garden/lawn'
        },      
        'SEEDS & PROPAGATION': {
            'img': '/afdc563bd5fe403f9a306e67b4f3a052.jpg',
            'mobileimg' : '/df64d1d061e24cbe8377dfe755b68443.jpg',
            'url': '/garden/seeds-propagation'
        },      
        'GARDEN CLOTHING & SAFETY GEAR': {
            'img': '/9177c2f4600e4bfaa5aff46429bef232.jpg',
            'mobileimg' : '/4dcf7aef691b42a38b2a5610849bb1d6.jpg',
            'url': '/garden/garden-safety-equipment'
        },
        'BBQS': {
            'img': '/088b3d5305324946a444dd860bfb52b4.jpg',
            'mobileimg' : '/d96f577b78594693a58401cb691774e4.jpg',
            'url': '/outdoor-living/barbecue'
        },
        'OUTDOOR FURNITURE': {
            'img': '/cafb3f52045f40e0b1257527e570951c.jpg',
            'mobileimg' : '/ad945432342c405b86afffe9b030d72c.jpg',
            'url': '/outdoor-living/outdoor-furniture'
        },
        'OUTDOOR HEATERS': {
            'img': '/d5eb95cd20744a5eb4758d05c5310d99.jpg',
            'mobileimg' : '/138d9d9dbfcf4070bcd983484a82f309.jpg',
            'url': '/outdoor-living/outdoor-heating'
        },
        'OUTDOOR SHADE': {
            'img': '/0deb3113edbb41bc81bd4d703a1a193d.jpg',
            'mobileimg' : '/bc458357e13b4b5fb328c5e2bdf16ccb.jpg',
            'url': '/outdoor-living/outdoor-shade'
        },
        'SWIMMING POOLS & SPAS': {
            'img': '/4939e5eba8024cce809c3e8b93bc888c.jpg',
            'mobileimg' : '/84501dc15924497aa0aed9865aed6da4.jpg',
            'url': '/outdoor-living/swimming-pools-spa'
        },
        'OUTDOOR PLAY EQUIPMENT': {
            'img': '/882ccbd491fa4a5d83c26ecc43f04caa.jpg',
            'mobileimg' : '/d350602755f4460ba757f4fa3e82234f.jpg',
            'url': '/outdoor-living/outdoor-play-equipment'
        },
        'COOLERS, ICE BOXES & ESKIES': {
            'img': '/0ea7b60d05f94432a29c99fa7e0ed505.jpg',
            'mobileimg' : '/8080c640bc14484ba1c39878dd5f3ff2.jpg',
            'url': '/outdoor-living/coolers'
        },
        'SUNSCREEN & INSECT REPELLENTS': {
            'img': '/8a6dd3ef4d374dbfac98d46b7c3fc37c.jpg',
            'mobileimg' : '/1c49244049234184aa71aa9f33476863.jpg',
            'url': '/outdoor-living/insect-control'
        },
        'PICNICWARE & WATER STORAGE': {
            'img': '/4d05fdfa3ae14c658b7240fbffbb7544.jpg',
            'mobileimg' : '/d4df11070dce4168a3081af74feb5281.jpg',
            'url': '/outdoor-living/picnicware'
        },
        'KITCHEN INSPIRATION': {
            'img': '/f7b45b727cc842059ca6d897b897503c.jpg',
            'mobileimg' : '/29ac66dc86bd483997ff928c708efbeb.jpg',
            'url': '/kitchen'
        },
        'CABINETS & ACCESSORIES': {
            'img': '/3ccd7b5839724d059acb864fa63007b8.jpg',
            'mobileimg' : '/83299cf4cc464f5dadae161160d3cba8.jpg',
            'url': '/kitchen/cabinets-accessories'
        },
        'BENCHTOPS': {
            'img': '/b3f70b77f5664fc4804dd81c4e61dec0.jpg',
            'mobileimg' : '/263f80ce3f3744b28716c91ef2cfd2a4.jpg',
            'url': '/kitchen/benchtops'
        },
        'KITCHEN TAPS & SINKS': {
            'img': '/4a544a4cddfa4f3d828300be2691374c.jpg',
            'mobileimg' : '/89220a6bd5c94f83ae0ecafdf98dd43b.jpg',
            'url': '/kitchen/kitchen-taps-sinks'
        },
        'SPLASHBACKS': {
            'img': '/c1e9867714c14af4b3952feecb152d26.jpg',
            'mobileimg' : '/4b4714e62b5945439db13af5c406adeb.jpg',
            'url': '/kitchen/splashbacks'
        },
        'APPLIANCES': {
            'img': '/739f899fb3b24fbfa580d1fcbe167606.jpg',
            'mobileimg' : '/ed56f0903faa4ebca041388f1b7a5c81.jpg',
            'url': '/kitchen/appliances'
        },
        'BATHROOM INSPIRATION': {
            'img': '/18f3f3d9fc6645d58f757fd5aa550eef.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/bathroom-plumbing'
        },
        'BATHROOM': {
            'img': '/98f163badc7e4ab596eb068b0d899e16.jpg',
            'mobileimg' : '/ff0a47e69c0041039ec4fd3265bfd250.jpg',
            'url': '/bathroom-plumbing/bathroom'
        },
        'PLUMBING': {
            'img': '/bb27f3a2848844dd81a73f530afedec8.jpg',
            'mobileimg' : '/32c658ffdaae4a6abc3488efe2cceb33.jpg',
            'url': '/bathroom-plumbing/plumbing'
        },
        'INDOOR BLINDS': {
            'img': '/2b7b755ba58e42d99bc6b545fc7d7167.jpg',
            'mobileimg' : '/5deddbcc6c2642daa974c05e554b0da6.jpg',
            'url': '/curtains-blinds/indoor-blinds'
        },
        'OUTDOOR BLINDS': {
            'img': '/8a7d3c7351bb46918d747cb680253080.jpg',
            'mobileimg' : '/8825b9bf23fa48b29212e77a050428bc.jpg',
            'url': '/curtains-blinds/outdoor-blinds'
        },
        'CURTAINS & ACCESSORIES': {
            'img': '/5130962f44234a6d81bbd63949d8f666.jpg',
            'mobileimg' : '/b088412faa654210a9edf1d5e2f3ec91.jpg',
            'url': '/curtains-blinds/curtain-accessories'
        },
        'CUSTOM BLINDS': {
            'img': '/d0c10a4a72544e918dd512f4e509823b.jpg',
            'mobileimg' : '/1e3ea61134914143956d5093e87e0edc.jpg',
            'url': '/curtains-blinds/custom-made-blinds'
        },
        'OFFICE DESKS & TABLES': {
            'img': '/3fe36def8c7e434abe8b163bbbdf8c58.jpg',
            'mobileimg' : '/4de1135a2ed347da872bdb03b68dda2d.jpg',
            'url': '/office-furniture/desks-tables'
        },
        'OFFICE CHAIRS': {
            'img': '/ec45f55de2294c7e9cb5f181a2fc7b16.jpg',
            'mobileimg' : '/4739a9f08a4d462eb639561af65b8805.jpg',
            'url': '/office-furniture/office-chairs'
        },
        'OFFICE STORAGE': {
            'img': '/c034b4cfb1e4409c951fa9ab647b7fc3.jpg',
            'mobileimg' : '/0da4dc3d114e47f8873896c9576fdaee.jpg',
            'url': '/office-furniture/office-storage'
        },
        'OFFICE ACCESSORIES': {
            'img': '/49fb573696cc4416a82d6f2738bc6bac.jpg',
            'mobileimg' : '/917f550c82d84054bf4802dc40b0171f.jpg',
            'url': '/office-furniture/office-accessories'
        },
        'OFFICE POWER & LIGHTING': {
            'img': '/f9abc938fd4d4523b0bb81b88d15037b.jpg',
            'mobileimg' : '/c49ccc957ad046d98d3c6b8b74d332fe.jpg',
            'url': '/office-furniture/office-power-and-lighting'
        },
        'PAINT': {
            'img': '/55e79b2aae25432793bebfb89009c2a0.jpg',
            'mobileimg' : '/5696c022d8f344eeba6ad480409f443a.jpg',
            'url': '/paint-decorating/paint'
        },
        'PAINT ACCESSORIES': {
            'img': '/0687a754488e46e7a148e7102197a95d.jpg',
            'mobileimg' : '/e1e2a7c5686842a3ad87509395d38be2.jpg',
            'url': '/paint-decorating/paint-accessories'
        },
        'FLOORING': {
            'img': '/03882129ecf34d069b1a05809daf4a9a.jpg',
            'mobileimg' : '/f9dcb28ad6ff44c6a826464f34a5c8d2.jpg',
            'url': '/paint-decorating/flooring'
        },
        'WALLPAPER': {
            'img': '/9e121b47e24b420cb1903d82b241e7f2.jpg',
            'mobileimg' : '/9cbfb33167e44844869bbcec1b45b7ed.jpg',
            'url': '/paint-decorating/wallpaper'
        },
        'CLEANING': {
            'img': '/3df6d2ee953b4e3e9d7c80f7ada3bed9.jpg',
            'mobileimg' : '/ef42709b4fa54cd3a0134b78c7226efc.jpg',
            'url': '/storage-cleaning/cleaning'
        },
        'LAUNDRY': {
            'img': '/80c01ad73e224f908257529d100b24b8.jpg',
            'mobileimg' : '/ed5553144ae148ccbe1562bd2ebdcc3a.jpg',
            'url': '/storage-cleaning/laundry'
        },
        'STORAGE': {
            'img': '/6972f3042b2e42649d330f34d0d98429.jpg',
            'mobileimg' : '/e0a1616645dd4a56a14ab362356acfbc.jpg',
            'url': '/storage-cleaning/storage'
        },
        'ELECTRICAL': {
            'img': '/2092e091b1f34097913d62deecc1e98d.jpg',
            'mobileimg' : '/d0303591ff3d4603a3fc5b401dd55904.jpg',
            'url': '/lighting-electrical/electrical'
        },
        'LIGHTING': {
            'img': '/be8fe3648f18401fa2d8f785bdafc9b4.jpg',
            'mobileimg' : '/71f596af91364f748f289a2b7891ee33.jpg',
            'url': '/lighting-electrical/lighting'
        },
        'HEATERS': {
            'img': '/a46dd037ff9347a59f5c962052640d69.jpg',
            'mobileimg' : '/75c6920a31714e8298030226dc1d0dbb.jpg',
            'url': '/lighting-electrical/heaters'
        },
        'COOLING': {
            'img': '/2f8a238c64e14c12a89ae5781f4a1d57.jpg',
            'mobileimg' : '/6b35d642027c4610ae2de34fe40606db.jpg',
            'url': '/lighting-electrical/cooling'
        },
        'SMART HOME ASSISTANTS': {
            'img': '/722d10f9dab84b4a8edd59a7004a1521.jpg',
            'mobileimg' : '/9babe290f23f4051b4d93af884ab3fbb.jpg',
            'url': '/smart-home/smart-home-assistants'
        },
        'SMART HOME SECURITY': {
            'img': '/d0b40c135aac47668d247cef97a72142.jpg',
            'mobileimg' : '/b5de14eb6d8b4d72b7100203beefcd36.jpg',
            'url': '/smart-home/smart-home-security'
        },
        'SMART LIGHTING & POWER': {
            'img': '/591383134d394131bfa2117246cf9143.jpg',
            'mobileimg' : '/b341e0f65d854ac08717e4a89ec5491a.jpg',
            'url': '/smart-home/smart-lighting-power'
        },
        'ROUTERS & MODEMS': {
            'img': '/26898e0d2ac44564be4cb9d6507703bd.jpg',
            'mobileimg' : '/139725c444f146fea8f3672724d6d715.jpg',
            'url': '/smart-home/routers-modems'
        },
        'CARPET CLEANING EQUIPMENT': {
            'img': '/3562b62951184312a1a0c5a76c53f740.jpg',
            'mobileimg' : '/8c5d6be0ffeb4e0bb0421392f16fc55c.jpg',
            'url': '/hire-shop/carpet-cleaning-equipment'
        },
        'FLOOR SANDING EQUIPMENT': {
            'img': '/fcc202db6b5c4af0b83e4037e6734aab.jpg',
            'mobileimg' : '/ab915a65b4ef489981966494487a32f7.jpg',
            'url': '/hire-shop/floor-sanding-equipment'
        },
        'GENERAL HIRE EQUIPMENT': {
            'img': '/0f78fc0768f74bd7869df189ba7cd7a0.jpg',
            'mobileimg' : '/9075b43c1d2245159c495733505fdd3b.jpg',
            'url': '/hire-shop/general-hire-equipment'
        },
        'TRAILER AND VEHICLE HIRE': {
            'img': '/d8394d277ab34053bdb466b367341eb6.jpg',
            'mobileimg' : '/887ad48e5d1c4147bfc45df07b29877e.jpg',
            'url': '/hire-shop/trailer-and-vehicle-hire'
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
            paragraph.innerHTML = '<span>' + categoryName.secondarycategory.charAt(0).toUpperCase() + categoryName.secondarycategory.substr(1).toLowerCase() + '</span>';
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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