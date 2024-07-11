import { Carousel } from "flowbite-react";
import Manufacturing from '../../image-org/home/Carousel-images/Manufacturing_Image 2.jpg';
import Production from '../../image-org/home/Carousel-images/Product Engineering  - Image.jpg';
import PCB from '../../image-org/home/Carousel-images/Product Engineering Image_2.jpg';

function CarouselComponent() {
  return (
    <div className="   bg-gray-100">
      <div className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px]">
        <Carousel pauseOnHover>
          <img className="object-cover w-full h-full" src={Manufacturing} alt="Manufacturing" />
          <img className="object-cover w-full h-full" src={Production} alt="Production" />
          <img className="object-cover w-full h-full" src={PCB} alt="PCB" />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
