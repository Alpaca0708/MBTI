import logo from './logo.svg';
import './App.css';
import Bubble from "./Bubble.jpg";
import ENFP from"./ENFP.jpg";
import ENTP from"./ENTP.jpg";




function App() {
  return (
    <div className="App">
      <header style= {{ width: '100%', height: '284px', flexShrink: '0', alignItems: 'center', flexDirection: 'column',}}>
        <img src={Bubble} alt = "Bubble" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
        
      </header>

          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '33px',}}>
            <header>Male</header>
            <div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
                    <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
                    {/* background: `url('./ENFP.jpg'), lightgray 50% / cover no-repeat` */}
                      <img src={ENFP} alt = "ENFP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></img>
                    </div>

                    <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
                      
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                    
                    </div>
            </div>

          </div>


          <div style = {{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '33px',}}>
            <header>Female</header>
            <div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
                    <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
                    {/* background: `url('./ENFP.jpg'), lightgray 50% / cover no-repeat` */}
                      <img src={ENTP} alt = "ENFP" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></img>
                    </div>

                    <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
                      
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                      <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}/>
                    
                    </div>
            </div>

          </div>

      <footer>

      </footer>


    </div>
  );
}

export default App;
