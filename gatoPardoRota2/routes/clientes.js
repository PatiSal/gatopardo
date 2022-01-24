"use strict";
const express = require("express");
let router = express.Router();


// SQL -----------------------
var mysql = require("mysql");
// conection to MySQL
var pool = mysql.createPool({
    host: "saturno.esec.pt",
    user: "fsousa",
    password: "UgRN8FzXY4MMBvC5",
    database: "fsousa",
    charset: "utf8",
    multipleStatements: true
});

//TOPO DA PÁGINA CLIENTE

var topo_cliente = "";
topo_cliente += "<head>\n";
topo_cliente += "<html>\n";
topo_cliente += "<!DOCTYPE html>\n";
topo_cliente += "<title>Gato Pardo</title>\n";
topo_cliente += "<meta charset='utf8'>\n";
//FONTAWESOME
topo_cliente += "<script src='https://kit.fontawesome.com/41df33ebd8.js' crossorigin='anonymous'></script> \n";
// BOOTSTRAP 
topo_cliente += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>\n";
topo_cliente += " <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p' crossorigin='anonymous'></script><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js' integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF' crossorigin='anonymous'></script>\n";
//LOTTIE 
topo_cliente += "<script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>\n";
//LORDICON ICON-ANIMADOS
topo_cliente += "<script src='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'></script>\n";
//BOXICON
topo_cliente += "<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>\n";
// CSS 
topo_cliente += "<link rel='stylesheet' href='/main.css'>\n";
topo_cliente += "</head>\n";
topo_cliente += "<body>\n";

// NAVBARRA DOS FUNCIONARIOS 
var nav_cliente = "";
nav_cliente +="<nav class='sidebar close'>\n";
nav_cliente +="<header>\n";
nav_cliente +="<div class='image-text'>\n";
nav_cliente +="<a href ='homepageClientes' class='gatopardologo'>\n";
nav_cliente +="<span class='image'><img src='/Gato Pardo.svg' alt='logo'></span></a>\n";
nav_cliente +="<div class='text logo-text'><span class='name'>Gato Pardo</span><span class='profession'>Clientes</span></div></div>\n";
nav_cliente +="<i class='bx bx-chevron-right toggle'></i></header>\n";
nav_cliente +="<div class='menu-bar'>\n";
nav_cliente +="<div class='menu'>\n";
nav_cliente +="<ul class='menu-links'>\n";
//PRODUTOS
nav_cliente +="<li class='nav-link'><a href='produtos'><lord-icon class='icon' src='https://cdn.lordicon.com/rwotyanb.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Produtos</span></a></li>\n";
//ARTISTAS
nav_cliente +="<li class='nav-link'><a href='artistas'><lord-icon class='icon' src='https://cdn.lordicon.com/vqmupdxd.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Artistas</span></a></li>\n";
//EVENTOS
nav_cliente +="<li class='nav-link'><a href='eventos'><lord-icon class='icon' src='https://cdn.lordicon.com/kdruzgxz.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Eventos</span></a></li>\n";
//WISHLIST
nav_cliente +="<li class='nav-link'><a href='clientes'><lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Clientes</span></a></li>\n";
//VENDAS
nav_cliente +="<li class='nav-link'><a href='vendas'><lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Carrinho</span></a></li>\n";
//PERFIL
nav_cliente +="<li class='nav-link'><a href='perfil'><lord-icon class='icon' src='https://cdn.lordicon.com/dxjqoygy.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Perfil</span></a></li>\n";

nav_cliente +="</ul>\n";
nav_cliente +="</div>\n";
//LOGOUT
nav_cliente +="<div class='bottom-content'>\n";
nav_cliente +="<li class='logout'><a href='#'><lord-icon class='icon' src='https://cdn.lordicon.com/lywgqtim.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Logout</span></a></li>\n";
nav_cliente +="</div></div>\n";
nav_cliente +="</nav>\n";

var fundo_cliente ="";
fundo_cliente += "<script>\n";
fundo_cliente += "const body = document.querySelector('body'),\n";
fundo_cliente += "sidebar = body.querySelector('nav'),\n";
fundo_cliente += "toggle = body.querySelector('.toggle');\n";
fundo_cliente += "toggle.addEventListener('click' , () =>{sidebar.classList.toggle('close');})\n";
fundo_cliente += "</script>\n";
fundo_cliente +="</body>\n";
fundo_cliente += "</html>\n";

