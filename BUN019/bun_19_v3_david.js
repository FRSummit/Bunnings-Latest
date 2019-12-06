(function (window, utils) {
  var settings = {
    sunny: {
      title: 'Perfect weather for outdoor projects this weekend',
      categories: [
        {
          description: 'Landscaping for any size backyard',
          img: '/69213c92c4a44e4586b5ca436a79f4ed.png',
          url: '/outdoor/paths-and-landscaping/landscaping-for-any-size-backyard'
        },
        {
          description: 'Great ideas for outdoor privacy',
          img: '/8752abbe007f4b3a8dfad51b7b69fb2e.png',
          url: '/outdoor/outdoor-living/great-ideas-for-outdoor-privacy'
        },
        {
          description: 'D.I.Y. stackable wooden planters',
          img: '/dd9713698147412a8f5154cc3d00f138.png',
          url: '/garden/planters/diy-stackable-wooden-planters'
        }
      ]
    },
    cold: {
      title: 'Strong chance of indoor D.I.Y. this weekend',
      categories: [
        {
          description: 'Bring the outside in with indoor plants',
          img: '/5346962a8312403aa872be7a053865ed.png',
          url: '/garden/planting-and-growing/bring-the-outside-in-with-indoor-plants'
        },
        {
          description: 'D.I.Y. indoor garden shelves',
          img: '/73de221c5ed14e2fbd5c22c17ff3f1d3.png',
          url: ''
        },
        {
          description: 'How to plan and organise your pantry',
          img: '/1d5039c7d5db4ea0a2150097855e8ea3.png',
          url: '/kitchen/kitchen-ideas/how-to-plan-and-organise-your-pantry'
        }
      ]
    }
  };

  function isMobile() {
    return (Bunnings.trackingInfo.Device === 'responsive');
  }

  function addBodyClass() {
    document.body.classList.add('bun019');
  }

  function appendSlide(slideDOM) {
    utils.waitUntil(function() {
      if (typeof(window.jQuery) === "function") {
      	return (typeof(window.$('.hero-carousel_carousel').slick) === "function");
      }
    }).then(function() {
      window.$('.hero-carousel_carousel').slick('slickAdd', slideDOM, 0, true);
      //window.$('.hero-carousel_carousel').slick('slickPause');
    });
  }

  function createSlide(city, forecast, weatherConfig) {
    var article = document.createElement('article');
    article.className = 'hero-carousel_item hero-carousel_item--cta is-mobile is-desktop';

    var slideContainer = document.createElement('div');
    slideContainer.className = 'hero-carousel_container hero-carousel_container--lg';
    slideContainer.style = 'background-image: url("//cdn.optimizely.com/img/15721220395/30d4f01781854695bd0cddf03ddec76f.png")';
    article.appendChild(slideContainer);
    
    var slideLink = document.createElement('a');
    slideLink.href = 'https://www.bunnings.com.au/diy-advice';
    slideContainer.appendChild(slideLink);
    
    var div = document.createElement('div');
    div.className = 'hero-carousel_wrapper';
    slideLink.appendChild(div);

    var divInner = document.createElement('div');
    divInner.className = 'hero-carousel_wrapper-content weather-slide';
    div.appendChild(divInner);

    var weatherSec = document.createElement('div');
    weatherSec.className = 'weather-forecast';
    divInner.appendChild(weatherSec);

    var weatherSubText = document.createElement('div');
    weatherSubText.className = 'forecast-wrapper';
    weatherSubText.innerHTML = buildWeekendForecast(city, forecast);
    weatherSec.appendChild(weatherSubText);

    var titleText = document.createElement('p');
    titleText.className = 'main-title';
    titleText.innerText = weatherConfig.title;
    divInner.appendChild(titleText);

    var divImages = document.createElement('div');
    divImages.className = 'weather-categories';

    for (var i = 0; i < weatherConfig.categories.length; i += 1) {
      divImages.appendChild(buildCategory(weatherConfig.categories[i]));
    }
    divInner.appendChild(divImages);


    var bottomText = document.createElement('div');
    bottomText.className = 'bottom-text';
    bottomText.innerHTML = '<p class="save-time-text">View all D.I.Y. Advice<svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></p>';
    divInner.appendChild(bottomText);

    var mobileContainer = slideContainer.cloneNode(true);
    mobileContainer.className = 'hero-carousel_container hero-carousel_container--sm';
    mobileContainer.style = 'background-image: url("//cdn.optimizely.com/img/15721220395/5f63124a548441fb912c87c26f2d4931.png")';
    article.appendChild(mobileContainer);

    return article;
  }

  function getCookieValue(cookieName) {
    var valuePairs = decodeURIComponent(document.cookie).split(";");
    for( var c = 0; c < valuePairs.length; c += 1 ) {
      if (valuePairs[c].trim().split('=')[0] === cookieName){
        return valuePairs[c].split('=')[1];
      }
    }
    return '';
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function getCityFromRegion(region) {
    if (region === 'VICMetro' || region === 'VICRegional') {
      return 'Melbourne';
    } else if (region === 'SAMetro' || region === 'SARegional') {
      return 'Adelaide';
    } else if (region === 'TASMetro' || region === 'TASRegional') {
      return 'Hobart';
    } else if (region === 'QLDMetro' || region === 'QLDRegional') {
      return 'Brisbane';
    }
    return '';
  }

  function getCityForecast(city) {
    return window.abtesting.bun019.forecast[city.toLowerCase()];
  }

  function determineWeatherType(cityForecast) {
    if (getParameterByName('weather') != null && getParameterByName('weather') != '') {
      return getParameterByName('weather');
    }

    if (cityForecast.saturday.precip > 0.4 || cityForecast.sunday.precip > 0.4) {
      return 'cold';
    }
    if (cityForecast.saturday.temp > 17 && cityForecast.sunday.temp > 17) {
      return 'sunny';
    }
    return 'cold';
  }

  function buildWeekendForecast(city, forecast) {
    var html = '<div class="weather-forecast-text"><span>' + city + ' Forecast:</span></div>' +
    '<div class="forecast-saturday"><span>SAT</span><img src="' + getForecastIcon(forecast.sunday) + '" alt="sat"/><span>' + forecast.saturday.temp + '°</span></div>' +
    '<div class="day-divider"></div>' +
    '<div class="forecast-sunday"><span>SUN</span><img src="' + getForecastIcon(forecast.sunday) + '" alt="sun"/><span>' + forecast.sunday.temp + '°</span></div>';
    return html;
  }

  function getForecastIcon(dailyForecast) {
    if (dailyForecast.precip > 0.4) {
      return '//cdn.optimizely.com/img/15721220395/5a8b62faef2047c88287235b29491de7.png'; //cold
    }
    if (dailyForecast.temp > 17) {
      return '//cdn.optimizely.com/img/15721220395/6df2cd58d62341ae910b982d7c3174b0.png'; //sunny
    }
    return '//cdn.optimizely.com/img/15721220395/5a8b62faef2047c88287235b29491de7.png'; //cold
  }

  function buildCategory(category) {
    var product = document.createElement('div');
    product.className = 'weather-category';

    var masterUrl = 'https://www.bunnings.com.au/our-range';
    var link = document.createElement('a');
    link.href = masterUrl + category.url;

    var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
    var img = document.createElement('img');
    img.className = 'category-img';
    img.src = masterImgUrl + category.img;
    img.alt = category.description;
    link.appendChild(img);

    var paragraph = document.createElement('p');
    paragraph.className = 'category-description';
    paragraph.innerHTML = '<span>' + category.description + '</span>';
    link.appendChild(paragraph);

    if (category.description.length > 19 ) {
      paragraph.classList.add('no-padding');
    }
    product.appendChild(link);
    return product;
  }

  utils
    .waitForElement('body')
    .then(function () {
    var storeRegion = getCookieValue('Bunnings.Region');
    var city = getCityFromRegion(storeRegion);
    var forecast = getCityForecast(city);
    var weatherType = determineWeatherType(forecast);
    var weatherConfig = settings[weatherType];
    var slide = createSlide(city, forecast, weatherConfig);

    addBodyClass();
    appendSlide(slide);
  });
}(window, window.optimizely.get('utils')));
