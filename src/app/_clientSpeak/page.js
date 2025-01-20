// "use client";
import { useEffect } from "react";
import Swiper from "swiper";

const ClientSpeakSection = ({ clientSpeakData }) => {
  useEffect(() => {
    const swiper = new Swiper(".clientspeakSwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      grabCursor: true,
      simulateTouch: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="client-speak slide-up visible">
      <div className="container">
        <span
          dangerouslySetInnerHTML={{
            __html: clientSpeakData.clientSpeak.clientSpeakDescription,
          }}
        />

        <div className="swiper clientspeakSwiper swiper-initialized swiper-horizontal swiper-backface-hidden">
          <div className="swiper-wrapper">
            {clientSpeakData.clientSpeak.clientSpeakSlide.map(
              (items, index) => (
                <div
                  key={index}
                  className="swiper-slide"
                  style={{ width: "497.5px", marginRight: "30px" }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: items.clientSpeakSlideDescription,
                    }}
                  />
                </div>
              )
            )}
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientSpeakSection;
