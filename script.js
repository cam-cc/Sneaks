$(function() {
    $(".navigation__icon").click(function() {
      $(".navigation").toggleClass('navigation-open');
    });
  });

const highends = [
    {
      name: 'Balenciaga',
      dist: 'Lime Green Balenciagas - limited edition',
      price: '$800.00',
      pic1: 'images/b1.jpeg',
      pic2: 'images/b2.jpg',
      pic3: 'images/b3.jpg',
      id: '1'
      // https://www.balenciaga.com/us/men/shoes
    },
    {
        name: 'Yeezy V2',
        dist: 'Yeezy Boost V2 - Hospital Blue',
        price: '$470.50',
        pic1: 'images/y1.jpg',
        pic2: 'images/y2.jpg',
        pic3: 'images/y3.jpg',
        id: '2'
        // https://www.adidas.com/us/yeezy
      },
      {
        name: 'Valentino Garavani',
        dist: 'Rockstud Low-Top Leather Sneaker White Men Shoes Sneakers',
        price: '$822.00',
        pic1: 'images/v1.jpg',
        pic2: 'images/v2.jpg',
        pic3: 'images/v3.jpg',
        id: '3'
        // https://www.valentino.com/en-us/low-top-sneakers_cod7789028784782122.html
      },
      {
        name: 'Supreme',
        dist: 'Mens Red Supreme X Nike Air More Uptempo Sneakers',
        price: '$2,140.99',
        pic1: 'images/s1.jpg',
        pic2: 'images/s2.jpg',
        pic3: 'images/s3.jpg',
        id: '4'
        // https://stockx.com/nike-air-more-uptempo-supreme-red
      },
      {
        name: 'Christian Louboutin',
        dist: 'Christian Louboutin Louis Junior Spikes - Red Suede',
        price: '$645.00',
        pic1: 'images/c1.jpg',
        pic2: 'images/c2.jpg',
        pic3: 'images/c3.jpg',
        id: '5'
        //http://us.christianlouboutin.com/us_en/shop/men/louis-junior-sp-veau-velours-2.html
      },
      {
        name: 'Gucci',
        dist: 'Low-top leather Rhyton logo-print leather Sneakers',
        price: '$850.00',
        pic1: 'images/g1.jpg',
        pic2: 'images/g2.jpg',
        pic3: 'images/g3.jpg',
        id: '6'
        // https://www.gucci.com/us/en/pr/men/shoes-for-men/sneakers-for-men/mens-rhyton-leather-sneaker-with-gucci-logo-p-552851DRW001000
      },
      {
        name: 'Versace',
        dist: 'Low-top panelled twill, Chain Reaction Baroque-print trainers Sneakers',
        price: '$975.00',
        pic1: 'images/ver1.jpeg',
        pic2: 'images/ver2.jpeg',
        pic3: 'images/ver3.jpeg',
        id: '7'
        //https://modesens.com/product/versace-chain-reaction-panelled-shell-rubber-and-suede-sneakers-17462544/
      },
      {
        name: 'Off-White',
        dist: 'Off - white , Off - court sneakers w/ Orange ZipTie',
        price: '$700.00',
        pic1: 'images/o1.jpeg',
        pic2: 'images/o2.jpeg',
        pic3: 'images/o3.jpeg',
        id: '8'
        // https://www.off---white.com/en-ca/
      },
      {
        name: 'Givenchy',
        dist: 'Patent Calfskin Urban Street Givenchy Sneakers',
        price: '$1,000.00',
        pic1: 'images/giv1.jpeg',
        pic2: 'images/giv2.jpeg',
        pic3: 'images/giv3.jpeg',
        id: '9'
        // https://www.neimanmarcus.com/en-ca/p/givenchy-mens-urban-street-patent-leather-logo-sneakers-prod225970469
      },
      {
        name: 'Jordans',
        dist: 'Nike Air jordans, Grey fog / Brown / Black',
        price: '$300.00',
        pic1: 'images/j1.jpeg',
        pic2: 'images/j2.jpeg',
        pic3: 'images/j3.jpeg',
        id: '10'
        // https://www.nike.com/jordan
      }
  ];
  const lowends = [
      {
        name: 'Huraches',
        dist: 'Triple red Huraches - Nike collection',
        price: '$100.00',
        pic1: 'images/h1.jpg',
        pic2: 'images/h2.jpg',
        pic3: 'images/h3.jpg',
        id: '1'
        //https://www.nike.com/w/huarache-shoes-adlt2zy7ok
      },
      {
          name: 'Puma',
          dist: 'Han Kjobenhavn Yellow Puma Edition Alteration PN-1 Sneakers',
          price: '$170.00',
          pic1: 'images/p1.jpg',
          pic2: 'images/p2.jpg',
          pic3: 'images/p3.jpg',
          id: '2'
          // https://hypebeast.com/2019/1/han-kjobenhavn-puma-alteration-sneaker-first-look
        },
        {
          name: 'Puma',
          dist: 'Puma x Nasa RS 9.8 Space Agency Sneaker',
          price: '$120.00',
          pic1: 'images/n1.jpeg',
          pic2: 'images/n2.jpg',
          pic3: 'images/n3.jpeg',
          id: '3'
          // https://www.sneakersnstuff.com/en/product/38334/puma-rs-9-8-space-agency
        },
        {
          name: 'off-white',
          dist: 'PS by Paul Smith Off-White Kirk Green Dino Sneakers',
          price: '$180.00',
          pic1: 'images/ow1.png',
          pic2: 'images/ow2.jpg',
          pic3: 'images/ow3.jpg',
          id: '4'
          // https://www.ssense.com/en-us/men/designers/ps-by-paul-smith
        },
        {
          name: 'Adidas',
          dist: 'Y-3 Adidas x Pharrell High-Tech Sneakers',
          price: '$100.00',
          pic1: 'images/ay1.jpg',
          pic2: 'images/ay2.jpg',
          pic3: 'images/ay3.jpeg',
          id: '5'
          //https://www.saksfifthavenue.com/adidas-by-pharrell-williams-human-made-solar-hu-sneakers/product/0400011312486
        }];

