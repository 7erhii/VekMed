import React from "react";
import styles from "./styles.module.css"
interface CustomTitleProp {
  text: string;
}

function CustomTitle({ text }: CustomTitleProp) {
  return (
    <div className={styles.CustomTitle}>
      <h3>{text}</h3>
    </div>
  );
}

export default CustomTitle;
// import React from 'react';

// interface CustomTitleProp {
//     text: string;
// }

// export default function CustomTitle({ text }: CustomTitleProp) {
//   return (
//     <div>
//         <h3>{text}</h3>
//     </div>
//   );
// }
