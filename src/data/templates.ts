import autumnTemplate from "../assets/autumnTemplate.webp";
import autumnDesktop from "../assets/autumnDesktop.webp";
import pink from "../assets/pink.webp";
import pinkDesktop from "../assets/pinkDesktop.webp";
import green from "../assets/green.webp";
import greenDesktop from "../assets/greenDesktop.webp";
import reveal from "../assets/reveal.webp";
import revealDesktop from "../assets/revealDesktop.webp";
import blue from "../assets/blue.webp";
import blueDesktop from "../assets/blueDesktop.webp";
import pinkbirthday from "../assets/pinkbirthday.webp";
import pinkbirthdayDesktop from "../assets/pinkbirthdayDesktop.webp";
import emeraldUzatu from "../assets/emeraldUzatu.webp";
import emeraldUzatuDesktop from "../assets/emeraldUzatuDesktop.webp";
import goldenbirthday from "../assets/goldenbirthday.webp";
import goldenbirthdayDesktop from "../assets/goldenbirthdayDesktop.webp";
import goldenInvitation from "../assets/goldenInvitation.webp";
import goldenInvitationDesktop from "../assets/goldenInvitationDesktop.webp";
import goldenUzatu from "../assets/goldenUzatu.webp";
import goldenUzatuDesktop from "../assets/goldenUzatuDesktop.webp";
import goldenBirthdayParty from "../assets/goldenBirthdayParty.webp";
import goldenBirthdayPartyDesktop from "../assets/goldenBirthdayPartyDesktop.webp";
import evergreen from "../assets/evergreen.webp";
import evergreenDesktop from "../assets/evergreenDesktop.webp";
import darkRed from "../assets/darkRed.webp";
import darkRedDesktop from "../assets/darkRedDesktop.webp";



export interface Template {
  id: string;
  nameKey: string; // e.g. 'template.eucalyptus_garden.name'
  descriptionKey: string; // e.g. 'template.eucalyptus_garden.description'
  price: number;
  image: string;
  imageDesktop: string; // Optional desktop version of the image for larger screens
  link: string; // Optional link to view or purchase the template
  featuresKeys: string[]; // e.g. ['template.feature.rsvp', 'template.feature.gallery']
}

// Standard features for all templates
const standardFeatures = [
  "template.feature.rsvp",
  "template.feature.mobile",
  "template.feature.instantShare",
  "template.feature.gallery",
  "template.feature.multilanguage",
  "template.feature.privacy",
];

// Optional features
export const OPTIONAL_FEATURES = [
  {
    key: "template.feature.telegramBot",
    descriptionKey: "template.feature.telegramBotDescription",
    price: 10,
    noteKey: "template.feature.optional",
  },
  {
    key: "template.feature.customDomain",
    descriptionKey: "template.feature.customDomainDescription",
    price: 10,
    noteKey: "template.feature.from",
  },
];

// Example usage in UI: t(template.nameKey), t(template.descriptionKey), template.featuresKeys.map(f => t(f))
export const templates: Template[] = [
  {
    id: "1",
    nameKey: "templates.1.name",
    descriptionKey: "templates.1.description",
    price: 25,
    image: autumnTemplate,
    imageDesktop: autumnDesktop,
    link: "https://autumn-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "2",
    nameKey: "templates.2.name",
    descriptionKey: "templates.2.description",
    price: 20,
    image: pink,
    imageDesktop: pinkDesktop,
    link: "https://pink-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "3",
    nameKey: "templates.3.name",
    descriptionKey: "templates.3.description",
    price: 20,
    image: green,
    imageDesktop: greenDesktop,
    link: "https://green-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "4",
    nameKey: "templates.4.name",
    descriptionKey: "templates.4.description",
    price: 20,
    image: reveal,
    imageDesktop: revealDesktop,
    link: "https://reveal-party-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "5",
    nameKey: "templates.5.name",
    descriptionKey: "templates.5.description",
    price: 20,
    image: blue,
    imageDesktop: blueDesktop, 
    link: "https://blue-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "6",
    nameKey: "templates.6.name",
    descriptionKey: "templates.6.description",
    price: 20,
    image: pinkbirthday,
    imageDesktop: pinkbirthdayDesktop, 
    link: "https://pink-birthday-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "7",
    nameKey: "templates.7.name",
    descriptionKey: "templates.7.description",
    price: 25,
    image: emeraldUzatu,
    imageDesktop: emeraldUzatuDesktop, 
    link: "https://sabina-uzatu.76khwmidov.workers.dev/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  }, 
  {
    id: "8",
    nameKey: "templates.8.name",
    descriptionKey: "templates.8.description",
    price: 25,
    image: goldenbirthday,
    imageDesktop: goldenbirthdayDesktop, 
    link: "https://birthday-invitation.76khwmidov.workers.dev/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "9",
    nameKey: "templates.9.name",
    descriptionKey: "templates.9.description",
    price: 25,
    image: goldenInvitation,
    imageDesktop: goldenInvitationDesktop,
    link: "https://berdibek-and-sabina.netlify.app/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  }, 
  {
    id: "10",
    nameKey: "templates.10.name",
    descriptionKey: "templates.10.description",
    price: 30,
    image: goldenUzatu,
    imageDesktop: goldenUzatuDesktop,
    link: "https://uzatu-invitaion.netlify.app/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  },
  {
    id: "11",
    nameKey: "templates.11.name",
    descriptionKey: "templates.11.description",
    price: 20,
    image: goldenBirthdayParty,
    imageDesktop: goldenBirthdayPartyDesktop,
    link: "https://golden-birthday-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "12",
    nameKey: "templates.12.name",
    descriptionKey: "templates.12.description",
    price: 30,
    image: evergreen,
    imageDesktop: evergreenDesktop,
    link: "https://evergreen-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "13",
    nameKey: "templates.13.name",
    descriptionKey: "templates.13.description",
    price: 30,
    image: darkRed,
    imageDesktop: darkRedDesktop,
    link: "https://dark-red-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }
];

