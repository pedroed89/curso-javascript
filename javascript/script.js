var nombre = true;
var string = "string"
var numero = 56
var arreglo = [true, "string", 78] // 3 ----  arreglo[0] ------ arreglo[3]

var data = [{
        estado: "new",
        titulo: "Titulo1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    },
    {
        estado: "old",
        titulo: "Titulo2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    },
    {
        estado: "new",
        titulo: "Titulo3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    }
]

{
    /* <div class="card">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis.</p>
    </div> */
}

window.addEventListener("load", function(e) {


    var contenido = document.getElementById("contenido");
    // contenido <div class="content" id="contenido">
    // contenido.children  --- div.card 3
    //contenido.children[0] ---- <div class="card">
    //contenido.childre[0].children ---- h3,p
    //   a = 10    b = 9 
    // a += b   =>   a = a + b   => 

    /*
        if(condicion){
            //
        }
        else{
            //
        }

        condicion? true : false
        var mayor = a > b ? a : b

    
    */

    for (let index = 0; index < data.length; index++) {
        let titulo = data[index].estado === "new" ? "<h3>" + data[index].titulo + "</h3>" : '<h3 style="color:red">' + data[index].titulo + '</h3>'
        let body = "<p>" + data[index].body + "</p>"
        contenido.innerHTML += '<div class="card">' + titulo + body + '</div>'
    }


    var otro = document.getElementById("otro");
    for (let index = 0; index < otro.children.length; index++) {
        let valor = parseInt(otro.children[index].children[1].value);
        var color = "green";
        if (valor <= 0) {

            color = "red";
        }
        otro.children[index].children[0].style.color = color;
    }

    var otromas = document.getElementById("otromas");

    for (let index = 0; index < otromas.children.length; index++) {
        otromas.children[index].children[0].textContent += " extra**";
        otromas.children[index].children[1].value = index + 1;
    }

    var cards = document.getElementsByClassName("card");
    for (let index = 0; index < cards.length; index++) {
        if (index % 2 === 0) {
            cards[index].children[0].style.color = "blue"
        } else {
            cards[index].children[0].style.color = "black"
        }

    }

    let a = 5;
    let b = 10;

    console.log(`Quince es ${a + b} y no ${2 * a + b}.`);

    console.log("el numero " + 4 + " es par");
    console.log(`el numero ${4} es par`);

})

/*

Dado el siguiente arreglo

var data = [{
        visible: true,
        titulo: "Titulo1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    },
    {
        visible: false,
        titulo: "Titulo2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    },
    {
        visible: true,
        titulo: "Titulo3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sed velit omnis, iste molestiae ea corporis quam, ad repudiandae minima. Cupiditate neque accusantium consequatur quos rerum magnam distinctio corporis."
    }
]

- insertar en el html de manera dinamica solo los elementos que 
sean visible(visible = true)


*/