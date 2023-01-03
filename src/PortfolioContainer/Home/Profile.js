import React from 'react';
import './Profile.css';

export default function Profile() {
    return ( 
        <>
            <div classname='profile-container'></div>
                
                <div classname='profile-parent'>
                    <div classname='profile-details'>

                        <div className='colz'>
                            <a href='https://www.facebook.com/fredericmoitry.fr'> <i className='fa fa-facebook-square'></i></a>
                            <a href='https://github.com/FredGalway/'><i className='fa fa-git-square'></i></a>
                            <a href='https://www.behance.net/bubblepix'><i className='fa fa-behance'></i></a>
                            <a href='https://www.linkedin.com/in/frederic-moitry/'><i className='fa fa-linkedin-square'></i></a> 
                        </div>

                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello I'm <span className='highlighted-text'> Frédéric</span>
                            </span>
                        </div>

                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                <div class="dropping-texts">
                                    <div>I'm Product Designer</div>
                                    <div>Developer Front-End</div>
                                    <div>Motion Designer</div>
                                    <div>I create Apps</div>
                                </div>
                            </span>
                        </div>

                    </div>
                </div>
        </>
        
    )
}