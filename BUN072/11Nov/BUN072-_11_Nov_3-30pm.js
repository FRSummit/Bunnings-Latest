(function (window, utils) {
  function isMobile() {
    return (Bunnings.trackingInfo.Device === 'responsive');
  }

  function createDesign() {
    var html = document.createElement('div');
    html.className = 'diy_discoverability_bun72';
    html.id = 'diy_discoverability_bun72';
    html.innerHTML = ''+
      '<div class="page_icon_bun72"><img class="home_icon_bun72" src="//cdn.optimizely.com/img/15721220395/70cce4ae37be44e79261b394329b2c8a.png" alt="home_icon"/><span class="icon_arrow_bun72">›</span><span class="running_page_text_bun72">D.I.Y. Advice</span></div>' + 
      '<!----------------------------------Main Banner---------------------------------->' +
      '<div class="main_banner_section_bun72"><img class="banner_72" src="//cdn.optimizely.com/img/15721220395/203dd4db62e24ce8887e54df2564745e.png" alt="main_banner"/><img  class="advice_hub_72"src="//cdn.optimizely.com/img/15721220395/bd9fdd8ec9c14cfd9dcb84ff20c414ef.png" alt="advice_hub"/></div>' +
      '<!----------------------------------Trending Now---------------------------------->' +
      '<div class="trending_section_bun72">' +
        '<div class="trending_now_text_bun72"><span>Trending Now</span></div>' +
        '<div class="teending_desc_bun72">'+
          '<div class="desc_1_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/fba5224fb7374562a6edb9a1f8968695.png" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">Best Inspiration lorem ipsum dolor sit amet</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="desc_2_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/fba5224fb7374562a6edb9a1f8968695.png" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">Best Inspiration lorem ipsum dolor sit amet</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="desc_3_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/fba5224fb7374562a6edb9a1f8968695.png" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">Best Inspiration lorem ipsum dolor sit amet</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>'+
        '</div>'+
      '</div>' +
      '<!----------------------------------Featured Topic---------------------------------->' +
      '<div class="feature_topic_section_bun72">' +
        '<div class="feature_topic_text_bun72"><span>Featured Topic</span></div>' +
        '<div class="feature_topic_desc_bun72">' +
          '<div class="feature_1_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/67d49e4bec5840e7a32b2af18cee9f26.png" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div><span class="feature_topic_dtl_text_bun72">Title goes here lorem ipsum dolor sit amet</span></div><div><span class="feature_topic_dtl_subtext_bun72">How to automate your home lighting with smart lights</span></div></div></div>'+
          '<div class="feature_2_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/67d49e4bec5840e7a32b2af18cee9f26.png" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div><span class="feature_topic_dtl_text_bun72">Title goes here lorem ipsum dolor sit amet</span></div><div><span class="feature_topic_dtl_subtext_bun72">How to automate your home lighting with smart lights</span></div></div></div>'+
          '<div class="feature_3_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/67d49e4bec5840e7a32b2af18cee9f26.png" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div><span class="feature_topic_dtl_text_bun72">Title goes here lorem ipsum dolor sit amet</span></div><div><span class="feature_topic_dtl_subtext_bun72">How to automate your home lighting with smart lights</span></div></div></div>'+
        '</div>' +
      '</div>' +
      '<!----------------------------------Curated Content Heading---------------------------------->' +
      '<div class="curated_content_section_bun72">'+
        '<div class="curated_content_text_bun72"><span>Curated Content Heading</span></div>' +
        '<div class="curated_content_desc_bun72">' +
          '<div class="curated_content_row_72">' +
            '<div class="curated_content_row_title_left_72"><span>Small Space</span></div>' +
            '<div class="curated_content_1_inner_72">' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8cc9b0d1d5804b4b9a2d7efe7c9fc841.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Grow vegies and herbs in your small space</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">You don\'t need a huge backyard to grow your own food.</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a9259338f0cd44da81efe4daca8af777.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">D.I.Y ideas for renters</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Just because you\'re renting doesn\'t mean you can\'t turn your house into a home.</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/2a67e9e704aa43e194bbc05b6088c5b7.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Storage hacks for small spaces</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Make the most of squeezy footprint or create the illusion of a larger room with high impact hacks.</span></div></div></div>' +
            '</div>' +
          '</div>' +
          '<div class="curated_content_row_72">' +
            '<div class="curated_content_row_title_left_72"><span>Ideas on a Budget</span></div>' +
            '<div class="curated_content_1_inner_72">' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/c11fa0ba30aa4ec699c4ef895ec0754f.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to give your kitchen a makeover on a budget</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Simple and inexpensive D.I.Y updates you can make to give your kitchen a fresh new look.</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/c6cab1f41a5145c28aebdbf0c4850132.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Bathroom makeovers on a budget</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Looking to update your bathroom on a budget?</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/02e74f237684413e9e874abeaca69768.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Tips for building out a reno budget</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">How to automate your home lighting with smart lights.</span></div></div></div>' +
            '</div>' +
          '</div>' +
          '<div class="curated_content_row_72">' +
            '<div class="curated_content_row_title_left_72"><span>Ideas for Spring</span></div>' +
            '<div class="curated_content_1_inner_72">' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/d6d19d728a434e7dbe3e0d0982b2aae4.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Cut the clutter with a closet clear-out</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Cut the clutter with these expert storage tips to help you get more from your wardrobe.</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/d66ceb13f4134578af573b92aa0bbaf3.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Prepare your vegie patch for a productive spring</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Superchange summer\'s bounty by taking the time to enrich your vegetable beds before the growing season.</span></div></div></div>' +
              '<div class="curated_content_inner_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/542da4395939401cb18cdb2e4e13087e.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to choose the perfect outdoor setting</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">The right furniture can transform any outdoor space and help define how the space is used.</span></div></div></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<!----------------------------------Explore by Space---------------------------------->' +
      '<div class="explore_by_space_bun72">' +
        '<div class="explore_by_space_text_bun72"><span>Explore by Space</span></div>' +
        '<div class="explore_by_space_body_bun72">' +
        '<div class="explore_by_space_row">' +
          '<div class="explore_space_1_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8d139173085343478a24c71d0963e5f3.png"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Outdoor</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_2_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/16630e84d8fe4bf5b8b8623174ef7a6c.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Garden</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_3_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8e29ea54973a4a989709b502aacd4350.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Kitchen</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_4_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a936ce575ddd481c866f42c8d6a606ab.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Bathroom</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
        '</div>' +
        '<div class="explore_by_space_row">' +
          '<div class="explore_space_1_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a80ecdff3d784ab2bc2a1bb9ea0b7661.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Bedroom</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_2_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/21b9aeae10944e4b8eaaa94d787e5e0c.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Living Room</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_3_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/aba4d5714b6944f5955315a39a9c24f3.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Laundry</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="explore_space_4_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/65ffbf7953714768bfe8f7b348c2c326.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Garage</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
        '</div>' +
        '</div>' +
      '</div>' +
      '<!----------------------------------Magazine Feature Content---------------------------------->' +
      '<div class="magazine_feature_sec_bun72">' +
        '<div class="magazine_feature_text_bun72"><span>Magazine Feature Content</span></div>' +
        '<div class="magazine_feature_desc_bun72">' +
          '<div class="magazine_feature_desc_1_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/19c5dcbc427646498334a8c1e0187768.png" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">Brighten up your home with flowers and foliage in spring</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="magazine_feature_desc_2_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/4942ae4b73914b36b75d8e77c5a3bcae.png" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">Refresh and renew your timber deck</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
          '<div class="magazine_feature_desc_3_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/073ed2ed794344179282cb5af148b6f7.png" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">The benefits of using white paint in your home</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div>' +
        '</div>' +
      '</div>' +
      '';

    return html;
  }

  function appendHtml(html, device) {
    if (device === 'mobile') {
      var mobileDiv = document.querySelector('#responsivebody_0_TrackingPanelAlertBar');
      mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
    } else {
      var carousel = document.querySelector('.heading-layout');
      carousel.before(html, carousel);
    }
  }

  function addBodyClass() {
    document.querySelector('body').classList.add('bun072');
  }

  if (isMobile()) {
    utils
      .waitForElement('#RefreshCarousel')
      .then(function () {
        addBodyClass();
        appendHtml(createDesign(), 'mobile');
      });
  } else {
    utils
      .waitForElement('nav.header-navigation--lg')
      .then(function () {
        addBodyClass();
        appendHtml(createDesign(), 'desktop');
      });
  }
})(window, window.optimizely.get('utils'));
