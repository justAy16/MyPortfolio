import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

// export const SkillData = [
//   {
//     name: "Html 5",
//     Image: "/html.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Css",
//     Image: "/css.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "JavaScript",
//     Image: "/js.png",
//     width: 65,
//     height: 65,
//   },
//   {
//     name: "Tailwind Css",
//     Image: "/tailwind.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "React",
//     Image: "/react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Redux",
//     Image: "/redux.png",
//     width: 80,
//     height: 80,
//   },

//   {
//     name: "TypeScript",
//     Image: "/ts.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Next js 13",
//     Image: "/next.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Framer Motion",
//     Image: "/framer.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Stripe Payment",
//     Image: "/stripe.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Node js",
//     Image: "/node-js.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Mongo db",
//     Image: "/mongodb.png",
//     width: 40,
//     height: 40,
//   },
// ];
// const handleContactClick = () => {
//   // Replace the `1234567890` with your WhatsApp number
//   const whatsappNumber = '1234567890';
//   const whatsappMessage = encodeURIComponent('Hello, I want to send you a message.');
//   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
//   // Open the WhatsApp chat URL in a new tab
//   window.open(whatsappURL, '_blank');
// };
export const Socials = [
  {
    key: 1,
    name: "Instagram",
    src: "/instagram.svg",
    href: "https://www.instagram.com/justay_16?igsh=MWE3YXAwdnV5MTQ1aw%3D%3D&utm_source=qr",
    target: "_blank"
  },
  {
    key:2,
    name: "Whatsapp",
    src: "/whatsapp.svg",
    href: "https://wa.me/+2347067129268",
    target: "_blank"
  },
  {
    key:3,
    name: "Discord",
    src: "/discord.svg",
    href: "https://discord.com/users/706893160374206557",
    target: "_blank"
  },
];


export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/#about",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/#projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/#contact",
  },
];
export const Menu = [
  {
    key: 1,
    title:"About",
    path: "/#about"
  },
  {
    key: 2,
    title:"Projects",
    path: "/#projects"
  },
  {
    key: 3,
    title:"Contact",
    path: "/#contact"
  }
]
export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        {/* <li>PostgreSQL</li> */}
        {/* <li>Sequelize</li> */}
        <li>JavaScript</li>
        <li>React</li>
        <li>Typescript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Javascript Bootcamp at GoMyCode</li>
        {/* <li>University of California, Santa Cruz</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>GoMyCode Certified Fullstack Developer</li>
        {/* <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Game Website",
    description: "Game websites that recommends latest games for users using RawG Api ",
    image: "/projectImg/GameHub.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/justAy16/mygamehaven",
    previewUrl: "https://mygamehaven-demo.vercel.app/",
  },
  {
    id: 2,
    title: "Redux Todo App",
    description: "Todo App using Redux",
    image: "/projectImg/Todo.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/justAy16/Redux-Checkpoint",
    previewUrl: "https://redux-checkpoint-nine.vercel.app/",
  },
]
