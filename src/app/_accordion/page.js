export function toggleAccordion(element, selector, activeClass = "active") {
  if (typeof document !== "undefined") {
    const target = element.querySelector(selector);
    const allElements = document.querySelectorAll(selector);

    allElements.forEach((el) => {
      if (el !== target) {
        el.style.maxHeight = null;  
        el.parentElement.classList.remove(activeClass);
      }
    });

    if (target && target.style.maxHeight) {
      target.style.maxHeight = null;
      element.classList.remove(activeClass);
    } else {
      if (target) {
        target.style.maxHeight = target.scrollHeight + "px";
        element.classList.add(activeClass);
      }
    }
  }
}
