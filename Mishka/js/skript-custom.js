var btnMenu = document.querySelector(".menu");
	var menuList = document.querySelector(".nav-list");
	var menuUser = document.querySelector(".user-list");

		
		btnMenu.addEventListener("click", function(evt){
		evt.preventDefault();
		menuList.classList.toggle("js-menu-show");
		menuUser.classList.toggle("js-menu-show");
		btnMenu.classList.toggle("js-menu-close");
	})


