// dates script

// let day_1 = new Date,
//     day_2 = new Date
// function diffDates(day_one, day_two) {
//     return (day_one - day_two) / (60 * 60 * 24 * 1000);
// };
// var num = Math.floor(diffDates(day_2, day_1));
// console.log("дней прошло с 22 декабря 2020 - "+num);
// let array = (""+num).split("").map(Number)
// document.getElementById("number1").innerHTML = array[0];
// document.getElementById("number2").innerHTML = array[1];
// document.getElementById("number3").innerHTML = array[2];

$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
  
    if (current === next) {
      return false;
    } else {
      $('.blocks').find('.country[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 100);
    }
  });

const copyButton = document.querySelector('#frammyDisc')
copyButton.addEventListener('click', () => {
  window.navigator.clipboard.writeText("frammy#8251")
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: frammy#8251";
})
const copyButton2 = document.querySelector('#nimsDisc')
copyButton2.addEventListener('click', () => {
  window.navigator.clipboard.writeText("Niсk#0460")
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: Niсk#0460";
})
const copyButton3 = document.querySelector('#frammyTele')
copyButton3.addEventListener('click', () => {
  window.navigator.clipboard.writeText("@meedeexx")
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: @meedeexx";
})
const copyButton4 = document.querySelector('#nimsTele')
copyButton4.addEventListener('click', () => {
  window.navigator.clipboard.writeText("@NimsTail")
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: @NimsTail";
}) 
function outFunc () {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

const numbers_anim = document.querySelector(".numbers");
function anim_nums(e) {
  if (isScrolledIntoView(numbers_anim)) {
    // animation: counting 0.6s steps(10) forwards infinite
    const numbers = document.querySelectorAll(".numbers_window_digit");
    numbers.forEach(num => {
      num.style.animation = "counting 0.6s steps(10) forwards infinite"
      num.style.animationIterationCount = "2"
    })
    document.removeEventListener('scroll', anim_nums);
  }
}
document.addEventListener('scroll', anim_nums);

let main_subs = [
'В разработке...',
'Ну и зачем ты тыкаешь на все подряд?',
'Ну давай, понажимай',
'Ломай, мы же богатые',
'Только попробуй еще раз',
'Лучше бы на сервер зашел поиграть',
'Кнопка ниже, идиот',
'Ладно, держи питсу 🍕'
]
let subs_counter = 1;
$('#subs_click').on('click', function(e) {
  const sub = document.getElementById('subs_click');
  if (subs_counter >= main_subs.length) subs_counter = 0;
  sub.innerHTML = main_subs[subs_counter++];
})