//rotas para /things/cars
router
    .route("/homepageClientes")
    .get((req, res) =>{

        var query = " SELECT id_produto, fotografia_produto, titulo_produto, categoria_produto, material_produto, dt_elaboracao_produto, preco_venda, preco_compra,stock_produto, nome_real_artista FROM Produto inner join Artista using(id_artista) order by nome_real_artista; SELECT id_produto FROM Produto_Compra;";
            runQuery(query, function (err, result, fields) {
            var html ="";
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home'>\n";
            html += "<div class='container'>\n";
            html += "<div class='product-items row'>\n";
            
            for (var i = 0; i < result[0].length; i++) {
            // COLOCAR AQUI O CICLO FOR PARA VER PRODUTOS
            html += "<div class='wrapper col-3'>\n";
            html += "<div class='product-card'>\n";
            html += " <a href='#exampleModal' class='product-link' data-bs-toggle='modal' data-bs-target='#exampleModal'>\n";
            //IMAGEM 
            html += "<img src='/uploads/" + result[0][i].fotografia_produto
            + "'/>\n";
            html += "<span class='overlay'></span>\n";
            //ID HIDDEN
            html += "<input type='hidden' value='" + req.query.id_produto + "' name='id_produto'>\n";
            //TITULO PRODUTO
            html += " <span class='info'><span class='title'>" + result[0][i].titulo_produto  + "</span>\n";
            //PREÇO PRODUTO
            html += "<span class='price'><span class='currencysymbol'>€</span>"+ result[0][i].preco_venda + "</span></span> </a>\n";
            html += " <div class='button-wrap d-inline-flex'>\n";
            
            html += " <a href='#exampleModal' class='view button' data-bs-toggle='modal' data-bs-target='#exampleModal'>\n";

            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/tyounuzx.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
            html += "<a href='#' class='wish button'>\n";
            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
            html += "<a href ='#' class='cart button'>\n";
            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
            html += "</div></div></div>\n";
        }

        //MODAL 
        html += "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>\n";
        html += "<div class='modal-dialog'>\n";
        html += "<div class='modal-content'>\n";
        html += "<div class='modal-header'>\n";
        html += " <div class='col-6'>\n";
        // IMAGEM // 
        html += "<img src='https://github.com/filipa-bastos/milVoz/blob/main/recursos/images/ginetta3.jpg?raw=true' class='imgmodal'></div>\n";
        //TITULO DO PRODUTO
        html += "<div class='col-5'><h4>Titulo do Produto</h4>\n";
        //WISHLIST ADICIONAR
        html += "<a href='#' class='wishmodal'>\n";
        html += "<lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:25px;height:25px'> </lord-icon></a>\n";
        //ADICIONAR AO CARRINHO
        html += "<a href ='#' class='cartmodal'>\n";
        html += "<lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:25px;height:25px'> </lord-icon></a>\n";
        //CLASSIFICAÇÃO MÉDIA DO PRODUTO
        html += "<span class='stars'>  00000</span></div>\n";
        //FECHAR MODAL - NÃO ESTÁ A FUNCIONAR 
        html += "<div class='col-1'><button class='btnclosemodal' type='button' data-bs-dismiss='modal' >X</button></div>\n";
        html += " </div>\n";
        html += "<div class='modal-body'><div class='container x'> <div class='row'>\n";
        //DATA DO PRODUTO
        html += "<div class='col-6'><p>Data</p></div>\n";
        html += "<div class='col-6'></div>\n";
        //CATEGORIA DO PRODUTO
        html += "<div class='row'><div class='col-6'><p>Categoria</p></div>\n";
        //MATERIAL UTILIZADO
        html += "<div class='col-6'><p>material utilizado</p></div>\n";
        //PREÇO DE VENDA
        html += "<div class='row'><div class='col-6'><p>preço</p></div>\n";
        //STOCK
        html += "<div class='col-6'><p>stock</p></div>\n";
        html += "<div class='row'><div class='row-12'>\n";
        //COMENTARIO/////
        html += "<div class='comments-container'><h1>Comentarios</h1><ul id='comments-list' class='comments-list'>\n";
        //colocar aqui o ciclo for para o ultimo comentário
        html += " <li><div class='comment-main-level'>\n";
        html += "<div class='comment-avatar'><img src='https://img.icons8.com/external-justicon-flat-justicon/344/external-cat-dog-and-cat-justicon-flat-justicon-1.png'></div>\n";
        html += " <div class='comment-box'><div class='comment-head'>\n";
        //NOME DO CLIENTE QUE COMENTOU
        html += "<h6 class='comment-name by-author'>NOME</h6><span class='star2'>00000</span></div>\n";
        //CONTEUDO DO COMENTARIO
        html += "<div class='comment-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure?</div>\n";
        html += "</div></div></li>\n";

        //AQUI PARA COMENTAR 
        html += " <li><div class='comment-main-level'>\n";
        html += "<div class='comment-avatar'><img src='https://img.icons8.com/external-justicon-flat-justicon/344/external-cat-dog-and-cat-justicon-flat-justicon-1.png'></div><div class='comment-box'><div class='comment-head'>\n";
        html += " <form action=''>\n";
        //ESTRELAS
        html += "<input class='star star-5' id='star-5' type='radio' name='star'/><label class='star star-5' for='star-5'></label><input class='star star-4' id='star-4' type='radio' name='star'/><label class='star star-4' for='star-4'></label><input class='star star-3' id='star-3' type='radio' name='star'/><label class='star star-3' for='star-3'></label><input class='star star-2' id='star-2' type='radio' name='star'/><label class='star star-2' for='star-2'></label> <input class='star star-1' id='star-1' type='radio' name='star'/><label class='star star-1' for='star-1'></label>\n";
        //TEXTAREA PARA COMENTAR
        html += "<textarea name='comentario' id='comentario' cols='40' rows='2'></textarea>\n";
        html += "<button class='comentbtn'>Comentar</button></form>\n";
        html += " </div></div></li>\n";
        html += "</ul></div></div></div>\n";
        html += " <div class='modal-footer'>\n";
        html += "</div></div>\n";
        
            //ACABA AQUI 
            html += "</div></div></div>\n";
            html += "</section>\n";
            html += fundo_cliente;
            res.send(html)
        });
    });  
    
    






    
router
    .route("/cars/:carsid")
    .get((req, res) =>{});

//******************************************************************************************************************/
// função para a execução das queries, garantindo que o código que depende dos seus resultados aguarda pelos mesmos
function runQuery(query, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error(err);
        }
        connection.query(query, function (err, result, fields) {
            if (err) {
                console.error(err);
            }
            connection.release();
            return callback(err, result, fields);
        });
    });
}

module.exports = router;