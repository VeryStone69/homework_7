
let myCard = [
{
    poster: "mainPic.jpg",
    type:"3d.png",
    sale: "stock1.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 10,
    currency: "руб.",
    rating: .5,
    buy: "buy.png",
    action: true,
    fullPrice: function() {
        return x = this.price + ",00  " + this.currency;
    },
    salePrice: function() {
       return y = Math.round(this.price * .9) + ",00  " + this.currency;
    }
},
{
    poster: "toy4.jpeg",
    type:"3d.png",
    sale: "stock1.png",
    title1: "История игрушек 4",
    title2: "Приключения Вилкинса",
    price: 60,
    currency: "руб.",
    rating: 4.5,
    buy: "buy.png",
    action: false,
    fullPrice: function() {
        return x = this.price + ",00  " + this.currency;
    },
    salePrice: function() {
       return y = Math.round(this.price * .9) + ",00  " + this.currency;
    }
},
{
    poster: "ferd.jpeg",
    type:"3d.png",
    sale: "stock1.png",
    title1: "Фердинанд",
    title2: "Побег из коровника",
    price: 40,
    currency: "руб.",
    rating: 4.5,
    buy: "buy.png",
    action: false,
    fullPrice: function() {
        return x = this.price + ",00  " + this.currency;
    },
    salePrice: function() {
       return y = Math.round(this.price * .9) + ",00  " + this.currency;
    }
}
    ]


function cinema() {

    let rank = "";
    if (myCard.rating >= 0) {
            switch(myCard[j].rating) {
            case 0: rank = `star_border star_border star_border star_border star_border`; break;
            case 0.5: rank = `star_half star_border star_border star_border star_border`; break;
            case 1: rank = `star star_border star_border star_border star_border`; break;
            case 1.5: rank = `star star_half star_border star_border star_border`; break;
            case 2: rank = `star star star_border star_border star_border`; break;
            case 2.5: rank = `star star star_half star_border star_border`; break;
            case 3: rank = `star star star star_border star_border`; break;
            case 3.5: rank = `star star star star_half star_border`; break;
            case 4: rank = `star star star star star_border`; break;
            case 4.5: rank = `star star star star star_half`; break;
            case  5: rank = `star star star star star`; break;
            }
        } else {star = `star_border star_border star_border star_border star_border`}

    let s = ``;
    for (i = 0; i < myCard.length; i++) {
        let sp = '';
        let sl = `0`;
        if (myCard[i].action)
        {sp = `<div>${myCard[i].salePrice()}</div>`;
        sl = 1;}

        s += `<div class="card">
                    <div class="poster">
                        <img src="images/${myCard[i].poster}">
                        <img style ="opacity: ${sl}" src="images/${myCard[i].sale}" alt="">
                        <img src="images/${myCard[i].type}">

                    </div>
                    <div class="title">
                        <div>${myCard[i].title1}</div>
                        <div>${myCard[i].title2}</div>
                    </div>
                    <div class="price">
                        ${sp}
                        <div>${myCard[i].fullPrice()}</div>
                    </div>
                    <div class="rating">
                        <span class="material-icons">
                        ${rank}
                            </span>
                    </div>
                    <div class="buy"><img src="images/${myCard[i].buy}" alt=""></div>
            </div>`;

    };
    cards.innerHTML = s;
}

