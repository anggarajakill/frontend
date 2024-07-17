import Dune from '../assets/images/trending/dune.jpg';
import Everything from '../assets/images/trending/everything.jpg';
import Infinite from '../assets/images/trending/infinite.jpg';
import Joker from '../assets/images/trending/joker.jpg';
import Lightyear from '../assets/images/trending/lightyear.jpg';
import Morbius from '../assets/images/trending/morbius.jpg';


function Trending() {
  return (
    
    <div className="container-fluid trending" id='trending'>
      <div className="container p-3 text-light">
      <h3 className='text-warning'>Trending</h3>
      <div className="row ">

       <div className="col-lg-4 col-md-6 col-sm-12  ">
         <div className="card" style ={{width: "18rem"}}>
           <img src={Dune} className="card-img-top"/>
           <div className="card-body" style={{backgroundColor: "rgb(122,164,154)"}}>
             <h5 className="card-title text-center ">Dune</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
           <img src={Everything} className="card-img-top"/>
           <div className="card-body" style={{backgroundColor: "rgb(240,203,205)"}}>
             <h5 className="card-title text-center">Everything</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
           <img src={Infinite} className="card-img-top "/>
           <div className="card-body" style={{backgroundColor: "rgb(82,99,117)"}}>
             <h5 className="card-title text-center">Infinite</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
           <img src={Joker} className="card-img-top"/>
           <div className="card-body" style={{backgroundColor: "rgb(185,189,174)"}}>
             <h5 className="card-title text-center">Joker</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
           <img src={Lightyear} className="card-img-top"/>
           <div className="card-body" style={{backgroundColor: "rgb(89,233,243)"}}>
             <h5 className="card-title text-center">Lightyear</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
           <img src={Morbius} className="card-img-top"/>
           <div className="card-body" style={{backgroundColor: "rgb(136,137,120)"}}>
             <h5 className="card-title text-center">Morbius</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-warning">Go somewhere</a>
           </div>
         </div>
       </div>
       </div> 

     </div>
     </div>
     
    
  )
}

export default Trending
