const baseMenu = document.getElementById("menu");

// for the carrousel

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

// for the menu
if(document.getElementById("MenuBarre")){
    document.getElementById("MenuBarre").addEventListener("click", function(){
        document.getElementById("MenuBarre").style.display = "none";
        document.getElementById("closeMenuBarre").style.display = "block";
        document.getElementById("menu").style.display = "flex";
        document.getElementById("menuHeader").style.borderBottomLeftRadius = "0";
        document.getElementById("menuHeader").style.borderBottomRightRadius = "0";
    });
}

if(document.getElementById("closeMenuBarre")){
    document.getElementById("closeMenuBarre").addEventListener("click", function(){
        document.getElementById("MenuBarre").style.display = "block";
        document.getElementById("closeMenuBarre").style.display = "none";
        document.getElementById("menu").style.display = "none";
        for(MenuBaseItem of document.getElementById("menu").children){
            MenuBaseItem.style.display = "block";
        }
        for(subMenu of document.getElementsByClassName("sousMenu")){
            subMenu.style.display = "none";
        }
        for(containSousMenu of document.getElementsByClassName("containSousMenu")){
            containSousMenu.style.display = "inline-block";
        }

        document.getElementById("menuHeader").style.borderBottomLeftRadius = "15px";
        document.getElementById("menuHeader").style.borderBottomRightRadius = "15px";
    });
}



for(subMenu of document.getElementsByClassName("BackSubMenu")){
    subMenu.addEventListener("click", function(){
        let subMenu = this.parentElement;
        while(!subMenu.classList.contains("sousMenu")){
            subMenu = subMenu.parentElement;
        }
        subMenu.style.display = "none";
        let parentMenu = subMenu.parentElement.parentElement;
        
        for(containSousMenu of document.getElementsByClassName("containSousMenu")){
            containSousMenu.style.display = "inline-block";
        }
        for(other of parentMenu.children){
            other.style.display = "inline-block";
        }
    });
}




for(let i=0; i < document.getElementsByClassName("containSousMenu").length; i++){
    let subMenuClicker = document.getElementsByClassName("containSousMenu")[i];
    subMenuClicker.addEventListener("click", function(){
        let subMenu = document.getElementsByClassName("sousMenu")[i];
        let parentMenu = this.parentElement.parentElement;
        for(other of parentMenu.children){
            if(other != this.parentElement){
                other.style.display = "none";
            }
        }
        this.style.display = "none";
        subMenu.style.display = "flex";
    });
}