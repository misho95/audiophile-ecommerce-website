import { create } from "zustand";

import XX99IMG2 from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99IMG1 from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59IMG from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import ZX9IMG from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7IMG from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import YX1IMG from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

export interface dataType {
  id: number;
  img: string;
  title: string;
  ifNew: boolean;
  category: string;
  des: string;
  price: string;
  feat: string;
  inBox: {};
}

interface productDataType {
  product: dataType[];
}

export const productData = create<productDataType>(() => ({
  product: [
    {
      id: 1,
      img: XX99IMG2,
      title: "XX99 Mark II Headphones",
      ifNew: true,
      category: "headphones",
      price: "$2,999",
      des: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      feat: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.,
      The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
      inBox: {
        "Headphone Unit": "1x",
        "Replacement Earcups": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
        "Travel Bag": "1x",
      },
    },
    {
      id: 2,
      img: XX99IMG1,
      title: "XX99 Mark I Headphones",
      ifNew: false,
      category: "headphones",
      price: "$1,999",
      des: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      feat: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.,

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
      inBox: {
        "Headphone Unit": "1x",
        "Replacement Earcups": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
      },
    },
    {
      id: 3,
      img: XX59IMG,
      title: "XX59 Headphones",
      ifNew: false,
      category: "headphones",
      price: "$999",
      des: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
    {
      id: 4,
      img: ZX9IMG,
      title: "ZX9 SPEAKER",
      ifNew: true,
      category: "speakers",
      price: "$499",
      des: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      id: 5,
      img: ZX7IMG,
      title: "ZX7 SPEAKER",
      ifNew: false,
      category: "speakers",
      price: "$599",
      des: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
    {
      id: 6,
      img: YX1IMG,
      title: "YX1 WIRELESS EARPHONES",
      ifNew: true,
      category: "earphones",
      price: "$399",
      des: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ],
}));
