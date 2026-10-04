function upDate(element) {

    console.log("Mouse is over an image.");

    console.log("Alt:", element.alt);
    console.log("Source:", element.src);

    document.getElementById("image").innerHTML = `
        <div class="preview-content">
            <span class="preview-icon">✦</span>
            <h2>${element.alt}</h2>
            <p>Move your mouse away to return to the gallery.</p>
        </div>
    `;

    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";
}


function undo(element) {

    console.log("Mouse left the image.");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = `
        <div class="preview-content">
            <span class="preview-icon">✦</span>
            <h2>Hover over an image</h2>
            <p>Move your mouse over a photograph below to explore Japan.</p>
        </div>
    `;
}