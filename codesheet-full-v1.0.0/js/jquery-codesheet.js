/* getcodesheet.com | jQuery CS v1.0.0 | MIT License | https://github.com/josfdo */


$(document).ready(function() {

    //[ES]
    /*
    ******************* 
    * Atributos "data". 
    *******************
    */

    //[EN]
    /*
    ********************
    * "Data" attributes
    ********************
    */

    var fade = "fade";
    var slide = "dropdown";
    var slideSmooth = "dropdown-smooth";
    var fade_slide = "fade-dropdown";
    var slide_fade = "dropdown-fade";
    var modal = "modal";

    //[ES]
    /*
    *************************************
    * Puntos de corte en máximos y mínimos
    ************************************* 
    */


    //[EN]
    /*
    *************************************
    * Breakpoints max and min
    ************************************* 
    */

    var tabMaxbreakpoint = "(max-width: 990px)";
    var tabMinbreakpoint = "(min-width: 990px)";

    //[ES]
    /*
    **********************************************************
    * Animación en activación/desactivación del botón 
    * de la barra de navegación.
    **********************************************************
    */

    //[EN]
    /*
    **********************************************************
    * Animation of activation/deactivation of 
    * button navbar menu
    **********************************************************
    */

    $(".line-trigger").on('click', function(e){
        $(this).toggleClass('active');

        e.preventDefault();
    });


    //[ES]
    /*
    **********************************************************
    * Gestión de atributos "data"
    **********************************************************
    */

    //[EN]
    /*
    **********************************************************
    * Data attributes management.
    **********************************************************
    */

    var drole = $('[data-role="toggle"]');

    if(drole) {

        for (var i = 0; i < drole.length; i++) {

            drole[i].addEventListener('click', function(e) {

                var event_ = $(this).data('toggle');
                var relate = $(this).data('relate');
                        

                if(event_ == modal) {

                    var html_body = "body, html";

                    $(relate).show();

                    $(html_body).css({
                        'overflow':'hidden'
                    });

                    //[ES]
                    /*
                    **********************************************************
                    * Gestión cierre de la modal
                    **********************************************************
                    */

                    //[EN]
                    /*
                    **********************************************************
                    * Modal close management
                    **********************************************************
                    */

                    $(".modal-close").on('click', function(e) {
                        $(".modal-backdrop").hide();
                        $(html_body).css({
                            'overflow':'auto'
                        });

                        e.preventDefault();
                    });

                    $(".modal-backdrop").click(function(e) {

                        if(!$(e.target).closest(".modal-container").length) {
                            $(".modal-backdrop").hide();
                            $(html_body).css({
                                'overflow':'auto'
                            });
                        }
                    });
                }

               
                if(event_ == slide) {
                    $(relate).slideToggle();
                }

                if(event_ == slideSmooth) {
                    $(relate).animate({
                        opacity: "toggle",
                        height: "toggle",
                        padding: "toggle"
                    });
                }

                if(event_ == fade) {
                    $(relate).fadeToggle();
                }

                if(event_ == fade_slide) {

                    if(window.matchMedia(tabMinbreakpoint).matches) {
                        $(relate).fadeToggle();
                    }

                    if(window.matchMedia(tabMaxbreakpoint).matches) {
                        $(relate).slideToggle();
                    }

                }else if(event_ == slide_fade) {

                    if(window.matchMedia(tabMinbreakpoint).matches) {
                        $(relate).slideToggle();
                    }

                    if(window.matchMedia(tabMaxbreakpoint).matches) {
                        $(relate).fadeToggle();

                    }
                }

                e.preventDefault();
            });
        }
    };


    //[ES]
    /*
    *************************************************
    * Controla el cierre en dropdown menú al hacer 
    * click en cualquier parte del documento.
    *************************************************
    */

    //[EN]
    /*
    *************************************************
    * Control closing in dropdown menu when doing
    * click anywhere in the document. 
    *************************************************
    */

    $(window).on('click', function(e) {

        if(!e.target.matches(".dropdown-toggle")) {

            var contentMenu = $(".dropdown-content");

            if(contentMenu != e.target) {
                
                $(contentMenu).hide();
            }
        }

        //[ES]
        /*
        ******************************************************
        * Controla el cierre en dropdown menú "hover" al hacer 
        * click en cualquier parte del documento, en pantallas
        * inferiores partiendo de los 990px.
        ******************************************************
        */

        //[EN]
        /*
        ******************************************************
        * Control closing in dropdown "hover" menu on click
        * anywhere in the document, on screens
        * bottom starting at 990px. 
        ******************************************************
        */

        if(window.matchMedia(tabMaxbreakpoint).matches) {

            if(!e.target.matches(".dropdown-toggle-hover")) {

                var menuHover = $(".dropdown-content-hover");
                var submenuHover = $(".dropdown-subcontent-hover");
    
                if(menuHover != e.target || submenuHover != e.target) {

                    $(menuHover).hide();
                    $(submenuHover).hide();
                }
            }
        }
    });


    //[ES]
    /*
    *********************************************************************
    * Conforme se abra un nuevo dropdown menú se cerrará el anterior 
    * que este abierto. 
    * Si ese dropdown menú contiene un submenú, este se 
    * cerrará también a su vez.
    *********************************************************************
    */

    //[EN]
    /*
    *********************************************************************
    * As a new dropdown menu is opened, the previous one will be closed
    * that it is open.
    * If that dropdown menu contains a submenu, it will be
    * will close as well. 
    *********************************************************************
    */

    $(".dropdown-toggle").on('click', function(e) {

        if(!$(e.target).closest(".dropdown-content").length) {
            $(".dropdown-content").hide();
            $(".dropdown-subcontent").slideUp();
        }

        $(this.getAttribute("data-relate")).show();
    });


    //[ES]
    /*
    *****************************************************************************
    * Conforme se abra un dropdown menú "hover", en pantalla inferiores a 990px 
    * se cerrará el anterior que este abierto, ya sea dropdown menú "hover" o no. 
    * Si ese dropdown menú contiene un submenú, este se cerrará también a su vez.
    *****************************************************************************
    */

    //[EN]
    /*
    *****************************************************************************
    * As a "hover" dropdown menu is opened, on screen less than 990px
    * The previous one that is open will be closed, whether it is dropdown menu 
    * "hover" or not.
    * If that dropdown menu contains a submenu, this will also be closed in turn.
    *****************************************************************************
    */

    if(window.matchMedia(tabMaxbreakpoint).matches) {

        $(".dropdown-toggle-hover").on('click', function(e) {

            if(!$(e.target).closest(".dropdown-content-hover").length) {
                $(".dropdown-content-hover").hide();
                $(".dropdown-subcontent-hover").slideUp();
            }
    
            $(this.getAttribute("data-relate")).show();
        });
    }

    //[ES]
    /*
    *********************************************************************
    * Controla el cierre de cualquier dropdown menú que este abierto
    * en el momento de abrir un dropdown menú "hover".
    *********************************************************************
    */
        
    //[EN]
    /*
    *********************************************************************
    * Control the closing of any dropdown menu that is open
    * at the time of opening a dropdown "hover" menu. 
    *********************************************************************
    */

    $(".dropdown-hover").on('mouseover', function(e) {

        if(!$(e.target).closest(".dropdown-content").length) {
            $(".dropdown-content").hide();
            $(".dropdown-subcontent").hide();
        }

        $(this.getAttribute("data-relate")).show();
    });

});