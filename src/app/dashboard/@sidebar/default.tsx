"use client";
import { navLinks } from "@/app/_lib/utilities";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDefault() {
const pathname=usePathname();
    return (
     <div className="sidebar-div">
      <h1 className="logo">
        Logo
      </h1>
       <nav className="nav-container">
        <ul className="parent-list">
          {navLinks?.map(link=>{
   const isActive=pathname===link.href || (pathname.startsWith(link.href) && link.href!=="/" )
            return(
              <li className={isActive?"nav-list-active":"nav-list" } key={link.title}>
                <Link href={link.href}
              className={isActive?"nav-link-active":"nav-link-default"}
                >
                {link.title}
                </Link>
              </li>
            )
          })
          }
        </ul>
      </nav>
     </div>
    );
  }
