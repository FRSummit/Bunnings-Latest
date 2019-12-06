(function(window, utils) {
    var categories = {
        'DECKING': {
            'img': '/529652dc767841fcba08e25c3a38b8ae.jpg',
            'mobileimg' : '/a5ec28e79c3148519fcaa47901b950b2.jpg',
            'url': '/building-hardware/decking'
        },     
        'LANDSCAPING SUPPLIES': {
            'img': '/6bc403a49a84481a9474c394c334e1bb.jpg',
            'mobileimg' : '/6f1a9ad318fc48a89ec4ea9e50b6ccce.jpg',
            'url': '/garden/landscaping'
        },
        'OUTDOOR FURNITURE': {
            'img': '/cafb3f52045f40e0b1257527e570951c.jpg',
            'mobileimg' : '/ad945432342c405b86afffe9b030d72c.jpg',
            'url': '/outdoor-living/outdoor-furniture'
        }
    };
  
    /*function getCategoryHistory() {
        var categoryHistory = JSON.parse(window.localStorage.getItem('optimizely.secondarycategoryhistory'));
        return categoryHistory;
    }*/

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }

    function createDesign(categoryHistory) {
        
        console.log("Hi there");
        console.log(Object.keys(categories)[1]);

        var div = document.createElement('div');
        div.className = 'product_history_wrapper';
        div.id = 'product_history_wrapper';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner';
        div.appendChild(divInner);
      
        var continueText = document.createElement('p');
        continueText.className = 'main_title';
        continueText.innerText = "Perfect weather to get stuck into some outdoor projects this weekend";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        //categoryHistory.slice(0, 3).forEach(function(categoryName) {
        var categoryLength = Object.keys(categories).length;
        for(var i=0; i<categoryLength; i++){
            console.log(Object.keys(categories)[i]);
            var cat = Object.keys(categories)[i];
            console.log(categories[cat].url);

            var product = document.createElement('div');
            product.className = 'product-img';
            
            var masterUrl = 'https://www.bunnings.com.au/our-range';
            var link = document.createElement('a');
            link.href = masterUrl + categories[cat].url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.src = masterImgUrl + categories[cat].mobileimg;
            img.alt = cat.toLowerCase();
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            paragraph.innerHTML = '<span>' + cat.charAt(0).toUpperCase() + cat.substr(1).toLowerCase() + '</span>';
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        }
        //});
      
        var reBottomText = document.createElement('div');
        reBottomText.className = 're-bottom-text';
        reBottomText.innerHTML = '<p class="save-time-text">Explore our range<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></p>';
        divInner.appendChild(reBottomText);

        return div;
    }

    function appendHtml(html, device) {
        if (device == 'mobile') {
            var mobileDiv = document.querySelector('#responsivebody_0_TrackingPanelAlertBar');
            mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
        } else {
            var carousel = document.getElementById('RefreshCarousel');
            //carousel.parentElement.insertBefore(html, carousel.parentElement.childNodes[2]);
            carousel.appendChild(html, carousel);
        } 
    }
  
    function getDesign() {
        /*var categoryHistory = getCategoryHistory();
            if (categoryHistory === null) {
            return;
        }
        var html = createDesign(categoryHistory);*/
        var html = createDesign();
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