
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Chatbot from './Components/Chatbot';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    

    <Navbar/> 
    <div className="MainContainer">
        <Sidebar />
        <Chatbot />
        <Contact/>
      </div>
    
    
    </>
   );  
}

export default App;
