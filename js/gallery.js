document.addEventListener("DOMContentLoaded", function() {

    const images = document.querySelectorAll(".menuPic");
    const favoritesDiv = document.getElementById("favorites");

    images.forEach(function(img) {
        img.addEventListener("click", function() {

            let newWindow = window.open("", "_blank", "width=600,height=600");

            newWindow.document.write(`
                <html>
                <head>
                <title>Zoomed Image</title>
                <style>
                    body { text-align:center; font-family:Arial; }
                    img { width:400px; margin-top:20px; }
                    button { padding:10px; margin-top:20px; }
                </style>
                </head>
                <body>
                    <h2>Zoomed View</h2>
                    <img src="${img.src}">
                    <br>
                    <button onclick="window.opener.addToFavorites('${img.src}')">
                        Add to Favorites
                    </button>
                </body>
                </html>
            `);

        });
    });

    window.addToFavorites = function(src) {

        let currentFavorites = favoritesDiv.querySelectorAll(".favorite-item").length;

        if (currentFavorites >= 5) {
            alert("Maximum 5 favorites allowed. Remove one first.");
            return;
        }

        let container = document.createElement("div");
        container.classList.add("favorite-item");

        let newImg = document.createElement("img");
        newImg.src = src;
        newImg.width = 120;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.display = "none";

        newImg.addEventListener("click", function() {
            removeBtn.style.display = "inline-block";
        });

        removeBtn.addEventListener("click", function() {
            favoritesDiv.removeChild(container);
        });

        container.appendChild(newImg);
        container.appendChild(removeBtn);
        favoritesDiv.appendChild(container);
    }

});