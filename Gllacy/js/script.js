
	var popup = document.querySelector(".modal-feedback");
	var btnfeedback = document.querySelector(".button-feedback");
	var btnfeedbackclose = document.querySelector(".btn-close");
	var login = popup.querySelector("[name=login]");
	var email = popup.querySelector("[name=email]");
	var form = popup.querySelector("form");
	var btnfeedbacksend = popup.querySelector("[name=button-send]");
	var overlay = document.querySelector(".modal-overlay");

	btnfeedback.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.add("js-modal-feedback-show");
		login.focus();
		overlay.classList.add("js-overlay-show");
	})

	btnfeedbackclose.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.remove("js-modal-feedback-show");
		popup.classList.remove("js-modal-wrong");
		overlay.classList.remove("js-overlay-show");
	})

	overlay.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.remove("js-modal-feedback-show");
		popup.classList.remove("js-modal-wrong");
		overlay.classList.remove("js-overlay-show");

	})

	form.addEventListener("submit", function(evt){
		if(!login.value || !email.value){
			evt.preventDefault();
			popup.classList.remove("js-modal-wrong");
			popupEnter.offsetWidth = popupEnter.offsetWidth;
			popup.classList.add("js-modal-wrong");
		}
	})


	var btnsearch = document.querySelector("[name=button-search]");
	var popupSearch = document.querySelector(".modal-search");
	var search = document.querySelector("[name=search]");

	btnsearch.addEventListener("click", function(evt){
		evt.preventDefault();
		popupSearch.classList.toggle("js-modal-search-show");
		search.focus();
	})

	popupSearch.addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		popupSearch.classList.remove("js-modal-search-show")
	})

	var btnenter = document.querySelector(".enter");
	var popupEnter = document.querySelector(".modal-enter");
	var emailEnter = popupEnter.querySelector("[name=email-enter]");
	var formEnter = popupEnter.querySelector("form");
	var password = popupEnter.querySelector("[name=password-enter]");

	

	btnenter.addEventListener("click", function(evt){
		evt.preventDefault();
		popupEnter.classList.toggle("js-modal-enter-show");
		emailEnter.focus();
	})

	popupEnter.addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		popupEnter.classList.remove("js-modal-enter-show")
		popupEnter.classList.remove("js-modal-wrong");
	})

	formEnter.addEventListener("submit", function(evt){
		if(!emailEnter.value || !password.value){
			evt.preventDefault();
			popupEnter.classList.remove("js-modal-wrong");
			popupEnter.offsetWidth = popupEnter.offsetWidth;
			popupEnter.classList.add("js-modal-wrong");
		}
	})

