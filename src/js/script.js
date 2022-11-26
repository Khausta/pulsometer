
$(document).ready(function(){
        $('.carousel__inner').slick({
                speed: 1200,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel_prev_arrow.png"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel_next_arrow.png"></img></button>',
                responsive: [
                        {
                        breakpoint: 768,
                        settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true       
                        }
                }
                ] 
              });
      });



// var name = "Anna";
// let number = 7;
// const pi = 3.14;


// pi = 2; - 'выдает ошибку в консоли, так const нельзя присваивать другое значение

//  let leftBorderWidth = 200;

//  Типы данных
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

// function logging() {
//     console.log(123456789);
// }

// logging();


// function logging(a, b) {
//         console.log(a + b);
//     }
    
//     logging(3, 6);
//     logging(3, 7);



                              

