<script>
document.addEventListener("DOMContentLoaded", function() {
  const tocLinks = document.querySelectorAll(".toc a");
  const sections = document.querySelectorAll("article section");

  function onScroll() {
    let currentSection = null;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 10) {
        currentSection = section;
      }
    });

    if (currentSection) {
      tocLinks.forEach(link => {
        link.removeAttribute("aria-current");
        link.style.backgroundColor = "";
        if (link.getAttribute("href").substring(1) === currentSection.id) {
          link.setAttribute("aria-current", "true");
          link.style.backgroundColor = "#007bff";
          link.style.color = "white";
        }
      });
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();  // Initialize the state on page load
});
</script>
