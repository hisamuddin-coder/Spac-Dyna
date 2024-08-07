"use strict";

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".nav-links-container");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const linksHeight = navLinks.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    navToggle.classList.add("close");
  } else {
    linksContainer.style.height = 0;
    navToggle.classList.remove("close");
  }
});