var playing = false;

let shoecard = document.getElementById("cards");

function clearTable(){
     $(".cards").empty()
     return true;
   }

function products(data){

  clearTable();

for (let c of data)
{
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var topDiv = document.createElement("div");
    topDiv.setAttribute("class", "top-section");

    var navDiv = document.createElement("div");
    navDiv.setAttribute("class", "nav-bar");

    var imageContainer = document.createElement("img");

    imageContainer.setAttribute("src", c.pic1);
    imageContainer.setAttribute("class", "image-container");
    imageContainer.setAttribute("id", c.id);

    var img1 = document.createElement("img");
    img1.setAttribute("src", c.pic1);
    img1.onclick = function() {
        change_img(c, "pic1", c.id);
    };
    var img2 = document.createElement("img");
    img2.setAttribute("src", c.pic2);
    img2.onclick = function() {
        change_img(c, "pic2", c.id);
    };

    var img3 = document.createElement("img");
    img3.setAttribute("src", c.pic3);
    img3.onclick = function() {
        change_img(c, "pic3", c.id);
    };


    var productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name");
    var distDiv = document.createElement("div");
    distDiv.setAttribute("class", "dis");

    var button = document.createElement("a")
    button.appendChild(document.createTextNode("Add to Cart"));
    button.setAttribute("class", "cart-btn");

    topDiv.appendChild(priceDiv);

    card.appendChild(topDiv);

    topDiv.appendChild(imageContainer);
    topDiv.appendChild(navDiv);

    navDiv.appendChild(img1);
    navDiv.appendChild(img2);
    navDiv.appendChild(img3);

    card.appendChild(productInfo);

    productInfo.appendChild(nameDiv);
    productInfo.appendChild(distDiv);

    priceDiv.appendChild(document.createTextNode(c.price));
    nameDiv.appendChild(document.createTextNode(c.name));
    distDiv.appendChild(document.createTextNode(c.dist));

    productInfo.appendChild(button);

    shoecard.appendChild(card);
  }
}

function change_img(card, picId, id) {
    var card_image = document.querySelector('#' + CSS.escape(id));

    card_image.setAttribute("src", card[picId]);
}

function categories(){
  var high = document.querySelector('.highend');
  var low = document.querySelector('.lowend');
  let elmnt = document.querySelector("#cards");
  high.onclick = function() {
    products(lowends);
    elmnt.scrollIntoView();
  }

  low.onclick = function() {
    products(highends);
    elmnt.scrollIntoView();
  }
}
window.onload = categories();
