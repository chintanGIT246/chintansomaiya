
// header-drawer

    function openSidebar() {
        document.getElementById("header-drawer").classList.toggle("openSidebar");
    }

// Service tab

    document.addEventListener('DOMContentLoaded', () => {

    const tabsespd = document.querySelectorAll('.tabs__btnpd');
    const tabsContent = document.querySelectorAll('.tabs__bodypd');

    function hideTabContent() {
        tabsContent.forEach(item => item.classList.remove('active'));
        tabsespd.forEach(item => item.classList.remove('active'));
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active');
        tabsespd[i].classList.add('active');
    }

    showTabContent(0);

    tabsespd.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideTabContent();
            showTabContent(index);
        });
    });

});


// faqs

document.addEventListener("DOMContentLoaded", function () {

    let faqtabname = document.querySelectorAll(".faq-tab-name");

    faqtabname.forEach(item => {
        item.addEventListener("click", () => {

            const active = document.querySelector(".faq-tab-name.active");

            if (active && active !== item) {
                active.classList.remove("active");
                active.nextElementSibling.style.maxHeight = null;
            }

            item.classList.toggle("active");

            const content = item.nextElementSibling;

            if (item.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }

        });
    });

});


// portfolio slider
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".portfolio-slider", {
        loop:true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            990: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            750: {
                slidesPerView: 1.8,
                spaceBetween: 20
            },
            0: {
                slidesPerView: 1.1,
                spaceBetween: 20
            },
        }
    });
});
