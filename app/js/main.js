var winHeight = $(window).innerHeight();
var i_click = 0;
var tl;

$("#video").get(0).pause();

setTimeout(function(){
	TweenMax.to(".wrap", 0.5, {opacity:"0", scale:0, rotation:0.01, ease: Power2.easeOut,onComplete:function(){
		openAnim();
	}}); 
},3000);

$('video').on('ended',function(){
	$('.close').fadeOut(500);
	TweenMax.to(".content_video > .logo", 0.5, {opacity:"0", filter:"blur(40px)", rotation:0.01, ease: Power2.easeOut}); 
	setTimeout(function(){
		$('.content_video').fadeOut(500);
		$('body').css({overflowY:"auto"});
	},1000);
});


$(document).ready(function () {
  $("body").height(winHeight*$(".content").children("*").size());
  tl = new TimelineMax();
});

$(window).on('scroll',function(){

  var scrollTop = $(window).scrollTop();

  var _content = jQuery(".content").height();
  var _content = _content - (_content/3);

  var ratio = (scrollTop * 100) / _content;
  var number = Math.round(ratio);
  var ratio = number+"%";

  if((number>15)&&(number<35)){
  	TweenMax.to(".line2", 1, {opacity:"1", bottom:"86vh", rotation:0.01, ease: Power2.easeOut}); 
  }
  else if((number>35)&&(number<55)){
  	TweenMax.to(".line3", 1, {opacity:"1", bottom:"129vh", rotation:0.01, ease: Power2.easeOut}); 
  }
  else if((number>55)&&(number<85)){
  	TweenMax.to(".line4", 1, {opacity:"1", bottom:"172vh", rotation:0.01, ease: Power2.easeOut}); 
  }
  else if(number > 95){
  	TweenMax.to("h1", 1, {opacity:"1", top:"7vh", rotation:0.01, ease: Power2.easeOut}); 
  	TweenMax.to("h2", 1, {opacity:"1", top:"13.5vh", rotation:0.01, delay:0.4, ease: Power2.easeOut}); 
  }


  $(".dropscroll").css({bottom: ratio});

  $(".content").css('bottom',$(window).scrollTop()*-1);
});

$('.play').click(function(){
	$('.content_video').fadeIn(500);
	$('body').css({overflowY:"hidden"});
	setTimeout(function(){
		$('.close').fadeIn(500);
		TweenMax.to(".content_video > .logo", 0.5, {opacity:"1", filter:"blur(0)", rotation:0.01, ease: Power2.easeOut}); 
		setTimeout(function(){
			$('#video')[0].play(); 
		},500);
	},1000);
});

$('.close').click(function(){
	$('.close').fadeOut(500);
	TweenMax.to(".content_video > .logo", 0.5, {opacity:"0", filter:"blur(40px)", rotation:0.01, ease: Power2.easeOut}); 
	setTimeout(function(){
		$('#video')[0].pause(); 
		$('.content_video').fadeOut(500);
		$('body').css({overflowY:"auto"});
	},1000);
});

$('#video').click(function(){
	if(i_click==0){
		$('#video')[0].pause(); 
		$('.playpause').css({background:"url(/images/play.png) no-repeat", backgroundSize:"100%"});
		i_click=1;
	}
	else{
		$('#video')[0].play(); 
		$('.playpause').css({background:"url(/images/pause.png) no-repeat", backgroundSize:"100%"});
		i_click=0;
	}
});

$(".logo").click(function() {
    location.reload();
});

$('#video').mouseover(function(){
	TweenMax.to(".playpause", 0.5, {opacity:"1", scale:1, rotation:0.01, ease: Power2.easeOut}); 
})
$('#video').mouseout(function(){
	TweenMax.to(".playpause", 0.5, {opacity:"0", scale:0.5, rotation:0.01, ease: Power2.easeOut}); 
})


function openAnim(){

	$('body').css({overflowY:"auto"});

	TweenMax.to("header", 0.5, {height:"100vh", ease: Power2.easeOut});
	TweenMax.to(".scrollbar", 0.5, {height:"94vh", ease: Power2.easeOut});

	setTimeout(function(){
	
			TweenMax.to("header > .logo", 0.5, {opacity:"1", filter:"blur(0)", rotation:0.01, ease: Power2.easeOut}); 
			TweenMax.to("footer", 0.5, {opacity:"1", filter:"blur(0)", rotation:0.01, delay:0.5,ease: Power2.easeOut}); 
			TweenMax.to(".citation", 0.9, {opacity:"1", scale:1, marginLeft:"15%",rotation:0.01, delay:0.7,ease: Power2.easeOut});
			TweenMax.to(".play", 0.5, {opacity:"1", rotation:0.01, delay:0.5,ease: Power2.easeOut});
			TweenMax.to(".dropscroll", 0.5, {opacity:"1", scale:1, rotation:0.01, delay:0.5,ease: Power2.easeOut});
			TweenMax.to(".content", 0.9, {opacity:"1", scale:1, rotation:0.01, delay:0.5,ease: Power2.easeOut,onComplete:function(){
				TweenMax.to(".line1", 1, {opacity:"1", bottom:"43vh", rotation:0.01, delay:0.3, ease: Power2.easeOut}); 
			}});

	},500);

}

