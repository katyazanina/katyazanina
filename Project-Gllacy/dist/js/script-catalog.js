	var btnsearch = document.querySelector("[name=button-search]");
	var popupSearch = document.querySelector(".modal-search");
	var search = document.querySelector("[name=search]");

	var btnenter = document.querySelector(".enter");
	var popupEnter = document.querySelector(".modal-enter");
	var emailEnter = document.querySelector("[name=email-enter]");
	var formEnter = popupEnter.querySelector("form");
	var password = popupEnter.querySelector("[name=password-enter]");

	var btnbasket = document.querySelector(".basket");
	var popupBasket = document.querySelector(".modal-basket-full");

	btnbasket.addEventListener("click", function(evt){
		evt.preventDefault();
		popupBasket.classList.toggle("js-modal-basket-show");
	})

	popupBasket.addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		popupBasket.classList.remove("js-modal-basket-show")
	})


	btnsearch.addEventListener("click", function(evt){
		evt.preventDefault();
		popupSearch.classList.toggle("js-modal-search-show");
		search.focus();
	})

	popupSearch.addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		popupSearch.classList.remove("js-modal-search-show")
	})


	btnenter.addEventListener("click", function(evt){
		evt.preventDefault();
		popupEnter.classList.toggle("js-modal-enter-show");
		emailEnter.focus();
	})

	popupEnter.addEventListener("mouseleave", function(evt){
		evt.preventDefault();
		popupEnter.classList.remove("js-modal-enter-show")
	})

	formEnter.addEventListener("submit", function(evt){
		if(!emailEnter.value || !password.value){
			evt.preventDefault();
			popupEnter.classList.add("js-modal-wrong");
			console.log("");
		}
	})


