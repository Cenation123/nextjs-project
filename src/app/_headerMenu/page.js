// "use client";
import Link from "next/link";
import Image from "next/image";
import { heroSectionData, MenuData } from "../../../lib/grapghql";

import React, { Suspense } from "react";
import MoblieMenu from "../_mobileMenu/page";
export default async function HeaderMenu() {
  const query = {
    query: `query NewQuery {
  menuItems(where: {location: HEADER_MENU, parentId: "0"},first: 4) {
    nodes {
      label
      path
      url
      id
      childItems {
        nodes {
          label
          path
          url
        }
      }
    }
  }
}`,
  };
  const ChildMenuData = {
    query: `query NewQuery {
  page(id: "493", idType: DATABASE_ID) {
    library {
      fieldGroupName
    }
    link
    freeSeminar {
      fieldGroupName
    }
    traningvideo {
      fieldGroupName
    }
  }
}`,
  };
  const menu = await MenuData(query);
  const childMenu = await heroSectionData(ChildMenuData);
  // console.log(childMenu);

  const bottomquery = {
    query: `query NewQuery {
  menuItems(where: {location: HEADER_MENU, parentId: "0"},last: 7) {
    nodes {
      label
      path
      url
      id
      childItems {
        nodes {
          label
          path
          url
        }
      }
    }
  }
}`,
  };
  const btmMenu = await MenuData(bottomquery);
  // console.log(btmMenu);

  return (
    <>
      {Suspense && (
        <Suspense fallback={<div>Loading...</div>}>
          <MoblieMenu />
        </Suspense>
      )}

      <header>
        <div className="container d-flex">
          <Link href="/" className="logo-orient">
            <Image
              src="https://mohammeds128.sg-host.com/wp-content/uploads/2024/11/Logo_OFB_V02-1.svg"
              alt="Orient Finance Logo"
              width={200}
              height={50}
            />
          </Link>
          <div className="head-menu-wrapper">
            <div className="left-menu">
              <nav className="top-menu">
                <ul className="d-flex">
                  {menu.map((items) => {
                    // console.log(items);

                    if (
                      !items.childItems?.nodes ||
                      items.childItems.nodes.length === 0
                    ) {
                      return (
                        <li key={`${items.id}`} className={""}>
                          <Link href={`${items.path}`}>{items.label}</Link>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </nav>
              <nav className="btm-menu">
                <ul className="d-flex">
                  {btmMenu.slice(0, 5).map((items, parentIndex) => {
                    // console.log(parentIndex);
                    if (
                      items.childItems?.nodes &&
                      items.childItems.nodes.length > 0
                    ) {
                      return (
                        <li
                          key={items.id}
                          className={
                            items.childItems.nodes.length > 0 ? "has-child" : ""
                          }
                        >
                          <Link href={`${items.path}`}>{items.label}</Link>
                          <div className="child-div">
                            <div className="transperent-div"></div>
                            <div className="content-div">
                              <div className="ul-wrap">
                                {parentIndex === 0 && (
                                  <ul>
                                    <li>
                                      <Link href="/" className="bold-title">
                                        Products
                                      </Link>
                                    </li>
                                    {items.childItems.nodes
                                      .slice(0, 4)
                                      .map((childItem) => (
                                        <li key={childItem.path}>
                                          <Link href={`${childItem.path}`}>
                                            {childItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                )}

                                {parentIndex === 1 &&
                                  items.childItems.nodes
                                    .reduce((chunks, childItem, index) => {
                                      // console.log(chunks);

                                      const chunkSize =
                                        chunks.length === 0 ? 5 : 5;
                                      const chunkIndex = Math.floor(
                                        index / chunkSize
                                      );
                                      if (!chunks[chunkIndex]) {
                                        chunks[chunkIndex] = [];
                                      }
                                      chunks[chunkIndex].push(childItem);
                                      return chunks;
                                    }, [])
                                    .map((chunk, chunkIndex) => (
                                      <ul
                                        key={chunkIndex}
                                        style={
                                          chunkIndex === 3
                                            ? { borderight: "none !important" }
                                            : {}
                                        }
                                      >
                                        {chunkIndex === 0 && (
                                          <li>
                                            <Link
                                              href="/"
                                              className="bold-title"
                                            >
                                              Products
                                            </Link>
                                          </li>
                                        )}
                                        {chunk.map((childItem) => (
                                          <li key={childItem.path}>
                                            <Link href={`${childItem.path}`}>
                                              {childItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ))}

                                {parentIndex > 1 &&
                                  items.childItems.nodes
                                    .reduce((chunks, childItem, index) => {
                                      const chunkIndex = Math.floor(index / 4);
                                      if (!chunks[chunkIndex]) {
                                        chunks[chunkIndex] = [];
                                      }
                                      chunks[chunkIndex].push(childItem);
                                      return chunks;
                                    }, [])
                                    .map((chunk, chunkIndex) => (
                                      // console.log(chunk),
                                      <ul key={chunkIndex}>
                                        {chunk.map((childItem) => (
                                          <li key={childItem.path}>
                                            <Link href={`${childItem.path}`}>
                                              {childItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ))}
                              </div>

                              {parentIndex === 0 ? (
                                <div className="link-wrapper ed">
                                  <Link
                                    className="bold more-link"
                                    href="/open-an-account/"
                                  >
                                    Open an Account
                                  </Link>
                                  <Link
                                    className="bold more-link"
                                    href="/online-platforms/"
                                  >
                                    Online Platforms
                                  </Link>
                                </div>
                              ) : parentIndex === 1 ? (
                                <div className="link-wrapper ed">
                                  <Link
                                    className="bold more-link"
                                    href="/learn/libary/"
                                  >
                                    Library
                                  </Link>
                                  <Link
                                    className="bold more-link"
                                    href="/learn/training-videos/"
                                  >
                                    Training Video
                                  </Link>
                                  <Link
                                    className="bold more-link"
                                    href="/learn/free-seminar/"
                                  >
                                    Free Seminar
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      );
                    }

                    return (
                      <li key={items.id}>
                        <Link href={`${items.path}`}>{items.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="right-menu">
              <ul className="head-btn d-flex">
                <li className="has-child">
                  <a
                    href="javascript:void(0)"
                    className="client-login btn-border"
                  >
                    Client Login
                  </a>
                  <div className="child-div">
                    <div className="content-div">
                      <div className="ul-wrap">
                        <ul>
                          <li>
                            <a
                              href="https://trading.orientfinance.ae/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Saturn login
                            </a>
                          </li>
                          <li>
                            <a className="mt5-title">Install MT-5</a>
                            <div className="apps">
                              <a
                                href="https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=www.metatrader5.com&amp;utm_campaign=download"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  src="https://wp.orientfinance.com/wp-content/uploads/2024/11/windows-logo.jpg"
                                  alt="Windows Logo"
                                  width={50}
                                  height={50}
                                />
                              </a>
                              <a
                                href="https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=www.metatrader5.com&amp;utm_campaign=download.mt5.macos"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  src="https://wp.orientfinance.com/wp-content/uploads/2024/11/mac-logo.jpg"
                                  alt="Mac Logo"
                                  width={50}
                                  height={50}
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="head-open-acc btn-fill"
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
