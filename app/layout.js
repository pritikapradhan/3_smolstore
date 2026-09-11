import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";


export const metadata = {
  title: "Smol Store",
  description: "A super cool store for smol things",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href="/">
                  <h1>Smolstore</h1>
                </Link>

                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new additions to the store, special offers, and so much more!</h5>
                <EmailInput />
              </div>

              <div className="links-container">
                <h3>Pritika Pradhan</h3>
                <Link href={'/'} className="nav-link">Portfolio</Link>
              </div>
              <div className="">
                <h3>Store</h3>
                <Link href={'/'} className="nav-link">Home</Link>
                <Link href={'/cart'} className="nav-link">Cart</Link>
              </div>
              <div className="socials">
                <p>© <a href='https://github.com/pritikapradhan' target="_blank">Pritika Pradhan</a> 2026<br />Built with NextJS & <a target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a></p>
                <div className="social-links">
                    <Link href={'https://github.com/pritikapradhan'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                    <Link href={'https://www.linkedin.com/in/pritika-pradhan/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>  
  );
}
