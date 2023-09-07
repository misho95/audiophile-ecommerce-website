import { create } from "zustand";

import XX99IMG2 from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99Gallery1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import XX99Gallery2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import XX99Gallery3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import XX99IMG1 from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX991Gallery1 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import XX991Gallery2 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import XX991Gallery3 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import XX59IMG from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import XX59Gallery1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import XX59Gallery2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import XX59Gallery3 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import ZX9IMG from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX9Gallery1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import ZX9Gallery2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import ZX9Gallery3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import ZX7IMG from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import ZX7Gallery1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import ZX7Gallery2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import ZX7Gallery3 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
import YX1IMG from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import YX1Gallery1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import YX1Gallery2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import YX1Gallery3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

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
  proImg: string[];
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
      proImg: [XX99Gallery1, XX99Gallery2, XX99Gallery3],
    },
    {
      id: 2,
      img: XX99IMG1,
      title: "XX99 Mark I Headphones",
      ifNew: false,
      category: "headphones",
      price: "$1,750",
      des: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      feat: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.,

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
      inBox: {
        "Headphone Unit": "1x",
        "Replacement Earcups": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
      },
      proImg: [XX991Gallery1, XX991Gallery2, XX991Gallery3],
    },
    {
      id: 3,
      img: XX59IMG,
      title: "XX59 Headphones",
      ifNew: false,
      category: "headphones",
      price: "$899",
      des: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      feat: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
      inBox: {
        "Headphone Unit": "1x",
        "Replacement Earcups": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
      },
      proImg: [XX59Gallery1, XX59Gallery2, XX59Gallery3],
    },
    {
      id: 4,
      img: ZX9IMG,
      title: "ZX9 SPEAKER",
      ifNew: true,
      category: "speakers",
      price: "$4,500",
      des: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      feat: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

      Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
      inBox: {
        "Speaker Unit": "2x",
        "Speaker Cloth Panel": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
        "10m Optical Cable": "1x",
      },
      proImg: [ZX9Gallery1, ZX9Gallery2, ZX9Gallery3],
    },

    {
      id: 5,
      img: ZX7IMG,
      title: "ZX7 SPEAKER",
      ifNew: false,
      category: "speakers",
      price: "$599",
      des: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      feat: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

      The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
      inBox: {
        "Speaker Unit": "2x",
        "Speaker Cloth Panel": "2x",
        "User Manual": "1x",
        "3.5mm 5m Audio Cable": "1x",
        "7.5m Optical Cable": "1x",
      },
      proImg: [ZX7Gallery1, ZX7Gallery2, ZX7Gallery3],
    },
    {
      id: 6,
      img: YX1IMG,
      title: "YX1 WIRELESS EARPHONES",
      ifNew: true,
      category: "earphones",
      price: "$399",
      des: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      feat: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

      The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
      inBox: {
        "Earphone Unit": "2x",
        "Multi-size Earplugs": "6x",
        "User Manual": "1x",
        "USB-C Charging Cable": "1x",
        "Travel Pouch": "1x",
      },
      proImg: [YX1Gallery1, YX1Gallery2, YX1Gallery3],
    },
  ],
}));
