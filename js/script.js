let checkBtn1 = false;
let checkBtn2 = false;
let checkBtn3 = false;
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", function(e) {
        let linkClasses = document.getElementById("header-link").classList;
        if (pageYOffset > 90) {
            document.getElementById("header").style.backgroundColor = "#ffffff";
            document.getElementById("header").style.boxShadow = "0 0 10px #000000";
            linkClasses.add("header-link__style");
        } else {
            document.getElementById("header").style.backgroundColor = "";
            document.getElementById("header").style.boxShadow = "";
            linkClasses.remove("header-link__style");
        }
    });
    document.getElementById("section-main").onmousemove = function(e) {
        if (!e) e = window.event;
        const x = e.pageX / document.body.clientWidth;
        const y = e.pageY / document.body.clientHeight;

        document.getElementById("paralax-layer2").style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
        document.getElementById("paralax-layer3").style.transform = "translate(-" + x * 40 + "px, -" + y * 40 + "px)";
    }
    document.getElementById("section5").onmousemove = function(e) {
        if (!e) e = window.event;
        const x = e.pageX / document.body.clientWidth;
        const y = e.pageY / document.body.clientHeight;

        document.getElementById("paralax-img2").style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
        document.getElementById("paralax-img3").style.transform = "translate(-" + x * 30 + "px, -" + y * 30 + "px)";
        document.getElementById("paralax-img4").style.transform = "translate(-" + x * 40 + "px, -" + y * 40 + "px)";
    }
    document.onmousemove = function(e) {
        if (!e) e = window.event;
        const x = e.pageX / document.body.clientWidth;
        const y = e.pageY / document.body.clientHeight;

        document.getElementById("section9-div-main-for-form__bg__img").style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
    }
    document.getElementById("container-main-list-item-btn__1").onclick = function(e) {
        if (checkBtn1) {
            document.getElementById("container-main-list-item-btn__1__img").src = "/img/btn1.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__1").style.display = "none";
            checkBtn1 = false;
        } else {
            document.getElementById("container-main-list-item-btn__1__img").src = "/img/btn2.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__1").style.display = "flex";
            checkBtn1 = true;
        }
    };
    document.getElementById("container-main-list-item-btn__2").onclick = function(e) {
        if (checkBtn2) {
            document.getElementById("container-main-list-item-btn__2__img").src = "/img/btn1.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__2").style.display = "none";
            checkBtn2 = false;
        } else {
            document.getElementById("container-main-list-item-btn__2__img").src = "/img/btn2.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__2").style.display = "flex";
            checkBtn2 = true;
        }
    };
    document.getElementById("container-main-list-item-btn__3").onclick = function(e) {
        if (checkBtn3) {
            document.getElementById("container-main-list-item-btn__3__img").src = "/img/btn1.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__3").style.display = "none";
            checkBtn3 = false;
        } else {
            document.getElementById("container-main-list-item-btn__3__img").src = "/img/btn2.png";
            document.getElementById("container-main-list-item container-main-list-item__answer__3").style.display = "flex";
            checkBtn3 = true;
        }
    };
});