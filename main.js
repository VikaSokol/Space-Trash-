
smoothScrool(".to-menu","#header",60)
smoothScrool(".menu","#dead-companions",20)
smoothScrool(".menu1","#final-stages",20)
smoothScrool(".menu2","#small-pieces",20)
smoothScrool(".menu3","#statellite-fragments",20)

function smoothScrool(clickedObj,target,speed){
    document.addEventListener("DOMContentLoaded", function () {
        const toMenuImage = document.querySelector(clickedObj);
        const header = document.querySelector(target);
      
        toMenuImage.addEventListener("click", function () {
          // Toggle the 'active' class for the header
          header.classList.toggle("active");
      
          // Calculate the distance to scroll
          const targetOffset = header.offsetTop;
          const duration = 2000; // 2 seconds
      
          // Perform the smooth scroll
          scrollTo(header, targetOffset, duration);
        });
      
        function scrollTo(element, to, duration) {
          const start = window.pageYOffset;
          const change = to - start;
          let currentTime = 0;
          const increment = speed; //speed
      
          function animateScroll() {
            currentTime += increment;
            const val = Math.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
            }
          }
      
          animateScroll();
        }
      
        // Easing function for smooth scroll
        Math.easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };
      });
}


// Отримуємо посилання на елемент картинки
var picture = document.getElementById('myPicture');

// Додаємо обробник події для натискання миші
picture.addEventListener('click', function() {
  // Додаємо або видаляємо клас "flipped" для зміни положення картинки
  picture.classList.toggle('flipped');
});

