import logo from './logo.svg';
import './App.css';
import Bubble from "./Bubble.jpg";
import ENFP from"./ENFP.jpg";
import ENTP from"./ENTP.jpg";
import coupleHoliday from "./couple-holiday.png";
import twoFriends from "./two-friends.png";
import familyMembers from "./family-members.png";

import react, {useState} from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';





function App() {

  
    const MBTIOption = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ",
                    "ISTP", "ISFP", "ESTP", "ESFP" ]
    const [inputValue, setInputValue] = useState('Type your job or position');   
    const jobChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
    };              
  
  



  return (
    <div className="App">
      <header style= {{ width: '100%', height: '284px', flexShrink: '0', alignItems: 'center', flexDirection: 'column', padding:'10px'}}>
        <img src={Bubble} alt = "Bubble" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
        
      </header>

          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '33px',}}>
            <header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>Male</header>
            <div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
                    <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
                      <img src={ENFP} alt = "ENFP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></img>
                    </div>
                    <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
                      
                      <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}>
                            
                            {MBTIOption.map((option, index) =>(
                              <option key={index} value={option}>
                                {option}
                                </option>
                            ))} 
                            
                      </select>
                          
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type = "date" value = {Date}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type= "text" value={inputValue} onChange={jobChange} />
                    
                    </div>
            </div>

          </div>


          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '33px',}}>
            <header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>Femle</header>
            <div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
                    <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
                      <img src={ENTP} alt = "ENFP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></img>
                    </div>
                    <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
                      
                      <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}>
                            
                            {MBTIOption.map((option, index) =>(
                              <option key={index} value={option}>
                                {option}
                                </option>
                            ))} 
                            
                      </select>
                          
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type = "date" value = {Date}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type= "text" value={inputValue} onChange={jobChange} />
                    
                    </div>
            </div>

          </div>


          
      <div style = {{justifyContent:'center',}}>
      <footer style ={{width:'1032px', height:'291px', background: 'beige', display:'flex', justifyContent:'space-around',  height: '100vh', }}>
          
              <div   style={{
              width: '185px',
              height: '185px',
              display:'inline-block',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }} >
                <img src = {coupleHoliday} alt= "coupleHoliday"  style={{
                width: '165%',
                height: '165%',
                objectFit: 'cover', 
                position: 'absolute', 
                top: '-33%', 
                left: '-32%', // 調整圖片的左邊距
                transform: 'translate(0, 0)', // 將變換設置為初始位置
                
              }}/>

              </div>

              <div   style={{
              width: '185px',
              height: '185px',
              display:'inline-block',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }} >
                <img src = {twoFriends} alt= "twoFriends"  style={{
                width: '165%',
                height: '165%',
                objectFit: 'cover', 
                position: 'absolute', 
                top: '-35%', 
                left: '-32%', // 調整圖片的左邊距
                transform: 'translate(0, 0)', // 將變換設置為初始位置
                
              }}/>

              </div>


              <div   style={{
              width: '185px',
              height: '185px',
              display:'inline-block',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }} >
                <img src = {familyMembers} alt= "familyMembers"  style={{
                width: '165%',
                height: '165%',
                objectFit: 'cover', 
                position: 'absolute', 
                top: '-35%', 
                left: '-32%', // 調整圖片的左邊距
                transform: 'translate(0, 0)', // 將變換設置為初始位置
                
              }}/>

              </div>

          
        
           
          
        


      </footer>
      </div>


    </div>
  );
}

export default App;





//1.日期語言為中文
//flex 說明 https://www.oxxostudio.tw/articles/201501/css-flexbox.html