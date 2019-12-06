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
  
    function waitingElements(){
        if(getScreenWidth() < 768) {
            return '#RefreshCarousel';
        } else {
            return '#RefreshHeader .header-navigation--lg.is-open';
        } 
    }
    
    function createDesign(){
        var div = document.createElement('div');    
        div.className = 'cc_banner_wrapper';   
        div.id = 'cc_banner_wrapper';
        div.innerHTML = ' ' +
        '  <div class="cc_banner"> ' +
        '      <div><p class="main_title">Continue shopping:</p></div>' +
        '      <div class="img-section"> ' +
        '          <div class="tools-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/7e5cd2c79bf946d0b4f1226054dda188.png" alt="tools"/> ' +
        '              <p class="product-desc">Tools</p> ' +
        '          </div> ' +
        '          <div class="hardware-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/c2b171bede0b45bca5774081b92e7f13.png" alt="hardware"/> ' +
        '              <p class="product-desc">Building &amp; Hardware</p> ' +
        '          </div> ' +
        '          <div class="garden-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/8bc3423f63714dae81438dd2f4194206.png" alt="garden"/> ' +
        '              <p class="product-desc">Garden</p> ' +
        '          </div> ' +
        '          <div class="outdoor-section product-img"> ' +
        '              <img src="//cdn.optimizely.com/img/15721220395/2b9cba757cd74009a3e56aefd7b64945.png" alt="outdoor"/> ' +
        '              <p class="product-desc">Outdoor Living</p> ' +
        '          </div> ' +
        '      </div> ' +
        '  </div>';
            
        if(getScreenWidth() < 768) {
            var demoDiv = document.querySelector('#headerMainMenu');
            demoDiv.after(div);
        } else {
            var demoDiv = document.querySelector('#RefreshHeader .header-navigation-level--lg_content-title');
            demoDiv.after(div);
        } 
    }
    
    utils
        .waitForElement(waitingElements())
        .then(function() {
            document.body.classList.add('bun049_cc_banner');
      
            createDesign();
      
            document.getElementById('cc_banner_store').onclick = function() {
                openChangeStore();
                return false;
            };
            observeHeader();
        });
    
  })(window, window.optimizely.get('utils'));
  
  
  
  
  ////////////////////////////CSS////////////////////////
#RefreshHeader .header-navigation-level--lg_content-title {
    margin-bottom: 0;
}
#RefreshHeader .cc_banner_wrapper {
    width: 100%;
    border-bottom: 1px solid #333;
    height: 134px;
}

#RefreshHeader .cc_banner {
    margin: 0 auto;
    position: relative;
    min-height: 250px;
    padding-left: 20px;
}

#RefreshHeader .main_title {
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

#RefreshHeader .product-desc {
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    text-align: center;
    line-height: 1.2;
}

@media (min-width: 730px) {
    #RefreshHeader .product-img {
        display: inline-block;
    		max-width: 60px;
        position: absolute;
        top: 25px;
    }
  
    #RefreshHeader .hardware-section.product-img {
        left: 28%;
    }
  
    #RefreshHeader .garden-section.product-img {
        left: 50%;
    }
  
    #RefreshHeader .outdoor-section.product-img {
        left: 72%;
    }
    
    #RefreshHeader .product-img img {
        width: 100%;
        border-radius: 2px;
    }
  
}

@media (max-width: 767px) {
    #cc_banner_wrapper {
        margin: 0 auto 12px auto;
        width: 94%;
    }
      
     #cc_banner_wrapper .main_title{
        color: #222;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 6px;
    }
      
    #cc_banner_wrapper .img-section{
        margin-top:4px;
    }
  
    #cc_banner_wrapper .tools-section img {
        content:url("//cdn.optimizely.com/img/15721220395/848cb3a000cb4564ac1899558c275fd1.png");
    }
  
    #cc_banner_wrapper .hardware-section img {
        content:url("//cdn.optimizely.com/img/15721220395/ac3a11ac681644a0b8c4edba60f105c8.png");
    }
  
    #cc_banner_wrapper .garden-section img {
        content:url("//cdn.optimizely.com/img/15721220395/d55911d2c95e440885cee3a1850422bb.png");
    }
  
    #cc_banner_wrapper .outdoor-section img {
        content:url("//cdn.optimizely.com/img/15721220395/ec3c17d095724f1e9d43a3718a0c0d0a.png");
    }
  
    #cc_banner_wrapper .product-img{
        display: inline-block;
        width: 22.9%;
        background: #0d5257;
        border-radius: 2px;
        position: relative;
        height: 90px;
        margin-right: 1.7%;
    }
  
    #cc_banner_wrapper .outdoor-section{
        margin-right: 0;
    }
      
    #cc_banner_wrapper .product-img img{
        width: 100%;
    }
      
    #cc_banner_wrapper .product-desc{
        color: #fff;
        position: absolute;
        width: 100%;
        font-size: 11px;
        margin-top: 8px;
        text-align: center;
    }
      
    #cc_banner_wrapper .hardware-section .product-desc{
        margin-top: 2px;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (min-device-pixel-ratio: 2),
only screen and (min-resolution: 192dpi),
only screen and (min-resolution: 2dppx) { 
    .cc_banner::before {
        background-image: url('//cdn.optimizely.com/img/15721220395/b14fd55306124b9db9970aefa90eca00.png');
    }

    .cc_banner .icon_desc {
        background-image: url('//cdn.optimizely.com/img/15721220395/4d53444f3a734ea3b6e5f0df5cdae08d.png');
    }
}