import { Navigation } from "./Navigation";

const navItem = [
 { label: "Home", href: "/" },
 { label: "Blog", href: "/blog" },
 { label: "About", href: "/about" },
];

export const TheHeader = () => {
 return (
  <header className="container">
   <Navigation navLinks={navItem} />
  </header>
 );
};
