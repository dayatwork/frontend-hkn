type Link = {
  link: string; // use link key from locales
  label: string;
  links?: {
    link: string; // use link key from locales
    label: string;
  }[];
};

export const links: Link[] = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "visitor",
    link: "/visitor",
  },
  {
    label: "exhibitor",
    link: "/exhibitor",
  },
  {
    label: "faq",
    link: "/faq",
    links: [
      {
        label: "faq-general",
        link: "/faq/general",
      },
      {
        label: "faq-exhibitor",
        link: "/faq/exhibitor",
      },
      {
        label: "faq-visitor",
        link: "/faq/visitor",
      },
    ],
  },
];
