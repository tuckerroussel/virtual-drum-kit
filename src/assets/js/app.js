import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var browser = false, isIEorEdge = false, consoleLogging = false;
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectBrowser() {
  var ua = window.navigator.userAgent;
  if (consoleLogging) {
    console.log(ua);
  }

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    browser = 'IE ' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    isIEorEdge = true;
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    browser = 'IE ' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    isIEorEdge = true;
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    browser = 'Edge ' + parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    isIEorEdge = true;
  }

  var iphone = ua.indexOf('iPhone');
  var ipad = ua.indexOf('iPad');
  var safari = ua.indexOf('Safari');
  if (((iphone > 0) || (ipad > 0)) && (safari > 0)) {
    browser = 'iOS Safari';
    $('body').addClass('ios-safari');
    isIEorEdge = false;
  }
}


$(document).ready(function() {
	// Click, touch or keys to play!

	// get browser info
  detectBrowser();
  if (consoleLogging) {
    console.log('browser: ' + browser);
  }

  if (browser == 'iOS Safari') {
  	alert('It seems you\'re on an iOS device. You must click each drum to load the sound before the audio will play.');
  } else if (browser) {
  	alert('Your browser may not support the technology required for this demo.');
  }

	// crash varibles
	var crashCymbolAll = document.getElementById('crash');
	var crashCymbol = document.getElementById('crash');
	var crashAudio = document.getElementById('crash-audio');
	// ride varibles
	var rideCymbolAll = document.getElementById('ride');
	var rideCymbol = document.getElementById('ride');
	var rideAudio = document.getElementById('ride-audio');
	// hi tom drum varibles
	var hiTomDrumAll = document.getElementById('hi-tom');
	var hiTomDrum = document.getElementById('hi-tom');
	var hiTomAudio = document.getElementById('hi-tom-audio');
	// low tom drum varibles
	var lowTomDrumAll = document.getElementById('low-tom');
	var lowTomDrum = document.getElementById('low-tom');
	var lowTomAudio = document.getElementById('low-tom-audio');
	// hi-hat varibles
	var hiHatAll = document.getElementById('hi-hat');
	var hiHatPedal = document.getElementById('hi-hat-pedal');
	var hiHatTop = document.getElementById('hi-hat-top');
	var hiHatBottom = document.getElementById('hi-hat-bottom');
	var hiHatStandTop = document.getElementById('hi-hat-top');
	var hiHatOpenAudio = document.getElementById('hi-hat-open-audio');
	var hiHatClosedAudio = document.getElementById('hi-hat-closed-audio');
	// floor tom drum varibles
	var floorTomDrumAll = document.getElementById('floor-tom');
	var floorTomAudio = document.getElementById('floor-tom-audio');
	// snare drum varibles
	var snareDrumAll = document.getElementById('snare');
	var snareDrum = document.getElementById('snare');
	var snareAudio = document.getElementById('snare-audio');
	// kick drum varibles
	var kickDrumAll = document.getElementById('kick');
	var kickAudio = document.getElementById('kick-audio');
	// Autoplay button
	var autoButton = document.getElementById('auto-button');

	// crash wobble
	var crashtl = new TimelineMax({
		paused: true
	});
	crashtl.to(crashCymbol, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
	.to(crashCymbol,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

	// crash audio
	function playCrashAudio() {
		crashAudio.currentTime = 0;
		crashAudio.play();
	}

	// crash stuff
	function crash(){
		crashtl.restart();
		crashtl.play();
		playCrashAudio();
	}

	// Do the crash stuff when clicked
	crashCymbolAll.addEventListener("click", crash);


	// ride wobble
	var ridetl = new TimelineMax({
		paused: true
	});
	ridetl.to(rideCymbol, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
	.to(rideCymbol,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

	// ride audio
	function playRideAudio() {
		rideAudio.currentTime = 0;
		rideAudio.play();
	}

	// ride stuff
	function ride(){
		ridetl.restart();
		ridetl.play();
		playRideAudio();
	}

	// Do the ride stuff when clicked
	rideCymbolAll.addEventListener("click", ride);


	// right tom drum wobble
	var hiTomtl = new TimelineMax({
		paused: true
	});
	hiTomtl.to(hiTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
	.to(hiTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
	.to(hiTomDrumAll, 0.1, {rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut}, '0')
	.to(hiTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
	.to(hiTomDrumAll, 0.6, {rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut}, '-=0.4');

	// right tom audio
	function playHiTomAudio() {
		hiTomAudio.currentTime = 0;
		hiTomAudio.play();
	}

	// right tom stuff
	function hiTom(){
		hiTomtl.restart();
		hiTomtl.play();
		playHiTomAudio();
	}

	// Do the right tom stuff when clicked
	hiTomDrumAll.addEventListener("click", hiTom);

	// left tom drum wobble
	var lowTomtl = new TimelineMax({
		paused: true
	});
	lowTomtl.to(lowTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
	.to(lowTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
	.to(lowTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
	.to(lowTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
	.to(lowTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');

	// left tom audio
	function playLowTomAudio() {
		lowTomAudio.currentTime = 0;
		lowTomAudio.play();
	}

	// left tom tl stuff
	function lowTom(){
		lowTomtl.restart();
		lowTomtl.play();
		playLowTomAudio();
	}

	// Do the left tom stuff when clicked
	lowTomDrumAll.addEventListener("click", lowTom);

	// floor tom drum wobble
	var floorTomtl = new TimelineMax({
		paused: true
	});
	floorTomtl.to(floorTomDrumAll, 0.1, {scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut})
	.to(floorTomDrumAll, 0.1, {scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
	.to(floorTomDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	// floor tom audio
	function playFloorTomAudio() {
		floorTomAudio.currentTime = 0;
		floorTomAudio.play();
	}

	// floor tom tl stuff
	function floorTom(){
		floorTomtl.restart();
		floorTomtl.play();
		playFloorTomAudio();
	}

	// Do the floor tom stuff when clicked
	floorTomDrumAll.addEventListener("click", floorTom);

	// snare drum wobble
	var snaretl = new TimelineMax({
		paused: true
	});
	snaretl.to(snareDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
	.to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
	.to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	// snare audio
	function playSnareAudio() {
		snareAudio.currentTime = 0;
		snareAudio.play();
	}

	// snare tl stuff
	function snare(){
		snaretl.restart();
		snaretl.play();
		playSnareAudio();
	}

	// Do the snare stuff when clicked
	snareDrumAll.addEventListener("click", snare);

	// kick drum wobble
	var kicktl = new TimelineMax({
		paused: true
	});
	kicktl.to(kickDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
	.to(kickDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

	// kick audio
	function playKickAudio() {
		kickAudio.currentTime = 0;
		kickAudio.play();
	}

	// kick tl stuff
	function kick(){
		kicktl.restart();
		kicktl.play();
		playKickAudio();
	}

	// Do the kick stuff when clicked
	kickDrumAll.addEventListener("click", kick);

	var hiHatOpen = true;

	function toggleHiHat() {
		hiHatOpen = !hiHatOpen;

		if (hiHatOpen) {
			hiHatTop.style.transform = 'translateY(0px)';
		} else {
			hiHatTop.style.transform = 'translateY(7px)';
		}
	}

	hiHatPedal.addEventListener("click", toggleHiHat);

	// hi-hat wobble
	var hiHattl = new TimelineMax({
		paused: true
	});
	hiHattl.to([hiHatAll], 0.1, {rotation: -4, transformOrigin: "50% 50%"})
	.to([hiHatAll], 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});

	// high hat audio
	function playHiHatClosedAudio() {
		hiHatClosedAudio.currentTime = 0;
		hiHatClosedAudio.play();
	}
	function playHiHatOpenAudio() {
		hiHatOpenAudio.currentTime = 0;
		hiHatOpenAudio.play();
	}

	function hiHat() {
		hiHattl.restart();
		hiHattl.play();
		
		if (!hiHatOpen) {
			playHiHatClosedAudio();
		} else {
			playHiHatOpenAudio();
		}
	}

	// Do the hi-hat stuff when clicked
	hiHatAll.addEventListener("click", hiHat);

	// key guide
	var allKeys = document.getElementById('keys');
	var key66 = document.getElementById('key-66');
	var key72 = document.getElementById('key-72');

	// key wobble
	function animateKey(key) {
		var keytl = new TimelineMax({
			paused: true
		});
		keytl.to(key, 0.1, {scale: 1.1, transformOrigin: "50% 50%", ease: Expo.easeOut})
		.to(key, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});
					keytl.restart();
					keytl.play();
	}

	// key triggers
	document.onkeydown = function(e) {
		allKeys.classList.remove("hidden");
		var thisKeyID = 'key-' + e.keyCode;
		var thisKey = document.getElementById(thisKeyID);
		switch (e.keyCode) {
			case 85:
				ride();
				break;
			case 82:
				crash();
				break;
			case 68:
				hiHat();
				break;
			case 67:
				toggleHiHat();
				break;
			case 70:
				snare();
				break;
			case 66:
				kick();
				break;
			case 72:
				floorTom();
				break;
			case 89:
				lowTom();
				break;
			case 84:
				hiTom();
				break;
		}
	};

	toggleHiHat();
});