let BREEDS_URL =  'https://dog.ceo/api/breeds/list/all';

breeds = fetch(BREEDS_URL)
            .then(res => res.json())
                .then(data => getBreeds(data));

function getBreeds(data) {

    let breeds = data.message;
    breeds = Object.keys(breeds);
    console.log(breeds);

    poppulateDropdown(breeds);
}

function poppulateDropdown(breeds) {

    const dropDown = document.querySelector("select");
    breeds.forEach(element => {
        
        const option = document.createElement('option');
        option.value = element;
        option.innerText = element;
        dropDown.appendChild(option);
    });

    loadImage();
}

function loadImage() {

    const select = document.querySelector('select');
    const image = document.querySelector("img");
    
    select.addEventListener("click", function(event) {

        if (event.target === select) return;

        let dogURL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
        let imgURL = '';
        fetch(dogURL)
            .then(res => res.json())
                .then(data => {
                    imgURL = data.message;
                    image.src = imgURL;
                    console.log(imgURL);
                });
    })
}