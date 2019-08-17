var btnMenu = document.querySelector(".menu");
	var menuList = document.querySelector(".nav-list");
	var menuUser = document.querySelector(".user-list");
	var btnOrder = document.querySelector(".product-week__button--order");
	var popup = document.querySelector(".modal");
	var overlay = document.querySelector(".overlay");
		
		btnMenu.addEventListener("click", function(evt){
		evt.preventDefault();
		menuList.classList.toggle("js-menu-show");
		menuUser.classList.toggle("js-menu-show");
		btnMenu.classList.toggle("js-menu-close");
	})
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

// for slider
  var btnPrev = document.querySelector(".slider__btn--prev");
  var btnNext = document.querySelector(".slider__btn--next");
  var slider = document.querySelector(".slider__inner");
if (slider && btnPrev && btnNext) {
    handleSlider();
  }

  function handleSlider() {

    var reviewShowClass = "slider__item--shown";
    var btnDisabledClass = "slider__btn--disabled";

    btnNext.addEventListener("click", function (ev) {
      ev.preventDefault();
      if (this.classList.contains(btnDisabledClass)) return;

      var currentReview = slider.querySelector("." + reviewShowClass);

      if (!currentReview) {
        console.log("no class: " + reviewShowClass);
        return;
      }

      var nextReview = currentReview.nextElementSibling;

      // check if there is no next review
      if (!nextReview) return;
      // check if next review is the last one
      if (!nextReview.nextElementSibling) {
        this.classList.add(btnDisabledClass);

      }
      btnPrev.classList.remove(btnDisabledClass);
      currentReview.classList.remove(reviewShowClass);
      nextReview.classList.add(reviewShowClass);
    });


    btnPrev.addEventListener("click", function (ev) {
      ev.preventDefault();
      if (this.classList.contains(btnDisabledClass))  return;

      var currentReview = slider.querySelector("." + reviewShowClass);

      if (!currentReview)return;

      var prevReview = currentReview.previousElementSibling;

      // check if there is no prev review
      if (!prevReview) return;
      // check if prev review is the first one
      if (!prevReview.previousElementSibling) {
        this.classList.add(btnDisabledClass);

      }
      btnNext.classList.remove(btnDisabledClass);
      currentReview.classList.remove(reviewShowClass);
      prevReview.classList.add(reviewShowClass);
    });

  }

  
		