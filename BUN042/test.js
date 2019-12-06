    function createDesign(categoryHistory) {

        var div = document.createElement('div');
        div.className = 'product_history_wrapper_bun42';
        div.id = 'product_history_wrapper';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner_bun42';
        div.appendChild(divInner);
      
        var continueText = document.createElement('p');
        continueText.className = 'main_title_bun42';
        continueText.innerText = "Continue shopping:";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section_bun42';
        divInner.appendChild(divImages);
      
        var flag = false;
        categoryHistory.slice(0, 4).forEach(function(categoryName) {
            if(categoryName.tertiarycategory.length > 26 && !isMobile()){
                flag = true;
            }
        });

        categoryHistory.slice(0, 4).forEach(function(categoryName) {

            var categoryDetails = categories[categoryName.tertiarycategory];

            var product = document.createElement('div');
            product.className = 'product-img_bun42';
            
            var masterUrl = 'https://www.bunnings.com.au';
            var link = document.createElement('a');
            link.href = masterUrl + categoryDetails.url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.src = masterImgUrl + categoryDetails.mobileimg;
            img.alt = categoryName.tertiarycategory.toLowerCase();
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc_bun42';
            var parts = categoryName.tertiarycategory.split(' ');
            var newDesc = '';
            for(var i=0; i<parts.length; i += 1){
                if(parts[i] === 'BBQ'){
                  newDesc += parts[i] + ' ';
                }else if(parts[i] === 'BBQS'){
                  parts[i] = 'BBQs';
                  newDesc += parts[i] + ' ';
                }else if(parts[i] === 'PVC'){
                  parts[i] = 'PVC';
                  newDesc += parts[i] + ' ';
                }else if(parts[i] === 'MDF'){
                  parts[i] = 'MDF';
                  newDesc += parts[i] + ' ';
                }else {
                  newDesc += parts[i].charAt(0).toUpperCase() + parts[i].substr(1).toLowerCase() + ' ';
                }
            }
            paragraph.innerHTML = '<span>' + newDesc + '</span>';
            if(newDesc.length < 16){
                paragraph.classList.add('small_desc_pad_bun42');
            }else if(newDesc.length > 23 && isMobile()){
                paragraph.classList.add('small_fontsize_bun42');
                if(newDesc.length > 34){
                    paragraph.classList.add('xt_small_fontsize_bun42');
                }
            }
            if(flag){
                product.classList.add('min_height_bun42');
            }else {
                divInner.classList.add('no_pad_bun42');
            }
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        });

        return div;
    }