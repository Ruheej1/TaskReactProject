import './portfolio.css'
const Portfolio = () => {

    return (  
      
  
<div >
         <div>
              <h2 className="portfolio">Portfolio</h2>
              <hr />    
              <p className="portfolio-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum temporibus deserunt vel, incidunt, nostrum, sapiente ipsam nobis corrupti quos quibusdam perferendis porro officia! Dolores iste, neque ducimus quae commodi saepe.</p>
            </div>


        <div className="btn-grp">

        <button type="button" class="btn btn-primary portbtn">All</button>
         <button type="button" class=" btn btn-light portbtn2">Photography</button>
         <button type="button" class=" btn btn-light  portbtn2">Web</button>
         <button type="button" class=" btn btn-light  portbtn2">Brands</button>
         <button type="button" class=" btn btn-light  portbtn2">Social</button>
        </div>

  </div>
 );
}

export default Portfolio;
