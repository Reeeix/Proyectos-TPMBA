import './main.css';
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
    <div class="info">
        <div class="save-btn">
            <button>Guardar</button>
        </div>
        <div class="links">
            <a href=${item.links.html} class="full-link">${item.links.html}</a>
            <div>
                <a href=${item.urls.full} target="_blank" class="links-icon">
                    <img src="src/components/assets/subir.png" alt="Upload icon"/>
                </a>
                <a href="#null" class="links-icon">
                    <img src="src/components/assets/tres-puntos.png" alt="More icon"/>
                </a>    
            </div>
        </div>
    </div>
    </li>
    `
}

const searchPhotos = async (keyword) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&page=1&client_id=${accessKey}`
    );

    const data = await response.json();

    if (response.status !== 200) {
      console.error("❌ Error al hacer la búsqueda:", data);
      return [];
    }

    console.log("✅ Datos recibidos:", data.results);
    return data.results;
  } catch (error) {
    console.error("❌ Error inesperado:", error);
    return [];
  }
};

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = ""
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item)
  }
}

const printTemplate = async () => {
  document.querySelector("main").innerHTML = galleryTemplate();

  await new Promise(resolve => setTimeout(resolve, 0));

  const input = document.querySelector("#searchinput");
  const btn = document.querySelector("#searchbtn");
  const logo = document.querySelector("#logo");

  if (!input || !btn || !logo) {
    console.error("⛔ Los elementos del DOM no se encontraron.");
    return;
  }

  
  const images = await searchPhotos("moon");
  printItems(images);

 
  btn.addEventListener("click", async () => {
    const keyword = input.value.trim();
    if (keyword === "") return;

    const images = await searchPhotos(keyword);
    printItems(images);
    input.value = "";
  });

  
  logo.addEventListener("click", async () => {
    const images = await searchPhotos("moon");
    printItems(images);
  });
};

printTemplate();

export default printTemplate;