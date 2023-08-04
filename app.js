// color flipper

function colorGenerator() {
    let alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f']
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 15)
        let num2 = alphabet[num]
        hash += num2;
    }
    document.getElementById('container').style.backgroundColor = hash;
    document.getElementById('output').innerHTML = hash;
}

// lorem Ipsum Generator

let para = ['Topping muffin apple pie jujubes brownie cupcake. Candy chocolate cake dragée muffin candy candy tootsie roll tootsie roll pudding. Bear claw liquorice ice cream oat cake sweet muffin bonbon macaroon chocolate bar. Sweet pie chocolate cake toffee caramels sweet. Cotton candy jelly powder caramels candy ice cream biscuit fruitcake.', ' Pastry lollipop gummies ice cream pastry. Donut caramels marzipan tart jelly-o bear claw pie bonbon gummi bears. Tiramisu pudding sweet powder biscuit tart oat cake cheesecake pastry. Biscuit soufflé jelly-o topping wafer. Croissant danish marzipan chupa chups marshmallow marshmallow.', ' Wafer topping macaroon jelly-o cake apple pie cake lemon drops. Donut shortbread cake sesame snaps chocolate bar. Carrot cake tart sugar plum macaroon cotton candy. Donut fruitcake marshmallow tootsie roll cupcake powder candy canes marzipan toffee.', 'Topping macaroon jelly-o sugar plum muffin chocolate ice cream jujubes. Dessert candy jujubes ice cream jujubes croissant sugar plum croissant. Bonbon jujubes fruitcake macaroon cupcake sweet jujubes icing.', ' Lemon drops pastry oat cake oat cake cake. Oat cake tiramisu danish macaroon cupcake muffin. Ice cream bonbon cotton candy jelly beans cupcake macaroon sweet. Dragée fruitcake sweet roll cake marshmallow liquorice.', ' Liquorice sugar plum brownie croissant shortbread dragée muffin bear claw. Donut apple pie biscuit shortbread sugar plum lemon drops sweet roll. Chocolate bar gummies sweet wafer marshmallow. Sweet roll cotton candy sweet dragée dessert. Cake carrot cake candy candy canes cookie carrot cake caramels. Wafer brownie ice cream powder cupcake halvah soufflé.', ' Ice cream pudding cake bear claw chupa chups. Jelly beans bear claw ice cream jelly croissant cake bonbon cupcake halvah.', 'Wafer oat cake gummies cookie bear claw danish icing. Topping toffee croissant apple pie topping biscuit. Cotton candy fruitcake toffee marzipan candy dessert. Brownie caramels danish danish gummi bears shortbread sugar plum. Cotton candy dragée gingerbread halvah apple pie topping marshmallow pie jelly beans. ', 'Wafer bear claw marshmallow marzipan chocolate bar marshmallow. Muffin caramels icing liquorice jelly-o sugar plum bear claw sugar plum toffee. Gingerbread soufflé powder gummi bears icing apple pie cupcake icing liquorice. Oat cake shortbread powder lemon drops pastry apple pie bonbon jujubes gummi bears. Lollipop gingerbread bear claw marshmallow liquorice caramels.']

const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const val = parseInt(amount.value);
    const random = Math.floor(Math.random() * para.length)


    if (val <= 0 || val > 7 || isNaN(val)) {
        result.innerHTML = `<p>${para[random]}</p>`
    } else {
        const slicedPara = para.slice(0, val);
        const finalPara = slicedPara.map(function (onePara) {
            return `<p>${onePara}</p> <br></br>`
        }).join('');

        result.innerHTML = finalPara;
    }
})

// countdown

let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let currentYear = new Date().getFullYear();
let newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`)

function updateTime() {
    let currentTime = new Date();
    let diffrence = newYear - currentTime;
    console.log(diffrence);
    let day = Math.floor(diffrence / 1000 / 60 / 60 / 24);
    let hour = Math.floor(diffrence / 1000 / 60 / 60) % 24;
    let min = Math.floor(diffrence / 1000 / 60) % 60;
    let sec = Math.floor(diffrence / 1000) % 60;

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

setInterval(updateTime, 1000)

updateTime()



// Meme Generator

const memeImage = document.querySelector(".memeGenerator img");
const memeTitle = document.querySelector(".memeGenerator .memeTitle");
const memeAuthor = document.querySelector(".memeGenerator .memeAuthor");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};