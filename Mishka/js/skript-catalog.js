var btnMenu = document.querySelector(".menu");
	var menuList = document.querySelector(".nav-list");
	var menuUser = document.querySelector(".user-list");

	var popup = document.querySelector(".modal");
	var overlay = document.querySelector(".overlay");

	var btnBasket = document.querySelectorAll (".catalog__basket-link");
	var btnOrder = document.querySelector(".production-process__btn-order");
		
		btnMenu.addEventListener("click", function(evt){
		evt.preventDefault();
		menuList.classList.toggle("js-menu-show");
		menuUser.classList.toggle("js-menu-show");
		btnMenu.classList.toggle("js-menu-close");
	})
	// 	btnBasket.addEventListener("click", function(evt){
	// 	evt.preventDefault();
	// 	popup.classList.add ("js-modal-show");
	// 	overlay.classList.add("js-overlay-show");
	// 	btnBasket.addEventListener("click");

	// })
		btnOrder.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.add("js-modal-show");
		overlay.classList.add("js-overlay-show");
	})

		overlay.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.remove("js-modal-show");
		overlay.classList.remove("js-overlay-show");
	})

	for (var i = 0; i<btnBasket.length; i++) {
			btnBasket[i].addEventListener("click", function(evt){
			evt.preventDefault();
			popup.classList.add ("js-modal-show");
			overlay.classList.add("js-overlay-show");
			btnBasket[i].addEventListener("click");
		})
	}