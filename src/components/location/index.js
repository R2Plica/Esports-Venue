import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper"  >    
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.639080290537!2d-118.33704768478225!3d34.15557478057794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bfcf84f6244f%3A0x897753b17c9eb298!2sBlizzard+Arena!5e0!3m2!1sen!2sus!4v1546838613246" 
            width="100%" 
            height="500px" 
            frameBorder="0"
            allowFullscreen>
            </iframe>      
        <div className="location_tag">
        <div>Burbank</div>
        </div>
        </div>
    );
};

export default Location;