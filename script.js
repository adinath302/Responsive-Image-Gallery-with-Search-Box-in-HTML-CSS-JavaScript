const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searchvalue = search.value,
            value = searchvalue.toLowerCase();
        images.forEach(image => {
            if (value === image.dataset.name) {
                return image.style.display = "block";
            }
             image.style.display = "none";
        })
        console.log(value);
    }
});