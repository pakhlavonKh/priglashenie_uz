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
import darkBlue from "../assets/darkBlue.webp";
import darkBlueDesktop from "../assets/darkBlueDesktop.webp";
import graduation from "../assets/graduation.webp";
import graduationDesktop from "../assets/graduationDesktop.webp";
import flight from "../assets/flight.webp";
import flightDesktop from "../assets/flightDesktop.webp";
import goldenHour from "../assets/goldenHour.webp";
import goldenHourDesktop from "../assets/goldenHourDesktop.webp";
import summerVows from "../assets/summerVows.webp";
import summerVowsDesktop from "../assets/summerVowsDesktop.webp";
import everLasting from "../assets/everLasting.webp";
import everLastingDesktop from "../assets/everLastingDesktop.webp";
import everLove from "../assets/everLove.webp";
import everLoveDesktop from "../assets/everLoveDesktop.webp";
import bloomDesktop from "../assets/bloomDesktop.webp";
import bloom from "../assets/bloom.webp";
import elegant from "../assets/elegant.webp";
import elegantDesktop from "../assets/elegantDesktop.webp";



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
    id: "19",
    nameKey: "templates.19.name",
    descriptionKey: "templates.19.description",
    price: 20,
    image: everLasting,
    imageDesktop: everLastingDesktop, 
    link: "https://ever-lasting-invitation.netlify.app/",
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
    id: "3",
    nameKey: "templates.3.name",
    descriptionKey: "templates.3.description",
    price: 15,
    image: green,
    imageDesktop: greenDesktop,
    link: "https://green-invitation.netlify.app/",
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
  }, 
  {
    id: "16",
    nameKey: "templates.16.name",
    descriptionKey: "templates.16.description",
    price: 35,
    image: flight,
    imageDesktop: flightDesktop,
    link: "https://flight-to-wedding.netlify.app/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  },
  {
    id: "14",
    nameKey: "templates.14.name",
    descriptionKey: "templates.14.description",
    price: 25,
    image: darkBlue,
    imageDesktop: darkBlueDesktop,
    link: "https://dark-blue-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "4",
    nameKey: "templates.4.name",
    descriptionKey: "templates.4.description",
    price: 15,
    image: reveal,
    imageDesktop: revealDesktop,
    link: "https://reveal-party-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "8",
    nameKey: "templates.8.name",
    descriptionKey: "templates.8.description",
    price: 15,
    image: goldenbirthday,
    imageDesktop: goldenbirthdayDesktop, 
    link: "https://birthday-invitation.76khwmidov.workers.dev/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "2",
    nameKey: "templates.2.name",
    descriptionKey: "templates.2.description",
    price: 15,
    image: pink,
    imageDesktop: pinkDesktop,
    link: "https://pink-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "10",
    nameKey: "templates.10.name",
    descriptionKey: "templates.10.description",
    price: 15,
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
    id: "15",
    nameKey: "templates.15.name",
    descriptionKey: "templates.15.description",
    price: 15,
    image: graduation,
    imageDesktop: graduationDesktop,
    link: "https://graduation-party.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "17",
    nameKey: "templates.17.name",
    descriptionKey: "templates.17.description",
    price: 20,
    image: goldenHour,
    imageDesktop: goldenHourDesktop,
    link: "https://golden-hour-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  },
  {
    id: "18",
    nameKey: "templates.18.name",
    descriptionKey: "templates.18.description",
    price: 20,
    image: summerVows,
    imageDesktop: summerVowsDesktop,
    link: "https://summer-vows-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures,
      "template.feature.music"
    ],
  },
  {
    id: "1",
    nameKey: "templates.1.name",
    descriptionKey: "templates.1.description",
    price: 15,
    image: autumnTemplate,
    imageDesktop: autumnDesktop,
    link: "https://autumn-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "20",
    nameKey: "templates.20.name",
    descriptionKey: "templates.20.description",
    price: 20,
    image: everLove,
    imageDesktop: everLoveDesktop, 
    link: "https://ever-love-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }, 
  {
    id: "21",
    nameKey: "templates.21.name",
    descriptionKey: "templates.21.description",
    price: 15,
    image: bloom,
    imageDesktop: bloomDesktop, 
    link: "https://bloom-birthday.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  },
  {
    id: "22",
    nameKey: "templates.22.name",
    descriptionKey: "templates.22.description",
    price: 20,
    image: elegant,
    imageDesktop: elegantDesktop, 
    link: "https://elegant-invitation.netlify.app/",
    featuresKeys: [
      ...standardFeatures
    ],
  }
];

