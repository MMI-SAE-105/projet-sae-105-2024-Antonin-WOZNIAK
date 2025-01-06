for(carousel of document.getElementsByClassName("carousel-container")){
    carousel.setAttribute("data-slide", 1);
    carousel.setAttribute("data-total", carousel.getElementsByClassName("carousel-item").length);
    carousel.getElementsByClassName("carousel-item")[0].style.display = "block";
    for(prev of carousel.getElementsByClassName("prev")){
        prev.addEventListener("click", function(){
            parentIndex = 0;
            let carousel = this.parentElement;
            while(!carousel.classList.contains("carousel-container")){
                carousel = carousel.parentElement;
            }
            let slide = parseInt(carousel.getAttribute("data-slide"));
            let total = parseInt(carousel.getAttribute("data-total"));
            carousel.getElementsByClassName("carousel-item")[slide - 1].style.display = "none";
            slide = slide - 1;
            if (slide < 1){
                slide = total;
            }
            carousel.setAttribute("data-slide", slide);
            carousel.getElementsByClassName("carousel-item")[slide - 1].style.display = "block";
        });
    }
    for(next of carousel.getElementsByClassName("next")){
        next.addEventListener("click", function(){
            parentIndex = 0;
            let carousel = this.parentElement;
            while(!carousel.classList.contains("carousel-container")){
                carousel = carousel.parentElement;
            }
            let slide = parseInt(carousel.getAttribute("data-slide"));
            let total = parseInt(carousel.getAttribute("data-total"));
            carousel.getElementsByClassName("carousel-item")[slide - 1].style.display = "none";
            slide = slide + 1;
            if (slide > total){
                slide = 1;
            }
            carousel.setAttribute("data-slide", slide);
            carousel.getElementsByClassName("carousel-item")[slide - 1].style.display = "block";
        });
    }
}