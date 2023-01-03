import React from 'react';

export default function Profile() {
    return ( 
        <>
            <div classname='profile-container'>Nous sommes Mardi apm :)</div>
                
                <div classname='profile-parent'>
                    <div classname='profile-details'>

                        <div className='colz'>
                            <a href='https://www.facebook.com/fredericmoitry.fr'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://github.com/FredGalway/'>
                                <i className='fa fa-git-square'></i>
                            </a>
                            <a href='https://www.behance.net/bubblepix'>
                                <i className='fa fa-behance'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/frederic-moitry/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a> 
                        </div>

                    </div>
                </div>
        </>
        
    )
}