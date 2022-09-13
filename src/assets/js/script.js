$(document).ready(function(){

    let slideAtual = 1;
    let listaBanner = ["banner", "banner-1",  "banner-2"]

    setInterval(mudarBanner, 5000)

    function mudarBanner() {
        if (slideAtual > 0) {
            $("#carrossel-banner").removeClass(listaBanner[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel-banner").removeClass(listaBanner[(listaBanner.length)-1])
        }


        if (slideAtual == 1) {
            $("#imagem-banner").removeClass("imagem-banner")
            $("#imagem-banner").addClass("elemento-banner-desativado")
            $("#destaque-banner").removeClass("destaque-banner")
            $("#destaque-banner").addClass("elemento-banner-desativado")
            $("#mascara").removeClass("mascara")
            $("#mascara").addClass("elemento-banner-desativado")

        } else if (slideAtual == 0) {
            $("#imagem-banner").removeClass("elemento-banner-desativado")
            $("#imagem-banner").addClass("imagem-banner")
            $("#destaque-banner").removeClass("elemento-banner-desativado")
            $("#destaque-banner").addClass("destaque-banner")
            $("#mascara").removeClass("elemento-banner-desativado")
            $("#mascara").addClass("mascara")
        }

        
        $("#carrossel-banner").addClass(listaBanner[slideAtual])
        
        slideAtual+=1;

        if (slideAtual > (listaBanner.length - 1 )) {
            slideAtual = 0;
        }
       
    }

    $("#menu-sanduiche").click(function(){

        $("#menu").toggleClass("menu-ativo")

        // if($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            435:{
                items:2
            },
            992:{
                items:3
            },
    
            1200:{
                items:3
            }
        }
    });
})

function mostrarMenu(){
    let menu = document.getElementById("menu");

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// document.body.onresize = function() {
//     if (document.body.clientWidth > 768) {
//         let menu = document.getElementById("menu");
//         menu.style.display = 'flex';
//     } else {
//         menu.style.display = 'none';
//     }
// };

function entradaBusca(id){
    let busca = document.getElementById(id).value;
    console.log(busca);
}

function loginUsuario(){
    let login = document.getElementById("campo-login").value;
    let senha = document.getElementById("campo-senha").value;
    console.log(login);
    console.log(senha);
}

function cadastrarUsuario(){
    let email = document.getElementById("campo-email").value;
    console.log(email);
}