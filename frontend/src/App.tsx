import './App.css';
import { Header } from '../src/sections/Header';
import { MainContent } from '../src/sections/MainContent';
import { Footer } from '../src/sections/Footer';

function App() {

  return (
    <div id="root-container">     
      <Header />
      <MainContent />     
      <Footer />
    </div>




    // <div id="root-container">
    //   <div style={{flex: 4, backgroundColor: 'lightgreen'}}>
    //     <Header />
    //   </div>
    //   <div style={{flex:81, backgroundColor: 'lightblue'}}>
    //     <MainContent />
    //   </div>      
    //   <div style={{flex:15, backgroundColor: 'lightpink'}}>
    //     <Footer />
    //   </div>
    //</div>
  )
} 

export default App
