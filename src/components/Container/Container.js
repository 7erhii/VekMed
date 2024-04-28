import React from "react";
import Headline from "@/components/ui/Headline/Headline";

import styles from "./Container.module.css";

const Container = ({ text, children }) => {
  return (
    <div>
      <Headline text={text} />
      {children}
    </div>
  );
};

export default Container;
