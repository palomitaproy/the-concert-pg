
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
         <iframe 
                title="Location the event"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.49865169546!2d13.44144291577485!3d52.50631427981163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e4f506571e5%3A0x18f908279305c532!2sMercedes-Benz%20Arena%20Berlin!5e0!3m2!1sde!2sde!4v1586360491615!5m2!1sde!2sde" 
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen 
           ></iframe>
           <div className="location_tag">
               <div>Location</div>

           </div>
        </div>
    );
};

export default Location;