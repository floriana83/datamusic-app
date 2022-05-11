import '../styles/globals.css'
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
