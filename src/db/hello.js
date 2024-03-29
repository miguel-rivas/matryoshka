import { user } from "./user";

const today = new Date();

export const fullName = `${user.middleName} ${user.lastName}`;

export const letter = [
  `I am <strong>${fullName}</strong> a ${user.title} living in ${user.location.city}, ${user.location.state} and I see you are looking for someone with my skill set to join your team and I would like to apply for the position.`,
  `I was for 4 years in Dominican Republic working with <strong>Capital DBG</strong> (one of the most prestigious agency in Santo Domingo) and <strong>Pixel Perfect Tree</strong> building landing pages, animations and single page apps.`,
  `I have other ${today.getFullYear() - 2017} years working in the United States with clients like the Government of Maryland using <strong>Ruby on Rails</strong> and <strong>Vue</strong> as the main frameworks meeting <strong>508 compliance</strong>.`,
  `You can see some of my projects at <a href="https://${user.website}">${user.website}</a>`,
  `Please do not hesitate to send me an email and ask me questions for any reason. looking forward to hearing from you. <strong>:)</strong>`,
];