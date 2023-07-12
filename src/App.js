import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/service" element={<Service />}/>
            <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
         
        
    

    
        
    
  );
}

export default App;
