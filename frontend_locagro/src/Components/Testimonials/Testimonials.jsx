import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../assets1/testimonials/next-icon.png'
import back_icon from '../assets1/testimonials/back-icon.png'
import user_1 from '../assets1/testimonials/user-1.png'
import user_2 from '../assets1/testimonials/user-2.png'
import user_3 from '../assets1/testimonials/user-3.png'
import user_4 from '../assets1/testimonials/user-4.png'


const Testimonials = () => {

    const slider = useRef(null);  // Initialize as null to avoid undefined errors
  const tx = useRef(0);

  const slideForward = () => {
    if (slider.current) {  // Ensure slider.current is not undefined
      if (tx.current > -30) {  // Adjust as per the number of slides
        tx.current -= 10;
        slider.current.style.transform = `translateX(${tx.current}%)`;
      }
    }
  };

  const slideBackward = () => {
    if (slider.current) {  // Ensure slider.current is not undefined
      if (tx.current < 0) {
        tx.current += 10;
        slider.current.style.transform = `translateX(${tx.current}%)`;
      }
    }
  };
  


  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className="next-btn"  onClick={slideForward}/>
        <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
        <div className="slider">
           <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Julie Doe</h3>
                            <span>Locagrow offers excellent insights into agri-tech investments 
                                and emerging industry trends.
                                 It’s ideal for investors and tech-savvy farmers. 
                                Their reports are well-researched and easy to follow.</span>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>John Hex</h3>
                            <span>Locagrow provides timely news 
                                and resources for farmers across the India, 
                                covering crop management, machinery, and market trends. 
                                The site is user-friendly and updated frequently.</span>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sarah Rachel</h3>
                            <span>AgWeb offers a comprehensive look at agriculture with news,
                                 weather, and market data.
                                 It's highly reliable for daily updates,
                                  though the interface could be more modern.</span>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Harry Potter</h3>
                            <span>Locagrow combines farming with lifestyle,
                                 making agriculture approachable for everyone.
                                 Its articles are insightful and creatively written, 
                                 appealing to both urban and rural audiences.</span>
                        </div>
                    </div>
                </div>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Testimonials