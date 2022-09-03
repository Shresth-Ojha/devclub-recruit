import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div id='home'>

        <div id="hometext">
            <p id='p1'>
                We Welcome You To
            </p>
            <p data-text = "DEV_CLUB" id='p2'>DEV_CLUB</p>
            <p id='p3'>
                We've spend the last 5 years helping over 25,00,000 teams
                just like yourself create and sustain successful online support.
            </p>
            <button id='donate'> JOIN NOW </button>
        </div>


        <div id='homevideo'>
            <iframe id='video' src="https://www.youtube.com/embed/h3gw8QbkPfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div id='backgroundleft'>
        </div>
    </div>
  )
}
