import Form from "../form/form";
import './map.css'
const Map = () => {

    return (

        <div>
            <div className="block-container">
           
            <div className="block-item">
               <Form />
            </div>
            <div className="block-item"><iframe class="responsive-iframe" title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4302109309206!2d77.39993881492012!3d28.496701482471565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce981341cbe7f%3A0x8b00a100b46edff4!2sOttonomy%20Inc%2C%20Ottonomy%20IO%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1653829021057!5m2!1sen!2sin"  
      
      width="100%"
     
      height="450"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"></iframe></div>

</div>
        </div>
        );
    }
  
  
  export default Map;