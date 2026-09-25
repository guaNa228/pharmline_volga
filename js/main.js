const scrollToTopDiv = document.querySelector('.topScroll');
const workingElement = document.querySelector('.title h1');


scrollToTopDiv.onclick = function() {
	console.log(this);
	document.querySelector('header').scrollIntoView({behavior: "smooth"});
}

const scrollDetection = () => {
	if (window.scrollY>window.innerHeight && window.innerWidth>=840) {
		scrollToTopDiv.classList.add('show');
	} else {
		scrollToTopDiv.classList.remove('show');
	}
};
window.addEventListener('scroll', scrollDetection);
window.addEventListener('resize', scrollDetection);
window.onload = scrollDetection;

const form = document.querySelector('.contact_inputs_wrapper');

function serviceToggle() {
	if (this.parentElement.nextElementSibling.classList.contains('opened')) {
		this.parentElement.nextElementSibling.classList.remove('opened');
		this.classList.add('openAnimation');
		this.parentElement.nextElementSibling.classList.add('closed');
		this.classList.remove('closeAnimation');
	} else {
		this.parentElement.nextElementSibling.classList.add('opened');
		this.classList.remove('openAnimation');
		this.parentElement.nextElementSibling.classList.remove('closed');
		this.classList.add('closeAnimation');
	}
}



function menuScroll(e) {
	e.preventDefault();
	document.querySelector(this.getAttribute('link')).scrollIntoView({
		behavior: 'smooth'
	});
}

var serviceOpenBtnArray = document.querySelectorAll('.serviceOpenBtn');

serviceOpenBtnArray.forEach(function (item) {
	item.onclick = serviceToggle;
})

const menuItems = document.querySelectorAll('ul.menu li a');


menuItems.forEach((value) => {
	value.onclick = menuScroll;
});

let work = document.getElementsByClassName('bottomMenuItem');
[].forEach.call(work, (item) => {
	item.onclick = function () {
		console.log('dick');
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	}
})