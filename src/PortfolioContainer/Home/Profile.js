import React from 'react';
import './Profile.css';
import './Motion.css';

export default function Profile() {
    return ( 
        <>
            <div classname='profile-container' id='profile-container'>
                
                <div classname='profile-parent' id='profile-parent'>
                    <div classname='profile-details' id='profile-details'>

                        <div className='colz' id='colz'>
                            <div className='colz-icon' id='colz-icon'>
                                <a href='https://www.facebook.com/fredericmoitry.fr'> <i className='fa fa-facebook-square'></i></a>
                                <a href='https://github.com/FredGalway/'><i className='fa fa-git-square'></i></a>
                                <a href='https://www.behance.net/bubblepix'><i className='fa fa-behance'></i></a>
                                <a href='https://www.linkedin.com/in/frederic-moitry/'><i className='fa fa-linkedin-square'></i></a> 
                            </div>
                        </div>

                        <div className='profile-details-name' id='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello I'm <span className='highlighted-text'> Frédéric</span>
                            </span>
                        </div>

                        <div className='profile-details-role' id='profile-details-role'>
                            <h1>
                                <span className='primary-text'>
                                    <div class="dropping-texts">
                                        <div>I'm Product Designer</div>
                                        <div>Developer Front-End</div>
                                        <div>Motion Designer</div>
                                        <div>I create Apps</div>
                                    </div>
                                </span>
                            </h1>
                        </div>
                        <div>
                            <span className='profile-role-tagline' id='profile-role-tagline'>
                                Knack of building operations with front and back-end operations.
                            </span>
                        </div>
                        <div className='profile-options' id='profile-options'>
                            <button className='btn primary-btn'>
                                {" "}
                                Hire me {" "}
                            </button>
                            <a href='resume.pdf' download='fmoitry resume.pdf'>
                                <button className='btn highlighted-btn btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture' id='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}