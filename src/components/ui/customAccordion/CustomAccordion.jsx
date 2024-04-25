// "use client";

// import * as React from 'react';
// import { useTranslations } from "next-intl";

// import { IoIosArrowRoundDown } from '@radix-ui/react-icons';

// const menuItems = {
//   menu1: {
//     title: "faq.item1.title",
//     descr: "faq.item1.descr"
//   },
//   menu2: {
//     title: "faq.item2.title",
//     descr: "faq.item2.descr"
//   },
//   menu3: {
//     title: "faq.item3.title",
//     descr: "faq.item3.descr"
//   },
//   menu4: {
//     title: "faq.item4.title",
//     descr: "faq.item4.descr"
//   },
//   menu5: {
//     title: "faq.item5.title",
//     descr: "faq.item5.descr"
//   },
//   menu6: {
//     title: "faq.item6.title",
//     descr: "faq.item6.descr"
//   }
// }

// export default function CustomAccordion({data = menuItems }) {
//   const t = React.useTransition("Faq")
//   const [open, setOpen] = React.useState(null);

//   const toggle = (index) => {
//     setOpen(open === index ? null : index);
//   };

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {['Menu 1', 'Menu 2', 'Menu 3'].map((menu, index) => (
//         <div key={index} style={{ width: '50%' }}>
//           <div onClick={() => toggle(index)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <span>{menu}</span>
//             <IoIosArrowRoundDown style={{ transform: open === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
//           </div>
//           {open === index && (
//             <div style={{ padding: '10px' }}>
//               <p>{`Here is some content for ${menu}`}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { IoIosArrowRoundDown } from "react-icons/io";

import styles from "./CustomAccordion.module.css";

const menuItems = {
  menu1: {
    title: "faq.item1.title",
    descr: "faq.item1.descr",
  },
  menu2: {
    title: "faq.item2.title",
    descr: "faq.item2.descr",
  },
  menu3: {
    title: "faq.item3.title",
    descr: "faq.item3.descr",
  },
  menu4: {
    title: "faq.item4.title",
    descr: "faq.item4.descr",
  },
  menu5: {
    title: "faq.item5.title",
    descr: "faq.item5.descr",
  },
  menu6: {
    title: "faq.item6.title",
    descr: "faq.item6.descr",
  },
};

export default function CustomAccordion({ data = menuItems }) {
  const t = useTranslations("Faq");
  const [open, setOpen] = React.useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };
  return (
    <div className={styles.CustomAccordionWrapper}>
      <div className={styles.CustomAccordionColumn}>
        {Object.entries(data).map(
          ([key, { title, descr }], index) =>
            index % 2 === 0 && (
              <div key={key} className={styles.CustomAccordionItemWrapper}>
                <div
                  onClick={() => toggle(key)}
                  className={styles.CustomAccordionItem}
                >
                  <span className={styles.CustomAccordionTitle}>
                    {t(title)}
                  </span>
                  <IoIosArrowRoundDown
                    style={{
                      transform:
                        open === key ? "rotateX(180deg)" : "rotateX(0deg)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                {open === key && (
                  <div>
                    <p className={styles.CustomAccordionDescr}>{t(descr)}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
      <div className={styles.CustomAccordionColumn}>
        {Object.entries(data).map(
          ([key, { title, descr }], index) =>
            index % 2 !== 0 && (
              <div key={key} className={styles.CustomAccordionItemWrapper}>
                <div
                  onClick={() => toggle(key)}
                  className={styles.CustomAccordionItem}
                >
                  <span className={styles.CustomAccordionTitle}>
                    {t(title)}
                  </span>
                  <IoIosArrowRoundDown
                    style={{
                      transform:
                        open === key ? "rotateX(180deg)" : "rotateX(0deg)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                {open === key && (
                  <div>
                    <p className={styles.CustomAccordionDescr}>{t(descr)}</p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );

  // return (
  //   <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  //     {Object.entries(data).map(([key, { title, descr }], index) => (
  //       <div key={key} style={{ width: "50%", display: "flex", flexDirection: "column" }}>
  //         <div
  //           onClick={() => toggle(key)}
  //           style={{
  //             cursor: "pointer",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "space-between",
  //             width: "100%"
  //           }}
  //         >
  //           <span>{t(title)}</span>
  //           <IoIosArrowRoundDown
  //             style={{
  //               transform: open === key ? "rotate(180deg)" : "rotate(0deg)",
  //               transition: "transform 0.3s ease",
  //             }}
  //           />
  //         </div>
  //         {open === key && (
  //           <div style={{ padding: "10px", width: "100%" }}>
  //             <p>{t(descr)}</p>
  //           </div>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
}
