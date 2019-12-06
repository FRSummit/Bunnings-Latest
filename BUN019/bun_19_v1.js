(function(window, utils) {
    var sunnyCategories = {
        'OUTDOOR FURNITURE': {
            'description': 'Outdoor Furniture',
            'img': '/74418546ad5f417390d8a0dc41320683.png',
            'url': '/outdoor-living/outdoor-furniture'
        },   
        'LANDSCAPING SUPPLIES': {
            'description': 'Landscaping Supplies',
            'img': '/b3d113714ac54bcebbedf71d3fa25b13.png',
            'url': '/garden/landscaping'
        },
        'DECKING': {
            'description': 'Decking',
            'img': '/091cb4e0e8344968a69bef1be45e5de7.png',
            'url': '/building-hardware/decking'
        }
    };
  
    var coldCategories = {
        'PAINT': {
            'description': 'Paint',
            'img': '/503f3c5e6505493c8e7d242841922d04.png',
            'url': '/paint-decorating/paint'
        },    
        'HOME STORAGE SOLUTIONS': {
            'description': 'Home Storage Solutions',
            'img': '/f8b186f573f34f1193a84eaa4b8a00d2.png',
            'url': '/storage-cleaning/storage'
        },
        'LIGHTING': {
            'description': 'Lighting',
            'img': '/5c401b129d1648279773d386f215e4f1.png',
            'url': '/lighting-electrical/lighting'
        }
    };
  
    var weathers = {
        'SUNNY': 'Sunny',
        'COLD': 'Cold'
    };

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }
  
    function weatherAppend(weatherSec){
        var cloneCaro = document.querySelector('#RefreshCarousel .hero-carousel_carousel.slick-initialized .hero-carousel_item');
        var myArticle = '<article datav3-track-group="true" class="hero-carousel_item hero-carousel_item--cta is-mobile is-desktop slick-slide slick-current slick-active" datav3-track-index="9" data-slick-index="7" aria-hidden="false" style="width: 1327px;" tabindex="-1" role="option" aria-describedby="slick-slide07"><div class="hero-carousel_container hero-carousel_container--lg" style="background-image: url("//cdn.optimizely.com/img/15721220395/5f63124a548441fb912c87c26f2d4931.png")"></div></article>';
      
        var cloneCaroLi = document.querySelector('#RefreshCarousel .hero-carousel .slick-dots li');
        var myLi = '<li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation08" id="slick-slide08"><button type="button" data-role="none" role="button" tabindex="0" datav3-track-event="scroll">8</button></li>';
        if(!isMobile()){
            (function($) {
                $(cloneCaro).parent().append(myArticle);
                $(cloneCaroLi).parent().append(myLi);
            })(jQuery);
        }
      
        var carousel = document.querySelector('#RefreshCarousel .hero-carousel_item--single-item .hero-carousel_container--lg');
        carousel.before(weatherSec);
        carousel.classList.add('back_image_bun19');
      
        var carouselMbl = document.querySelector('.hero-carousel_image');
        carouselMbl.classList.add('back_mblimage_alt');
        var mblImg = document.createElement('img');
        mblImg.className = 'hero-carousel_image_bun19 bun_image_bun19';
        mblImg.src = '//cdn.optimizely.com/img/15721220395/5f63124a548441fb912c87c26f2d4931.png';
        carouselMbl.after(mblImg);
    }

    function createDesign() {
        var weather = weathers['SUNNY'];
      
        var div = document.createElement('div');
        div.className = 'product_history_wrapper_bun19';
        div.id = 'product_history_wrapper_bun19';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner_bun19';
        div.appendChild(divInner);
            
        var weatherSec = document.createElement('div');
        weatherSec.className = 'weather_section_bun19';
        divInner.appendChild(weatherSec);
      
        var locationName = '';
        for(var c=0; c<decodeURIComponent(document.cookie).split(";").length; c += 1){
            if(decodeURIComponent(document.cookie).split(";")[c].trim().split('=')[0] === 'Bunnings.Region'){
                locationName = decodeURIComponent(document.cookie).split(";")[c].split('=')[1];
            }
        }
        if(locationName === 'VICMetro' || locationName === 'VICRegional'){
            locationName = 'Melbourne';
        }else if(locationName === 'SAMetro' || locationName === 'SARegional'){
            locationName = 'Adelaide';
        }else if(locationName === 'TASMetro' || locationName === 'TASRegional'){
            locationName = 'Hobart';
        }else if(locationName === 'QLDMetro' || locationName === 'QLDRegional'){
            locationName = 'Brisbane';
        }
            
        var weatherSubText = document.createElement('div');
        weatherSubText.className = 'weather_subtext_bun19';
        if(weather === 'Sunny'){
            weatherSubText.innerHTML = '<div class="weather_forecast_text_bun19"><span>' + locationName + ' Forecast:</span></div>' +
              '<div class="currentDay_bun19"><span>SAT</span><img class="sunny_icon_bun19" src="//cdn.optimizely.com/img/15721220395/6df2cd58d62341ae910b982d7c3174b0.png" alt="sun"/><span>24°</span></div>' +
              '<div class="day_divider_bun19"></div>' +
              '<div class="nextDay_bun19"><span>SUN</span><img class="sunny_icon_bun19" src="//cdn.optimizely.com/img/15721220395/6df2cd58d62341ae910b982d7c3174b0.png" alt="sun"/><span>20°</span></div>';
        } else if(weather === 'Cold'){
            weatherSubText.innerHTML = '<div class="weather_forecast_text_bun19"><span>' + locationName + ' Forecast:</span></div>' +
              '<div class="currentDay_bun19"><span>SAT</span><img class="cold_icon_bun19" src="//cdn.optimizely.com/img/15721220395/636652fc81be4a78a9d86db45140557f.png" alt="sun"/><span>24°</span></div>' +
              '<div class="day_divider_bun19"></div>' +
              '<div class="nextDay_bun19"><span>SUN</span><img class="cold_icon_bun19" src="//cdn.optimizely.com/img/15721220395/5a8b62faef2047c88287235b29491de7.png" alt="sun"/><span>20°</span></div>';
        }
        weatherSec.appendChild(weatherSubText);
      
        var titleText = document.createElement('p');
        titleText.className = 'main_title_bun19';
        if(weather === 'Sunny'){
            titleText.innerText = "Perfect weather for outdoor projects this weekend";
        } else if(weather === 'Cold'){
            titleText.innerText = "Strong chance of indoor D.I.Y. this weekend";
            titleText.classList.add('cold_width_bun19');
        }
        divInner.appendChild(titleText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section_bun19';
        divInner.appendChild(divImages);

        var categoryLength;
        if(weather === 'Sunny'){
            categoryLength = Object.keys(sunnyCategories).length;
        }
        else if(weather === 'Cold'){
            categoryLength = Object.keys(coldCategories).length;
        }
      
        for(var i=0; i<categoryLength; i += 1){
            var sunnycategory = Object.keys(sunnyCategories)[i];
            var coldcategory = Object.keys(coldCategories)[i];

            var product = document.createElement('div');
            product.className = 'product-img_bun19';
            
            var masterUrl = 'https://www.bunnings.com.au/our-range';
            var link = document.createElement('a');
            if(weather === 'Sunny'){
                link.href = masterUrl + sunnyCategories[sunnycategory].url;
            }
            else if(weather === 'Cold'){
                link.href = masterUrl + coldCategories[coldcategory].url;
            }

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.className = 'desk_img_bun19';
            if(weather === 'Sunny'){
                img.src = masterImgUrl + sunnyCategories[sunnycategory].img;
                img.alt = sunnycategory.toLowerCase();
            }else if(weather === 'Cold'){
                img.src = masterImgUrl + coldCategories[coldcategory].img;
                img.alt = coldcategory.toLowerCase();
            }
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc_bun19';
            if(weather === 'Sunny'){
                paragraph.innerHTML = '<span>' + sunnyCategories[sunnycategory].description + '</span>';
            }
            else if(weather === 'Cold'){
                paragraph.innerHTML = '<span>' + coldCategories[coldcategory].description + '</span>';
            }
            link.appendChild(paragraph);
            if(sunnycategory.length > 19 || coldcategory.length > 19){
                paragraph.classList.add('no_padding_bun19');
            }
            product.appendChild(link);
            divImages.appendChild(product);
        }
      
        var reBottomText = document.createElement('div');
        reBottomText.className = 're-bottom-text_bun19';
        reBottomText.innerHTML = '<p class="save-time-text_bun19">Explore our range<svg class="shop_button_chevron_bun19"><use xlink:href="#icon-chevron-guillemet"></use></svg></p>';
        divInner.appendChild(reBottomText);
      
        weatherAppend(weatherSec);

        return div;
    }

    function appendHtml(html) {
      // Update element selector for 'carousel' to inject slide content in correct location
        var carousel = document.getElementById('RefreshCarousel');
        //var carousel = document.querySelector('.back_image_bun19 .hero-carousel_wrapper');
        carousel.appendChild(html, carousel);
    }
  
    utils
        .waitForElement('nav.header-navigation--lg')
        .then(function(){
            appendHtml(createDesign());
        });

  })(window, window.optimizely.get('utils'));