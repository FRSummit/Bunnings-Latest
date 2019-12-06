(function (window, utils) {
  function isMobile() {
    return (Bunnings.trackingInfo.Device === 'responsive');
  }

  function createDesign() {
    var html = document.createElement('div');
    html.className = 'diy_discoverability_bun72';
    html.id = 'diy_discoverability_bun72';
    html.innerHTML = ''
+      '<div class="page_icon_bun72"><a href="https://www.bunnings.com.au"><img class="home_icon_bun72" src="//cdn.optimizely.com/img/15721220395/70cce4ae37be44e79261b394329b2c8a.png" alt="home_icon"/></a><span class="icon_arrow_bun72">›</span><span class="running_page_text_bun72">D.I.Y. Advice</span></div>'

+      '<div class="main_banner_section_bun72"><img class="banner_72" src="//cdn.optimizely.com/img/15721220395/203dd4db62e24ce8887e54df2564745e.png" alt="main_banner"/><img  class="advice_hub_72"src="//cdn.optimizely.com/img/15721220395/bd9fdd8ec9c14cfd9dcb84ff20c414ef.png" alt="advice_hub"/></div>'

+      '<div class="trending_section_bun72">'
+        '<div class="trending_now_text_bun72"><span>Trending Now</span></div>'
+        '<div class="teending_desc_bun72">'
+          '<a href="https://www.bunnings.com.au/diy-advice/garden/planting-and-growing/10-fast-growing-plants-for-privacy"><div class="desc_1_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a96d3fb106a84ea782d55896ee05cb4f.jpg" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">10 fast growing plants for privacy</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/outdoor/decking/how-to-build-a-deck"><div class="desc_2_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/3a0751f4165e4cec81afcd225aa96028.jpg" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">How to build a deck</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/garden/garden-planning-and-projects/brighten-up-your-place-with-an-instant-hedge"><div class="desc_3_72"><div class="trending_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8cb08687742b4922b1fec488cfeec994.jpg" alt="trending_img"/></div><div class="trending_dtl_sec_bun72"><span class="trending_dtl_text_bun72">Brighten up your place with an instant hedge</span><span class="trending_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+        '</div>'
+      '</div>'

+      '<div class="feature_topic_section_bun72">'
+        '<div class="feature_topic_text_bun72"><span>Get Ready for Summer</span></div>'
+        '<div class="feature_topic_desc_bun72">'
+          '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/heating-and-cooling/how-to-choose-the-right-cooling-system-for-your-home"><div class="feature_1_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/204fee598af8427b8106b4097b053d26.jpg" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div class="feature_topic_title"><span class="feature_topic_dtl_text_bun72">How to chose the right cooling system for your home</span></div><div class="feature_topic_subtitle"><span class="feature_topic_dtl_subtext_bun72">There are loads of easy and inexpensive ways to keep you and your house cool. But which cooling system is right for your home and how do you choose the right one?</span></div></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/outdoor/outdoor-living/a-guide-to-instant-shade-options"><div class="feature_2_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/c40a33e7599c4d9db1823fb0bc17a735.png" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div class="feature_topic_title"><span class="feature_topic_dtl_text_bun72">A guide to instant shade options</span></div><div class="feature_topic_subtitle"><span class="feature_topic_dtl_subtext_bun72">The sun packs a serious punch, especially in summer. While trees, shrubs and climbers can provide lots of welcome shade, man-made products do a stellar job of filling the gaps.</span></div></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/garden/planting-and-growing/how-to-take-care-of-your-plants-in-summer"><div class="feature_3_72"><div class="feature_topic_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/5bc71f271bef4a128a46cc55f8f68e09.jpg" alt="feature_topic_img"/></div><div class="feature_topic_dtl_sec_bun72"><div class="feature_topic_title"><span class="feature_topic_dtl_text_bun72">How to take care of your plants in summer</span></div><div class="feature_topic_subtitle"><span class="feature_topic_dtl_subtext_bun72">With its combination of hot and dry weather, summer can be really tough on your garden. To make sure it continues to thrive, read our suggestions to help get the best out of your garden.</span></div></div></div></a>'
+        '</div>'
+      '</div>'

+      '<div class="curated_content_section_bun72">'
+        '<div class="curated_content_text_bun72"><span>Transform your home</span></div>'
+        '<div class="curated_content_desc_bun72">'
+          '<div class="curated_content_row_72">'
+            '<div class="curated_content_row_title_left_72"><span>Ideas on a budget</span></div>'
+            '<div class="curated_content_1_inner_72">'
+              '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/planning-and-projects/tips-for-building-out-a-reno-budget"><div class="curated_content_inner_1_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/b0388b1a1abf401ca97abc99836ce5c4.jpg" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Tips for building out a reno budget</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Check out our tips for completing your renovation on the budget you have set.</span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/kitchen/benchtops-and-cabinets/how-to-paint-laminate-kitchen-cabinets"><div class="curated_content_inner_2_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8afd7b1c7468491e98580df3ee51004d.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to paint laminate kitchen cabinets</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Painting your kitchen cabinet doors and drawers is a great way to give your space an entirely new look.</span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/bathroom/planning-projects/bathroom-renovations-on-a-budget"><div class="curated_content_inner_3_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/45006f14dd314e82bb5f63c653e98dfe.jpg" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Bathroom makeovers on a budget</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Looking to update your bathroom on a budget? Rather than a costly renovation, there are some simple ways to makeover your bathroom that won’t break the bank.</span></div></div></div></a>'
+            '</div>'
+          '</div>'
+          '<div class="curated_content_row_72">'
+            '<div class="curated_content_row_title_left_72"><span>Ideas for small spaces</span></div>'
+            '<div class="curated_content_1_inner_72">'
+              '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/planning-and-projects/diy-ideas-for-renters"><div class="curated_content_inner_1_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/acd1f5c3a6dc47fda92431f2fd46e5d1.jpg" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">D.I.Y ideas for renters</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">As a renter, there are plenty of D.I.Y. ideas for improving your home and the best thing is, you can take them with you when you move. </span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/shelving-and-storage/storage-hacks-for-small-spaces"><div class="curated_content_inner_2_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/9ed1d83135e34736a80efdfdd7e368b9.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Storage hacks for small spaces</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Make the most of a squeezy footprint or create the illusion of a larger room with high impact hacks for small areas.</span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/shelving-and-storage/how-to-install-floating-shelves"><div class="curated_content_inner_3_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/630a1c592332420eab33939671ae70e2.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to install floating shelves</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Floating shelves are a simple, stylish addition to any room – and they’re so easy to install! Here’s how.</span></div></div></div></a>'
+            '</div>'
+          '</div>'
+          '<div class="curated_content_row_72">'
+            '<div class="curated_content_row_title_left_72"><span>Ideas for weekend projects</span></div>'
+            '<div class="curated_content_1_inner_72">'
+              '<a href="https://www.bunnings.com.au/diy-advice/indoor/living-room/how-to-upcycle-a-coffee-table"><div class="curated_content_inner_1_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a6c1ba8e7d77472a9b12da40aeb96bb1.jpg" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to upcycle a coffee table</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Upcycling a coffee table is super easy. Just add some stylish legs and paint it up to match your décor and you’re good to go.</span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/paint/how-to-paint/paint-a-master-bedroom-feature-wall-in-one-weekend"><div class="curated_content_inner_2_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/31c33841dbae43faaae10deaf9d35881.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">Paint a master bedroom feature wall in one weekend</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Transform your master bedroom with a beautiful feature wall for you next weekend D.I.Y. project.</span></div></div></div></a>'
+              '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/shelving-and-storage/how-to-make-a-hook-rack-for-your-wall"><div class="curated_content_inner_3_sec_72"><div class="curated_content_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/de2f42a7f38f4d94af17a1223c20ef30.png" alt="feature_topic_img"/></div><div class="curated_content_dtl_sec_bun72"><div class="curated_content_title"><span class="curated_content_dtl_text_bun72">How to make a hook rack for your wall</span></div><div class="curated_content_subtitle"><span class="curated_content_dtl_subtext_bun72">Get that clutter off your floor and create a stunning decorative feature for your bedroom with this gorgeous hook rack. And it’s so easy to make! </span></div></div></div></a>'
+            '</div>'
+          '</div>'
+        '</div>'
+      '</div>'

+      '<div class="explore_by_space_bun72">'
+        '<div class="explore_by_space_text_bun72"><span>Explore by Space</span></div>'
+        '<div class="explore_by_space_body_bun72">'
+        '<div class="explore_by_space_row">'
+          '<a href="https://www.bunnings.com.au/diy-advice/outdoor"><div class="explore_space_1_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8d139173085343478a24c71d0963e5f3.png"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Outdoor</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/garden"><div class="explore_space_2_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/16630e84d8fe4bf5b8b8623174ef7a6c.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Garden</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/kitchen"><div class="explore_space_3_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/8e29ea54973a4a989709b502aacd4350.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Kitchen</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/bathroom"><div class="explore_space_4_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a936ce575ddd481c866f42c8d6a606ab.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Bathroom</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+        '</div>'
+        '<div class="explore_by_space_row">'
+          '<a href="https://www.bunnings.com.au/diy-advice/indoor/bedroom"><div class="explore_space_1_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/a80ecdff3d784ab2bc2a1bb9ea0b7661.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Bedroom</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/indoor/living-room"><div class="explore_space_2_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/21b9aeae10944e4b8eaaa94d787e5e0c.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Living Room</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/indoor/laundry"><div class="explore_space_3_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/aba4d5714b6944f5955315a39a9c24f3.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Laundry</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/outdoor/garage"><div class="explore_space_4_72"><div class="explore_space_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/65ffbf7953714768bfe8f7b348c2c326.png" alt="trending_img"/></div><div class="explore_space_dtl_sec_bun72"><span class="explore_space_dtl_text_bun72">Garage</span><span class="explore_space_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+        '</div>'
+        '</div>'
+      '</div>'

+      '<div class="magazine_feature_sec_bun72">'
+        '<div class="magazine_feature_text_bun72"><span>Magazine Feature Content</span></div>'
+        '<div class="magazine_feature_desc_bun72">'
+          '<a href="https://www.bunnings.com.au/diy-advice/garden/planters/make-a-big-impact-with-small-indoor-plants"><div class="magazine_feature_desc_1_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/84ef0eff512b4b82ada8f9bc944f5ef0.jpg" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">Make a big impact with small indoor plants</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/outdoor/lighting/get-glowing-this-christmas-with-outdoor-lights"><div class="magazine_feature_desc_2_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/be2f6ebf7f5d4879a9c4bdbd9626755a.jpg" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">Get glowing this Christmas with outdoor lights</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+          '<a href="https://www.bunnings.com.au/diy-advice/home-improvement/planning-and-projects/create-your-summer-vibe-mediterranean-style"><div class="magazine_feature_desc_3_72"><div class="magazine_feature_img_sec_bun72"><img src="//cdn.optimizely.com/img/15721220395/b06c3bae129f41d5bc9b8c09c3dfcc9d.png" alt="trending_img"/></div><div class="magazine_feature_dtl_sec_bun72"><span class="magazine_feature_dtl_text_bun72">Create your summer vibe, Mediterranean style</span><span class="magazine_feature_dtl_arrow_bun72"><svg class="shop_button_chevron"><use xlink:href="#icon-chevron-guillemet"></use></svg></span></div></div></a>'
+        '</div>'
+      '</div>'
+      '';

    return html;
  }

  function appendHtml(html, device) {
    if (device === 'mobile') {
      var mobileDiv = document.querySelector('.breadcrumbs');
      mobileDiv.parentNode.after(html, mobileDiv);
    } else {
      var carousel = document.querySelector('.heading-layout');
      carousel.before(html, carousel);
    }
  }

  function addBodyClass() {
    document.body.classList.add('bun072');
  }

  if (isMobile()) {
    utils
      .waitForElement('.breadcrumbs')
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
