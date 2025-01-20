"use client";
import Link from "next/link";
import { heroSectionData } from "../../../lib/grapghql";
import { optionPage } from "../../../lib/grapghql";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css/pagination";
import "../home.css";
import "../common.css";
import "swiper/css";
import { useEffect, useState } from "react";
// import parse from "html-react-parser";
import { toggleAccordion } from "../_accordion/page";

const HomePage = () => {
  const homePageDefault = {
    companyProfile: {
      headerDiscription: "",
      headerSubTitle: "",
    },
    home: {
      heroVideoDesktop: {
        mediaItemUrl: "/",
        sizes: "",
      },
      heroPlaceholderImageDesktop: {
        mediaItemUrl: "/",
        sizes: "",
      },
      accordianCard: [
        {
          accordionContent: "",
          fieldGroupName: "",
          readMore: {
            title: "",
            url: "",
          },
        },
      ],
      licensedContent: "",
      currencyBackground: "",
      currencyContent: [
        {
          description: "",
        },
      ],
      description: "",
      tradeImage: {
        mediaItemUrl: "/",
      },
      tradeFeature: [
        {
          description: "",
          image: {
            mediaItemUrl: "/",
            altText: "",
          },
        },
      ],
      knowMoreAboutUs: {
        url: "",
      },
      startTradingDescription: "",
      openALiveAccount: "",
      openADemoAccountLink: {
        url: "",
        title: "",
      },
      getStartedNowLink: {
        title: "",
        url: "",
      },
      tradingSteps: [
        {
          openAnAccountContent: "",
        },
      ],
      keepLearningKeepEarningDescription: "",
      note: "",
      stayInformed: "",
      chatInNewWindowLink: {
        title: "",
        url: "",
      },
      registerForAFreeSeminarLink: {
        title: "",
        url: "",
      },
      signUpForFreeResearchLink: {
        title: "",
        url: "",
      },
      tradingBasics: "",
      financialNewsTitle: "",
      topStories: "",
    },
    seo: {
      metaDesc: "",
      title: "",
      fullHead: "",
    },
  };
  const clientSpeakDefault = {
    clientSpeak: {
      clientSpeakDescription: "",
      clientSpeakSlide: [
        {
          clientSpeakSlideDescription: "",
        },
      ],
    },
  };

  const [data, setdata] = useState(homePageDefault);
  const [clientSpeakData, setclientSpeakData] = useState(clientSpeakDefault);

  useEffect(() => {
    const fetchedHomeData = async () => {
      const query = {
        query: `query NewQuery {
  page(id: "26", idType: DATABASE_ID) {
    companyProfile {
      headerDiscription
      headerSubTitle
    }
    home {
      heroVideoDesktop {
        mediaItemUrl
        sizes
      }
      heroPlaceholderImageDesktop {
        mediaItemUrl
        sizes
      }
      accordianCard {
        accordionContent
        fieldGroupName
        readMore {
          title
          url
        }
      }
      licensedContent
      currencyBackground
      currencyContent {
        description
      }
      description
      tradeImage {
        mediaItemUrl
      }
      tradeFeature {
        description
        image {
          mediaItemUrl
          altText
        }
      }
      knowMoreAboutUs {
        url
      }
      startTradingDescription
      openALiveAccount
      openADemoAccountLink {
        url
        title
      }
      getStartedNowLink {
        title
        url
      }
      tradingSteps {
        openAnAccountContent
      }
      keepLearningKeepEarningDescription
      note
      stayInformed
      chatInNewWindowLink {
        title
        url
      }
      registerForAFreeSeminarLink {
        title
        url
      }
      signUpForFreeResearchLink {
        title
        url
      }
      tradingBasics
      financialNewsTitle
      topStories
    }
    seo {
      metaDesc
      title
      fullHead
    }
  }
}`,
      };
      const clientSpeak = {
        query: `query NewQuery {
  option {
    clientSpeak {
      clientSpeakDescription
      clientSpeakSlide {
        clientSpeakSlideDescription
      }
    }
  }
}`,
      };
      const data = heroSectionData(query);
      setdata(await data);
      setclientSpeakData(await optionPage(clientSpeak));
      accordianCard();
    };
    fetchedHomeData();
  }, []);
  const accordianCard = () => {
    console.log(
      'document.querySelectorAll(".card-accord-list li")',
      document.querySelectorAll(".card-accord-list li").length
    );
    document.querySelectorAll(".card-accord-list li").forEach((item) => {
      console.log("item", item);
      item.addEventListener("click", function () {
        toggleAccordion(this, ".accord-txt");
        toggleAccordion(this, ".link-wrapp");
      });
    });
  };
  const mappedData = data.home.currencyContent.map(
    (items) => items.description
  );

  const tradeFeature = data.home.tradeFeature.map((items) => items);

  return (
    <>
      <section className="home-vid-wrapper">
        <div className="container">
          <video
            autoPlay
            loop
            playsInline=""
            id="hero-video"
            className="hero-vid"
            poster={data.home.heroPlaceholderImageDesktop.mediaItemUrl}
          >
            <source
              src={data.home.heroVideoDesktop.mediaItemUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="hero-txt-wrapper">
            <span
              dangerouslySetInnerHTML={{
                __html: data.companyProfile.headerSubTitle,
              }}
            />
            <div className="txt">
              <span
                dangerouslySetInnerHTML={{
                  __html: data.companyProfile.headerDiscription,
                }}
              />

              <Link href="/open-an-account/" className="btn-fill">
                Open an Account
                <span className="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.908"
                    height="12.908"
                    viewBox="0 0 12.908 12.908"
                  >
                    <g
                      id="Icon_feather-arrow-down-left"
                      data-name="Icon feather-arrow-down-left"
                      transform="translate(11.908 12.201) rotate(180)"
                    >
                      <path
                        id="Path_138"
                        data-name="Path 138"
                        d="M11.2,0,0,11.2"
                        transform="translate(0 0)"
                        fill="none"
                        stroke="#18529f"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        id="Path_139"
                        data-name="Path 139"
                        d="M11.2,11.2H0V0"
                        transform="translate(0 0)"
                        fill="none"
                        stroke="#18529f"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="container">
              <ul className="card-accord-list">
                {data.home.accordianCard.map((item, index) => (
                  <li
                    key={index}
                    className=""
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                  >
                    <div
                      className="top-txt"
                      dangerouslySetInnerHTML={{
                        __html: item.accordionContent,
                      }}
                    />

                    <div className="link-wrapp">
                      <Link
                        href={`${item.readMore.url}`}
                        className="accord-link txt-link"
                      >
                        {item.readMore.title}
                        <span className="arrow-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.908"
                            height="12.908"
                            viewBox="0 0 12.908 12.908"
                          >
                            <g
                              id="Icon_feather-arrow-down-left"
                              data-name="Icon feather-arrow-down-left"
                              transform="translate(11.908 12.201) rotate(180)"
                            >
                              <path
                                id="Path_138"
                                data-name="Path 138"
                                d="M11.2,0,0,11.2"
                                transform="translate(0 0)"
                                fill="none"
                                stroke="#18529f"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></path>
                              <path
                                id="Path_139"
                                data-name="Path 139"
                                d="M11.2,11.2H0V0"
                                transform="translate(0 0)"
                                fill="none"
                                stroke="#18529f"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-licence-wrapper">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data.home.licensedContent }}
        />
      </section>

      <section className="currency-section graph-sec">
        <div className="container">
          <LazyLoad threshold={0.5}>
            <>
              <ul>
                <li
                  className="rgrggear01"
                  dangerouslySetInnerHTML={{ __html: mappedData[0] }}
                />
                <li
                  className="rgrggear11"
                  dangerouslySetInnerHTML={{ __html: mappedData[1] }}
                />
                <li
                  className="rgrggear21"
                  dangerouslySetInnerHTML={{ __html: mappedData[2] }}
                />
              </ul>
              <div
                className="img-wrap-bg"
                dangerouslySetInnerHTML={{
                  __html: data.home.currencyBackground,
                }}
              />
            </>
          </LazyLoad>
        </div>
      </section>

      <section className="home-interest-wrapper">
        <div className="container">
          <div className="interest-top-wrapp">
            <span dangerouslySetInnerHTML={{ __html: data.home.description }} />

            <Link
              className="more-link learn-more"
              href={`${data.home.knowMoreAboutUs.url}`}
            >
              know more about us
              <span className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.908"
                  height="12.908"
                  viewBox="0 0 12.908 12.908"
                >
                  <g
                    id="Icon_feather-arrow-down-left"
                    data-name="Icon feather-arrow-down-left"
                    transform="translate(11.908 12.201) rotate(180)"
                  >
                    <path
                      id="Path_138"
                      data-name="Path 138"
                      d="M11.2,0,0,11.2"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_139"
                      data-name="Path 139"
                      d="M11.2,11.2H0V0"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
          <div
            className="trade-mob-img-wrapper"
            style={{
              transform: "translate(0px, 0px)",
              rotate: "none",
              scale: "none",
            }}
          >
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
            >
              <div style={{ maxWidth: "724px", display: "block" }}>
                <Image
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src={data.home.tradeImage.mediaItemUrl}
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                  height={724}
                  width={724}
                />
              </div>
            </div>
          </div>
          <div className="trade-feature-wrapp">
            <ul>
              {tradeFeature.map((items, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                  >
                    <div className="icon">
                      <Image
                        src={items.image.mediaItemUrl}
                        alt={items.image.altText}
                        width={700}
                        height={500}
                      />
                    </div>
                    <div
                      className="icon-text-wrap"
                      dangerouslySetInnerHTML={{ __html: items.description }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-trading-wrapper">
        <div className="container">
          <div className="trading-title-wrapp">
            <span
              dangerouslySetInnerHTML={{
                __html: data.home.startTradingDescription,
              }}
            />
          </div>
          <div className="trading-steps-wrapp">
            <div className="trading-left">
              <span
                dangerouslySetInnerHTML={{
                  __html: data.home.openALiveAccount,
                }}
              />
              <div className="trading-btn-wrapp">
                <Link
                  href={`${data.home.getStartedNowLink.url}`}
                  className="head-open-acc btn-fill"
                >
                  {data.home.getStartedNowLink.title}
                  <span className="arrow-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.908"
                      height="12.908"
                      viewBox="0 0 12.908 12.908"
                    >
                      <g
                        id="Icon_feather-arrow-down-left"
                        data-name="Icon feather-arrow-down-left"
                        transform="translate(11.908 12.201) rotate(180)"
                      >
                        <path
                          id="Path_138"
                          data-name="Path 138"
                          d="M11.2,0,0,11.2"
                          transform="translate(0 0)"
                          fill="none"
                          stroke="#18529f"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                        <path
                          id="Path_139"
                          data-name="Path 139"
                          d="M11.2,11.2H0V0"
                          transform="translate(0 0)"
                          fill="none"
                          stroke="#18529f"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </Link>
                <a
                  href={`${data.home.openADemoAccountLink.url}`}
                  className="btn-border demo-acc"
                >
                  {data.home.openADemoAccountLink.title}
                </a>
              </div>
            </div>
            <div className="trading-right">
              <ul className="trading-steps">
                {data.home.tradingSteps.map((step, index) => (
                  <li
                    key={index}
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: step.openAnAccountContent,
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="learn-earn-wrapper">
        <div className="container">
          <span
            dangerouslySetInnerHTML={{
              __html: data.home.keepLearningKeepEarningDescription,
            }}
          />
          <div className="learn-earn-list">
            <div
              className="learn-left txt-right-wrapp"
              dangerouslySetInnerHTML={{
                __html: data.home.tradingBasics,
              }}
            />
            <div>
              <div className="learn-mid" style={{ position: "relative" }}>
                <div className="chat-container">
                  <div className="default-text">
                    <p>
                      Start a conversation and explore the
                      <span className="yellow-AI">power of AI.</span>
                      <br />
                      Your chat history will be displayed here.
                    </p>
                  </div>
                </div>
                <div className="typing-container">
                  <div className="typing-content">
                    <div className="typing-textarea">
                      <textarea
                        id="chat-input"
                        placeholder="Enter a prompt here"
                      ></textarea>
                      <span
                        id="send-btn"
                        className="material-symbols-rounded"
                      ></span>
                    </div>
                    <div className="typing-controls">
                      <span id="theme-btn" className="material-symbols-rounded">
                        light-mode
                      </span>
                      <span
                        id="delete-btn"
                        className="material-symbols-rounded"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="desclaimer-btn-wrap"
                dangerouslySetInnerHTML={{ __html: data.home.note }}
              />
              <div className="demo-acc">
                <Link
                  href={`${data.home.chatInNewWindowLink.url}`}
                  className="btn-border demo-acc"
                  target="_blank"
                >
                  {data.home.chatInNewWindowLink.title}
                </Link>
              </div>
            </div>
            <div
              className="learn-right txt-left-wrapp"
              dangerouslySetInnerHTML={{ __html: data.home.stayInformed }}
            />
          </div>
          <div className="lean-earn-btn">
            <a
              className="lean-btn learn-more"
              href={`${data.home.openADemoAccountLink.url}`}
            >
              {data.home.openADemoAccountLink.title}
              <span className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.908"
                  height="12.908"
                  viewBox="0 0 12.908 12.908"
                >
                  <g
                    id="Icon_feather-arrow-down-left"
                    data-name="Icon feather-arrow-down-left"
                    transform="translate(11.908 12.201) rotate(180)"
                  >
                    <path
                      id="Path_138"
                      data-name="Path 138"
                      d="M11.2,0,0,11.2"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_139"
                      data-name="Path 139"
                      d="M11.2,11.2H0V0"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
            <a
              className="lean-btn learn-more"
              href={data.home.registerForAFreeSeminarLink.url}
            >
              {data.home.registerForAFreeSeminarLink.title}
              <span className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.908"
                  height="12.908"
                  viewBox="0 0 12.908 12.908"
                >
                  <g
                    id="Icon_feather-arrow-down-left"
                    data-name="Icon feather-arrow-down-left"
                    transform="translate(11.908 12.201) rotate(180)"
                  >
                    <path
                      id="Path_138"
                      data-name="Path 138"
                      d="M11.2,0,0,11.2"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_139"
                      data-name="Path 139"
                      d="M11.2,11.2H0V0"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
            <a
              className="lean-btn learn-more"
              href={`${data.home.signUpForFreeResearchLink.url}`}
            >
              {data.home.signUpForFreeResearchLink.title}
              <span className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.908"
                  height="12.908"
                  viewBox="0 0 12.908 12.908"
                >
                  <g
                    id="Icon_feather-arrow-down-left"
                    data-name="Icon feather-arrow-down-left"
                    transform="translate(11.908 12.201) rotate(180)"
                  >
                    <path
                      id="Path_138"
                      data-name="Path 138"
                      d="M11.2,0,0,11.2"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      id="Path_139"
                      data-name="Path 139"
                      d="M11.2,11.2H0V0"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#18529f"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-risk-warning-wrapp top-stories">
        <div className="container">
          <div className="dflex">
            <span
              dangerouslySetInnerHTML={{
                __html: data.home.financialNewsTitle,
              }}
            />

            <div className="col-" style={{ height: "450px" }}>
              <div className="tradingview-widget-container">
                <div
                  className="tradingview-widget-container__widget"
                  dangerouslySetInnerHTML={{ __html: data.home.topStories }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-speak slide-up visible">
        <div className="container">
          <span
            dangerouslySetInnerHTML={{
              __html: clientSpeakData.clientSpeak.clientSpeakDescription,
            }}
          />

          <Swiper
            className="swiper"
            navigation
            slidesPerView="auto"
            // slidesPerView={2}
            spaceBetween={50}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {clientSpeakData.clientSpeak.clientSpeakSlide.map((item, index) => (
              <SwiperSlide
                key={item.title || index}
                className="swiper-slide"
                style={{ width: "497.5px", marginRight: "30px" }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.clientSpeakSlideDescription,
                  }}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination swiper-pagination-clickable">
              {clientSpeakData.clientSpeak.clientSpeakSlide.map((_, index) => (
                <span
                  key={index}
                  className={`swiper-pagination-bullet ${
                    index === 0 ? "swiper-pagination-bullet-active" : ""
                  }`}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default HomePage;
