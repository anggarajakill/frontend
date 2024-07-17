
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Footer from './components/Footer';


function App() {

  return (
    <>
     
    <div className="intro" id='top'>
      <Navbar/>
      <Intro/>
    </div>
    <div className="trending">
       <Trending/>
    </div>

    <div className="Superhero">
        <Superhero/>
    </div>
    <div className="footer">
        <Footer/>
    </div>
         <a href="#top" className='btn btn-warning p-2 tombol'>Go To Top</a>
    </>
  )
}

export default App
