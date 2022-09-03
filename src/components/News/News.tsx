import React, { useState } from 'react'
import './news.css'
import news1img from './news1img.png'
export const News = () => {

    const [newscounter, setnewscounter] = useState(1)

    const nexthandler = () => {
        console.log("he")
        if(newscounter === 3){
            setnewscounter(1)
        }
        else{
            setnewscounter(newscounter+1)
        }
    }
    const prevhandler = () => {
        if(newscounter === 1){
            setnewscounter(3)
        }
        else{
            setnewscounter(newscounter-1)
        }
    }
  return (
    <div>
        <div id="news">
            <h1 id='newsheader'>
                Latest Events
            </h1>
            <div id='newscards'>
            <button className='navbuttons' id='prev' onClick={()=>prevhandler()}> {`<`} </button>
            <button className='navbuttons' id='next' onClick={()=>nexthandler()}> {`>`} </button>

                <div className={`newscard1 hey${newscounter}`}>
                    <img className='newsimg' src={news1img} alt="" />
                    <div className="newsright">
                        <p className="newsrightabove">Events Headline1</p>
                        <p className='newsrightbelow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.</p>
                    </div>
                </div>

                <div className={`newscard2 hey${newscounter}`}>
                    <img className='newsimg' src={news1img} alt="" />
                    <div className="newsright">
                        <p className="newsrightabove">Events Headline2</p>
                        <p className='newsrightbelow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.</p>
                    </div>
                </div>

                <div className={`newscard3 hey${newscounter}`}>
                    <img className='newsimg' src={news1img} alt="" />
                    <div className="newsright">
                        <p className="newsrightabove">Events Headline3</p>
                        <p className='newsrightbelow'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequuntur alias minima, voluptatum nesciunt quo dolore aut quam mollitia, doloremque vero commodi, odit deleniti consequatur sequi totam delectus. Nisi, voluptatibus.</p>
                    </div>
                </div>
            </div>
            <div id="newstracker">
                <hr className={`tracker1 hey${newscounter}`}></hr>
                <hr className={`tracker2 hey${newscounter}`}></hr>
                <hr className={`tracker3 hey${newscounter}`}></hr>
            </div>
        </div>

        <div id='donatebar'>
            <p id='donatebartext'>Let's build amazing things with our talent!</p>
            <button id="donatenow">JOIN NOW</button>
        </div>
    </div>
  )
}
