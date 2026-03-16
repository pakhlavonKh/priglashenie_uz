import template1 from "@/assets/template-1.jpg";
import template2 from "@/assets/template-2.jpg";
import template3 from "@/assets/template-3.jpg";
import template4 from "@/assets/template-4.jpg";
import template5 from "@/assets/template-5.jpg";
import template6 from "@/assets/template-6.jpg";
import template7 from "@/assets/template-7.jpg";
import template8 from "@/assets/template-8.jpg";
import templateBirthday1 from "@/assets/template-birthday-1.jpg";
import templateBirthday2 from "@/assets/template-birthday-2.jpg";
import templateBabyshower1 from "@/assets/template-babyshower-1.jpg";
import templateBabyshower2 from "@/assets/template-babyshower-2.jpg";
import templateHousewarming1 from "@/assets/template-housewarming-1.jpg";
import templateGraduation1 from "@/assets/template-graduation-1.jpg";

export interface Template {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  style: string;
  culture: string;
  language: string;
  features: string[];
  isFeatured?: boolean;
}

export const templates: Template[] = [
  // Wedding
  {
    id: "eucalyptus-garden",
    name: "Eucalyptus Garden",
    description: "A soft, organic design with watercolor eucalyptus and sage green tones. Perfect for garden and outdoor weddings.",
    price: 49,
    image: template1,
    category: "Wedding",
    style: "Classic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Custom Colors", "Photo Gallery", "Countdown Timer", "Guest Book"],
    isFeatured: true,
  },
  {
    id: "golden-deco",
    name: "Golden Deco",
    description: "An art deco inspired design with geometric gold foil accents. Ideal for glamorous, luxury celebrations.",
    price: 69,
    image: template2,
    category: "Wedding",
    style: "Modern",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Animated Entrance", "Photo Gallery", "Music Player", "Registry Links"],
    isFeatured: true,
  },
  {
    id: "blush-romance",
    name: "Blush Romance",
    description: "Delicate watercolor roses and peonies in soft blush pink. A feminine, romantic design for fairytale weddings.",
    price: 49,
    image: template3,
    category: "Wedding",
    style: "Romantic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Custom Colors", "Love Story Timeline", "Photo Gallery"],
    isFeatured: true,
  },
  {
    id: "royal-mandala",
    name: "Royal Mandala",
    description: "Ornate mandala patterns with rich burgundy and gold. A regal design honoring traditional Indian wedding celebrations.",
    price: 79,
    image: template4,
    category: "Wedding",
    style: "Traditional",
    culture: "Indian",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Multi-event Support", "Baraat Details", "Mehendi Page", "Map Integration"],
    isFeatured: true,
  },
  {
    id: "bohemian-sunset",
    name: "Bohemian Sunset",
    description: "Hand-drawn botanicals with warm earth tones. A free-spirited design for boho-chic couples.",
    price: 49,
    image: template5,
    category: "Wedding",
    style: "Rustic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Custom Colors", "Photo Gallery", "Guest Book"],
  },
  {
    id: "navy-crest",
    name: "Navy Crest",
    description: "A distinguished navy and silver design with a laurel monogram crest. Classic, formal elegance.",
    price: 59,
    image: template6,
    category: "Wedding",
    style: "Classic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Monogram Generator", "Photo Gallery", "Countdown Timer"],
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    description: "Vibrant palm leaves and hibiscus flowers with ocean hues. Perfect for destination and beach weddings.",
    price: 49,
    image: template7,
    category: "Wedding",
    style: "Modern",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Travel Info Page", "Photo Gallery", "Map Integration"],
  },
  {
    id: "minimal-calligraphy",
    name: "Minimal Calligraphy",
    description: "Clean, contemporary design with elegant hand-drawn botanical line art. Understated sophistication.",
    price: 39,
    image: template8,
    category: "Wedding",
    style: "Minimalist",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Custom Colors", "Photo Gallery", "Countdown Timer"],
  },

  // Birthday
  {
    id: "confetti-celebration",
    name: "Confetti Celebration",
    description: "A colorful, joyful kids birthday invitation with balloons, confetti, and cake. Pure fun and excitement.",
    price: 29,
    image: templateBirthday1,
    category: "Birthday",
    style: "Playful",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Gift Registry", "Photo Gallery", "Countdown Timer"],
    isFeatured: true,
  },
  {
    id: "golden-milestone",
    name: "Golden Milestone",
    description: "A sophisticated black and gold design for milestone birthdays. Champagne elegance for the big celebration.",
    price: 39,
    image: templateBirthday2,
    category: "Birthday",
    style: "Modern",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Custom Age", "Photo Gallery", "Music Player"],
  },

  // Baby Shower
  {
    id: "teddy-dreams",
    name: "Teddy Dreams",
    description: "Adorable teddy bears and soft pastels for a sweet baby shower celebration. Gentle and heartwarming.",
    price: 29,
    image: templateBabyshower1,
    category: "Baby Shower",
    style: "Classic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Gift Registry", "Photo Gallery", "Games Section"],
    isFeatured: true,
  },
  {
    id: "gender-reveal",
    name: "Gender Reveal",
    description: "Beautiful blue and pink watercolor design for a gender reveal party. Build the anticipation in style.",
    price: 29,
    image: templateBabyshower2,
    category: "Baby Shower",
    style: "Modern",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Voting Poll", "Photo Gallery", "Countdown Timer"],
  },

  // Housewarming
  {
    id: "warm-welcome",
    name: "Warm Welcome",
    description: "A cozy, modern housewarming invitation with warm earth tones and botanical accents. Welcome home.",
    price: 29,
    image: templateHousewarming1,
    category: "Housewarming",
    style: "Modern",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Map Integration", "Photo Gallery", "Gift Suggestions"],
  },

  // Graduation
  {
    id: "cap-and-gown",
    name: "Cap & Gown",
    description: "A distinguished navy and gold graduation celebration invitation. Honor the achievement with class.",
    price: 29,
    image: templateGraduation1,
    category: "Graduation",
    style: "Classic",
    culture: "Western",
    language: "English",
    features: ["RSVP Integration", "Mobile Responsive", "Photo Gallery", "Countdown Timer", "Map Integration"],
  },
];

export const categories = [
  "Wedding",
  "Birthday",
  "Baby Shower",
  "Engagement",
  "Housewarming",
  "Graduation",
];

export const styles = ["Classic", "Modern", "Romantic", "Traditional", "Rustic", "Minimalist", "Playful"];
export const cultures = ["Western", "Indian", "Arabic", "East Asian"];
export const languages = ["English", "Arabic", "Hindi", "Spanish", "French"];
