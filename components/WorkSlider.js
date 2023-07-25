// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'portfolio',
          path: '/image-1.png',
          url: 'https://portfolio-io-three.vercel.app/',
        },
        {
          title: 'React news',
          path: '/image-2.png',
          url: 'https://adorable-yeot-a7b9e0.netlify.app/',
        },
        {
          title: 'Newspaper',
          path: '/image-3.png',
          url: ' https://kurtprime.github.io/NewsPaper/',
        },
        {
          title: 'resume',
          path: '/image-5.png',
          url: 'https://blog-site-kurt.netlify.app/',
        },
      ],
    },

    {
      images: [
        {
          title: 'blog-post',
          path: '/image-5.png',
          url: 'https://github.com/kurtprime/Blog-Site',
        },
        {
          title: 'title',
          path: '/image1.png',
          url: 'https://github.com/kurtprime/portfolio.io',
        },
        {
          title: 'title',
          path: '/image2.png',
          url: 'https://github.com/kurtprime/News-Article.io',
        },
        {
          title: 'title',
          path: '/image3.png',
          url: 'https://github.com/kurtprime/NewsPaper',
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//nex image
import Image from 'next/image';

//next link
import Link from 'next/link';

//swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

//icons
import { BsArrowRight } from 'react-icons/bs';

const Work = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlides.slides.map((slide, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center group justify-center"
                  key={index}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <div className="relative w-[500px] h-[210px]">
                      <Image
                        src={image.path}
                        fill
                        alt=""
                        sizes="100wh"
                        className="object-cover"
                      />
                    </div>

                    {/* overlay gradient */}
                    <Link
                      target="_blank"
                      href={image.url}
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 trnasition-all duration-700 "
                    ></Link>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10  group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem] ">
                        {/* title part 1  */}
                        <div className="deley-100">
                          {' '}
                          {itemIndex == 1 ? 'Github' : 'Live'}
                        </div>
                        {/* title part 2  */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 deley-150 ">
                          {itemIndex == 1 ? 'Repository' : 'Project'}
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 deley-300 ">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Work;
