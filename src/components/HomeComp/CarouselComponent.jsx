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
            <h2>PCB Design</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur id beatae, tenetur possimus ratione distinctio earum. Quos veniam doloremque porro, aspernatur repudiandae natus, ullam sequi quasi, eveniet voluptates pariatur ipsa?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis exercitationem cumque quos dolores laboriosam neque quam animi! Dolorum recusandae cupiditate distinctio exercitationem cum iure maiores sit magni modi enim!
            </p>
          </div>
        </div>
        <div className="item">
          <img src={Production} alt="Production Engineering" />
          <div className="content">
            <p>SenaniTech</p>
            <h2>Production Engineering</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur consequatur, fugit ipsum aliquam saepe quos quibusdam eaque laboriosam, sed facere. Laboriosam repellendus non eos quia saepe deleniti quasi cupiditate!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto facere sapiente magni repellat facilis omnis esse delectus fuga ex. Error distinctio deserunt ex quibusdam repudiandae ab, repellat ea temporibus!
              
            </p>
          </div>
        </div>
        <div className="item">
          <img src={Manufacturing} alt="Manufacturing Support" />
          <div className="content">
            <p>SenaniTech</p>
            <h2>Manufacturing Support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident fugiat animi vel vitae beatae minus optio, distinctio maxime nesciunt consequatur consequuntur eaque unde atque, facere culpa incidunt error itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos, itaque iure suscipit doloribus sapiente quod molestiae corrupti hic nam eveniet repellendus iste obcaecati sunt inventore dolorem natus totam delectus.
              
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
