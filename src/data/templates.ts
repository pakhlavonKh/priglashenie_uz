import autumnTemplate from "../assets/autumn.png";
import autumnDesktop from "../assets/autumnDesktop.png";
import pink from "../assets/pink.png";
import pinkDesktop from "../assets/pinkDesktop.png";
import green from "../assets/green.png";
import greenDesktop from "../assets/greenDesktop.png";
import reveal from "../assets/reveal.png";
import revealDesktop from "../assets/revealDesktop.png";
import blue from "../assets/blue.png";
import blueDesktop from "../assets/blueDesktop.png";
import pinkbirthday from "../assets/pinkbirthday.png";
import pinkbirthdayDesktop from "../assets/pinkbirthdayDesktop.png";



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
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  },
  {
    id: "2",
    nameKey: "templates.2.name",
    descriptionKey: "templates.2.description",
    price: 20,
    image: pink,
    imageDesktop: pinkDesktop,
    link: "https://pink-invitation.netlify.app/",
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  }, 
  {
    id: "3",
    nameKey: "templates.3.name",
    descriptionKey: "templates.3.description",
    price: 20,
    image: green,
    imageDesktop: greenDesktop,
    link: "https://green-invitation.netlify.app/",
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  },
  {
    id: "4",
    nameKey: "templates.4.name",
    descriptionKey: "templates.4.description",
    price: 20,
    image: reveal,
    imageDesktop: revealDesktop,
    link: "https://reveal-party-invitation.netlify.app/",
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  }, 
  {
    id: "5",
    nameKey: "templates.5.name",
    descriptionKey: "templates.5.description",
    price: 20,
    image: blue,
    imageDesktop: blueDesktop, 
    link: "https://blue-invitation.netlify.app/",
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  },
  {
    id: "6",
    nameKey: "templates.6.name",
    descriptionKey: "templates.6.description",
    price: 20,
    image: pinkbirthday,
    imageDesktop: pinkbirthdayDesktop, 
    link: "https://pink-birthday-invitation.netlify.app/",
    featuresKeys: ["template.feature.rsvp", "template.feature.mobile"],
  }
];

