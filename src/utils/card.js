class Card {

    buildCard(cardData) {
        return `
        <div ${cardData.index != undefined ? `index="${cardData.index}"` : ''} class="card shadow-sm col-lg-2 col-xl-1 col-md-3 col-10  d-flex justify-content-center align-items-center p-3 ml-4 mb-2 ${cardData.class}">
        <div class="cirlce-image disabled">
            <img src="${cardData.image}" alt="html icon" class="card-size-img">
        </div>
        <label class="m-0 mt-1 font-weight-bold text-center disabled">${cardData.title}</label>
        </div>
        `;
    }
}


