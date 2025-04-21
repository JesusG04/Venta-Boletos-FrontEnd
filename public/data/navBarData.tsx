import {
  IconAlbum,
  IconCalendarEvent,
  IconClipboardText,
  IconDots,
  IconHeadset,
  IconMusic,
  IconSmartHome,
  IconWorld,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const sideBarData = [

  //Left Menu
  {
    id: uuidv4(),
    menuTitle: "Inicio",
    icon: <IconSmartHome />,
    path:'/',
  },
  {
    id: uuidv4(),
    menuTitle: "Eventos",
    path: "/event",
    icon: <IconCalendarEvent />,
  },

  
  //Lef Nav Mobile
  {
    id: uuidv4(),
    menuTitle: "Recent",
    className: "d-xl-none",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Genres",
        dropDownPath: "/genres",
      },
      {
        id: uuidv4(),
        title: "Moods",
        dropDownPath: "/moods",
      },
      {
        id: uuidv4(),
        title: "Trending",
        dropDownPath: "/trending",
      },
      {
        id: uuidv4(),
        title: "Popular",
        dropDownPath: "/artists",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Others",
    className: "d-xl-none",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Sing In",
        dropDownPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        dropDownPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        dropDownPath: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        dropDownPath: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        dropDownPath: "/error",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Pages",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Blog Page",
        dropDownPath: "/blog",
      },
      {
        id: uuidv4(),
        title: "Blog Details",
        dropDownPath: "/blog-details",
      },
      {
        id: uuidv4(),
        title: "Show Page",
        dropDownPath: "/freature-show",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        dropDownPath: "/show-details",
      },
      {
        id: uuidv4(),
        title: "Product Page",
        dropDownPath: "/product",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Check out",
        dropDownPath: "/checkout",
      },
      {
        id: uuidv4(),
        title: "Pricing Plan",
        dropDownPath: "/pricing",
      },
    ],
  },
];

export const mainNavbarData = [
  {
    id: uuidv4(),
    menuTitle: "Genres",
    path: "/genres",
  },
  {
    id: uuidv4(),
    menuTitle: "Moods",
    path: "/moods",
  },
  {
    id: uuidv4(),
    menuTitle: "Trending",
    path: "/trending",
  },
  {
    id: uuidv4(),
    menuTitle: "Popular",
    path: "/artists",
  },
  {
    id: uuidv4(),
    menuTitle: "Others",
    path: "#",
    icon: <IconDots />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Sing In",
        dropDownPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        dropDownPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        dropDownPath: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        dropDownPath: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        dropDownPath: "/error",
      },
    ],
  },
];
