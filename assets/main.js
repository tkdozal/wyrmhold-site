(function () {
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var items = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) { items.forEach(function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(function (e) { io.observe(e); });

  var roll = document.getElementById("roll");
  if (roll) {
    var routes = document.getElementById("routes");
    var out = document.getElementById("rolled");
    var names = { dead: "The Road of the Dead: Cemetery, then Crypt.", wild: "The Road of the Wild: Forest, then Caves." };
    roll.addEventListener("click", function () {
      var pick = Math.random() < 0.5 ? "dead" : "wild";
      routes.classList.add("rolled");
      routes.querySelectorAll(".route").forEach(function (r) { r.classList.toggle("picked", r.dataset.route === pick); });
      out.textContent = "The dice give you " + names[pick];
      roll.textContent = "Roll again";
    });
  }
})();
