(function(window, utils) {
    var dayCount = {
        'Mon': {
            'day_left': '5'
        },
        'Tue': {
            'day_left': '4'
        },
        'Wed': {
            'day_left': '3'
        },
        'Thu': {
            'day_left': '2'
        },
        'Fri': {
            'day_left': '1'
        }
    };
  
    var days = ['Mon', 'Tue', 'Wed', 'Thu'];

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }
  
  	function openChangeStore() {
        window.scrollTo(0, 0);
        var storeSelector = document.getElementsByClassName('header_top-trigger')[0];
        if (typeof(storeSelector) === 'undefined' || storeSelector === null || storeSelector.offsetParent === null) {
          storeSelector = document.getElementsByClassName('header-store-locator_trigger_link')[0];
        }
        storeSelector.click();
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
        clickCollectIcon.innerHTML = '<img src="//cdn.optimizely.com/img/15721220395/4827df6554fe4de1b0aeaffffafccb80.png" alt="click_collect_icon"/>';
        iconTextSection.appendChild(clickCollectIcon);
      
        var today = Date().split(" ")[0];
        var remainingDays = dayCount[today].day_left;
        var totime = Date().split(" ")[4].split(":")[0];
      
        var title = document.createElement('div');
        title.className = 'hour_left_text_b51';
        if(!isMobile()){
            title.innerHTML = '<p>' + remainingDays + ' days til D.I.Y. time</p>';
        }else {
            title.innerHTML = '<p>' + remainingDays + ' days ’til D.I.Y time</p>';
        }
        iconTextSection.appendChild(title);
      
        var subText = document.createElement('div');
        subText.className = 'sub_text_click_b51';
        textSection.appendChild(subText);
      
        var freeClickSection = document.createElement('div');
        freeClickSection.className = 'free_click_section_b51';
        subText.appendChild(freeClickSection);
      
        var freeClickText = document.createElement('span');
        freeClickText.className = 'free_click_text_b51';
        freeClickText.innerText = 'Free Click & Collect from your store ';
        freeClickSection.appendChild(freeClickText);
      
        var freeClickLocation = document.createElement('a');
        freeClickLocation.className = 'free_click_text_b51';
        freeClickLocation.innerText = 'Port Melbourne';
        freeClickSection.appendChild(freeClickLocation);
        freeClickLocation.addEventListener('click', function() {
            openChangeStore();
        });
      
        var orderSection = document.createElement('div');
        orderSection.className = 'order_section_b51';
        orderSection.innerHTML = '<span class="order_text_b51">Order by <b>4pm</b> today to pick up after 9am tomorrow</span>';
        subText.appendChild(orderSection);
      
        var smileChar = document.createElement('div');
        smileChar.className = 'smile_person_b51';
        smileChar.innerHTML = '<img class="smile_person_desktop_img" src="//cdn.optimizely.com/img/15721220395/616324601b644073820097be181f347b.png"/><img class="smile_person_mbl_img" src="//cdn.optimizely.com/img/15721220395/2162e075085f484c8f096524d89809b9.png"/>';
        continueText.appendChild(smileChar);
      
        return div;
    }

    function appendHtml(html, device) {
		    if((days.indexOf(Date().split(" ")[0]) > -1) || (Date().split(" ")[0] === "Fri" && Date().split(" ")[4].split(":")[0] < 16)) {
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