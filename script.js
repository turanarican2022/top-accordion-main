const faqHeaders = document.querySelectorAll(".faq-header");

const toggleOpenFAQBody = function () {
  faqHeaders.forEach((header) => {
    let thisHeader = header.parentNode;
    if (thisHeader !== this.parentNode) {
      thisHeader.firstElementChild.classList.remove("faq-header-active");
    } else {
      thisHeader.firstElementChild.classList.toggle("faq-header-active");
    }
  });
};

faqHeaders.forEach((header) => {
  header.addEventListener("click", toggleOpenFAQBody);
});

document.activeElement.blur();
