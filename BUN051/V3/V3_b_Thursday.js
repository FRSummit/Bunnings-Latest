(function(window, utils) {

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }

    function createDesign() {

        var div = document.createElement('div');
        div.className = 'time_day_personalisation_b51';
        div.id = 'time_day_personalisation_b51';

        var divInner = document.createElement('div');
        divInner.className = 'time_day_banner_b51';
        div.appendChild(divInner);
      
        var continueText = document.createElement('div');
        continueText.className = 'b51_inner_section';
        divInner.appendChild(continueText);
      
        var textSection = document.createElement('div');
        textSection.className = 'text_section_b51';
        continueText.appendChild(textSection);
      
        var iconTextSection = document.createElement('div');
        iconTextSection.className = 'icon_text_section_b51';
        textSection.appendChild(iconTextSection);
      
        var clickCollectIcon = document.createElement('div');
        clickCollectIcon.className = 'click_collect_icon_b51';
        if(!isMobile()){
            clickCollectIcon.innerHTML = '<img src="//cdn.optimizely.com/img/15721220395/6d4c7399db5247a8a185b8558e03fec4.png" alt="click_collect_icon"/>';
        }else {
            clickCollectIcon.innerHTML = '<img src="//cdn.optimizely.com/img/15721220395/02325252bc6c402089972f1d8d331506.png" alt="click_collect_icon"/>';
        }
        iconTextSection.appendChild(clickCollectIcon);
      
        var title = document.createElement('div');
        title.className = 'hour_left_text_b51';
        if(!isMobile()) {
            title.innerHTML = '<p>Save time with Click & Collect</p>';
        }else {
            title.innerHTML = '<p>Get ready for a D.I.Y. weekend</p>';
        }
        iconTextSection.appendChild(title);
      
        var subText = document.createElement('div');
        subText.className = 'sub_text_click_b51';
        if(!isMobile()) {
            subText.innerHTML = '<span class="free_click_text">Order before <b>4pm</b> today to pick up after 9am tomorroww</span>';
        }else {
            subText.innerHTML = '<span class="free_click_text">Save time with Click & Collect - ' + '</br>' + 'Order before <b>4pm</b> today to pick up after 9am tomorrow</span>';
        }
        textSection.appendChild(subText);
      
        var smileChar = document.createElement('div');
        smileChar.className = 'smile_person_b51';
        smileChar.innerHTML = '<p class="img_text_bun51">Get ready for a D.I.Y. weekend</p><img class="smile_person_desktop_img" src="//cdn.optimizely.com/img/15721220395/7f925e7c80d04deba89d1f41dd89a9f5.png"/><img class="smile_char_img" src="//cdn.optimizely.com/img/15721220395/31f5e6d51f704ccfb76206f775b3ad37.png"/>';
        continueText.appendChild(smileChar);
      
        return div;
    }

    function appendHtml(html, device) {
        if(days.indexOf(Date().split(" ")[0]) === "Thu"){
            if (device == 'mobile') {
                var carousel = document.querySelector('.content-catalogue').parentNode;
                carousel.before(html, carousel);
            } else {
                var carousel = document.querySelector('.codified-product-tile--box-shadow');
                carousel.before(html, carousel);
            } 
        }
    }
  
    function getDesign() {
        var html = createDesign();
        return html;
    }

    function addBodyClass() {
        document.querySelector('body').classList.add('bun051');
    }
  
    if (isMobile()) {
        utils
            .waitForElement('.content-catalogue')
            .then(function(){
                addBodyClass();
                appendHtml(getDesign(), 'mobile');
            });
    } else {
        utils
            .waitForElement('.codified-product-tile--box-shadow')
            .then(function(){
                addBodyClass();
                appendHtml(getDesign(), 'desktop');
            });
    }


  })(window, window.optimizely.get('utils'));