//RESIZING LOGO ON SCROLL

function shrink(){
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 480){ // originally 380
			$(".quotik").removeClass().addClass("smallerLogo");
			$(".quotikWrapper").removeClass().addClass("smallerWrapper");
		} else{
			$(".smallerLogo").removeClass().addClass("quotik");
			$(".smallerWrapper").removeClass().addClass("quotikWrapper");
		}
	})
}

window.onload = shrink();

// H1 animation on scroll
$(window).on("scroll", function(){
	if($(window).scrollTop() > 0){
		$(".discover").removeClass().addClass("newH1");
	} else{
		$(".newH1").removeClass().addClass("discover");
	}
})

// Cube slide into place effect
$(window).on("scroll", function(){
	if($(window).scrollTop() > 400){
		$("#cube").show().animate({margin: "0%"}, 1000);
	} 
})

// Scrollspy
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').animate({
	'scrollTop': $target.offset().top
	}, 1000, 'swing');
});

// Quotik logo automatic colour change on stroke
var colors = ["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40"]; // change to affinity colours (see array below)
var active = 0;
setInterval(function(){
    $('.aroundStroke').css("stroke", colors[active]);
    active++;
    if (active == colors.length) active = 0;
}, 3000);

// Hover effect on logo name
$("path, text").hover(
	function(){
		$("text").addClass("textHover");
	}, function(){
		$("text").removeClass("textHover");
	}
);

// create variable
// math random should give a number from 1 to 6
// if the variable = number given by math random => transform in a particular way
// particular way depends on which face of the cube we have

var colours = [
	["rgb(244, 67, 54)", "rgb(233, 30, 99)", "rgb(156, 39, 176)", "rgb(103, 58, 183)", "rgb(63, 81, 181)", "rgb(33, 150, 243)", "rgb(3, 169, 244)", "rgb(0, 188, 212)", "rgb(0, 150, 136)", "rgb(76, 175, 80)", "rgb(139, 195, 74)", "rgb(205, 220, 57)", "rgb(255, 235, 59)", "rgb(255, 193, 7)", "rgb(255, 152, 0)", "rgb(255, 87, 34)", "rgb(121, 85, 72)", "rgb(158, 158, 158)", "rgb(96, 125, 139)"],
	['#FEF8C1', '#B3FEB2', '#B2FEED', '#B2DBFE', '#B2B3FE', '#E0B2FE', '#FEB2E2', '#FEB2B2', '#FED6B2'], // affinity designer logo automatic colours
	["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC"], // pale colours from materialuicolors.co (level: [100])
	["#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80"], // brighter colours from materialuicolors.co (A100)
	["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40"] // super flashy colours from materialuicolors.co (A200)
	["#FEF8C1", "#B3FEB2", "#B2FEED", "#B2DBFE", "#B2B3FE", "#E0B2FE", "#FEB2E2", "#FEB2B2", "#FED6B2", "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC", "#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80", "#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40"] // altogether
	];


var randomFace = 0;
var lastFace = 0;
$("#newQuoteButton").on("click", function(){
	$("#cubeContainer").css("perspective-origin", "50% 50%"); // toggle if want perspective all the time
	$(".quote-text").fadeOut(600).css({marginTop: "-100px"}); // NEW | or instead of hide() put fadeOut(800) | was marginTop: "10px"
	$(".quote-author").fadeOut(600).css({marginLeft: "-1000px"}); // NEW | or instead of hide() put fadeOut(800)
	randomFace = getNumber();
	$("#cube").removeClass().addClass("face" + randomFace);
	lastFace = randomFace;

	$(".front").css("background-color", randomColorArray1()); // create 6 arrays of colours to make sure no repeat of colours!
	$(".right").css("background-color", randomColorArray1()); // lighter colours + put in object form also changing of font colour to dark
	$(".bottom").css("background-color", randomColorArray1()); // dark colours + put in object form also changing of font colour to liight
	$(".top").css("background-color", randomColorArray1());
	$(".left").css("background-color", randomColorArray1());
	$(".back").css("background-color", randomColorArray1());

	console.log(randomFace);

	// // setTimeout(function() {
	// 	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
	// 	    $(".quote-text").hide().show(1300).text(json.quoteText);
	// 	    $(".quote-author").hide().show(1300).text(json.quoteAuthor);
	// 	    // $(".q").html(json.);
	//   	});
 //  	// }, 800);
 	// setTimeout(function(){
  // 	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
		//     $(".quote-text").fadeIn(100).text(json.quoteText);
		//     $(".quote-author").fadeIn(100).text(json.quoteAuthor);
		//     // $(".q").html(json.);
	 //  	});
  // 	}, 1000);

 	setTimeout(function(){
  	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
		    $(".quote-text").show().animate({marginTop: "60px"}, 600).text(json.quoteText); // was marginTop: "110px"
		    $(".quote-author").show().animate({marginLeft: "80px"}, 900).text("- " + json.quoteAuthor);
		    // $(".q").html(json.);
		    $("#tweet").on("click", function(){
				$(this).attr("href", 'https://twitter.com/intent/tweet?text=' + json.quoteText + " - " + json.quoteAuthor + " %23quote");
			});
	  	});
  	}, 1000);

});


function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomColorArray1(){
	var colours = ["rgb(244, 67, 54)", "rgb(233, 30, 99)", "rgb(156, 39, 176)", "rgb(103, 58, 183)", "rgb(63, 81, 181)", "rgb(33, 150, 243)", "rgb(3, 169, 244)", "rgb(0, 188, 212)", "rgb(0, 150, 136)", "rgb(76, 175, 80)", "rgb(139, 195, 74)", "rgb(205, 220, 57)", "rgb(255, 235, 59)", "rgb(255, 193, 7)", "rgb(255, 152, 0)", "rgb(255, 87, 34)", "rgb(121, 85, 72)", "rgb(158, 158, 158)", "rgb(96, 125, 139)"];
	var colours2 = ['#FEF8C1', '#B3FEB2', '#B2FEED', '#B2DBFE', '#B2B3FE', '#E0B2FE', '#FEB2E2', '#FEB2B2', '#FED6B2'];
	var colours3 = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC"];
	var colours4 = ["#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80"];
	var colours5 = ["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40"];
	var colours6 = ["#FEF8C1", "#B3FEB2", "#B2FEED", "#B2DBFE", "#B2B3FE", "#E0B2FE", "#FEB2E2", "#FEB2B2", "#FED6B2", "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC", "#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80", "#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40"];
	var num = Math.floor(Math.random() * 58); // number is equal to number of colours in array - 1
	return colours6[num];
}

//  FUNCTION THAT GENERATES RANDOM NUMBER WITH NO REPEAT
function getNumber(){
    return (getNumber.number = Math.floor(Math.random() * 6 + 1)) === getNumber.lastNumber ? getNumber() : getNumber.lastNumber = getNumber.number;
}


// $("button").on("click", function(){
// 	var lastFace = 0;
// 	var randomFace = function(){
// 		var getRandomFace = Math.floor(Math.random() * 6 + 1);
// 		if(getRandomFace != lastFace){
// 			$("#cube").removeClass().addClass("face" + getRandomFace);
// 			lastFace = getRandomFace;
// 		} else {
// 			randomFace();
// 		}
// 	};
// });