const PRODUCTOS = [
  {
    imagen: "https://images.footlocker.com/is/image/FLEU/314217219204_04?wid=500&hei=500&fmt=png-alpha",
    marca: "Nike Original",
    modelo:"Air Max 1" ,
    precio: "$120.00" ,
    genero: "Hombre"
  },
    {
    imagen: "https://ciconceptstore.com/cdn/shop/products/new-balance-9060-blue-haze-4.png?v=1710507777" ,
    marca: "New Balance",
    modelo: "NB 9060",
    precio: "$80.00",
    genero:  "Mujer",
  },
    {
    imagen: "https://static.nike.com/a/images/t_default/019b0faa-5940-4d4d-b58c-82adeac866d1/NIKE+REVOLUTION+7.png",
    marca: "Nike Original",
    modelo: "Nike Revolution 7",
    precio: "$90.00",
    genero: "Mujer",
  },
    {
    imagen: "https://newcop.com/cdn/shop/files/adidas-forum-buckle-low-bad-bunny-blue-tint-wethenew-1_1_2000x_ba6144bd-b20c-44eb-a1c7-a760c68b63a7_grande.webp?v=1682788485" ,
    marca: "Adidas Original",
    modelo: "Forum Buckle",
    precio: "$100.00",
    genero: "Hombre" ,
  },
    {
    imagen: "https://sneakerrequest.com/cdn/shop/products/adidas-campus-00s-dark-green-cloud-white-sneakers-adidas-sneaker-request-548940.png?v=1701953796",
    marca: "Adidas Original",
    modelo: "Campus",
    precio: "$120.00",
    genero: "Unisex",
  },
    {
    imagen: "https://mthorshop.com/cdn/shop/products/327-casablanca-red-monogram.png?v=1715294389" ,
    marca: "New Balance",
    modelo: "NB 327",
    precio: "$120.00" ,
    genero: "Hombre" ,
  },
    {
    imagen:"https://static.nike.com/a/images/t_default/e61dba6e-5048-455e-a138-9876da6b734f/NIKE+DUNK+LOW+%28PSE%29.png ",
    marca: "Nike Original",
    modelo: "Nike Dunk Low",
    precio: "$100.00",
    genero: "Hombre",
  },
    {
    imagen: "https://ciconceptstore.com/cdn/shop/files/adidas-gazelle-indoor-bliss-pink-purple-3_1296x_651035bd-ad6e-4ba9-84e1-06f96fd74ff0.webp?v=1717243214",
    marca: "Adidas Original",
    modelo: "Gazelle",
    precio: "$90.00" ,
    genero: "Mujer",
  },
    {
    imagen: "https://static.flexdog.es/flexdog-1/products/images/6bcac525-bdd7-4304-b69a-d53f3c265dba.png?width=750&quality=40",
    marca: "Nike Original",
    modelo: "Air Max SC" ,
    precio: "$150.00" ,
    genero: "Hombre",
  },
    {
    imagen: "https://ciconceptstore.com/cdn/shop/files/adidas-handball-spezial-black-gum-1.png?v=1718616714" ,
    marca: "Adidas Original" ,
    modelo: "Handball Special",
    precio: "$120.00",
    genero: "Unisex",
  },
    {
    imagen: "https://cdn.shopify.com/s/files/1/2358/2817/files/Nike-Air-Force-1-Low-Valentine_s-Day-Fleece-_2024_-2.png?v=1705061176" ,
    marca: "Nike Original" ,
    modelo: "Air Force",
    precio: "$130.00",
    genero: "Unisex",
  },
    {
    imagen: "https://www.thenextsole.com/storage/images/U9060BUR.png",
    marca: "New Balance",
    modelo: "NB 9060",
    precio: "$100.00",
    genero: "Unisex",
  },
    {
    imagen: "https://images.footlocker.com/is/image/EBFL2/BB480SCA?wid=250&hei=250" ,
    marca: "New Balance",
    modelo: "NB 480",
    precio: "$150.00",
    genero: "Hombre",
  },
    {
    imagen: "https://adrenaline.pl/hpeciai/97e810cbf40b8ef27e724868c7ba847d/pol_pl_Buty-meskie-Nike-Full-Force-FB1362-100-54050_2.webp" ,
    marca: "New Balance",
    modelo: "Full Force Low",
    precio: "$70.00",
    genero: "Hombre",
  },
    {
    imagen: "https://www.nencinisport.it/images/width-250/end/articoli/nike_air_max_sc_2693333_thumb_03_20231102111826.png",
    marca: "Nike Original",
    modelo: "Air Max SC",
    precio: "$160.00",
    genero: "Hombre",
  },
    {
    imagen: "https://www.overkicks.com/cdn/shop/files/1_cb886187-6de0-4e54-a51b-2a730018865d.png?v=1732673721",
    marca: "Adidas Original",
    modelo: "Handball Spezial" ,
    precio: "$140.00",
    genero: "Unisex",
  }
];

