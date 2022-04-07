import { v4 as uuid } from "uuid";
import { product1 } from "../../assets";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 4,
    title: "Chess Kit",
    categoryName: "Pieces",
    price: 499,
    initialPrice: 699,
    discountPrice: "44% off",
    image: product1,
    alt: "p2",
    isTrending: true,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "Chess pieces are distinguished by appearance and made of rigid material such as wood, ivory, or plastic. Pieces are of contrasting colours, commonly white and black. The six different types of pieces are: king, rook, bishop, queen, knight, and pawn. More than 500 different patterns of chess pieces have been recorded.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 5,
    title: "Premium Board",
    categoryName: "Board",
    price: 999,
    initialPrice: 1999,
    discountPrice: "44% off",
    image: product1,
    alt: "p1",
    isTrending: true,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A board of 64 squares arranged in eight vertical rows called files and eight horizontal rows called ranks. These squares alternate between two colours: one light, such as white, beige, or yellow; and the other dark, such as black or green.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 4.5,
    title: "Chess Board",
    categoryName: "Board",
    price: 849,
    initialPrice: 949,
    discountPrice: "44% off",
    image: product1,
    alt: "p3",
    isTrending: false,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A board of 64 squares arranged in eight vertical rows called files and eight horizontal rows called ranks. These squares alternate between two colours: one light, such as white, beige, or yellow; and the other dark, such as black or green.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 2,
    title: "Chess Base 16",
    categoryName: "Book",
    price: 249,
    initialPrice: 449,
    discountPrice: "44% off",
    image: product1,
    alt: "p4",
    isTrending: false,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A board of 64 squares arranged in eight vertical rows called files and eight horizontal rows called ranks. These squares alternate between two colours: one light, such as white, beige, or yellow; and the other dark, such as black or green.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 3.5,
    title: "Mikhail Tal",
    categoryName: "Book",
    price: 349,
    initialPrice: 449,
    discountPrice: "44% off",
    image: product1,
    alt: "p5",
    isTrending: false,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A chess book lists different tutorials and analysis of moves to help players grow. A book move is a move that is well-known to opening theory. In other words, a book move is an opening move that is considered standard or conventional.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 4.5,
    title: "Royal Chess Pieces",
    categoryName: "Pieces",
    price: 699,
    initialPrice: 899,
    discountPrice: "44% off",
    image: product1,
    alt: "p6",
    isTrending: true,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "Chess pieces are distinguished by appearance and made of rigid material such as wood, ivory, or plastic. Pieces are of contrasting colours, commonly white and black. The six different types of pieces are: king, rook, bishop, queen, knight, and pawn. More than 500 different patterns of chess pieces have been recorded.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 1,
    title: "Royal Board",
    categoryName: "Board",
    price: 899,
    initialPrice: 999,
    discountPrice: "44% off",
    image: product1,
    alt: "p7",
    isTrending: false,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A board of 64 squares arranged in eight vertical rows called files and eight horizontal rows called ranks. These squares alternate between two colours: one light, such as white, beige, or yellow; and the other dark, such as black or green.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 5,
    title: "Vishy Immortal",
    categoryName: "Book",
    price: 249,
    initialPrice: 449,
    discountPrice: "44% off",
    image: product1,
    alt: "p8",
    isTrending: true,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A chess book lists different tutorials and analysis of moves to help players grow. A book move is a move that is well-known to opening theory. In other words, a book move is an opening move that is considered standard or conventional.",
  },
  {
    _id: uuid(),
    inCart: false,
    inWishlist: false,
    rating: 3.5,
    title: "Sicilian Defence",
    categoryName: "Book",
    price: 399,
    initialPrice: 499,
    discountPrice: "44% off",
    image: product1,
    alt: "p9",
    isTrending: false,
    outOfStock: false,
    cartItemCount: 0,
    description:
      "A chess book lists different tutorials and analysis of moves to help players grow. A book move is a move that is well-known to opening theory. In other words, a book move is an opening move that is considered standard or conventional.",
  },
];
