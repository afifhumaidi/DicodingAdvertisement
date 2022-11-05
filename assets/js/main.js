document.addEventListener("DOMContentLoaded", function(event) { 
    const s_checkbox_menu_mobile = document.getElementById("checkbox-mobile");
    const s_navbar_menu_mobile = document.getElementById("navbar__menu-mobile");
    const s_navbar_menu = document.getElementById("navbar__menu");
    const s_navbar = document.getElementById("navbar");
    
    alert("Terdapat penerapan js untuk responsive menu mobile");

    // Penerapan js untuk membuat node menu clone di akhir navbar
    s_checkbox_menu_mobile.addEventListener('change', (e)=>{
        s_navbar_menu_mobile.classList.toggle("active")

        if(s_checkbox_menu_mobile.checked){
            let cloneMenu = s_navbar_menu.cloneNode(true);
            cloneMenu.classList.remove("navbar__menu");
            cloneMenu.id = "navbar__menu-clone";

            s_navbar.appendChild(cloneMenu);
        }
        else{
            document.getElementById("navbar__menu-clone").remove();
        }
    })

    // Bug fix saat width screen berubah dan menu mobile masih terbuka
    window.addEventListener('resize', function(event){
        let newWidth = window.innerWidth;

        if(newWidth > 424){
            if(document.getElementById("navbar__menu-clone")){
                document.getElementById("navbar__menu-clone").remove();
                s_navbar_menu_mobile.classList.toggle("active")
                s_checkbox_menu_mobile.checked = false;
            }
        }
    });
});