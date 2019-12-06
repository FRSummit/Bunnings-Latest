(function(window, utils) {
    
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
  
    function getScreenWidth(){
        return window.innerWidth;
    }
  
    function createDesign(){
        var div = document.createElement('div');    
        div.className = 're_banner_wrapper';
        div.id = 're_banner_wrapper';
        div.innerHTML = ' ' +
        '  <div class="re_banner"> ' +
        '      <div><p class="main_title">Continue shopping where you left off</p></div>' +
        '      <div class="img-section"> ' +
        '          <div class="tools-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/a2ace531699a4670853453821c16c8bf.png" alt="tools"/> ' +
        '              <a href="https://www.bunnings.com.au/our-range/tools" class="shop_button">Tools<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></a> ' +
        '          </div> ' +
        '          <div class="hardware-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/452994405f004e2d8ec759ffe7382276.png" alt="hardware"/> ' +
        '              <a href="https://www.bunnings.com.au/our-range/building-hardware" class="shop_button">Building &amp; Hardware<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></a> ' +
        '          </div> ' +
        '          <div class="outdoor-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/5a7d5f5296004ecd8ce7cea2ae692384.png" alt="outdoor"/> ' +
        '              <a href="https://www.bunnings.com.au/our-range/outdoor-living" class="shop_button">Outdoor living<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></a> ' +
        '          </div> ' +
        '          <div class="garden-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/fd8cf4f37233418e8696bea58b978a82.png" alt="garden"/> ' +
        '              <a href="https://www.bunnings.com.au/our-range/garden" class="shop_button">Garden<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></a> ' +
        '          </div> ' +
        '      </div> ' +
        '      <div class="re-bottom-text"> ' +
        '          <p class="save-time-text">Save time with <a href="https://www.bunnings.com.au/our-range">Click &amp; Collect</a></p> ' +
        '          <p class="shop-online-text">Shop online and collect in-store at a time that\'s convenient for you.</p> ' +
        '      </div> ' +
        '  </div>';

        if(getScreenWidth() < 768) {
            var carousel = document.getElementById('RefreshCarousel');
            carousel.parentElement.insertBefore(div, carousel.parentElement.childNodes[2]);
        } else {
            var carousel = document.getElementById('RefreshCarousel');
            carousel.parentElement.insertBefore(div, carousel.parentElement.childNodes[2]);
        } 
    }
    
    utils
        .waitForElement('#RefreshCarousel')
        .then(function() {
            document.body.classList.add('op_cc_banner');
      
            createDesign();
            
            document.getElementById('cc_banner_store').onclick = function() {
                openChangeStore();
                return false;
            };
            
            observeHeader();
        });
    
  })(window, window.optimizely.get('utils'));
  
  
  
  
  ///////////////////////////CSS/////////////////////////
.home-gift-cards-banner-wrapper .home-gift-cards-banner:before {
	background:none;  
}

.re_banner_wrapper {
    width: 100%;
    background: #ffffff;
}

.re_banner {
    margin: 0 auto;
    background-color: #0d5257;
    position: relative;
    min-height: 250px;
    padding: 10px;
}

.re_banner .main_title {
    font-family: futura-w01-heavy, Helvetica, Arial, sans-serif;
    font-size: 26px;
    line-height: normal;
    color: #feffff;
    padding:0;
    margin: 0;
}

.re_banner .main_title a {
    color: #feffff;
    text-decoration: underline;
}

.re_banner .shop_button {
    font-family: futura-w01-heavy, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #0d5257;
    /*line-height:35px;
    height:35px;*/
    display:block;
    /*margin-bottom:5px;*/
}

.re_banner .shop_button_chevron {
    height: 14px;
    width: 22px;
    vertical-align: middle; 
    float: right;
    margin-top: 2px;
}

.re-bottom-text {
    color: #fff;
    margin-top: 8px;
}

.save-time-text {
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
}
.save-time-text a {
    color: #fff;
    font-size: 13px;
    font-weight: 900;
}

.shop-online-text {
    display: inline-block;
    font-size: 12px;
    margin: 0;
}
.product-img {
    display: inline-block;
    max-width: 49%;
    border: 2px solid #fff;
    background: #fff;
    /*margin: 0px 18px;*/
}


@media (min-width: 560px) {

    .re_banner {
        background-image: none;
    }
  
}

@media (min-width: 730px) {

    .re_banner_wrapper {
        padding-top:35px
    }

    .re_banner {
        min-height: 160px;
        max-width: 920px;
        padding: 12px 20px 8px 20px;
        background-image:none;
    }

    .re_banner .main_title {
				font-family: 'Futura W01 Heavy',sans-serif;
        margin:0;
        margin-bottom: 14px;
    }

    .re_banner .shop_button {
        font-family: 'Futura W01 Heavy',sans-serif;
        margin-top:5px;
        padding-left: 8px;
    }
    
    .product-img {
        display: inline-block;
    		max-width: 160px;
        border: 2px solid #fff;
        background: #fff;
        margin: 0px 18px;
    }
    .product-img:first-child {
        margin-left: 0;
    }
    .product-img:last-child {
        margin-right: 0;
    }
    
    .product-img img {
        width: 100%;
    }
  
}

@media (max-width: 767px) {
    .tools-section img {
        content:url("//cdn.optimizely.com/img/15721220395/9c2580f7a3374c309a0afbaa298e2d57.png");
    }
    .hardware-section img {
        content:url("//cdn.optimizely.com/img/15721220395/e8a0c05dc5054fd8926031999851e5f9.png");
    }
    .garden-section img {
        content:url("//cdn.optimizely.com/img/15721220395/0dec8f40c67b45a59910275cb07856cf.png");
    }
    .outdoor-section img {
        content:url("//cdn.optimizely.com/img/15721220395/4c4e84b7a6f34366a34cc02a092b824c.png");
    }
    .product-img {
        width: 46%;
        margin: 5px;
        position: relative;
    }
    .product-img img {
        width: 58px;
        height: 58px;
        display: inline-block;
    }
    .re_banner .shop_button {
        display: inline-block;
        margin-left: 6px;
        width: 50%;
        vertical-align: middle;
        line-height: 1.3;
        font-size: 12px;
    }
    .re_banner .shop_button_chevron{
        position: absolute;
        right: 0;
        top: 35%;
    }
    .re_banner_wrapper {
        margin: 0px auto;
        width: 94%;
        margin-top: 10px;
    }
    .re_banner .main_title {
        margin-left: 5px;
        font-size: 28px;
        width: 90%;
        margin-bottom: 8px;
    }
    .re-bottom-text {
        margin-top: 0;
        margin-left: 5px;
        line-height: 1.2;
    }
    .re-bottom-text p {
        font-size: 11px;
    }
    .save-time-text {
        line-height: 0;
    }
    .re_banner{
        min-height: 214px;
    }
}


@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (min-device-pixel-ratio: 2),
only screen and (min-resolution: 192dpi),
only screen and (min-resolution: 2dppx) { 
    .re_banner::before {
        background-image: url('//cdn.optimizely.com/img/15721220395/b14fd55306124b9db9970aefa90eca00.png');
    }

}