import { Carousel } from "flowbite-react";
import Manufacturing from '../../image-org/home/Carousel-images/Manufacturing_Image 2.jpg';
import Production from '../../image-org/home/Carousel-images/Product Engineering  - Image.jpg';
import PCB from '../../image-org/home/Carousel-images/Product Engineering Image_2.jpg';
 function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" style={{ height: '500px' }}>
      <Carousel pauseOnHover >
        <img src={Manufacturing} alt="..." />
        <img src={Production} alt="..." />
        <img src={PCB} alt="..." />

      </Carousel>
    </div>
  );
}
export default CarouselComponent;