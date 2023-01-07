import React from 'react';
import './Profile.css';
import './Motion.css';


export default function Profile() {
    return ( 
        <div>
            <div classname='profile-container' class='profile-container'>
                
                <div classname='profile-parent' class='profile-parent'>
                    <div classname='profile-details' class='profile-details'>

                        <div className='colz' class='colz'>
                            <div className='colz-icon' class='colz-icon'>
                                <a href='https://www.facebook.com/fredericmoitry.fr'>
                                    <i className='fa fa-facebook-square' class='fa fa-facebook-square'></i>
                                </a>
                                <a href='https://github.com/FredGalway/'>
                                    <i className='fa fa-git-square' class='fa fa-git-square'></i>
                                </a>
                                <a href='https://www.behance.net/bubblepix'>
                                    <i className='fa fa-behance' class='fa fa-behance'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/frederic-moitry/'>
                                    <i className='fa fa-linkedin-square' class='fa fa-linkedin-square'></i>
                                </a> 
                            </div>
                        </div>

                        <div className='profile-details-name' class='profile-details-name'>
                            <span className='primary-text' class='primary-text'>
                                {" "}
                                Hello I'm <span className='highlighted-text' class='highlighted-text'> Frédéric</span>
                            </span>
                        </div>

                        <div className='profile-details-role' class='profile-details-role'>
                            <h1>
                                <span className='primary-text' class='primary-text'>
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
                            <span className='profile-role-tagline' class='profile-role-tagline'>
                                Knack of building operations with front and back-end operations.
                            </span>
                        </div>
                        <div className='profile-options' class='profile-options'>
                            <button className='btn primary-btn'>Hire me</button>
                            <a href='resume.pdf' download='fmoitry resume.pdf'>
                                <button className='btn highlighted-btn btn' class='btn highlighted-btn btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture' class='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}