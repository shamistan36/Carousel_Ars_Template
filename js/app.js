var rightIcon = document.querySelector("#thumbnail-wrapper .right");

var activeElement = document.querySelector("#slider-wrapper img.active");
var thumbnailActiveElement = document.querySelector("#thumbnail-wrapper img.active");


rightIcon.addEventListener("click", function () {

    var nextThumbElement = thumbnailActiveElement.nextElementSibling;

    var nextElement = activeElement.nextElementSibling;

    if (nextElement != null && nextThumbElement != null) {
        activeElement.classList.remove("active");
        nextElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        nextThumbElement.classList.add("active");
    }
    else {
        activeElement.classList.remove("active");
        nextElement = document.querySelector("#slider-wrapper img:first-child");
        nextElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        nextThumbElement = document.querySelector("#thumbnail-wrapper img:first-child");
        nextThumbElement.classList.add("active");
    }
    activeElement = nextElement;
    thumbnailActiveElement = nextThumbElement;
})

var leftIcon = document.querySelector("#thumbnail-wrapper .left");

leftIcon.addEventListener("click", function () {
    var previousElement = activeElement.previousElementSibling;

    var previousThumbElement = thumbnailActiveElement.previousElementSibling;

    if (previousElement != null) {
        activeElement.classList.remove("active");
        previousElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        previousThumbElement.classList.add("active");
    }
    else {
        activeElement.classList.remove("active");
        previousElement = document.querySelector("#slider-wrapper img:last-child");
        previousElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        previousThumbElement = document.querySelector("#thumbnail-wrapper img:last-child");
        previousThumbElement.classList.add("active");
    }
    activeElement = previousElement;
    thumbnailActiveElement = previousThumbElement;

})


var thumbnails = document.querySelectorAll("thumbnail-wrapper img");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        document.querySelector("#thumbnail-wrapper img.active").classList.remove("active");
        
        this.classList.add("active");
        
        var dataNumber = this.getAttribute("data-number");
        
        document.querySelector("#slider-wrapper img.active").classList.remove("active");

        document.querySelector(`#slider-wrapper img[data-id="${dataNumber}"]`).classList.add("active");

    })
}

