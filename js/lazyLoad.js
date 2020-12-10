//Lazy-loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazyLoad");
      var imageObserver = new IntersectionObserver(function(entries, observer) {

          entries.forEach(function(entry) {

              if (entry.isIntersecting) {
                  var image = entry.target;
                  image.classList.remove("lazyLoad");
                  if(image.tagName === "IMG") {
                      image.src = image.dataset.src;
                  } else {
                      if(image.dataset.desktopBg) {
                          if(window.innerWidth > 1400){
                              image.style.backgroundImage = image.dataset.lgBg;
                          } else if(window.innerWidth > 900) {
                              image.style.backgroundImage = image.dataset.desktopBg;
                          } else {
                              image.style.backgroundImage = image.dataset.mobileBg;
                          }
                      } else {
                          image.style.backgroundImage = image.dataset.src;
                      }
                  }
                  imageObserver.unobserve(image);
              }
          });
      });

      lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
      });
  } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazyLoad");

      function lazyload () {
          if(lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
          }

          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                      img.src = img.dataset.src;
                      //img.style.backgroundImage =   img.dataset.src;
                      img.classList.remove('lazyLoad');
                  }
              });
              if(lazyloadImages.length == 0) {
                  document.removeEventListener("scroll", lazyload);
                  window.removeEventListener("resize", lazyload);
                  window.removeEventListener("orientationChange", lazyload);
              }
          }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
  }
});
