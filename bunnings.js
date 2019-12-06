HeroCarousel = function(e){
	var t, n, i=".hero-carousel", o=!1,
	r=function(){
		var e=t.find(".slick-dots button");
		e.length>0&&e.attr(window.Bunnings.TrackingV3.ATTRIBUTES.TRACK_EVENT,"scroll")
	},
	a=function(t,n,i){
		!1===o&&(o=!0,
		n.slickUnfilter(),
		i||(i=e(window).width()),
		i<=960?(n.slickFilter(".is-mobile"),
		void 0!==n.$slides&&1===n.$slides.length&&(n.options.centerMode=!1)):n.slickFilter(".is-desktop"),o=!1)
	},
	s = function(){
		var t = {
			adaptiveHeight: !1,
			arrows: !1,
			autoplay: !0,
			autoplaySpeed: 5e3,
			centerMode: !1,
			dots: !0,
			mobileFirst: !1,
			pauseOnFocus: !1,
			pauseOnHover: !0,
			pauseOnDotsHover: !0,
			slidesToShow: 1
		},
		n = {
			adaptiveHeight: !1,
			arrows: !1,
			centerPadding: "0px",
			autoplay: !0,
			autoplaySpeed: 5e3,
			centerMode: !1,
			dots: !0,
			mobileFirst: !1,
			pauseOnFocus: !1,
			pauseOnHover: !0,
			pauseOnDotsHover: !0,
			responsive:[
				{
					breakpoint:560,settings:{
						adaptiveHeight: !0,
						mobileFirst: !0,
						pauseOnFocus: !0,
						pauseOnHover: !0,
						pauseOnDotsHover: !1
					}
				},
				{
					breakpoint: 960,
						settings:{
							adaptiveHeight: !0,
							centerMode: !0,
							mobileFirst: !0,
							pauseOnFocus: !0,
							pauseOnHover: !0,
							pauseOnDotsHover: !1
						}
				}],
				slidesToShow: 1
		},
		o = e(i).find(".hero-carousel_carousel");
		p()&&o.on("init breakpoint", a),
		e(i+":not(.hero-carousel--lg)").find(".hero-carousel_carousel").slick(n),
		e(i+"--lg").find(".hero-carousel_carousel").slick(t),
		o.on("breakpoint", function(e,t,n){
			r()
		})
	}
	,c = function(){
		n.addClass("is-loaded")
	},
	l = function(){
		window.Bunnings.TrackingV3.setTrackingPosition(t)
	},
	d = function(t){
		e(".hero-carousel.hero-carousel--lg")&&(t.keydown(function(){
			t.addClass("hero-carousel_outline")
		}),
		t.click(function(){t.removeClass("hero-carousel_outline")}))
	},
	u = function(t){
		e(i+"--lg").find(".hero-carousel_image-overlay_link").on("mouseenter mouseleave", function(n){
			e(t).find(".slick-list").trigger(n.type)
		})
	},
	p = function(){
		return e(i).find("article.is-mobile, article.is-desktop").length>0
	};
	return{
		init:function(i){
			t=e(i),
			n=e(".hero-carousel_image-overlay_link"),
			l(),
			s(),
			r(),
			d(t),
			c(),
			u(t)
		}
	}
}