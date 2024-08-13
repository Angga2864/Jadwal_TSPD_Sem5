// Add animations or interactivity here
document.addEventListener("DOMContentLoaded", function () {
  const courses = document.querySelectorAll(".course");

  courses.forEach((course) => {
    course.addEventListener("mouseenter", () => {
      course.style.transform = "scale(1.05)";
    });
    course.addEventListener("mouseleave", () => {
      course.style.transform = "scale(1)";
    });
  });
});
