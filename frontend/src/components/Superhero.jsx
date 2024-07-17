import Antman from '../assets/images/superhero/antman.jpg';
import Avenger from '../assets/images/superhero/avenger.jpg';
import Batman from '../assets/images/superhero/batman.jpg';
import Robinhood from '../assets/images/superhero/robinhood.jpg';
import Spiderman from '../assets/images/superhero/spiderman-cover.jpg';
import Superman from '../assets/images/superhero/superman.jpg';
function Superhero() {
  return (
   
    <div className="container-fluid superhero" id='superhero'>
    <div className="container p-3 text-light">
    <h3 className='text-warning'>Superhero</h3>
    <div className="row ">

     <div className="col-lg-4 col-md-6 col-sm-12  ">
       <div className="card" style ={{width: "18rem"}}>
         <img src={Antman} className="card-img-top"/>
         <div className="card-body" style={{backgroundColor: "rgb(122,164,154)"}}>
           <h5 className="card-title text-center">Antman</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12  ">
     <div className="card" style ={{width: "18rem"}}>
         <img src={Avenger} className="card-img-top"/>
         <div className="card-body" style={{backgroundColor: "rgb(105,117,243)"}}>
           <h5 className="card-title text-center">Avenger</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12  ">
     <div className="card" style ={{width: "18rem"}}>
         <img src={Batman} className="card-img-top "/>
         <div className="card-body" style={{backgroundColor: "rgb(87,130,139)"}}>
           <h5 className="card-title text-center">Batman</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12  ">
     <div className="card" style ={{width: "18rem"}}>
         <img src={Robinhood} className="card-img-top"/>
         <div className="card-body" style={{backgroundColor: "rgb(191,84,43)"}}>
           <h5 className="card-title text-center">Robinhood</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12  ">
     <div className="card" style ={{width: "18rem"}}>
         <img src={Spiderman} className="card-img-top"/>
         <div className="card-body" style={{backgroundColor: "rgb(231,220,206)"}}>
           <h5 className="card-title text-center">Spiderman</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-warning">Go somewhere</a>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12  ">
     <div className="card" style ={{width: "18rem"}}>
         <img src={Superman} className="card-img-top"/>
         <div className="card-body" style={{backgroundColor: "rgb(51,80,90)"}}>
           <h5 className="card-title text-center">Superman</h5>
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

export default Superhero
