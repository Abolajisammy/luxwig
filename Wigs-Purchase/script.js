let toggleNavStatus = false;

let slideProfileBar = ()=> {

    let sideBarWrapper = document.querySelector(".sidebar");
    let sideBarUl = document.querySelector(".sidebar ul");
    let sideBarTrigger = document.querySelector(".hamburger");
    let sideBarTriggerClose = document.querySelector(".close-button");


    if (toggleNavStatus == false) {
        sideBarWrapper.style.width = "100%";
        sideBarWrapper.style.visibility = "visible";
        sideBarWrapper.style.opacity = "1";
        sideBarUl.style.opacity = "1";
        sideBarTrigger.style.display = "none";
        sideBarTriggerClose.style.display = "block";


        toggleNavStatus = true;
        
    }
    
    else if (toggleNavStatus == true) {
        sideBarWrapper.style.width = "0%";
        sideBarWrapper.style.visibility = "hidden";
        sideBarWrapper.style.opacity = "0";
        sideBarUl.style.opacity = "0";
        sideBarTrigger.style.display = "block";
        sideBarTriggerClose.style.display = "none";


        toggleNavStatus = false;
    }

    }

    let toggleSampleWrapper = ()=> {

    let wigStylingWrapper = document.querySelector(".wig-styling-samples");
    let sampleTriggerCloser = document.querySelector(".wig-styling-closer");
    let imagesWrapper = document.querySelector(".images-wrapper");
    let viewInstallButton = document.querySelector("#view-installation-samples-button");



    if (toggleNavStatus == false) {
        wigStylingWrapper.style.display = "block";
        wigStylingWrapper.style.opacity = "1";
        viewInstallButton.textContent = "Hide Samples"

        toggleNavStatus = true;
        
    }
    
    else if (toggleNavStatus == true) {
        wigStylingWrapper.style.display = "none";
        wigStylingWrapper.style.opacity = "0";
        viewInstallButton.textContent = "View Samples"

        toggleNavStatus = false;
    }

    }
 window.onload = function () {
    const overlayImg = document.querySelector(".overlay-image");
    const overlayCloseButton = document.querySelector(".overlay-close-button");
    const overlayWrapper = document.querySelector(".overlay-wrapper");

    document.querySelectorAll(".samplephotos").forEach(sampleImg => {
        sampleImg.addEventListener('click', () => {
            const fullSrc = sampleImg.getAttribute('data-full');
            overlayImg.src = fullSrc;
            overlayWrapper.style.display = "flex";
        })
    })
            overlayCloseButton.addEventListener('click', () => {
            overlayWrapper.style.display = "none";
        })
};
