// $(function(){
	$(window).scroll(function() {
		if($('#wrapper-menu-head').offset().top >=53){
			$('.contain-menu').addClass('menuCrollFixedTop');
			$('div#wrapper-menu-head').addClass('menuHeadFixedTop');//.css("background-color","rgba(255, 255, 255, 0.93)");
			$('#wrapper-menu-head .loge-menu-top img').addClass('imgLogoFixedTop');
		}
		else{
			$('.contain-menu').removeClass('menuCrollFixedTop');
			$('div#wrapper-menu-head').removeClass('menuHeadFixedTop');//.css("background-color","#ffffff");
			$('#wrapper-menu-head .loge-menu-top img').removeClass('imgLogoFixedTop');
		}
		//-----------
		if($('#wrapper-menu-head').offset().top >=450){
			$('div#btnUpTop').addClass('btnUppingTop');
		}
		else{
			$('div#btnUpTop').removeClass('btnUppingTop');
		}
		//-----------
		var wrapImgAdvertOffsetTop=$('#wrapImgAdvert').offset().top;
		var addedClassEffectImgAdvert=false;
		var addedClassEffectrightBottom =false;
		//alert(wrapImgAdvertOffsetTop);
		if($('#wrapper-menu-head').offset().top >=(wrapImgAdvertOffsetTop-480) && addedClassEffectImgAdvert===false){
			$('#wrapImgAdvert').addClass('effectImgAdvert');
			addedClassEffectImgAdvert=true;
		}
		if($('#wrapper-menu-head').offset().top >=(wrapImgAdvertOffsetTop-250) && addedClassEffectrightBottom===false){
			$('#wrapImgAdvert .rightBottom').addClass('effectrightBottom');
			addedClassEffectrightBottom=true;
		}
		//-----------
		var wrapSectionSummerTop=$('#SectionSummer').offset().top;
		if($('#wrapper-menu-head').offset().top >=(wrapSectionSummerTop-250)){
			$('#SectionSummer').addClass('EffectSectionSummer');
		}
	});
	$('div#btnUpTop').click(function(){
		$('html,body').animate({scrollTop: 0}, 1000);
	});
	// window.addEventListener("resize", function(){
	// 	var widthMenu=$('.contain-menu').css('width');
	// 	alert(widthMenu);
	// });
	$('.menu-icon').click(function(){
		$('body').toggleClass('bodyToLeft');
		$('#menu-top').toggleClass('menuTopAppear');

	})
	// $('body:not(.menu-icon)').click(function(){
	// 	if($('.bodyToLeft')!=undefined){
	// 		$('body').removeClass('bodyToLeft');
	// 		$('#menu-top').removeClass('menuTopAppear');
	// 	}
	// });
	//------------
	var allNameProductSubmenuLevel2_8= document.querySelectorAll(".sub-menu-level2-8 .nameProduct a");
		allNameProductSubmenuLevel2_8.forEach(function(item, index, array) {
			//let name=item.childNodes[0].nodeValue;
			let name=$(allNameProductSubmenuLevel2_8[index]).text();
			$(allNameProductSubmenuLevel2_8[index]).append('<span class="tooltip">'+name+'</span>');
		});

	$('.sub-menu-level2-8 .img').hover(function(){
		$(this).children('div.LayerMo').toggleClass('hienLayerMo');
		$(this).parent().parent().children('.text').children('.nameProduct').children('a').toggleClass('nameProductHovered');
		$(this).parent().parent().children('.text').children('.nameProduct').children('a').children('.tooltip').toggleClass('tolltipMenulevel2_8Show');
	});
	$('.sub-menu-level2-8 .nameProduct a').hover(function(){
		$(this).parent().parent().parent().children('a').children('.img').children('div.LayerMo').toggleClass('hienLayerMo');
	});

	
	// ========================js cho click button search========================
	var isClickSearch=false;
	$('#ItemMenuSearch .iconSearch').click(function(){
		$('#ItemMenuSearch').children('.itemMenuSearch').toggleClass('showItemMenuSearch');
		if(isClickSearch==false){
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-times" id="btnSearch"></i>');
			isClickSearch=true;
		}
		else if(isClickSearch==true){
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-search" id="btnSearch"></i>');
			isClickSearch=false;
		}
		
	});
	window.onclick = function(event) {
		// khi form tìm kiếm hiện lên và click chuột ra ngoài form tìm kiếm thì cũng đóng form
			//	if (document.getElementsByClassName('showItemMenuSearch')[0]!==undefined && event.target !==$('#btnSearch path') && event.target!==$('#btnSearch') && event.target !==$('#ItemMenuSearch') && event.target!==$(".iconSearch") && event.target !==$('.itemMenuSearch') 

	       if (document.getElementsByClassName('showItemMenuSearch')[0]!==undefined && event.target !==$('#btnSearch path') 
	       	&& event.target.id !=='btnSearch' && event.target.id !=='ItemMenuSearch' && event.target.className !=="iconSearch"
	       	 && event.target.className[0] !=='itemMenuSearch'&& event.target.nodeName !=='INPUT'&& event.target.nodeName !=='path'
	       	 && event.target.className !=="input"&& event.target.className !=="itemMenuSearch showItemMenuSearch") 
	        {
	        //	alert('id là:'+event.target.id +"  class là:"+event.target.className+" node name"+event.target.nodeName);
	            $('#ItemMenuSearch').children('.itemMenuSearch').toggleClass('showItemMenuSearch');
	            if(isClickSearch==false){
					$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-times" id="btnSearch"></i>');
					isClickSearch=true;
				}
				else if(isClickSearch==true){
					$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-search" id="btnSearch"></i>');
					isClickSearch=false;
				}
	        }
	    }
		// $(":not(#ItemMenuSearch,.iconSearch,.itemMenuSearch)").click(function(){
		// 		$('#ItemMenuSearch').children('.itemMenuSearch').removeClass('showItemMenuSearch');
		// });

		//  ========================js cho slide========================
		var slideHienTai=1; //silde co thuoc tinh active
		var slideFirst=$('.oneSlide').first();
		var slideLastest=$('.oneSlide').last();
		$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
		$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
		$('.containBtnRight').click(function(envent){
				slideNext();
			});
		// setInterval(function(){ 
		// 	slideNext();
		// }, 5000);
		function slideNext(){
			slideHienTai+=1;
				if(slideHienTai===4){
					slideHienTai=1;
				}

				//thiết lập màu nền/ảnh nền cho các cái khung mở ra ở nút chuển slide, nó sẽ là màu nền/ảnh nền của slide tiếp theo
				if(slideHienTai===1){
					//đường dẫn ảnh sẽ tính từ file gọi file js này, ở đây là file index.html
					$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
				    $('#wrapperSlideAdvert .openRight').css("background-color",'');//remove attr background-color
					$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}
				else if(slideHienTai===2){
					$('#wrapperSlideAdvert .openRight').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openRight').css("background-color",'');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image",'');
				}
				else if(slideHienTai===3){
					$('#wrapperSlideAdvert .openRight').css("background-image",'');//remove attr background-image
					$('#wrapperSlideAdvert .openRight').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image","url('./images/slider_bg81.jpg')");
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}


				if(slideHienTai===1){
					slideLastest.addClass('bien_mat_sang_trai');
					slideFirst.addClass('di_vao_tu_ben_phai');
				}
				else{
					var slideSau=$('.slideActive').next();
					$('.slideActive').addClass('bien_mat_sang_trai');//.one('webkitAnimationEnd',function(envent)
					slideSau.addClass('di_vao_tu_ben_phai');
				}
				// setTimeout(function()//đợi 1s cho chạy song cái animation đi vào và biến mất
				// {
					 $('.bien_mat_sang_trai').removeClass('bien_mat_sang_trai');
					//bỏ class active của slide vừa biến mất sang trái
					$('.slideActive').removeClass('slideActive');
					//cho slide mới đi từ phải vào class active
					$('.di_vao_tu_ben_phai').addClass('slideActive').removeClass('di_vao_tu_ben_phai');
				//}, 1000);

		}

		$('.containBtnLeft').click(function(envent){
				slideHienTai-=1;
				if(slideHienTai===0){	
					slideHienTai=3;
				}

				if(slideHienTai===1){
					//đường dẫn ảnh sẽ tính từ file gọi file js này, ở đây là file index.html
					$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
				    $('#wrapperSlideAdvert .openRight').css("background-color",'');//remove attr background-color
					$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}
				else if(slideHienTai===2){
					$('#wrapperSlideAdvert .openRight').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openRight').css("background-color",'');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image",'');
				}
				else if(slideHienTai===3){
					$('#wrapperSlideAdvert .openRight').css("background-image",'');//remove attr background-image
					$('#wrapperSlideAdvert .openRight').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image","url('./images/slider_bg81.jpg')");
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}

				if(slideHienTai===3){
					slideLastest.addClass('di_vao_tu_ben_trai');
					slideFirst.addClass('bien_mat_sang_phai');
				}
				else{
					var slideTruoc=$('.slideActive').prev();
					$('.slideActive').addClass('bien_mat_sang_phai');
					slideTruoc.addClass('di_vao_tu_ben_trai');
				}
				//setTimeout(function(){
						$('.bien_mat_sang_phai').removeClass('bien_mat_sang_phai');
						$('.slideActive').removeClass('slideActive');
						$('.di_vao_tu_ben_trai').addClass('slideActive').removeClass('di_vao_tu_ben_trai');
					//}, 1000);
			});
		// ========================js for star yellow rate product ========================
		//---ko lấy được value
		// $('.wrapProductItem a.productItem .starXam .title .rate').val(function(index,value){
		// 	//alert(value);
		// });
		
		// $('.wrapProductItem a.productItem .starXam .title .rate').contents().filter(function () {
		// 	//if(this.nodeType === Node.TEXT_NODE)
		// 		//alert(this.nodeType.value); 
		// });

		var rateAll= document.querySelectorAll(".starXam .title .rate");
		rateAll.forEach(function(item, index, array) {
			//  console.log(item.childNodes[0].nodeValue);
			  var starValue=item.childNodes[0].nodeValue.toString().split('.');
			 // console.log(starValue[0]);
			  var intStar=parseInt(starValue[0]);
			  if(intStar===5){
			  	$(rateAll[index]).parent().parent().css('width','80px');
			  }
			  else if(intStar===4){
			  	$(rateAll[index]).parent().parent().css('width','64px');
				//rateAll[index].parentNode.parentNode.style.width="64px";
			  }
			  else if(intStar===3){
			  	$(rateAll[index]).parent().parent().css('width','48px');
			  }
			  else if(intStar===2){
			  	$(rateAll[index]).parent().parent().css('width','32px');
			  }
			  else if(intStar===1){
			  	$(rateAll[index]).parent().parent().css('width','16px');
			  }
			  else{
			  	$(rateAll[index]).parent().parent().css('width','80px');
			  }
		});

		 $('.listProducts').slick({
	      slidesToShow: 4,
	      slidesToScroll: 1,
	      nextArrow:$('#wrapSlideListProducts .btnRight'),
	      prevArrow:$('#wrapSlideListProducts .btnLeft'),
	      responsive: [
			    {
			        breakpoint: 1215,
			        settings: {
			          slidesToShow: 3,
			          slidesToScroll: 1
			          // infinite: true,
			          // dots: true
			        }
			      },
			      {
			        breakpoint: 768,
			        settings: {
			          slidesToShow: 1,
			          slidesToScroll: 1
			        }
			      }
			      // You can unslick at a given breakpoint now by adding:
			      // settings: "unslick"
			      // instead of a settings object
			    ]
	      // autoplay: true,
	      // autoplaySpeed: 2000
	      });
		// ========================js for menu top fixed right responsive========================
	 	 function subMenuLevel2_8_h3Title(){
		    let cart= $('.cart');
			 $('.cart').remove();
		     if($(window).width()<=1035){
				var textTitle=document.querySelectorAll(".sub-menu-level2-8 .componentTitle h3");
				if(textTitle[0].childNodes[0].nodeValue !=undefined)
					textTitle.forEach(function(item, index, array) {
						// $(textTitle[index].childNodes[0].nodeValue).wrap("<a href=''></a>");
							let textNode=textTitle[index].childNodes[0].nodeValue;
							$(textTitle[index].childNodes[0].nodeValue).remove();
							$(textTitle[index]).html("<a href='#'>"+textNode+"</a>");
						}
					);
				$('#wrap-cart-menu').append(cart);
			}
			else{
				var textTitle=document.querySelectorAll(".sub-menu-level2-8 .componentTitle h3 a");
				if(textTitle!=undefined)
					textTitle.forEach(function(item, index, array) {
								let textNode=textTitle[index].childNodes[0].nodeValue;
								$(textTitle[index]).parent('h3').html(textNode);
								$(textTitle[index]).remove();
							}
						);
				$('#wrap-cart-top').append(cart);
				
			}
		}
		subMenuLevel2_8_h3Title(); 
		$(window).resize(function(){
			subMenuLevel2_8_h3Title(); 
		});
		
		$('.icon-subMenu').click(function(){
			$(this).toggleClass('icon-subMenucClicked');
			$(this).toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('a').toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('.sub-menu-level2').children().children('.icon-subMenuTitleLevel2').toggleClass('itemSubmenu-level2-responsiveTitleShow');
			$(this).siblings('.sub-menu-level2').children().children('.itemSubmenu-level2-responsiveTitle').toggleClass('itemSubmenu-level2-responsiveTitleShow');
			$(this).siblings('.sub-menu-level2').children().children('.itemSubmenu-level2-responsiveTitle').siblings('ul').removeClass('listItemSubmenu-level2-show');
			$(this).siblings('.sub-menu-level2').children().children('.itemSubmenu-level2-responsiveTitle').children('a').removeClass('colorGreenItemMenuClicked');
			$(this).siblings('.sub-menu-level2').children().children('.itemSubmenu-level2-responsiveTitle').siblings('.icon-subMenuTitleLevel2').removeClass('icon-subMenuTitleLevel2Clicked');
			$(this).siblings('.sub-menu-level2').children().children('.itemSubmenu-level2-responsiveTitle').siblings('.icon-subMenuTitleLevel2').removeClass('colorGreenItemMenuClicked');

			$(this).siblings('.sub-menu-level2-2').children().children('ul').toggleClass('listItemSubmenu-level2-show');
			$(this).siblings('.sub-menu-level2-2').children().children('ul').children('li').children('.icon-subMenuTitleLevel2').toggleClass('itemSubmenu-level2-responsiveTitleShow');
		
			$(this).siblings('.sub-menu-level2-3').children().children('ul').toggleClass('listItemSubmenu-level2-show');
			$(this).siblings('.sub-menu-level2-3').children().children('ul').children('li').children('.icon-subMenuTitleLevel2').toggleClass('itemSubmenu-level2-responsiveTitleShow');		
		
			$(this).siblings('.sub-menu-level2-8').children().children('.contentItemSubmenu').toggleClass('contentItemSubmenuShow');
		});
		$('.icon-subMenuTitleLevel2').click(function(){
			$(this).toggleClass('icon-subMenuTitleLevel2Clicked');
			$(this).siblings('.itemSubmenu-level2-responsiveTitle').children('a').toggleClass('colorGreenItemMenuClicked');
			$(this).toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('ul').toggleClass('listItemSubmenu-level2-show');

			$(this).siblings('a.itemSubmenu-level2-3-title').toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('a.itemSubmenu-level2-3-title').parent('li').parent('ul').toggleClass('sub-menu-level2-3_Show');

			$(this).siblings('.sub-menu-level3').siblings('a').toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('.sub-menu-level3').children('ul').toggleClass('listItemSubmenu-level2-show');
			$(this).siblings('.sub-menu-level3').children().children().children('.icon-subMenuTitleLevel2').toggleClass('itemSubmenu-level2-responsiveTitleShow');
			
			$(this).siblings('.sub-menu-level4').siblings('a').toggleClass('colorGreenItemMenuClicked');
			$(this).siblings('.sub-menu-level4').children('ul').toggleClass('listItemSubmenu-level2-show');
		});
			
// });