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
//   extraInfoColor  - optional badge background color (any CSS color, e.g. "red", "#1e90ff"). Omit to use the default dark badge.
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
//   extraInfoColor: "red"
// },

const PRODUCTS = [
  {
    type: "poster",
    name: "Abóbora do Diabo",
    priceA3: 4,
    priceA4: 3,
    priceMolduraA3: 15,
    priceMolduraA4: 12,
    image: "produtos/Abóbora do Diabo.jpeg",
    // extraInfo: "🔥 Best Seller",
    // extraInfoColor: "red"
  },
  {
    type: "poster",
    name: "The Kitchen's on Fire",
    priceA3: 4,
    priceMolduraA3: 15,
    image: "produtos/Depois o Cozinhado Queima.jpeg",
    extraInfo: "🔥 Best Seller 🔥",
    extraInfoColor: "#1e90ff"
  },
//  {
//    type: "User Defined Poster",
//    name: "Poster Personalizado",
//    priceA3: 10,
//    priceA4: 7,
//    priceMolduraA3: 14,
//    priceMolduraA4: 11,
//    image: "produtos/personalizado.jpeg",
//    extraInfo: "Personalizável",
//    extraInfoColor: "#6a4fd6"
//  },
];

// Available frames (same options regardless of poster size). Put each jpeg inside the "molduras/" folder.
// Shown to the customer as thumbnails when they pick "Poster com Moldura"; the filename itself
// (with extension) is what ends up in the WhatsApp message, e.g. "com moldura moldura-preta.jpeg".
const MOLDURAS = [
  "Moldura-Preta.jpeg",
  "Moldura-Branca.jpeg"
];
