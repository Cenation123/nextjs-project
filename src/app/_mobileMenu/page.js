"use client";
import React, { useState, useEffect } from "react";
import { MenuData } from "../../../lib/grapghql";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [activeParentIndex, setActiveParentIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleSubMenu = (index) => {
    setActiveParentIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      const MoblieMenuData = {
        query: `query NewQuery {
          menuItems(where: {location: MOBILE_MENU, parentId: "0"}) {
            nodes {
              label
              path
              childItems {
                nodes {
                  label
                  path
                }
              }
            }
          }
        }`,
      };

      let response = await MenuData(MoblieMenuData);
      response = response.map((item) => {
        if (item.label === "Tools") {
          item.childItems.nodes = [];
        } else if (item.label === "Trade") {
          item.childItems.nodes = item.childItems.nodes.slice(0, 4);
        }
        return item;
      });
      setMenuItems(response);
    };

    fetchMenuData();
  }, []);

  return (
    <div>
      <div id="burgermenu" className="menu">
        <div
          className="menu-trg fix-el"
          style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          onClick={toggleMenu}
        >
          <div className="menu-trg__hold">
            <div className="line line-0"></div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isOpen ? "open-menu" : ""}`}>
        <div className="nav-header">
          <svg
            id="menuclose"
            className="close-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="34.594"
            height="34.592"
            viewBox="0 0 34.594 34.592"
            onClick={toggleMenu}
          >
            <g
              id="Group_6368"
              data-name="Group 6368"
              transform="translate(-373.09 -29)"
            >
              <path
                id="Path_715"
                data-name="Path 715"
                d="M2.635,0h19.19A2.635,2.635,0,0,1,24.46,2.636v19.19a2.635,2.635,0,0,1-2.635,2.635H2.636A2.635,2.635,0,0,1,0,21.825V2.635A2.635,2.635,0,0,1,2.635,0Z"
                transform="translate(390.387 29) rotate(45)"
                stroke="#fff"
                fill="none"
              ></path>
            </g>
          </svg>
        </div>

        <div className="menu-wrap">
          <ul className="main-nav-links accordion">
            {menuItems.map((items, index) => (
              <li
                key={index}
                className={`custom-link ${
                  items.childItems?.nodes.length > 0 ? "has-child" : ""
                } ${activeParentIndex === index ? "expand" : ""}`}
              >
                <a
                  className={`toggle ${index > 3 && index < 9 ? "bold" : ""}`}
                  href={`${items.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (items.childItems?.nodes.length > 0) {
                      toggleSubMenu(index);
                    }
                  }}
                >
                  {items.label}
                </a>

                {items.childItems?.nodes.length > 0 &&
                  activeParentIndex === index && (
                    <div
                      className="inner has-children"
                      style={{
                        display: activeParentIndex === index ? "block" : "none",
                      }}
                    >
                      {console.log(items.label)}

                      <div className="child-div">
                        <div className="transperent-div">
                          <div className="content-div">
                            <div
                              className={`ul-wrap ${
                                items == "Tools" ? "no-border-right" : ""
                              }`}
                            >
                              <ul
                                style={{
                                  maxHeight:
                                    activeParentIndex === index ? "210px" : "0",

                                  overflow: "hidden",
                                  transition: "max-height 0.3s ease",
                                }}
                              >
                                {index > 2 && index != 9 && (
                                  <Link href="/" className="bold-title">
                                    Products
                                  </Link>
                                )}
                                {items.childItems.nodes.map(
                                  (childItem, childIndex) => (
                                    <li key={childIndex}>
                                      <a href={childItem.path}>
                                        {childItem.label}
                                      </a>
                                    </li>
                                  )
                                )}
                                {/* Show link wrapper only for the first two parent elements with children */}
                                {items.label == "Trade" ? (
                                  <div
                                    className="link-wrapper"
                                    style={{
                                      maxHeight: "25px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <a
                                      className="bold more-link"
                                      href="/open-an-account/"
                                    >
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
                                    </a>
                                    <a
                                      className="bold more-link"
                                      href="/online-platforms/"
                                    >
                                      Online Platforms
                                    </a>
                                  </div>
                                ) : items.label == "Learn" ? (
                                  <div
                                    className="link-wrapper"
                                    style={{
                                      maxHeight: "25px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <a
                                      className="bold more-link"
                                      href="/learn/training-videos/"
                                    >
                                      Training Videos
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
                                      className="bold more-link"
                                      href="/learn/free-seminar/"
                                    >
                                      Free Seminar
                                    </a>
                                    <a
                                      className="bold more-link"
                                      href="/learn/libary/"
                                    >
                                      Library
                                    </a>
                                  </div>
                                ) : null}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
