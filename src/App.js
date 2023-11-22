import './App.css';
import Bubble from "./Bubble.jpg";
import ENFP from"./ENFP.jpg";
import ENTP from"./ENTP.jpg";
import coupleHoliday from "./couple-holiday.png";
import twoFriends from "./two-friends.png";
import familyMembers from "./family-members.png";

import {useState} from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';





function App() {

  
    const MBTIOption = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ",
                    "ISTP", "ISFP", "ESTP", "ESFP" ]
    const [inputValue, setInputValue] = useState('Type your job or position');   
    const jobChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
    }; 
    
    const [inputValue2, setInputValue2] = useState('Type your job or position')
    const jobChange2 = (e) => {
      const newValue = e.target.value;
      setInputValue2(newValue);
    }; 

    const [inputDate, setInputDate] = useState ('')
    const dateChange = (e) => {
      const newDate = e.target.value;
      setInputDate(newDate);
    }; 

    const [inputDate2, setInputDate2] = useState ('')
    const dateChange2 = (e) => {
      const newDate2 = e.target.value;
      setInputDate2(newDate2);
    }; 
  
  



  return (
    <div className="App">
      <header style= {{ width: '100%', height: '260px', flexShrink: '0', alignItems: 'center', flexDirection: 'column', padding:'0px'}}>
        <img src={Bubble} alt = "Bubble" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
        
      </header>

      <div style= {{display:'flex',}}>

          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px',}}>
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
                      type = "date" value = {inputDate} onChange={dateChange}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type= "text" value={inputValue} onChange={jobChange} />
                    
                    </div>
            </div>

          </div>


          <div style={{ height: '20px',}}></div>


          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px',}}>
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
                      type = "date" value = {inputDate2} onChange={dateChange2}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                      type= "text" value={inputValue2} onChange={jobChange2} />
                    
                    </div>
            </div>

          </div>
        </div>


          
      <div style = {{alignItems:'center',display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <footer style ={{width:'1032px', height:'291px', background: 'beige', display:'flex', justifyContent:'space-around', paddingTop: '25px', }}>
          

            <div style = {{flexDirection:'column',}}>  
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
                <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                  <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Lover
                  </p>
                </div>

                <div>
                   
                      <Button style= {{colorScheme:'teal', size:'sm'}}>
                          Get Report
                        </Button>
                     
                </div>

            </div>

              <div style = {{flexDirection:'column',}}> 
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
                      <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                      <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Friends
                      </p>
                    </div>        

                        <div>
                          
                              <Button style= {{colorScheme:'teal', size:'sm'}}>
                                  Get Report
                                </Button>
                            
                        </div>


              </div>
              <div style = {{flexDirection:'column',}}>
          
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
              <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                  <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Family
                  </p>
                </div>

                <div>
                   
                      <Button style= {{colorScheme:'teal', size:'sm'}}>
                          Get Report
                        </Button>
                     
                </div>
             </div>

          
        
           
          
        


      </footer>
      </div>


    </div>
  );
}

export default App;





//1.日期語言為中文
//flex 說明 https://www.oxxostudio.tw/articles/201501/css-flexbox.html