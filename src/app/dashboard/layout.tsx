import './style.css';

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
              <h1 className='greetings'>Hello, James</h1>
              <div className="header-widget">
                
              </div>
            </header>
            {children}</main>
        </section>
      </body>
    </html>
  );
}
