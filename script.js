"use strict";

const featuresArrowDown = document.querySelector(".features_arrow_down");
const companyArrowDown = document.querySelector(".company_arrow_down");
const featuresSubMenu = document.querySelector(".sub_menu1");
const companySubMenu = document.querySelector(".sub_menu2");
const button = document.querySelector(".dropdown_toggle");
const companyButton = document.querySelector(".company_dropdown_toggle");
const mobileFeaturesArrowDown = document.querySelector(".mobile_features_arrow_down");
const mobileCompanyArrowDown = document.querySelector(".mobile_company_arrow_down");
const mobileFeaturesSubMenu = document.querySelector(".mobile_sub_menu1");
const mobileCompanySubMenu = document.querySelector(".mobile_sub_menu2");
const mobileFeaturesButton = document.querySelector(".features_dropdown_toggle");
const mobileCompanyButton = document.querySelector(".mobile_company_dropdown_toggle");
const menuButton = document.querySelector(".mobile_nav_toggle");
const mobileNavSection = document.querySelector(".mobile_nav_section");
const body = document.querySelector("body");


mobileNavSection.style.display = "block";
mobileFeaturesSubMenu.style.display = "none";
mobileCompanySubMenu.style.display = "none";

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

mobileFeaturesButton.addEventListener("click", (e) => {
    if (mobileFeaturesSubMenu.style.display === "none") {
        mobileFeaturesSubMenu.style.display = "block";
        mobileFeaturesArrowDown.style.transform = "rotate(180deg)";
    } else {
        mobileFeaturesSubMenu.style.display = "none";
        mobileFeaturesArrowDown.style.transform = "rotate(0deg)";
    }
})

mobileCompanyButton.addEventListener("click", (e) => {
    if (mobileCompanySubMenu.style.display === "none") {
        mobileCompanySubMenu.style.display = "block";
        mobileCompanyArrowDown.style.transform = "rotate(180deg)";
    } else {
        mobileCompanySubMenu.style.display = "none";
        mobileCompanyArrowDown.style.transform = "rotate(0deg)";
    }
})

menuButton.addEventListener("click", (e) => {
    const visibility = mobileNavSection.getAttribute("data-visible");

    if(visibility === "false") {
        mobileNavSection.setAttribute("data-visible", true);
        menuButton.setAttribute("aria-expanded", true);
        body.style.backgroundColor = "var(--GRAY)";
    } else {
        mobileNavSection.setAttribute("data-visible", false);
        menuButton.setAttribute("aria-expanded", false);
        body.style.backgroundColor = "var(--WHITE)";
    }

    
})