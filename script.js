document.addEventListener("DOMContentLoaded", function() {
    var offButton = document.getElementById("offswitch");
    var onButton = document.getElementById("onswitch");
    var bulbImage = document.getElementById("bulbImage");

    offButton.addEventListener("click", function() {
        bulbImage.src = "https://i.pinimg.com/originals/ff/7f/1a/ff7f1ac7b9805ea8c2f6193fe066b41f.jpg";
        
    });

    onButton.addEventListener("click", function() {
        bulbImage.src = "https://i.pinimg.com/736x/9d/8c/d0/9d8cd0de1fdf89406909485b66f80328.jpg";
    });

    offButton.addEventListener("click", function() {
        catImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhW17i6QzxWdp0yvytCahhhFXboSZfGq6iJQ&s";
    });

    onButton.addEventListener("click", function() {
        catImage.src = "https://www.shutterstock.com/image-photo/closeup-striped-gray-stray-cat-600nw-2141427647.jpg";
    });
});
