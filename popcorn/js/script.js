"use strict";

// Lang 
$(document).on('click', '.js-lang', function () {
  var $parent = $(this).closest('.lang');
  $parent.toggleClass('show');
}); //   Burger

var burger = $('.js-burger'),
    navContent = $('.js-mob-menu'),
    activeClass = 'is-active';
burger.on('click', function (e) {
  if ($(this).hasClass(activeClass)) {
    $(this).removeClass(activeClass);
    navContent.removeClass(activeClass);
  } else {
    $(this).addClass(activeClass);
    navContent.addClass(activeClass);
  }
}); // Header Scroll

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});

if ($(window).scrollTop() > 100) {
  $(".header").addClass("active");
} // MODALS


var openModalButtons = $('[data-modal-target]'),
    closeModalButtons = $('[data-close-button]'),
    overlay = $('#overlay');
openModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).data('modalTarget');
    openModal(modal);
  });
});
closeModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).closest('.modal');
    closeModal(modal);
  });
});
overlay.on('click', function () {
  var modals = $('.modal.active');
  modals.each(function () {
    closeModal(this);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).addClass('active');
  overlay.addClass('active');
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).removeClass('active');
  overlay.removeClass('active');
} //header burger 


$('.header__burger').click(function (event) {
  $('.header__burger, .header__list').toggleClass('active');
  $('body').toggleClass('scroll-lock');
}); //heaer contacts

$('.header__contacts').click(function (event) {
  $(this).toggleClass('active');
});
new Swiper('.hero__slider .swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  sliesPerView: 'auto',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //Responses Slider

new Swiper('.responses__slider .swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: '2',
  // Navigation arrows
  navigation: {
    nextEl: '.responses__slider .swiper-button-next',
    prevEl: '.responses__slider .swiper-button-prev'
  }
});