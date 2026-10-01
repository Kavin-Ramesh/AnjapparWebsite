(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".mobile-menu-button");
  var menu = document.getElementById("mobile-menu");
  var year = document.querySelector(".footer-year");

  if (year) year.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!header) return;
    header.classList.toggle("site-header--scrolled", window.scrollY > 40);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
    });
  }

  document.querySelectorAll("[data-menu-filter]").forEach(function (filter) {
    var buttons = filter.querySelectorAll("button[data-filter]");
    var stack = filter.parentElement.querySelector(".menu-category-stack");
    if (!stack) return;
    var categories = stack.querySelectorAll(".menu-category");

    function apply(name) {
      buttons.forEach(function (button) {
        button.classList.toggle("is-active", button.getAttribute("data-filter") === name);
      });
      categories.forEach(function (category) {
        var match = name === "All" || category.getAttribute("data-category") === name;
        category.classList.toggle("is-hidden", !match);
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.getAttribute("data-filter"));
      });
    });
  });

  var params = new URLSearchParams(window.location.search);
  var note = document.querySelector("[data-form-note]");
  if (!note) return;
  if (params.get("sent") === "1") {
    note.textContent = "Your note is saved for our team. If you need us sooner, please call (858) 566-3700.";
    note.classList.remove("is-error");
  } else if (params.get("error")) {
    note.textContent = "Please check the form and try again. A name, email, and message are required.";
    note.classList.add("is-error");
  }
})();
