import { Carousel } from "flowbite-react";
import Manufacturing from '../../image-org/home/Carousel-images/Product Engineering  - Image.jpg';
import Production from '../../image-org/home/Carousel-images/Product Engineering Image_3.jpg';
import PCB from '../../image-org/home/Carousel-images/pcb-design.jpg';
import { useEffect } from "react";
import './Carousel.css'

function CarouselComponent() {
  useEffect(() => {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    // config param
    let countItem = items.length;
    let itemActive = 0;

    // event next click
    next.onclick = function () {
      itemActive = itemActive + 1;
      if (itemActive >= countItem) {
        itemActive = 0;
      }
      showSlider();
    };

    // event prev click
    prev.onclick = function () {
      itemActive = itemActive - 1;
      if (itemActive < 0) {
        itemActive = countItem - 1;
      }
      showSlider();
    };

    // auto run slider
    let refreshInterval = setInterval(() => {
      next.click();
    }, 5000);

    function showSlider() {
      // remove item active old
      let itemActiveOld = document.querySelector('.slider .list .item.active');
      let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
      itemActiveOld.classList.remove('active');
      thumbnailActiveOld.classList.remove('active');

      // active new item
      items[itemActive].classList.add('active');
      thumbnails[itemActive].classList.add('active');

      // clear auto time run slider
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 5000);
    }

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
      });
    });
  }, []);

  return (
    <div className="slider rounded-xl manrope-regular">
      <div className="arrows-prev">
        <button id="prev">&#60;</button>
      </div>
      <div className="list">
        <div className="item active">
          <img src={PCB} alt="PCB Design" />
          <div className="content">
            <p>SenaniTech</p>
            <h2>PCB <br></br> Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero quos laborum rem voluptas molestias omnis molestiae, architecto at quae adipisci accusamus esse autem totam enim aliquid iure obcaecati cumque!
            </p>
          </div>
        </div>
        <div className="item">
          <img src={Production} alt="Production Engineering" />
          <div className="content">
            <p>SenaniTech</p>
            <h2>Production Engineering</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur, quas ipsa doloremque ipsam cupiditate. Autem ducimus quas quibusdam magnam possimus odio minus, molestiae similique. Quae tempora nostrum sunt est.
            </p>
          </div>
        </div>
        <div className="item">
          <img src={Manufacturing} alt="Manufacturing Support" />
          <div className="content">
            <p>SenaniTech</p>
            <h2>Manufacturing Support</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ad unde vel, doloremque cumque delectus magnam, libero esse reprehenderit, velit nobis quae autem molestiae. Corrupti ab et dolorem ad ipsa?
            </p>
          </div>
        </div>
      </div>
      <div className="arrows-next">
        <button id="next">&#62;</button>
      </div>
      <div className="thumbnail" style={{ opacity: 0, pointerEvents: "none" }}>
        <div className="item active">
          <img src={PCB} alt="PCB Design Thumbnail" />
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src={Production} alt="Production Engineering Thumbnail" />
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src={Manufacturing} alt="Manufacturing Support Thumbnail" />
          <div className="content">Name Slider</div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
