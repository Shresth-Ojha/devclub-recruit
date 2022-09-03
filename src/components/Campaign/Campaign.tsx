import React from 'react'
import './campaign.css'
import members from './members.png'
import codelines from './codelines.png'
import activeprojects from './activeprojects.png'
export const Campaign = () => {
  return (

    <div id="campaign">
        <div id="campaigntext">
            <p id="campaignp1">
                Help build the Community
            </p>
            <hr id='line'></hr>
            <p id="campaignp2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, obcaecati accusantium. Ea totam dolore voluptate consequuntur facilis neque reprehenderit saepe sequi, nobis, adipisci at repellat doloremque optio ipsa inventore. Molestias.
            </p>
            <button id='allcampaigns'> VIEW ALL EVENTS</button>
        </div>
        <img id='campaignimg' src='https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_1280.jpg' alt=''></img>

        <div id="datarow">
            <ul id="datarowlist">
                <li className='datarowlistitem itemhome'>
                    <img className='datarowimg1' src={members} alt=''/>
                    <div>
                        <p className="dataabove">
                            50+
                        </p>
                        <p className="databelow">
                            Active Members
                        </p>
                    </div>
                </li>
                <li className='datarowlistitem'>
                    <img className='datarowimg2' src={codelines} alt=''/>
                    <div>
                        <p className="dataabove">
                            10K+
                        </p>
                        <p className="databelow">
                            Code Lines Written
                        </p>
                    </div>
                </li>
                <li className='datarowlistitem' id='item3'>
                    <img className='datarowimg3' src={activeprojects} alt=''/>
                    <div>
                        <p className="dataabove">
                            20+
                        </p>
                        <p className="databelow">
                            Active Projects
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}
