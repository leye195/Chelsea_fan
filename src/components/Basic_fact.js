import React from 'react';

const Basic_fact=()=>{
    return <section className="basic_fact">
        <h5>Basic Info</h5>
        <div>
            <div className="video_container">
                <iframe title="Chelsea FC - A Story" width="100%" height="550" 
                src="https://www.youtube.com/embed/BYdnj9delqw" frameBorder="0" allowFullScreen>
                </iframe>
            </div>
            <div>
                <p>Founded: 1905</p>
                <p>Country: England</p>
                <p>City: London</p>
                <p><b>Official Website:</b> <a href="http://www.chelseafc.com">www.chelseafc.com </a></p>
            </div>
            
        </div>
</section>
}
export default Basic_fact;