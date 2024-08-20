"use strict";

const featuresArrowDown = document.querySelector(".features_arrow_down");
const companyArrowDown = document.querySelector(".company_arrow_down");
const featuresSubMenu = document.querySelector(".sub_menu1");
const companySubMenu = document.querySelector(".sub_menu2");

featuresArrowDown.addEventListener("click", (e) => {
    featuresSubMenu.style.display = "block";
})
companyArrowDown.addEventListener("click", (e) => {
    companySubMenu.style.display = "block";
})