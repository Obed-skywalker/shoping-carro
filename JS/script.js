let swiperProjects = new Swiper(".mySwiper-1", {
    loop:true,
    spaceBetween:30,
    slidesPerView:1,
   
    autoplay: {                         //autoplay
     delay: 4000,  
   },   
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     pagination: {
       el: ".swiper-pagination",
     },
     keyboard: true,
   });  
   var swiper = new Swiper(".mySwiper-2", {
    loop:true,
    spaceBetween:30,
    autoplay: {                         //autoplay
     delay: 4000,  
      },   
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     keyboard: true,
     breakpoints:{
      0:{
        slidesPerView:1
      },
      520:{
        slidesPerView: 2
      },
      950:{
        slidesPerView: 3
      }
     }
   });  

   /*========== carrito ==========*/
   const carrito = document.getElementById('carrito');
   const elementos1 = document.getElementById('list-1');
   const elementos2 = document.getElementById('list-2');
   const elementos3 = document.getElementById('list-3');
   const lista = document.querySelector('#carlist tbody');
   const vaciarCarBtn = document.getElementById('empty-car');

   cargarEventListeners();
    
  function  cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarBtn.addEventListener('click', vaciarCarrio);
  }
  function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('add2car')){
      const elemento = e.target.parentElement.parentElement;
      leerDatosElemento(elemento);
    }
  }
  function leerDatosElemento (elemento){
    const infoElemento = {
      imagen: elemento.querySelector('img').src,
      precio: elemento.querySelector('.price-2').textContent,
      precio: elemento.querySelector('.h3').textContent,
      id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
  }
    function insertarCarrito(elemento){
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
          ${elemento.titutlo}
        </td>
        <td>
          ${elemento.precio}
        </td>
        <td>
        <a htrf="#" class="borrar" data-id="${elemento.id}">
        </td>
      `;
      lista.appendChild(row);
    }
     
    function eliminarElemento(e){
      e.preventDefault();
      let elemento,
          elementoId;

      if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
      }
    }

    function vaciarCarrio() {
    while(lista.firstChild){
      lista.removeChild(lista.firstChild)
      return false;
    }
    }
  