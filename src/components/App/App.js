import React from 'react'
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer.jsx";
import Nav from "../navbar/nav";
import Gallery from "../gallery/gallery";
import SecondHome from "../secondHome/secondHome";
import Contact from "../contact/contact";
import Map from '../map/map';


function App() {
  return (
    <div>      
    <div className="container">
<Nav/>
<Header />
<Main />
<Gallery />
<SecondHome/>
<Contact />
<Map />
<Footer />

</div>

</div>
  )
}

export default App