let filtrosAplicados = {
  marca: "",
  genero: ""
};
let productosFiltrados = [];
let productosRandom = [];
const columnasFooter = [
  {
    titulo: "Compra con JD",
    items: [
      "Guía de tallas",
      "Buscador de tallas",
      "Descuento estudiantes",
      "Calendario lanzamientos",
      "Inscríbete a JDX",
      "JD Blog"
    ]
  },
  {
    titulo: "Atención al cliente",
    items: [
      "Preguntas Frecuentes",
      "Envíos y devoluciones",
      "Seguimiento de envíos",
      "Contacto"
    ]
  },
  {
    titulo: "Aviso legal",
    items: [
      "Términos y condiciones",
      "Promociones y condiciones",
      "Política de privacidad",
      "Política de cookies",
      "Ajustes de Cookies",
      "Accesibilidad"
    ]
  }
];

const main = document.createElement("main");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
body.insertBefore(main, footer);
const divProductos = document.createElement("div");
divProductos.classList.add("all-products");

const pintarHeader = () => {
  const header = document.querySelector("header");
  const divHeader = document.createElement("div");
  const imgLogo = document.createElement("img");
  const nav = document.createElement("nav");
  const iconoFiltros = document.createElement("img");
  const iconoCesta = document.createElement("img");
  const iconoUsuario = document.createElement("img");
  const divImagenJD = document.createElement("div");
  const imagenJD = document.createElement("img")

  imgLogo.src = "./assets/jd-sports.png";
  iconoFiltros.src = "./assets/ajustar.png";
  iconoCesta.src = "./assets/carrito.png"
  iconoUsuario.src = "./assets/user-1.png";
  imagenJD.src = "https://www.thesun.co.uk/wp-content/uploads/2024/05/newspress-collage-16onzriq2-1717194180236.jpg?1717197794&strip=all&quality=100&w=1920&h=1080&crop=1"

  divHeader.append(imgLogo);
  divHeader.append(nav);
  //---------------
  nav.append(iconoFiltros);
  nav.append(iconoCesta);
  nav.append(iconoUsuario);
  //---------------
  divImagenJD.append(imagenJD);
  //---------------
  header.append(divHeader);
  header.append(divImagenJD);

  body.insertBefore(header, main);

  divHeader.classList.add("divHeader");
  divImagenJD.classList.add("imagenJD")


  
}

const pintarProductos = (productosParaMostrar) => {

    divProductos.innerHTML = '';
    for (producto of productosParaMostrar) {
      //Creamos los elementos
      
      const divCartaProducto = document.createElement("div");
      const divImagenProducto = document.createElement("div");
      const imagenProducto = document.createElement("img");
      const divInfoProducto = document.createElement("div");
      const marca = document.createElement("p");
      const divModeloyPrecio = document.createElement("div");
      const modelo = document.createElement("h3");
      const precio = document.createElement("p");
      const botonComprar = document.createElement("button");
      //Damos contenido
        imagenProducto.src = producto.imagen;
        marca.textContent = producto.marca;
        modelo.textContent = producto.modelo;
        precio.textContent = producto.precio;
        botonComprar.textContent = "Comprar";

      //Les damos clases y atributos
        
        divCartaProducto.classList.add("product-card");
        divImagenProducto.classList.add("product-img");
        divInfoProducto.classList.add("product-info");
        divModeloyPrecio.classList.add("model-price");

      //Añadimos los elementos hijos
        divCartaProducto.append(divImagenProducto);
        divCartaProducto.append(divInfoProducto);

        divImagenProducto.append(imagenProducto);

        divInfoProducto.append(marca);
        divInfoProducto.append(divModeloyPrecio);
        divInfoProducto.append(botonComprar);

        divModeloyPrecio.append(modelo);
        divModeloyPrecio.append(precio);
      //Lo añadimos al main
        divProductos.append(divCartaProducto)
        main.append(divProductos);
    }
};

