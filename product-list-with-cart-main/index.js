let imgs = document.querySelector(".img-section");
let texts = document.querySelector(".text-section");
let itemName = document.querySelector(".item-name");
let itemPrice = document.querySelector(".item-price");
let itmCategory = document.querySelector("item-category");
// imgs.innerHTML += `<h1>${menuItem.image.mobile}</h1>`;



fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        if (Array.isArray(data)) { // Check if menuItems is an array
            data.forEach(menuItem => {
                // append an image for each container
                // Create an image element
                const img = document.createElement('img');
                img.src = menuItem.image.mobile;
                img.alt = menuItem.name;
                // Add the image to the img-section
                imgs.appendChild(img);

                // append the item-category for each container
                const itemLabel = document.createElement('p');
                itemLabel.textContent = menuItem.category;
                texts.appendChild(itemLabel);
            });
        } else {
            console.error('menuItems is not an array');
        }
    });

