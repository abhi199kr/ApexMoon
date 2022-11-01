import Carousel from 'react-bootstrap/Carousel';
import "./Carousel1.css"
function Carousel1() {
  return (
    <Carousel indicators={false}>
    <Carousel.Item >
      <div className="container
       ">
      <p className='text-center mcar text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores ut velit! Quidem explicabo a quis recusandae, possimus ad nostrum ut dolorum minima numquam fugit sit vel commodi ipsa eligendi!
      </p>
      {/* <h5 className='text-center mark'>Mark Mohivney <span className=''>owner @ North audio</span></h5> */}
      
      <h6 className='text-center text-info'>Mark Mohiney <span className='text-light'>owner @ North audio</span> </h6>
      </div>
      

      
    </Carousel.Item>
    <Carousel.Item >
      <div className="container
       ">
      <p className='text-center mcar text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores ut velit! Quidem explicabo a quis recusandae, possimus ad nostrum ut dolorum minima numquam fugit sit vel commodi ipsa eligendi!
      </p>
      {/* <h5 className='text-center mark'>Mark Mohivney <span className=''>owner @ North audio</span></h5> */}
      
      <h6 className='text-center text-info'>Mark Mohiney <span className='text-light'>owner @ North audio</span> </h6>
      </div>
      

      
    </Carousel.Item>
    <Carousel.Item >
      <div className="container
       ">
      <p className='text-center mcar text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores ut velit! Quidem explicabo a quis recusandae, possimus ad nostrum ut dolorum minima numquam fugit sit vel commodi ipsa eligendi!
      </p>
      {/* <h5 className='text-center mark'>Mark Mohivney <span className=''>owner @ North audio</span></h5> */}
      
      <h6 className='text-center text-info'>Mark Mohiney <span className='text-light'>owner @ North audio</span> </h6>
      </div>
      

      
    </Carousel.Item>

    

  
      
      
  </Carousel>
  );
}

export default Carousel1;