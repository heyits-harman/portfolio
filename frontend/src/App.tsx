import './App.css';
import { Header } from '../src/sections/header';
import { MainContent } from '../src/sections/mainContent';
import { Footer } from '../src/sections/footer';

function App() {

  return (
    <div id="root-container">
      <div style={{flex: 4}}>
        <Header />
      </div>
      <div style={{flex:81}}>
        <MainContent />
      </div>      
      <div style={{flex:15}}>
        <Footer />
      </div>
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
    // </div>
  )
} 

export default App
