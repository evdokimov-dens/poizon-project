document.addEventListener("DOMContentLoaded", function () {
  // Первый FAQ блок (оставляем как есть)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-answer").setAttribute("aria-hidden", "true");
        }
      });

      item.classList.toggle("active");
      const isExpanded = item.classList.contains("active");
      question.setAttribute("aria-expanded", isExpanded);
      item.querySelector(".faq-answer").setAttribute("aria-hidden", !isExpanded);
    });
  });

  // Второй FAQ блок (jordan) - УПРОЩЕННАЯ ВЕРСИЯ
  const jordanFaqItems = document.querySelectorAll(".jordan-faq-item");

  jordanFaqItems.forEach((item) => {
    const question = item.querySelector(".jordan-faq-question");

    if (question) {
      question.addEventListener("click", function () {
        console.log("Jordan FAQ clicked"); // Для отладки

        // Закрываем все другие jordan FAQ
        jordanFaqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherQuestion = otherItem.querySelector(".jordan-faq-question");
            const otherAnswer = otherItem.querySelector(".jordan-faq-answer");
            if (otherQuestion) otherQuestion.setAttribute("aria-expanded", "false");
            if (otherAnswer) otherAnswer.setAttribute("aria-hidden", "true");
          }
        });

        // Переключаем текущий
        item.classList.toggle("active");
        const isExpanded = item.classList.contains("active");
        question.setAttribute("aria-expanded", isExpanded);
        const answer = item.querySelector(".jordan-faq-answer");
        if (answer) answer.setAttribute("aria-hidden", !isExpanded);
      });
    }
  });
});
