document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Закрываем другие открытые вопросы
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-answer").setAttribute("aria-hidden", "true");
        }
      });

      // Переключаем текущий вопрос
      item.classList.toggle("active");
      const isExpanded = item.classList.contains("active");
      question.setAttribute("aria-expanded", isExpanded);
      item.querySelector(".faq-answer").setAttribute("aria-hidden", !isExpanded);
    });
  });
});
