import React from 'react'
import './contactus.css'

export const Contactus = () => {
    return (
        <div id='contactus'>
            <h1 id="contactheadingup">Contact Us</h1>
            <p id="contactheadingdown">WE'D LOVE TO HEAR FROM YOU</p>

            <div id="contactcontent">
                <div id="contentleft">
                    <p id='leftp1'>
                        FOR BUSINESS ENQUIRIES
                    </p>
                    <p id='leftp2'>
                        devclub@iitd.ac.in
                    </p>
                    <p id='leftp3'>
                        Subscribe to our newsletter to get more info.
                    </p>
                    <input id='leftinputemail' placeholder='EMAIL' />
                    <button id='leftbutton'>SUBSCRIBE</button>
                    <p id='leftp4'>
                        @2022-2023 DevClub
                    </p>
                </div>

                {/* <div id="contentright"> */}
                <form id="contentright">
                    <div id='formname'>
                        <p>
                            FIRST NAME <br />
                            <input className='input' id='inputfirstname' type='text' />
                        </p>
                        <p id='plastname'>
                            LAST NAME <br />
                            <input className='input' id='inputlastname' type='text' />
                        </p>
                    </div>
                    <div id='formemail'>
                        EMAIL <br />
                        <input className='input' type='text' />
                    </div>
                    <div id='formmsg'>
                        TYPE YOUR MESSAGE HERE <br />
                        <textarea placeholder='Message:' id='msginput'></textarea>
                    </div>
                    <input id='rightsubmit' type='submit' />
                </form>
                {/* </div> */}
            </div>
            <a href='#navbar' id='backtotop'>Go back to Top<br/>Click here</a>
            <div id='footer'>
                <a className='footerlink' href='https://www.instagram.com/devclub_iitd/?hl=en'>
                    Instagram
                </a>
                <a className='footerlink' href='https://twitter.com/devclub_iitd'>
                    Twitter
                </a>
                <a className='footerlink' href='https://www.youtube.com/c/DevClubIITD'>
                    Youtube
                </a>
            </div>
        </div>
    )
}
