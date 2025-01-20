// "use client";
// import React, { useState, useEffect } from "react";
// import { MenuData } from "./grapghql";

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeParentIndex, setActiveParentIndex] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const toggleSubMenu = (index) => {
//     setActiveParentIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       const MoblieMenuData = {
//         query: `query NewQuery {
//           menuItems(where: {location: MOBILE_MENU, parentId: "0"}) {
//             nodes {
//               label
//               path
//               childItems {
//                 nodes {
//                   label
//                   path
//                 }
//               }
//             }
//           }
//         }`,
//       };

//       try {
//         const response = await MenuData(MoblieMenuData);
//         if (response && response.menuItems) {
//           setMenuItems(response.menuItems.nodes);  // Adjusted data structure here
//         }
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   return (
//     <div>
//       <div id="burgermenu" className="menu">
//         <div
//           className="menu-trg fix-el"
//           style={{ transform: "translate(0px, 0px)", opacity: 1 }}
//           onClick={toggleMenu}
//         >
//           <div className="menu-trg__hold">
//             <div className="line line-0"></div>
//             <div className="line line-1"></div>
//             <div className="line line-2"></div>
//           </div>
//         </div>
//       </div>

//       <nav className={`main-nav ${isOpen ? "open-menu" : ""}`}>
//         <div className="nav-header">
//           <svg
//             id="menuclose"
//             className="close-btn"
//             xmlns="http://www.w3.org/2000/svg"
//             width="34.594"
//             height="34.592"
//             viewBox="0 0 34.594 34.592"
//             onClick={toggleMenu}
//           >
//             <g
//               id="Group_6368"
//               data-name="Group 6368"
//               transform="translate(-373.09 -29)"
//             >
//               <path
//                 id="Path_715"
//                 data-name="Path 715"
//                 d="M2.635,0h19.19A2.635,2.635,0,0,1,24.46,2.636v19.19a2.635,2.635,0,0,1-2.635,2.635H2.636A2.635,2.635,0,0,1,0,21.825V2.635A2.635,2.635,0,0,1,2.635,0Z"
//                 transform="translate(390.387 29) rotate(45)"
//                 stroke="#fff"
//                 fill="none"
//               ></path>
//             </g>
//           </svg>
//         </div>

//         <div className="menu-wrap">
//           <ul className="main-nav-links accordion">
//             {menuItems.map((items, index) => (
//               <li
//                 key={index}
//                 className={`custom-link ${
//                   items.childItems?.nodes.length > 0 ? "has-child" : ""
//                 }`}
//               >
//                 <a
//                   className="toggle"
//                   href={`${items.path}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     if (items.childItems?.nodes.length > 0) {
//                       toggleSubMenu(index);
//                     }
//                   }}
//                 >
//                   {items.label}
//                 </a>

//                 {items.childItems?.nodes.length > 0 && activeParentIndex === index && (
//                   <div className="inner has-children">
//                     <div className="child-div">
//                       <div className="content-div">
//                         <div className="ul-wrap">
//                           <ul>
//                             {items.childItems.nodes.map((childItem, childIndex) => (
//                               <li key={childIndex}>
//                                 <a href={childItem.path}>{childItem.label}</a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MobileMenu;
