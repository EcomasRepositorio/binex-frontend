import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Inicio",
    link: "/",
    active: "", // Esto indica que no está activo inicialmente
    sub_menus: [ 
   
     
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Diplomados",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Certificados",
    link: "/service",
    active: "",
    sub_menus: [
     
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Nosotros",
    link: "/about",
    active: "",
    sub_menus: [
     
    ],
  },


  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
