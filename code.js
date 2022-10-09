"use strict";

const featuresButton = document.querySelector(".features"),
companyButton = document.querySelector(".company"),
featuresOptions = document.querySelector(".options"),
companyOptions = document.querySelector(".company-options"),
menuButton = document.getElementById("responsive-menu-button"),
responsiveMenu = document.querySelector(".responsive-menu"),
closeMenuButton = document.getElementById("close"),
responsiveFeaturesButton = document.querySelector(".features-responsive-button"),
responsiveCompanyButton = document.querySelector(".company-responsive-button"),
responsiveFeaturesMenu = document.querySelector(".features-responsive"),
responsiveCompanyMenu = document.querySelector(".company-responsive"),
body = document.querySelector(".body"),
arrow = document.querySelectorAll(".arrow-down");

const displayMenu = (number,button,menu) =>{
	button.addEventListener("click",()=>{
		if (menu.style.display !== "flex") {
			menu.style.display = "flex";
			arrow[number].setAttribute("src","images/icon-arrow-up.svg")
		}
		else  {
			menu.style.display = "none";
			arrow[number].setAttribute("src","images/icon-arrow-down.svg")
		}
	})
},

ChangeResponsive = (number,button,menu) =>{
	button.addEventListener("click",()=>{
		if (menu.style.display !== "flex") {
			menu.style.display = "flex";
			menu.style.height = "100%";
			arrow[number].setAttribute("src","images/icon-arrow-up.svg")
		}else {
			menu.style.display = "none"
			menu.style.height = "0";
			arrow[number].setAttribute("src","images/icon-arrow-down.svg")
		}
	})
};

displayMenu(0,featuresButton,featuresOptions);
displayMenu(1,companyButton,companyOptions);

ChangeResponsive(2,responsiveFeaturesButton,responsiveFeaturesMenu);
ChangeResponsive(3,responsiveCompanyButton,responsiveCompanyMenu);


featuresOptions.addEventListener("click",(e)=>{
	e.stopPropagation();
	featuresOptions.style.display = "flex";
})
companyOptions.addEventListener("click",(e)=>{
	e.stopPropagation();
	companyOptions.style.display = "flex";
})

menuButton.addEventListener("click",()=>{
	responsiveMenu.style.display = "flex";
	body.style.overflow = "hidden";
})

closeMenuButton.addEventListener("click",()=>{
	responsiveMenu.style.display = "none";
	responsiveFeaturesMenu.style.display = "none";
	responsiveCompanyMenu.style.display = "none";
	body.style.overflow = "inherit";
})