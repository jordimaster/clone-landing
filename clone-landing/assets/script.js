// ScrollFadeIn

var fadeElements = document.getElementsByClassName('scrollfade-hidden');

function scrollFadeIn() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollfade-visible');
			element.classList.add('scrollfade-animate');
			element.classList.remove('scrollfade-hidden');
		}
	}
}

document.addEventListener('scroll', scrollFadeIn);
window.addEventListener('resize', scrollFadeIn);
document.addEventListener('DOMContentLoaded', function() {
	scrollFadeIn();
});



// MegaMenu Tabs

var tabLinks = document.getElementsByClassName('catjobs-tab-link');
var tabContents = document.getElementsByClassName('catjobs-tab-content');

function removeActiveClass() {
	for (var index = 0; index < tabLinks.length; index++) {
		tabLinks[index].classList.remove('active');
		tabContents[index].classList.remove('active');
	}
}

function showTab() {
	for (var index = 0; index < tabLinks.length; index++) {
		(function(index){ // closure
			tabLinks[index].addEventListener('mouseover', function(event) {
				removeActiveClass();
				tabLinks[index].classList.add('active');
				tabContents[index].classList.add('active');
			}, false);
		})(index);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	showTab();
});



// MegaMenu Mobile

function disableScroll() {
	var html = document.documentElement;
	var body = document.body;
	document.querySelector('.navbar-toggler').addEventListener('click', function() {
		html.classList.contains('overflow-hidden') ? html.classList.remove('overflow-hidden') : html.classList.add('overflow-hidden');
		body.classList.contains('overflow-hidden') ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	disableScroll();
});

function showSubMenu() {
	var subMenulinks = document.querySelectorAll('[data-submenu]');
	for (var index = 0; index < subMenulinks.length; index++) {
		(function(index){ // closure
			var element = subMenulinks[index];
			element.addEventListener('click', function(event) {
				var submenu = element.dataset.submenu;
				//console.log("document.querySelector('." + submenu + "')");
				document.querySelector('.' + submenu + '').classList.toggle('active');
			}, false);
		})(index);
	}
	var backLinks = document.getElementsByClassName('back-link');
	for (var index = 0; index < backLinks.length; index++) {
		(function(index){ // closure
			var element = backLinks[index];
			element.addEventListener('click', function(event) {
				element.parentNode.classList.toggle('active');
			}, false);
		})(index);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	showSubMenu();
});

function closeIcon() {
	document.querySelector('.navbar-toggler').addEventListener('click', function() {
		document.querySelector('.navbar-toggler-icon').classList.toggle('opacity-0');
		document.querySelector('.nav-close').classList.toggle('opacity-0');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	closeIcon();
});
