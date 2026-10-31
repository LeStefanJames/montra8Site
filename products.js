// Product catalog for the menu grid.
// Add one object per product you sell. Put its image file inside the "produtos/" folder.
//
// Fields:
//   type            - controls what happens when the customer taps the card:
//                       "poster"              -> pick size, optionally a frame, then "Adicionar ao Carrinho"
//                       "User Defined Poster" -> same size/frame steps, plus a note asking the customer
//                                                to send their own picture via WhatsApp, then "Adicionar ao Carrinho"
//                       anything else         -> not wired up yet, tapping just shows "Brevemente disponível"
//   name            - shown in bold on the card, and used in the cart/WhatsApp message
//   priceA3         - number, or omit/null if this product isn't sold in A3
//   priceA4         - number, or omit/null if this product isn't sold in A4
//   priceMolduraA3  - number, or omit/null if the "com moldura" (framed) option isn't offered in A3
//   priceMolduraA4  - number, or omit/null if the "com moldura" (framed) option isn't offered in A4
//   image           - path to the product's image, e.g. "produtos/nome-do-produto.jpg"
//   extraInfo       - optional small badge text on top of the card, e.g. "🔥 Best Seller", "Novidade", "Personalizável". Leave empty/omit for no badge.
//   extraInfoColor  - optional badge background color. Avoid plain CSS color names like "red"/"blue" (they look flat/fake) -
//                     use "#e63946" (a muted red) or "#457b9d" (a muted blue) instead. Omit to use the default dark badge.
//
// Notes:
//   - If a product only has one size filled in, only that size is shown (no pointless choice).
//   - If a size has no priceMoldura filled in, the frame step is skipped for that size (plain poster only).
//
// Example (copy, uncomment and fill in to add a real product):
// {
//   type: "poster",
//   name: "Nome do Produto",
//   priceA3: 8,
//   priceA4: 5,
//   priceMolduraA3: 12,
//   priceMolduraA4: 9,
//   image: "produtos/nome-do-produto.jpg",
//   extraInfo: "🔥 Best Seller",
//   extraInfoColor: "#e63946"
// },

const PRODUCTS = [
  //Personaliza
  {
    type: "User Defined Poster",
    name: "Personaliza o Teu Poster",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Personal.jpeg"
  },
  
    //BadB
  {
    type: "poster",
    name: "Por La Mañana Café ♫",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/CoelhoCafe.jpeg"
  },
  
    //Stan
  {
    type: "poster",
    name: "Stan The Man",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Stan.jpeg",
    extraInfo: "🔥 Best Seller 🔥",
    extraInfoColor: "#e63946"
  },
  
    //cherry
  {
    type: "poster",
    name: "Tokyo Cherry",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/cherry.jpeg"
  },
  
    //DSOTM
  {
    type: "poster",
    name: "The Dark Side of The Moon",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/DSOTM.jpeg"
  },
  
    //table
  {
    type: "poster",
    name: "Pintura de Infantário",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/table.jpeg"
  },
  
    //Canito
  {
    type: "poster",
    name: "Cool Doggo",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Canito.jpeg"
  },
      
  //casaMyPlace
  {
    type: "poster",
    name: "Home ...",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/casaMyPlace.jpeg"
  },
  
  //rsFriends
  {
    type: "poster",
    name: "The Rolling Friends",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/rsFriends.jpeg"
  },
  
    //BrunoA
  {
    type: "poster",
    name: "Então Cala-te",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/BrunoA.jpeg"
  },
  
    //Bauhaus
  {
    type: "poster",
    name: "Bauhaus",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Bauhaus.jpeg"
  },
  
  
    //yayoi
  {
    type: "poster",
    name: "Yayoi Kusama",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/yayoi.jpeg"
  },
  
  
    //PinturaPraia
  {
    type: "poster",
    name: "Saint Tropez",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/PinturaPraia.jpeg"
  },
  
    //WRC
  {
    type: "poster",
    name: "A Catedral do Rally",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/WRC.jpeg"
  },
  
  
    //okasaka
  {
    type: "poster",
    name: "Okinawa",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/okasaka.jpeg"
  },
  
    //wine
  {
    type: "poster",
    name: "Wine Not?",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/wine.jpeg"
  },
  
    //vinil
  {
    type: "poster",
    name: "Music is a Beautiful Thing...",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/vinil.jpeg"
  },
  
    //Saudade
  {
    type: "poster",
    name: "A Saudade",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Saudade.jpeg"
  },
  
    //pulp
  {
    type: "poster",
    name: "Pulp Fiction",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/pulp.jpeg"
  },
  
    //yolo
  {
    type: "poster",
    name: "YOLO",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/yolo.jpeg"
  },
  
  //Abobora
  {
    type: "poster",
    name: "Abóbora do Diabo",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Abóbora do Diabo.jpeg"
  },
  
    //tugal
  {
    type: "poster",
    name: "Viva Portugal",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/tugal.jpeg"
  },
  
  //Cozinha
  {
    type: "poster",
    name: "The Kitchen's on Fire",
    priceA3: 4,
    priceMolduraA3: 15,
    image: "produtos/Depois o Cozinhado Queima.jpeg",
  },
  
    //SexNTheCity
  {
    type: "poster",
    name: "Sex and The City",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/SexNTheCity.jpeg"
  },

];

// Available frames (same options regardless of poster size). Put each jpeg inside the "molduras/" folder.
// Shown to the customer as thumbnails when they pick "Poster com Moldura"; the filename itself
// (with extension) is what ends up in the WhatsApp message, e.g. "com moldura moldura-preta.jpeg".
const MOLDURAS = [
  "Moldura-Preta.jpeg",
  "Moldura-Branca.jpeg"
];
