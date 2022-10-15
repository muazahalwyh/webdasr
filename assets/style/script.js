// memanipulasi gambar ketika kita klik gambarnya akan berubah kecuali gambar yang ada di biodata
let catImage = document.querySelector("#catImage");
catImage.addEventListener('click', (e)=>{
    catImage.setAttribute("src","assets/image/gbr2.jpg");
    catImage.getAttribute("src")
});

let careCat = document.querySelector("#careCat");
careCat.addEventListener('click', (e)=>{
    careCat.setAttribute("src","assets/image/penitip1.jpg");
    careCat.getAttribute("src")
});

let petShop = document.querySelector("#petShop");
petShop.addEventListener('click', (e)=>{
    petShop.setAttribute("src","assets/image/petshop.jpg");
    petShop.getAttribute("src")
});

//memanipulasi caption pada halaman biodata
let caption = document.querySelector("#caption");
caption.addEventListener('click', (e)=>{
    caption.innerHTML = '<em> Muazah </em>';
})


