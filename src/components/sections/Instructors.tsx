//import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import instructors from '../../data/instructorsList';
import SectionTitle from '../atoms/SectionTitle';

import 'swiper/css/navigation';
import 'swiper/css';
import '../../scss/Instructors.scss';

const Instructors = () => {
  /* const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  }; */

  return (
    <section id="instruktori" className='bg-lightPink'>
      <div className="mx-auto text-left lg:w-3/5 px-4">
        <SectionTitle
          title="S těmito frajery zažiješ nejednu divokou jízdu"
          color="onPrimaryDark"
        />
      </div>
      <div className="pb-16 mx-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mx-8"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {instructors.map((instructor) => (
            <SwiperSlide key={instructor.pic}>
              <div
                className="flex flex-col instructor-card gap-y-4 relative"
                // onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={handleMouseLeave}
                // onClick={() => handleClick(index)}
              >
                <img
                  className="instruktorsFront"
                  src={instructor.pic}
                  alt={instructor.name}
                  loading="lazy"
                  style={{
                    borderRadius: '15px',
                    boxShadow: '15px 15px 15px -3px rgba(0,0,0,0.2)',
                  }}
                />
                {/* <img
                  className={`absolute top-0 left-0 instruktorsBack transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={instructor.backPic}
                  alt={instructor.name}
                  loading="lazy"
                  style={{
                    borderRadius: '15px',
                    boxShadow: '15px 15px 15px -3px rgba(0,0,0,0.2)',
                  }}
                /> */}
                {/* <h5 className="text-4xl font-bold md:text-3xl xl:text-4xl text-beige">
                  {instructor.name}
                </h5> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Instructors;
