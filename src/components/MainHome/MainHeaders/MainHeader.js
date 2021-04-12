import React from 'react';
import Chair from '../../../images/chair.png';
import './MainHeader.css';
const MainHeader = () => {
    return (
            <main style={{height:'600px'}} className='style row d-flex align-items-center'>
                <div className="col col-md-4 offset-md-1">
                   <h1 style={{color:'#3A4156'}}>Your New Smile <br/> Starts Here </h1>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae culpa cumque aut tempore tenetur non rem minima necessitatibus vitae.</p>
                   <button>
                   Get Appointment
                   </button>
                </div>
                <div className='col col-md-6'>
                <img className='img-fluid' src={Chair} alt=""/>
                </div>
        </main>
    );
};

export default MainHeader;