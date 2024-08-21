"use strict";

const featuresArrowDown = document.querySelector(".features_arrow_down");
const companyArrowDown = document.querySelector(".company_arrow_down");
const featuresSubMenu = document.querySelector(".sub_menu1");
const companySubMenu = document.querySelector(".sub_menu2");
const button = document.querySelector(".dropdown_toggle");
const companyButton = document.querySelector(".company_dropdown_toggle");

button.addEventListener("click", (e) => {
    if (featuresSubMenu.style.display === "block") {
        featuresSubMenu.style.display = "none";
        featuresArrowDown.style.transform = "rotate(0deg)";
    } else {
        featuresSubMenu.style.display = "block";
        featuresArrowDown.style.transform = "rotate(180deg)";
    }
})
companyButton.addEventListener("click", (e) => {
    if (companySubMenu.style.display === "none") {
        companySubMenu.style.display = "block";
        companyArrowDown.style.transform = "rotate(180deg)";
    } else {
        companySubMenu.style.display = "none";
        companyArrowDown.style.transform = "rotate(0deg)";
    }
})