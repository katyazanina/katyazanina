"use strict";

//Прелоадер

(function () {
  let page = document.querySelector(".page");
  page.style.display = "none";

  let preloader = document.querySelector(".preloader");

  document.onreadystatechange = function () {
    // check the value - if it's 'complete' then everything has loaded
    if (document.readyState === "complete") {
      window.setTimeout(function () {
        page.style.display = "block";
        preloader.classList.add("preloader-hide");
      }, 1000);
      // add code here
    }
  };
})();

// Анимация элементов

(function () {
  // Получаем нужный элемент
  let animateItem = document.querySelectorAll(".animate");

  function visible(target) {
    // Все позиции элемента

    window.addEventListener("scroll", function () {
      let targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        // Получаем позиции окна
        windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

      if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
      ) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код

        target.style.opacity = "0";
        target.style.transform = "translateY(0px)";
        target.style.opacity = "1";
      } else {
        // Если элемент не видно, то запускаем этот код
      }
    });
  }
  // Запускаем функцию при прокрутке страницы
  for (let i = 0; i < animateItem.length; i++) {
    visible(animateItem[i]);
  }

  // window.addEventListener("scroll", function () {
  // 	for (let i = 0; i < items.length; i++) {
  // 		visible(items[i], animateClass);
  // 	}
  // });

  // for (let i = 0; i < items.length; i++) {
  // 	visible(items[i], animateClass);
  // }
})();

// Слайдер на главном экране

(function () {
  function hideBg(bg) {
    bg.classList.remove("mainscreen__bg--check");
  }
  function showBg(bg) {
    bg.classList.add("mainscreen__bg--check");
  }
  function selectTitle(title) {
    title.classList.add("mainscreen__title--check");
  }
  function unselectTitle(title) {
    title.classList.remove("mainscreen__title--check");
  }

  function toChangeBgOnHover(title, bg, bgChoise, titleChoise) {
    let titleChekout = titleChoise.classList.contains(
      "mainscreen__title--check"
    );
    let bgCheckout = bgChoise.classList.contains("mainscreen__bg--check");

    title.addEventListener("mouseover", function () {
      selectTitle(title);
      showBg(bg);

      if (titleChekout) {
        unselectTitle(titleChoise);
      }
      if (bgCheckout) {
        hideBg(bgChoise);
      }
    });

    titleChoise.addEventListener("mouseover", function () {
      if (titleChekout) {
        selectTitle(titleChoise);
        showBg(bgChoise);
      }
    });

    title.addEventListener("mouseout", function () {
      hideBg(bg);
      showBg(bgChoise);
      unselectTitle(title);
      selectTitle(titleChoise);
    });

    titleChoise.addEventListener("mouseout", function () {
      if (titleChekout) {
        selectTitle(titleChoise);
        showBg(bgChoise);
      }
    });
  }

  let bodyClass = document.querySelector("body");
  let bg = document.querySelectorAll(".mainscreen__bg");
  let title = document.querySelectorAll(".mainscreen__title");

  for (let i = 0; i < title.length; i++) {
    if (bodyClass.classList.contains("design")) {
      toChangeBgOnHover(title[i], bg[i], bg[0], title[0]);
    } else if (bodyClass.classList.contains("landscape")) {
      toChangeBgOnHover(title[i], bg[i], bg[1], title[1]);
    }
  }
})();

// Cмена фона в портфолио

(function () {
  let portfolioItem = document.querySelectorAll(".portfolio__item");

  let portfolioBg = document.querySelectorAll(".portfolio__bg");

  let titlePortfolio = document.querySelectorAll(".portfolio__item-title");

  let descPortfolio = document.querySelectorAll(".portfolio__item-desc");

  let toChangeBgOnHoverInPortfolio = function (item, bg, title, desc) {
    item.addEventListener("mouseover", function () {
      bg.style.opacity = "1";

      title.classList.add("portfolio__item-title--hover");
      desc.classList.add("portfolio__item-desc--hover");
    });
    item.addEventListener("mouseout", function () {
      bg.style.opacity = "0";

      title.classList.remove("portfolio__item-title--hover");
      desc.classList.remove("portfolio__item-desc--hover");
    });
  };

  for (let i = 0; i < portfolioItem.length; i++) {
    toChangeBgOnHoverInPortfolio(
      portfolioItem[i],
      portfolioBg[i],
      titlePortfolio[i],
      descPortfolio[i]
    );
  }
})();

// Наведения в процессах

(function () {
  let hoverItem1 = document.querySelectorAll(".process__item-number");
  let hoverItem2 = document.querySelectorAll(".process__item-title");

  let showDesc = document.querySelectorAll(".process__item-desc");
  let showImage = document.querySelectorAll(".process__item-image");

  let toShowProccesInfo = function (hoverItem, desc, img, title) {
    hoverItem.addEventListener("mouseover", function () {
      title.classList.add("js-process__item-title--move");
      desc.classList.remove("js-hide");
      img.classList.remove("js-hide");
    });
    hoverItem.addEventListener("mouseout", function () {
      desc.classList.add("js-hide");
      img.classList.add("js-hide");
      title.classList.remove("js-process__item-title--move");
    });
  };

  for (let k = 0; k < hoverItem1.length; k++) {
    toShowProccesInfo(hoverItem1[k], showDesc[k], showImage[k], hoverItem2[k]);
  }

  for (let k = 0; k < hoverItem2.length; k++) {
    toShowProccesInfo(hoverItem2[k], showDesc[k], showImage[k], hoverItem2[k]);
  }
})();
