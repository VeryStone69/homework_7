
let myCard = {
    poster: "mainPic.jpg",
    type:"3d.png",
    sale: "stock1.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 60,
    currency: "руб.",
    rating: 4.5,
    buy: "buy.png",
    action: true,
    fullPrice: function() {
        return x = this.price + ",00  " + this.currency;
    },
    salePrice: function() {
       return y = Math.round(this.price * .9) + ",00  " + this.currency;
    },
    rank: function() {
        let star = "";
            if (this.rating >= 0) {
            switch (this.rating) {
            case 0: star = `star_border star_border star_border star_border star_border`; break;
            case 0.5: star = `star_half star_border star_border star_border star_border`; break;
            case 1: star = `star star_border star_border star_border star_border`; break;
            case 1.5: star = `star star_half star_border star_border star_border`; break;
            case 2: star = `star star star_border star_border star_border`; break;
            case 2.5: star = `star star star_half star_border star_border`; break;
            case 3: star = `star star star star_border star_border`; break;
            case 3.5: star = `star star star star_half star_border`; break;
            case 4: star = `star star star star star_border`; break;
            case 4.5: star = `star star star star star_half`; break;
            case  5: star = `star star star star star`; break;
            default: star = `star star star star star`;
            }
    } else {star = `star_border star_border star_border star_border star_border`}
    return star;
    }
}


function cinema() {
    let s = ``;
    for (i = 0; i < arrPoster.length; i++) {

        myCard.poster = arrPoster[i];
        myCard.title1 = arrNameMovie[0][i];
        myCard.title2 = arrNameMovie[1][i];
        myCard.price = arrPriceMovie[i];

        s += `<div class="card">
                    <div class="poster">
                        <img src="images/${myCard.poster}">
                        <img src="images/${myCard.sale}">
                        <img src="images/${myCard.type}">
                    </div>
                    <div class="title">
                        <div>${myCard.title1}</div>
                        <div>${myCard.title2}</div>
                    </div>
                    <div class="price">
                        <div>${myCard.salePrice()}</div>
                        <div>${myCard.fullPrice()}</div>
                    </div>
                    <div class="rating">
                        <span class="material-icons">${myCard.rank()}</span>
                    </div>
                    <div class="buy"><img src="images/${myCard.buy}" alt=""></div>
            </div>`;

    };
    cards.innerHTML = s;
}

let arrPoster = ["mainPic.jpg","toy4.jpeg","ferd.jpeg"];
let arrNameMovie = [
    ["Тайная жизнь", "История игрушек 4", "Фердинанд"],
    ["Домашних животных", "Приключения Вилкинса", "Побег из коровника"]
];
let arrPriceMovie = [50,60,40];