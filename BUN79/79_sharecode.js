window.abtesting = window.abtesting || {};

window.abtesting.bun079 = {

    createV1Html : function (bannerDetails) {

        var div = document.createElement('div');
        div.className = 'product_history_wrapper';
        div.id = 'product_history_wrapper';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner';
        div.appendChild(divInner);
      
        var continueText = document.createElement('p');
        continueText.className = 'main_title';
        continueText.innerText = bannerDetails.title;
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        for (var i=0; i < bannerDetails.categories.length; i += 1) {
            var category = bannerDetails.categories[i];

            var product = document.createElement('div');
            product.className = 'product-img';

            var masterUrl = 'https://www.bunnings.com.au/our-range';
            var link = document.createElement('a');
            link.href = masterUrl + category.url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.src = masterImgUrl + category.mobileimg;
            img.alt = category.description;
            link.appendChild(img);

            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            if(category.description === 'Outdoor Structures' || category.description === 'Bathroom Tapware' || category.description === 'Cabinets & Accessories' || category.description === 'Kitchen Taps & Sinks' || category.description === 'Vanities & Mirrors'){
                paragraph.classList.add('short_pad');
            }
            paragraph.innerHTML = '<div><span class="category_title">' + category.description + '</span><span class="category_description">' + category.sub_description + '</span></div>';
            link.appendChild(paragraph);

            var arrowicon = document.createElement('div');
            arrowicon.className = 'product_arrow';
            arrowicon.innerHTML = '<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg>';
            link.appendChild(arrowicon);

            product.appendChild(link);
            divImages.appendChild(product);
        }

        return div;
    },
  
    addVariationClass1: function() {
        document.querySelector('.product_history_wrapper').classList.add('v1');
    },
  
    addVariationClass2: function() {
        document.querySelector('.product_history_wrapper').classList.add('v2');
    },
  
    addVariationClass3: function() {
        document.querySelector('.product_history_wrapper').classList.add('v3');
    },

    appendHtml : function(html) {
        var mobileDiv = document.querySelector('#responsivebody_0_TrackingPanelAlertBar');
        mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
    }

};