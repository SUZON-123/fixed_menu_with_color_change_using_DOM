let navbar_color = document.getElementById("navbar_color");

window.onscroll = function(){
    let scrol_nav = window.scrollY;
    
    if(scrol_nav >= 100 & scrol_nav <= 560 ){
        navbar_color.classList.add("change_color");
    }else{
        navbar_color.classList.remove("change_color");
    }

    if(scrol_nav >= 560 & scrol_nav <= 1080 ){
        navbar_color.classList.add("change_color_one");
    }else{
        navbar_color.classList.remove("change_color_one");
    }

    if(scrol_nav >= 1080 & scrol_nav <= 1590 ){
        navbar_color.classList.add("change_color_two");
    }else{
        navbar_color.classList.remove("change_color_two");
    }

    if(scrol_nav >= 1590 & scrol_nav <= 2080 ){
        navbar_color.classList.add("change_color_three");
    }else{
        navbar_color.classList.remove("change_color_three");
    }

    if(scrol_nav >= 2080 & scrol_nav <= 2597 ){
        navbar_color.classList.add("change_color_four");
    }else{
        navbar_color.classList.remove("change_color_four");
    }

    if(scrol_nav >= 2597 & scrol_nav <= 3100 ){
        navbar_color.classList.add("change_color_five");
    }else{
        navbar_color.classList.remove("change_color_five");
    }

    if(scrol_nav >= 3100 & scrol_nav <= 3600 ){
        navbar_color.classList.add("change_color_six");
    }else{
        navbar_color.classList.remove("change_color_six");
    }

    
    if(scrol_nav >= 3600 & scrol_nav <= 4150 ){
        navbar_color.classList.add("change_color_seven");
    }else{
        navbar_color.classList.remove("change_color_seven");
    }

    if(scrol_nav >= 4150 & scrol_nav <= 4675){
        navbar_color.classList.add("change_color_eight");
    }else{
        navbar_color.classList.remove("change_color_eight");
    }


    if(scrol_nav >= 4675 & scrol_nav <= 5150){
        navbar_color.classList.add("change_color_nine");
    }else{
        navbar_color.classList.remove("change_color_nine");
    }


}