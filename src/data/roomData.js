import heritageImg from "../assets/rooms/room1.jpg";
import juniorImg from "../assets/rooms/room2.jpg";
import executiveImg from "../assets/rooms/room7.jpg";
import royalImg from "../assets/rooms/room8.jpg";

const roomsData = [
  {
    id: 1,
    title: "Heritage Deluxe Room",
    slug: "heritage-deluxe-room",
    price: "$285.26",
    image: heritageImg,

    intro:
      "Step into a world of timeless elegance with our Heritage Deluxe Rooms, where Nepal’s rich artistic traditions come to life.",

    description: [
      "Thoughtfully designed with intricately carved woodwork and handwoven textiles, each room reflects the grandeur of the Kathmandu Valley’s architectural heritage.",

      "Every piece of furniture is handcrafted in our own restoration workshop, preserving centuries-old craftsmanship and ensuring authenticity in every detail.",

      "Overlooking the courtyard adorned with centuries-old wooden masterpieces, the room offers a serene connection to Nepal’s artistic legacy.",

      "Spacious and inviting, it provides a retreat of refined comfort, seamlessly blending heritage with modern luxuries."
    ],
  },

  {
    id: 2,
    title: "Junior Suite",
    slug: "junior-suite",
    price: "$387.30",
    image: juniorImg,

    intro:
      "Experience the grandeur of Nepal’s rich heritage in our Junior Suites, where artistry and comfort come together in a timeless embrace.",

    description: [
      "Each suite is a tribute to the Kathmandu Valley’s architectural legacy, featuring intricately hand-carved woodwork, traditional terracotta floors, and handwoven textiles that reflect the soul of Newar craftsmanship.",

      "Designed for those who seek space and refinement, the suite offers a generous living area with furniture handcrafted in our own restoration workshop, preserving centuries-old traditions.",

      "Blending history with modern indulgence, the Junior Suite is a sanctuary of elegance, offering bespoke amenities and a tranquil retreat in the heart of a living museum."
    ],
  },

  {
    id: 3,
    title: "Executive Suite",
    slug: "executive-suite",
    price: "$494.18",
    image: executiveImg,

    intro:
      "Immerse yourself in the grandeur of Nepal’s rich heritage with our Executive Suite, a spacious sanctuary where history, artistry, and luxury converge.",

    description: [
      "Designed for discerning travelers, this suite showcases handcrafted furniture from our own restoration workshop, intricately carved woodwork, and authentic Newar artistry.",

      "Overlooking the courtyard adorned with centuries-old wooden masterpieces, the Executive Suite offers a rare connection to Nepal’s architectural legacy.",

      "With generous living space, modern amenities, and personalized comforts, it is the perfect blend of heritage and contemporary indulgence."
    ],
  },

  {
    id: 4,
    title: "Royal Suite",
    slug: "royal-suite",
    price: "$500.00",
    image: royalImg,

    intro:
      "The Royal Suite at Dwarika’s Hotel is the pinnacle of heritage luxury, offering an opulent retreat steeped in Nepal’s rich artistic and architectural traditions.",

    description: [
      "Inspired by the grand residences of the Malla kings, this expansive suite is spread over three floors, providing an unparalleled sense of space and exclusivity.",

      "Every detail reflects the finest Newar craftsmanship, from intricately carved woodwork and handwoven textiles to original local artworks celebrating the timeless beauty of the Kathmandu Valley.",

      "With private living and dining areas, multiple balconies, and bespoke amenities, the Royal Suite delivers an extraordinary experience of regal indulgence."
    ],
  },
];

export default roomsData;
