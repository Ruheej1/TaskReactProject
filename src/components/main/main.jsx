import "../index.css"
import Portfolio from '../portfolio/portfolio';
import "./main.css"


const Main = () => {

    
  return (  

      <main>
       
       <section>
       <h2>Our World</h2>
              <hr />
              <p  className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nihil quo. Suscipit, explicabo voluptatum! Labore animi cumque error perspiciatis eum? lorem dolor sit amet consectetur adipisicing elit. Autem, nihil quo.</p>
       </section>
             
       
        <div>
             <div className="services">
                <div className="service-one">
                
                <p className="service-title">Journe</p>
                <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                </div>
                <div className="service-two overlay">
                
                <p className="service-title">Brands</p>
                <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>
            
                </div>
                <div className="service-three">
                
                <p className="service-title">Works</p>
                <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>
               </div>

               <div className="service-four">
                
                <p className="service-title">Projects</p>
                <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                </div>

               <div className="service-five">
                
                <p className="service-title">Photography</p>
                <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                </div>

                

                <div className="service-six">
                
                <p className="service-title">Fashion</p>
                <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                </div>

               
            </div>
        </div>
        <button type="button" class="btn btn-primary read-btn">Read More</button>

      <div>
      
        <Portfolio />
        
      </div>
      </main>
    );
  }


export default Main;
