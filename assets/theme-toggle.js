(function () {
  var root = document.documentElement;
  var storageKey = "theme";

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    var next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {}
  }

  function buttonLabel(theme) {
    return theme === "dark" ? "Switch to light" : "Switch to dark";
  }

  function init() {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";

    function refreshButton() {
      var theme = currentTheme();
      button.textContent = buttonLabel(theme);
      button.setAttribute("aria-label", buttonLabel(theme));
      button.setAttribute("title", buttonLabel(theme));
    }

    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      setTheme(next);
      refreshButton();
    });

    refreshButton();
    document.body.appendChild(button);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
