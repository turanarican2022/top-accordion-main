const faqHeaders = document.querySelectorAll(".faq-header");

const toggleOpenFAQBody = function () {
  faqHeaders.forEach((header) => {
    let thisHeader = header.parentNode;
    let thisHeaderChild = thisHeader.firstElementChild;
    if (thisHeader !== this.parentNode) {
      thisHeaderChild.classList.remove("faq-header-active");
    } else {
      thisHeaderChild.classList.toggle("faq-header-active");
    }
  });
};

faqHeaders.forEach((header) => {
  header.addEventListener("click", toggleOpenFAQBody);
});
