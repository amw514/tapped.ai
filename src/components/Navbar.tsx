import { FloatingNav } from "./ui/floating-navbar"


const navItems = [
    {
      name: "roadmap",
      link: "https://tappedapp.notion.site/Technical-Roadmap-4edc036572bd4d89913f5cd5a4cde0f6?pvs=4",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "pricing",
      link: "/pricing"
    },
  ];


const Navbar = () => {
  return (
    <div>
        <FloatingNav
          navItems={navItems}/>
    </div>
  )
}

export default Navbar