import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

export const Testimonials = () => {
  const slider=useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx> -50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`

  }
  
  return (
   <div className="testimonials">
     <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
     <img src={back_icon} alt="" className='back-btn'onClick={slideBackward} />
     <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>Emily Johnson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Emily Johnson expresses her satisfaction with her decision to study at Edusity. She shares that the collaborative environment and innovative teaching methods have significantly enhanced her learning experience.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>James Anderson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>James Anderson states that Edusity has given him a transformative educational experience. The cutting-edge infrastructure and diverse student community have played a huge role in shaping his academic journey.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>Sophia Roberts</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Sophia Roberts feels that Edusity's engaging curriculum and friendly atmosphere have helped her grow both personally and academically. She highlights the helpful staff and advanced resources as key reasons for her success.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>David Smith</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>David Smith shares his appreciation for the guidance and expertise provided by Edusity's faculty. He emphasizes how the hands-on approach to learning has made a profound impact on his career development.</p>
          </div>
        </li>
      </ul>


     </div>
   </div>
  )
}
export default Testimonials
