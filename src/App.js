import './App.css';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      {/* <div id="logo-header">
        
      </div> */}
      {/* <div className='bgimg1'>
        <div className='caption'>
          <span className='border'>WALLY FLOORS</span>
        </div>
      </div> */}
      <Navigation/>
      <Home/>
      <About/>
      {/* <div className='text-section'>
        <h3 className='header'>ABOUT/SERVICES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}
      <div className='bgimg2'>
        <div className='caption'>
        </div>
      </div>
      {/* <div className='text-section'>
        <h3 className='header'>REVIEWS/GALLERY</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}
      <Reviews/>
      {/* <div className='text-section'>
  
        <div id="gallery">
          <img src={gallery1} className='gall-imgs'></img>
          <img src={gallery2} className='gall-imgs'></img>
          <img src={gallery3} className='gall-imgs'></img>
        </div>
      </div> */}
      <Gallery/>
      <div className='bgimg3'>
        <div className='caption'>
        </div>
      </div>
      <Contact/>
      {/* <div className='text-section-2'>
        <h3 className='header'>CONTACT</h3>
        <form id="contact-form">
                        <label className="form-labels">Name:</label>
                        <input type="text" className="form-inputs" name="name" placeholder="Name" required></input>
                        <label className="form-labels">Email:</label>
                        <input type="email" className="form-inputs" name="email" placeholder="Email" required></input>
                        <label className="form-labels">Services Inquiring About:</label>
                        <select className="form-inputs" name="service-inquiry" required>
                            <option value="All">All</option>
                            <option value="Hosting">Hosting</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Site Management">Site Management</option>
                            <option value="Other">Other</option>
                        </select>
                        <label className="form-labels">Addition Info:</label>
                        <textarea id="contact-textarea" placeholder="Additional Info" rows="10" name="additional-info"></textarea>       
        </form>
      </div> */}
    </>
  );
}

export default App;
