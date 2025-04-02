
import { navLinks } from "@/app/_lib/utilities";
import Link from "next/link";


export default function SidebarDefault() {

    return (
     <div className="sidebar-div">
      <h1 className="logo">
        Logo
      </h1>
       <nav className="nav-container">
        <ul className="parent-list">
          {navLinks?.map(link=>{

            return(
              <li className="nav-list"  key={link.title}>

                <Link href={link.href}

                className="nav-link-default"
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
