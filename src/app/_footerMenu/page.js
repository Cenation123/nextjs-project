"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MenuData, optionPage } from "../../../lib/grapghql";
import ContactForm from "../../../components/form";
const footerMenu = () => {
  const defaultOptianPage = {
    optionPage: {
      whatsapp: "/",
      telephoneNo: "/",
      riskFooterSection: "/",
      orientFooterLink: "/",
      mapLocation: "/",
      linkedin: "/",
      instagram: "/",
      footerLogo: {
        mediaItemUrl: "/",
        uri: "/",
      },
      facebook: "/",
      email: "/",
      companyAddress: "/",
    },
  };
  const [footerData, setFooterData] = useState([]);
  const [optionPageData, setOptionPageData] = useState(defaultOptianPage);
  const [footerAccData, setFooterAccData] = useState([]);
  useEffect(() => {
    const footerMenuData = async () => {
      const footerMenu = {
        query: `query NewQuery {
  menuItems(where: {location: FOOTER_MENU, parentId: "0"}) {
    nodes {
      label
        path
      childItems {
        nodes {
          path
          label
        }
      }
    }
  }
  option {
    optionPage {
      whatsapp
      telephoneNo
      riskFooterSection
      orientFooterLink
      mapLocation
      linkedin
      instagram
      footerLogo {
        mediaItemUrl
        uri
      }
      facebook
      email
      companyAddress
    }
  }
}`,
      };

      const footerOptionPage = {
        query: `query MyQuery2 {
  option {
    optionPage {
      whatsapp
      telephoneNo
      riskFooterSection
      orientFooterLink
      mapLocation
      linkedin
      instagram
      footerLogo {
        mediaItemUrl
        uri
      }
      facebook
      email
      companyAddress
    }
  }
}`,
      };

      const footerAccLinks = {
        query: `query NewQuery {
  menuItems(where: {location: FOOTER_ACCOUNT_LINKS, parentId: "0"}) {
    nodes {
      label
      path
    }
  }
}`,
      };
      setFooterData(await MenuData(footerMenu));

      setOptionPageData(await optionPage(footerOptionPage));

      setFooterAccData(await MenuData(footerAccLinks));
    };
    footerMenuData();
  }, []);

  return (
    <>
      <footer>
        <div className="container">
          <div className="top-contain">
            <div className="left">
              <ul className="footer-list d-flex">
                <li className="w-100 f-logo-info">
                  <div className="logo-wrap">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src={
                            optionPageData.optionPage.footerLogo.mediaItemUrl
                          }
                          width={300}
                          height={100}
                          alt="Orient Finance Logo"
                        />
                      </Link>
                    </div>
                    <div
                      className="address"
                      dangerouslySetInnerHTML={{
                        __html: optionPageData.optionPage.companyAddress,
                      }}
                    />
                  </div>
                  <div className="col-first-wrap">
                    <ul className="contact-info-wrapp">
                      <li>
                        <a href="tel:+97148713200">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.043"
                              height="12.059"
                              viewBox="0 0 12.043 12.059"
                            >
                              <path
                                id="Icon_zocial-call"
                                data-name="Icon zocial-call"
                                d="M3.292,5.313a.887.887,0,0,1,.226-.482L5.325,3.024q.211-.181.316.06L7.1,5.825a.394.394,0,0,1-.075.467l-.662.662a.749.749,0,0,0-.211.467A2.3,2.3,0,0,0,6.62,8.58a9.9,9.9,0,0,0,.918,1.2l.467.481c.141.141.321.314.542.519a9.089,9.089,0,0,0,1.091.813,2.442,2.442,0,0,0,1.2.5.655.655,0,0,0,.482-.2l.783-.783a.331.331,0,0,1,.451-.06l2.635,1.551a.22.22,0,0,1,.12.158.192.192,0,0,1-.06.173l-1.807,1.807a.885.885,0,0,1-.481.225,3.642,3.642,0,0,1-1.664-.2,7.529,7.529,0,0,1-1.716-.821q-.79-.512-1.468-1.038t-1.084-.9l-.391-.377q-.15-.15-.4-.414T5.37,10.183A15.121,15.121,0,0,1,4.3,8.67a8.827,8.827,0,0,1-.783-1.679A3.571,3.571,0,0,1,3.292,5.313Z"
                                transform="translate(-3.267 -2.947)"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                          {optionPageData.optionPage.telephoneNo}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@orientfinance.com">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.962"
                              height="8.75"
                              viewBox="0 0 12.962 8.75"
                            >
                              <path
                                id="Icon_zocial-email"
                                data-name="Icon zocial-email"
                                d="M.072,12.042v-7.2q0-.012.037-.237L4.347,8.23.122,12.292a1.059,1.059,0,0,1-.05-.25ZM.634,4.105a.539.539,0,0,1,.212-.037H12.259a.708.708,0,0,1,.225.037L8.234,7.743l-.562.45-1.112.912L5.447,8.193l-.562-.45ZM.647,12.78,4.909,8.693l1.65,1.337,1.65-1.337,4.262,4.087a.6.6,0,0,1-.212.037H.847a.566.566,0,0,1-.2-.037ZM8.771,8.23,13,4.605a.746.746,0,0,1,.037.237v7.2a.958.958,0,0,1-.037.25Z"
                                transform="translate(-0.072 -4.068)"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                          {optionPageData.optionPage.email}
                        </a>
                      </li>
                      <li>
                        <p>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10.158"
                              height="14.512"
                              viewBox="0 0 10.158 14.512"
                            >
                              <path
                                id="Icon_material-location-on"
                                data-name="Icon material-location-on"
                                d="M12.579,3A5.075,5.075,0,0,0,7.5,8.079c0,3.809,5.079,9.433,5.079,9.433s5.079-5.623,5.079-9.433A5.075,5.075,0,0,0,12.579,3Zm0,6.893a1.814,1.814,0,1,1,1.814-1.814A1.815,1.815,0,0,1,12.579,9.893Z"
                                transform="translate(-7.5 -3)"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                          {optionPageData.optionPage.mapLocation}
                        </p>
                      </li>
                    </ul>
                    <ul className="socail-icon-wrapp">
                      <li>Follow Us On:</li>
                      <li>
                        <Link
                          href={optionPageData.optionPage.facebook}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30.779"
                            height="30.593"
                            viewBox="0 0 30.779 30.593"
                          >
                            <path
                              id="Icon_awesome-facebook"
                              data-name="Icon awesome-facebook"
                              d="M31.341,15.952a15.389,15.389,0,1,0-17.794,15.2V20.4H9.638V15.952h3.909V12.561c0-3.857,2.3-5.987,5.813-5.987a23.684,23.684,0,0,1,3.445.3V10.66H20.864a2.224,2.224,0,0,0-2.508,2.4v2.889h4.268L21.942,20.4H18.357V31.155A15.4,15.4,0,0,0,31.341,15.952Z"
                              transform="translate(-0.563 -0.563)"
                              fill=""
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={optionPageData.optionPage.linkedin}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.994"
                            height="31.994"
                            viewBox="0 0 31.994 31.994"
                          >
                            <path
                              id="Exclusion_3"
                              data-name="Exclusion 3"
                              d="M16,31.994a16,16,0,0,1-16-16A16,16,0,0,1,16,0a16,16,0,0,1,11.31,27.308A15.884,15.884,0,0,1,16,31.994Zm3.093-16.3c1.683,0,1.683,1.6,1.683,2.76v5.082h3.235l0-5.73c0-2.579-.469-4.968-3.882-4.968a3.419,3.419,0,0,0-3.064,1.688H17.02V13.1H13.908V23.536h3.239V18.367C17.147,17.045,17.377,15.694,19.09,15.694ZM8.639,13.1h0V23.536h3.244V13.1Zm1.619-5.192a1.887,1.887,0,1,0,1.875,1.876A1.876,1.876,0,0,0,10.258,7.906Z"
                              fill=""
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={optionPageData.optionPage.instagram}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30.47"
                            height="31.994"
                            viewBox="0 0 30.47 31.994"
                          >
                            <path
                              id="Exclusion_4"
                              data-name="Exclusion 4"
                              d="M15.236,31.994A14.778,14.778,0,0,1,4.463,27.308,16.3,16.3,0,0,1,0,16,16.3,16.3,0,0,1,4.463,4.685a14.728,14.728,0,0,1,21.545,0A16.3,16.3,0,0,1,30.47,16a16.3,16.3,0,0,1-4.462,11.312A14.778,14.778,0,0,1,15.236,31.994ZM15.741,6.9c-1.623,0-3.063.025-3.758.065A5.332,5.332,0,0,0,8.165,8.453a5.515,5.515,0,0,0-1.472,3.875c-.086,1.534-.086,6.1,0,7.63a5.487,5.487,0,0,0,1.472,3.875,5.366,5.366,0,0,0,3.818,1.494c.7.04,2.134.065,3.757.065s3.063-.025,3.76-.065a5.326,5.326,0,0,0,3.818-1.494,5.509,5.509,0,0,0,1.47-3.875c.087-1.531.087-6.093,0-7.626a5.481,5.481,0,0,0-1.47-3.875A5.35,5.35,0,0,0,19.5,6.965C18.8,6.924,17.364,6.9,15.741,6.9Zm1.606,16.838c-.341,0-.668,0-.957-.006-.24,0-.459,0-.647,0s-.4,0-.632,0c-.284,0-.6.006-.937.006a12.9,12.9,0,0,1-3.8-.382A3.085,3.085,0,0,1,8.641,21.6,16.9,16.9,0,0,1,8.27,16.8c0-.244,0-.465,0-.656,0-.171,0-.367,0-.581V15.5a17.056,17.056,0,0,1,.37-4.808,3.1,3.1,0,0,1,1.732-1.758,12.579,12.579,0,0,1,3.744-.382c.344,0,.675,0,.968.007.247,0,.468,0,.659,0s.4,0,.634,0h.008c.287,0,.612-.006.95-.006a12.809,12.809,0,0,1,3.779.381,3.11,3.11,0,0,1,1.732,1.758,16.861,16.861,0,0,1,.369,4.787c0,.247,0,.473,0,.666s0,.418,0,.665a16.84,16.84,0,0,1-.369,4.786,3.1,3.1,0,0,1-1.732,1.758A12.679,12.679,0,0,1,17.347,23.737ZM15.743,11.4a4.742,4.742,0,1,0,4.672,4.742A4.712,4.712,0,0,0,15.743,11.4Zm4.863-1.3A1.106,1.106,0,1,0,21.7,11.21,1.1,1.1,0,0,0,20.605,10.1Zm-4.863,9.124a3.083,3.083,0,1,1,3.038-3.082A3.063,3.063,0,0,1,15.743,19.228Z"
                              fill=""
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={optionPageData.optionPage.whatsapp}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30.47"
                            height="31.994"
                            viewBox="0 0 30.47 31.994"
                          >
                            <path
                              id="Exclusion_2"
                              data-name="Exclusion 2"
                              d="M15.235,31.994A14.776,14.776,0,0,1,4.463,27.308,16.3,16.3,0,0,1,0,16,16.3,16.3,0,0,1,4.463,4.685a14.726,14.726,0,0,1,21.545,0A16.31,16.31,0,0,1,30.47,16a16.31,16.31,0,0,1-4.462,11.311A14.782,14.782,0,0,1,15.235,31.994ZM15.3,6.4a8.983,8.983,0,0,0-8.921,9.016,9.113,9.113,0,0,0,1.19,4.508l-1.265,4.67,4.729-1.252a8.913,8.913,0,0,0,13.194-7.922,9.016,9.016,0,0,0-2.611-6.377l.011-.028A9,9,0,0,0,15.3,6.4Zm.015,16.489H15.3a7.376,7.376,0,0,1-3.778-1.047l-.268-.163-2.8.741.75-2.764-.179-.286A7.544,7.544,0,0,1,7.9,15.381,7.467,7.467,0,0,1,15.32,7.889,7.312,7.312,0,0,1,20.564,10.1a7.509,7.509,0,0,1-5.247,12.792ZM12.145,11.22a.84.84,0,0,0-.6.272q-.02.023-.046.051a2.5,2.5,0,0,0-.735,1.826,4.05,4.05,0,0,0,.891,2.3l.021.03.035.051.006.008A9.724,9.724,0,0,0,15.49,19.1c.435.186.8.311,1.084.411l.006,0,.181.063a2.813,2.813,0,0,0,.866.133,3.583,3.583,0,0,0,.538-.043,2.3,2.3,0,0,0,1.5-1.08,1.938,1.938,0,0,0,.136-1.08c-.049-.09-.169-.145-.352-.228l-.074-.034-.007.058c-.206-.1-1.318-.656-1.523-.734a.731.731,0,0,0-.241-.059.31.31,0,0,0-.263.173c-.137.213-.527.673-.673.846l-.031.037a.309.309,0,0,1-.24.123.6.6,0,0,1-.243-.067c-.037-.019-.088-.042-.148-.068a5.746,5.746,0,0,1-1.646-1.059,6.762,6.762,0,0,1-1.243-1.568.342.342,0,0,1,.1-.467c.072-.074.159-.179.233-.272.035-.043.07-.085.1-.126a1.452,1.452,0,0,0,.175-.285c.013-.028.029-.058.046-.091a.421.421,0,0,0-.018-.4c-.027-.057-.152-.363-.3-.716l-.011-.027-.062-.153c-.119-.291-.241-.593-.319-.776-.137-.341-.278-.388-.41-.388h-.09C12.444,11.22,12.3,11.22,12.145,11.22Z"
                              fill=""
                            ></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul  className="footer-list d-flex">
                {footerData.slice(0, 3).map((footerItems, index) => (
                  <>
                    <li
                      key={index}
                      className={`f-menu ${index === 2 ? "f-menu-tools" : ""}`}
                    >
                      <ul>
                        <li className="txt-b" key={index}>
                          <Link className="bold" href={`${footerItems.path}`}>
                            {footerItems.label}
                          </Link>
                        </li>
                        {footerItems.childItems.nodes.map((items, index) => (
                          // console.log(items),
                          <li key={index}>
                            <Link href={`${items.path}`}>{items.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                ))}
                <li className="f-menu f-menu-last">
                  <ul>
                    {footerData.slice(3, 8).map((items, index) => (
                      // console.log(items.label),
                      <li key={index} className="txt-b">
                        <a className="bold" href={`${items.path}`}>
                          {items.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="subs-form">
                    <p className="bold">
                      Subscribe to our
                      <br />
                      Newsletter
                    </p>
                    <div id="subscription">
                      <div
                        role="form"
                        className="wpcf7"
                        id="wpcf7-f144-o1"
                        lang="en-US"
                        dir="ltr"
                      >
                        <ContactForm />
                        <div
                          className="wpcf7-response-output"
                          aria-hidden="true"
                          style={{ fill: "#000" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container top-contain link-wrapper">
            <div className="footer-links">
              {footerAccData.map((items) => (
                // console.log(items),
                <div className="btm-link">
                  <Link className="bold learn-more" href={`${items.path}`}>
                    {items.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <section className="home-risk-warning-wrapp border-top">
            <div className="container">
              <span
                dangerouslySetInnerHTML={{
                  __html: optionPageData.optionPage.riskFooterSection,
                }}
              />
            </div>
          </section>
          <div className="container btm-container">
            <ul className="footer-btm-txt d-flex">
              <li>Copyright ©2022 Orient Financial Brokers LLC</li>
              <li>
                <Link
                  href="https://wp.orientfinance.com/wp-content/uploads/Privacy_Policy.pdf"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                Website design
                <Link href="https://emqubeweb.com/" target="_blank">
                  emQube LLC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default footerMenu;
