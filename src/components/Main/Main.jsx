import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent, recentPrompt, showResults, loading, resultData, input, setInput} = useContext(Context)



  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt='' />
        </div>

        <div className="main-container">
          
           {!showResults ?
            <>
                <div className="greet">
                    <p><span>Hello, from Gemini</span></p>
                    <p>How can i help you today?</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <p> Suggest some thing beaytiful</p>
                        <img src={assets.compass_icon} alt='' />
                    </div>
                    <div className="card">
                        <p> summarize the concept</p>
                        <img src={assets.bulb_icon} alt='' />
                    </div>
                    <div className="card">
                        <p>Brain strom team bonding</p>
                        <img src={assets.message_icon} alt='' />
                    </div>
                    <div className="card">
                        <p> Improve the readability of the following</p>
                        <img src={assets.code_icon} alt='' />
                    </div>
                </div>
            
            </> : <div className='result'>

                
                </div>
            
        }    


           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Search' />
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>

            <p className='bottom-info'>
                Gemini may operate differently than other chatbots. It is designed to help you with your daily tasks and improve your productivity.
            </p>

        </div>
      
    </div>
  )
}

export default Main
