// "use client"
import { useEffect } from 'react';
import Swiper from 'swiper';
 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
const ClientSpeakSection = ({ clientSpeakData }) => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper('.clientspeakSwiper', {
      loop: true, // Enable loop for continuous scrolling
      spaceBetween: 30, // Space between slides
      slidesPerView: 'auto', // Adjust slides per view dynamically
      pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true, // Allow clicking on pagination bullets
      },
    });

    // Clean up Swiper instance when the component unmounts
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="client-speak slide-up visible">
      <div className="container">
        {/* Client Speak Description */}
        <span
          dangerouslySetInnerHTML={{
            __html: clientSpeakData.clientSpeak.clientSpeakDescription,
          }}
        />

        {/* Swiper Carousel */}
        <div className="swiper clientspeakSwiper">
          <div className="swiper-wrapper">
            {clientSpeakData.clientSpeak.clientSpeakSlide.map((item, index) => (
              <div
                className="swiper-slide"
                key={index} // Ensure each slide has a unique key
                style={{ width: '497.5px', marginRight: '30px' }} // Custom styling for slide
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.clientSpeakSlideDescription,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientSpeakSection;