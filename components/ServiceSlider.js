//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { FreeMode, Pagination } from 'swiper';

//icons
import {
  RxCode,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxLink1,
} from 'react-icons/rx';
import { DiResponsive } from 'react-icons/di';
// data
const serviceData = [
  {
    icon: <RxCode />,
    title: 'Website Development',
    description:
      'Can create static or dynamic websites from scratch using HTML, CSS, and JavaScript',
  },
  {
    icon: <RxPencil2 />,
    title: 'User Interface (UI) Design',
    description:
      'Collaborate with designers to create visually stunning and intuitive user interfaces',
  },
  {
    icon: <RxDesktop />,
    title: 'Performance Optimization',
    description:
      'Optimize the front-end code for speed and efficiency to reduce loading times',
  },
  {
    icon: <RxLink1 />,
    title: 'Website Maintenance',
    description:
      'Provide ongoing updates to keep the web application running smoothly',
  },
  {
    icon: <DiResponsive />,
    title: 'Responsive Web Design',
    description:
      'Create layouts that adapt to different screen sizes and devices',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="bg-[rgba(64,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and description */}
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal ">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
