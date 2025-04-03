import './style.css';
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

import { MdOutlineSavings } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

import Link from "next/link";
export default function DashboardLayout({
  children,
  sidebar, 
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <section className="container">
          <aside className="sidebar">{sidebar}</aside>
          <main className="main-content">
            <header className='main-content-header'>
              <h1 className='greetings'>Hi,Mayowa</h1>
              <div className="header-widget">
              <FaRegCalendarAlt className='icon'/>
              <MdOutlineMessage className='icon'/>
              <IoNotifications className='icon'/>
                <div className="avatar">JA</div>
              </div>
              <div className="header-nav-responsive">
               <ul className='parent-resp-list'>
                <li className="responsive-list">
                <GrTransaction className='icon'/>
                  <Link href="/dashboard/transactions" className='resp-link'>Transactions</Link>
                </li>
                <li className="responsive-list">
                  <MdOutlineSavings className='icon'/>
                <Link href="/dashboard/savings" className='resp-link'>Savings</Link>
                </li>
                <li className="responsive-list">
                <IoNotifications className='icon'/>
                </li>
                
               </ul>
              </div>
            </header>
            {children}</main>
        </section>
      </body>
    </html>
  );
}
