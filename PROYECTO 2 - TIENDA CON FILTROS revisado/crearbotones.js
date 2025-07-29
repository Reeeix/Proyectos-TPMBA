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