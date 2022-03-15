import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { collection, doc, getDocFromCache, onSnapshot, orderBy,query } from "firebase/firestore";
const Emojify = require("react-emojione").default;
export default function Home() {



    const [student, setStudents] =useState([{ name: "Loading...", id: "initial" }]);
    useEffect(
        () =>
          onSnapshot(query(collection(db,"points"),orderBy("overall","desc")), (snapshot) =>
          setStudents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          ),
        []
      );
      useEffect(()=>{
          
window.onload = function exampleFunction() {
    student.map(function (member, i){
        
        if(i === 0) {
            console.log(i)
            document.querySelector('.c-place').classList.add('u-text--dark')
            document.querySelector('.c-place').classList.add('u-bg--yellow')
            document.querySelector('.c-kudos').classList.add('u-text--yellow')
        } else if(i === 1) {
            document.querySelector('.c-place').classList.add('u-text--dark')
            document.querySelector('.c-place').classList.add('u-bg--teal')
            document.querySelector('.c-kudos').classList.add('u-text--teal')
        } else if(i === 2) {
            document.querySelector('.c-place').classList.add('u-text--dark')
            document.querySelector('.c-place').classList.add('u-bg--orange')
            document.querySelector('.c-kudos').classList.add('u-text--orange')
        }
    })
    
    // Function to be executed
}
      
 },)
 function returnClassRank(rank)
 {
    if(rank === 0) {
        return "u-text--dark u-bg--yellow "
      
        document.querySelector('.c-kudos').classList.add('u-text--yellow')
    } else if(rank=== 1) {
        return "u-text--dark u-bg--teal "

        document.querySelector('.c-place').classList.add('u-text--dark')
        document.querySelector('.c-place').classList.add('u-bg--teal')
        document.querySelector('.c-kudos').classList.add('u-text--teal')
    } else if(rank === 2) {
        return "u-text--dark u-bg--orange "

        document.querySelector('.c-place').classList.add('u-text--dark')
        document.querySelector('.c-place').classList.add('u-bg--orange')
        document.querySelector('.c-kudos').classList.add('u-text--orange')
    }
}
 
      console.log(student)
      const randomEmoji = () => {
        const emojis = [ ':)', ':cat: ', ':tiger:' ,'^___^', '^^U', ':D', ':unicorn:' ,'xD' ,'xDD', 'xDDD' ,
       ' :robot:', ':octopus:'];
        let randomNumber = Math.floor(Math.random() * emojis.length);
        return emojis[randomNumber]
    }
  return (
      
<div className="l-wrapper">
  <div className="c-header">
      
      <img class="c-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/km-logo-color.svg" draggable="false"/>
  </div>
  <div className="l-grid">
    <div className="l-grid__item l-grid__item--sticky">
      <div className="c-card u-bg--light-gradient u-text--dark">
        <div className="c-card__body">
          <div className="u-display--flex u-justify--space-between">


          </div>
        </div>
      </div>
      <div className="c-card">
        <div className="c-card__body">
          <div className="u-text--center" id="winner"></div>
        </div>
      </div>
    </div>
    <div className="l-grid__item">
      <div className="c-card">
        <div className="c-card__header">
          <h3>Received Kudos</h3>
          <select className="c-select">
            <option className="selected">Mo, Nov. 23 - Tue, Mar. 15</option>
          </select>
        </div>
        <div className="c-card__body">
          <ul className="c-list" id="list">
            <li className="c-list__item">
              <div class="c-list__grid">
                <div class="u-text--left u-text--small u-text--medium">Rank</div>
                <div class="u-text--left u-text--small u-text--medium">Team Member</div>
                <div class="u-text--right u-text--small u-text--medium"># of Kudos</div>

              </div>
            </li>
            {student.map(function renderMemberPoints(member, i){
                        return   <li className='c-list__item'>
                           <div class="c-list__grid">
                 <div className={`c-flag c-place u-bg--transparent `+returnClassRank(i)}>{i}</div>
                 <div className="c-media">
                 <img className="c-avatar c-media__img" src={`https://picsum.photos/200/300?random=`+i} />
                 <div className="c-media__content">
                     <div className="c-media__title">{member.name}</div>
                     <a className="c-media__link u-text--small" href="https://instagram.com/${member.handle}" target="_blank">@{member.name.replace(/ /g,"_")}</a>
                 </div>
                 </div>
                 <div className="u-text--right c-kudos">
                 <div className="u-mt--8">
					<strong>${member.overall}</strong>
                    <Emojify style={{height: 32, width: 32}}>
                        {randomEmoji()}
                            </Emojify>
                    {console.log(randomEmoji())}
				</div>
                 </div>
                 </div>
                     </li>
             })}
        
           
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
