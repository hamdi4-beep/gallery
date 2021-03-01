var toggle = false;

window.onload = function() {
    document.querySelectorAll(".block").forEach(function(item) {
        item.onclick = (function(toggle) {
          return function() {
              if (!toggle) {
                  item.classList.remove("fadeIn");
                  item.classList.add("fadeOut");
                  toggle = true;
              } else {
                  item.classList.remove("fadeOut");
                  item.classList.add("fadeIn");
                  toggle = !toggle;
              }
          }
      }(toggle));
    });
};