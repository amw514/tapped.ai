import { FloatingNav } from "./ui/floating-navbar"


const navItems = [
    {
      name: "Roadmap",
      link: "https://tappedapp.notion.site/Technical-Roadmap-4edc036572bd4d89913f5cd5a4cde0f6?pvs=4",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Pricing",
      link: "/pricing"
    },
  ];


const Navbar = () => {
  return (
    <div className="fixed">
        <FloatingNav
          navItems={navItems}/>
    </div>
  )
}

export default Navbar