const pintarTexto = () => {
    const pExistente = document.querySelector(".sugerencias-texto")

    if (pExistente) {
      pExistente.remove();
    }

    const pSugerencias = document.createElement("p");

    pSugerencias.textContent = "No hay coincidencias para los filtros seleccionados. Te sugerimos estos productos:"

    pSugerencias.classList.add("sugerencias-texto")

    main.insertBefore(pSugerencias, divProductos);

}

const obtenerProductosAleatorios = (cantidad) => {
    productosRandom = [];
    const productosDisponibles = [...PRODUCTOS]; 

    
    const numProductosParaSeleccionar = Math.min(cantidad, productosDisponibles.length);

    for (let i = 0; i < numProductosParaSeleccionar; i++) {
      
        const randomIndex = Math.floor(Math.random() * productosDisponibles.length);

        productosRandom.push(productosDisponibles[randomIndex]);

        productosDisponibles.splice(randomIndex, 1);
    }

   
};
const aplicarFiltros = () => { 
    productosFiltrados = [];
    const pExistente = document.querySelector(".sugerencias-texto");
    if (pExistente) {
      pExistente.remove();
    }

    divProductos.innerHTML = '';

    for (const producto of PRODUCTOS) {
        const marcaCoincide = filtrosAplicados.marca === "" || producto.marca === filtrosAplicados.marca;
        const generoCoincide = filtrosAplicados.genero === "" || producto.genero === filtrosAplicados.genero;

        
        if (marcaCoincide && generoCoincide) {  
            if (filtrosAplicados.genero !== "Niños") { 
                 productosFiltrados.push(producto);
            }
        }
    }
       if (filtrosAplicados.marca === "" && filtrosAplicados.genero === "") {

        pintarProductos(PRODUCTOS); 
    } else if (productosFiltrados.length > 0) {
      
        pintarProductos(productosFiltrados);
    } else if (filtrosAplicados.genero === "Niños") {
       
        obtenerProductosAleatorios(3); 
        pintarProductos(productosRandom); 
        pintarTexto();
    }

    console.log(productosFiltrados)
}

const actualizarVistaDeProductos = () => {
  aplicarFiltros();
}
const crearBotones = () => {
   const divBotones = document.createElement("div");
   divBotones.classList.add("div-botones")

   const filtrosGenero = ["Hombre", "Mujer", "Niños"];
   const filtrosMarca = ["Nike Original", "Adidas Original", "New Balance"];

   for (const genero of filtrosGenero) {
    const boton = document.createElement("button");
    boton.textContent = genero;
    divBotones.append(boton);
    boton.addEventListener('click', () => {
      filtrosAplicados.genero = genero;
      aplicarFiltros();
    })
   };

   for (const marca of filtrosMarca) {
    const boton = document.createElement("button");
    boton.textContent = marca;
    divBotones.append(boton);
    boton.addEventListener('click', () => {
      filtrosAplicados.marca = marca;
      aplicarFiltros();
    });
   }

    const botonLimpiarFiltros = document.createElement("button");
    botonLimpiarFiltros.textContent = "Limpiar Filtros";
    divBotones.append(botonLimpiarFiltros);
    
    botonLimpiarFiltros.addEventListener('click', () => {
      filtrosAplicados.genero = "";
      filtrosAplicados.marca = "";
      productosFiltrados = [];
      aplicarFiltros();
      console.log(filtrosAplicados);
    })
    main.append(divBotones);
};

const pintarFooter = () => {
  const footer = document.querySelector("footer");

  columnasFooter.forEach(columna => {
    const divColumna = document.createElement("div");
    divColumna.classList.add("footer-columna");

    const h4 = document.createElement("h4");
    h4.textContent = columna.titulo;
    divColumna.appendChild(h4);

    columna.items.forEach(texto => {
      const p = document.createElement("p");
      p.textContent = texto;
      divColumna.appendChild(p);
    });

    footer.appendChild(divColumna);
  });
};




console.log(productosFiltrados);
console.log(filtrosAplicados);

pintarHeader();
crearBotones();
actualizarVistaDeProductos();
pintarFooter();










