//     Tiny-slider

// const { on } = require("gulp");

// const slider = tns({
//         container: '.carousel__inner',
//         items: 1,
//         slideBy: 'page',
//         autoplay: false,
//         controls: false,
//         navPosition: 'bottom',
//         responsive: {
//                 640: {
//                   edgePadding: 20,
//                   gutter: 20,
//                   items: 1,
//                   controls: false
//                 },
//                 700: {
//                   gutter: 30
//                 },
//                 900: {
//                   items: 1
//                 }
//               }
// });

// document.querySelector('.prev').addEventListener('click', function () {
//         slider.goTo('prev');
// }); 

// document.querySelector('.next').addEventListener('click', function () {
//         slider.goTo('next');
// }); 



//                        Slick-slider

$(document).ready(function(){
        $('.carousel__inner').slick({
                speed: 1200,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel_prev_arrow.png"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel_next_arrow.png"></button>',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                          }
                          
                        },
                        {
                          breakpoint: 992,
                          settings: {
                                  dots: true,
                                  arrows: false,  
                                  }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false
                          }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                ]
        });

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
                $(this)
                  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
              });
        
        // $('.catalog-item__link').each(function(i) {
        //   $(this).on('click', function(e) {
        //     e.preventDefault();
        //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //   });
        // });

        // $('.catalog-item__back').each(function(i) {
        //   $(this).on('click', function(e) {
        //     e.preventDefault();
        //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //   });
        // });

        function toggleSlide(item) {
          $(item).each(function(i) {
            $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
          });
        }
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');
        
        // Модальные окна

        $('[data-modal=consultation]').on('click', function() {
          $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modal__close').on('click', function() {
          $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

        $('.button_mini').each(function(i) {
          $(this).on('click', function(){
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
          });
        });

        // Можем удалить после того, как функцию ниже напишешь valideForm

        // $('#consultation-form').validate();
        // $('#consultation form').validate({
        //   rules: {
        //     name: {
        //       required: true,
        //       minlength: 2
        //     },
        //     phone: "required",
        //     email: {
        //       required: true,
        //       email: true
        //     }
        //   },
        //   messages: {
        //     name: {
        //       required: "Пожалуйста, введите Ваше имя",
        //       minlength: jQuery.validator.format("Введите {0} символа и более")
        //     },
        //     phone: "Пожалуйста, введите Ваш номер телефона",
        //     email: {
        //       required: "Пожалуйста, введите адрес эл.почты",
        //       email: "Неправильно введен номер почты"
        //     }
        //   }
        // });
        // $('#order form').validate();

        function valideForms(form) {
          $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 2
              },
              phone: "required",
              email: {
                required: true,
                email: true
              }
            },
            messages: {
              name: {
                required: "Пожалуйста, введите Ваше имя",
                minlength: jQuery.validator.format("Введите {0} символа и более")
              },
              phone: "Пожалуйста, введите Ваш номер телефона",
              email: {
                required: "Пожалуйста, введите адрес эл.почты",
                email: "Неправильно введен номер почты"
              }
            }
          });
        }
        valideForms('#consultation-form');
        valideForms('#consultation form');
        valideForms('#order form');

        $('input[name=phone]').mask("+7 (999) 999-99-99");
    
        $('form').submit(function(e) {
          e.preventDefault();

          if (!$(this).valid()) {
            return;  
          }

          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn(slow);
            $('form').trigger('reset');
          });
          return false;
        });

        // smooth scroll and pageup

        $(window).scroll(function() {
          if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });
        $('a[href=#up]').on('click', function() {

          const _href = $(this).attr('href');
      
          $('html, body').animate({
              scrollTop: $(_href).offset().top+"px"
          });
          return false;
      });

      new WOW().init();
      
});




//            Переменные JS

// var name = "Anna";
// let number = 7;
// const pi = 3.14;


// pi = 2; - 'выдает ошибку в консоли, так const нельзя присваивать другое значение

//  let leftBorderWidth = 200;


//             Типы данных

// number
// string запись в "",'',``
// boolean - true/false
// null
// undefined
// obj ниже пример введения
        // let obj = {
        //     name: 'apple',
        //     color: 'red',
        //     weight: 100
        // } 

// alert('Hello');
// confirm('Do you want to continue?');
// console.log(321);

// number = 7;
// console.log(number);

// let answer = confirm('Вам есть 18 лет?');
// console.log(answer);

// let secondAnswer = prompt('Вам есть 18 лет?', '');
// console.log(secondAnswer);


// console.log(2+10);
// console.log(2 - 'Hello');

// let isChecked = true,
//     isClosed = true;

// console.log(isChecked && isClosed);

// let isChecked = true,
//     isClosed = false;

// console.log(isChecked || isClosed);


//       Циклы

// if (2*4 == 3*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm('Вам есть 18 лет?');
// if (answer) {
//     console.log('Доступ получен')
// } else {
//     console.log('Доступ отклонен')
// }

// const num = 50;

// if (num < 49) {
//     console.log(Неправильно);
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Верно');       
// }

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

//      Функции

// function logging() {
//     console.log(123456789);
// }

// logging();


// function logging(a, b) {
//         console.log(a + b);
//     }
    
//     logging(3, 6);
//     logging(3, 7);



                              

