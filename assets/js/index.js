document.addEventListener("DOMContentLoaded", () => {
  const imageWrappers_1 = document.querySelectorAll(
    "#advertisement .image-wrapper"
  );
  const imageWrappers_2 = document.querySelectorAll(
    "#commitment .image-wrapper"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.1 }
  );
  [...imageWrappers_1, ...imageWrappers_2].forEach((wrapper) => {
    observer.observe(wrapper);
  });
});
