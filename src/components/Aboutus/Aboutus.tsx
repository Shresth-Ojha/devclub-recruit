import React, { useState } from 'react'
import { News } from '../News/News'
import './aboutus.css'

export const Aboutus = () => {

    const [itemchecker, setitemchecker] = useState(1)

    // if(itemchecker == 1){
    //     const var = 'active';
    // }
    // else if ( itemchecker == 2 )

  return (
    <div id='aboutus'>
        {/* <img src="https://cdn.pixabay.com/photo/2022/08/22/17/31/sea-7404152_1280.png" alt="" id="bgimg" /> */}
        <div id="about">
            <p id='aboutleft'>About Us<hr id='aboutline'/></p>
            <p id="aboutright">Dev Club is one of the biggest clubs of IIT Delhi. As a part of the Institute Technical Council, we aim to provide a gateway for the people in our institute to join the coding community.</p>
            <button id="readmore">READ MORE</button>
        </div>

        <div id="mission">
            <div id='leftmenu'>
                <button className={`leftmenuitem1 hey${itemchecker}`} onClick={() => setitemchecker(1)}>Our Vision</button>
                <button className={`leftmenuitem2 hey${itemchecker}`} onClick={() => setitemchecker(2)}>Our Values</button>
                <button className={`leftmenuitem3 hey${itemchecker}`} onClick={() => setitemchecker(3)}>Our Mission</button>
            </div>

            <div id='rightmenu'>
                <div className={`card1 hey${itemchecker}`}>
                    <p className="cardhead">Listen,Act,Learn,Repeat</p>
                    <p className='cardcontent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.<hr className='missionline'/></p>
                </div>
                <div className={`card2 hey${itemchecker}`}>
                    <p className="cardhead">Heading 2</p>
                    <p className='cardcontent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.<hr className='missionline'/></p>
                </div>
                <div className={`card3 hey${itemchecker}`}>
                    <p className="cardhead">Heading 3</p>
                    <p className='cardcontent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.<hr className='missionline'/></p>
                </div>
            </div>
        </div>
        <News/>
    </div>
  )
}
