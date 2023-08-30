import img1 from '../assets/category/cake.jpg'
import img2 from '../assets/category/sweet.jpg'
import img3 from '../assets/category/norin.jpg'
import img4 from '../assets/category/fastfood.jpg'


import img11 from "../assets/product/1.jpg"
import img22 from "../assets/product/2.jpg"
import img33 from "../assets/product/3.jpg"
import img44 from "../assets/product/4.jpg"
import img55 from "../assets/product/5.jpg"
import img66 from "../assets/product/6.jpg"
import img77 from "../assets/product/7.jpg"
import img88 from "../assets/product/8.jpg"

export const ProductsData = [
  {
    name: "Bread",
    price: 15,
    category: "tort",
    url: [
      img11,
      img55,
    ],
  },
  {
    name: "Ergonomic Granite Chair",
    price: 12,
    category: "tort",
    url: [
      img22,
      img66,
    ],
  },
  {
    name: "Custard Bun",
    price: 16,
    category: "pirojniy",
    url: [
      img33,
      img77,
    ],
  },
  {
    name: "Cupcake Queen",
    price: 20,
    category: "biscuite",
    url: [
      img44,
      img88,
    ],
  },
];


export const category = [
  {
    id: "c-1",
    url: img1,
    title: "Tort",
    link: "/cake"
  },
  {
    id: "c-2",
    url: img2,
    title: "Pirojniy",
    link: "/sweet"
  },
  {
    id: "c-3",
    url: img3,
    title: "Norin",
    link: "/norin"
  },
  {
    id: "c-4",
    url: img4,
    title: "Fastfood",
    link: "/fastfood"
  }
]

