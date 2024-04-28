import React from "react";
import Headline from "@/components/ui/Headline/Headline";
import styles from "./Container.module.css";
import ActionBtn from "../ui/Buttons/ActionBtn";

const Container = ({ text, children, showButton = true }) => {
  return (
    <div>
      <Headline text={text} />
      {children}
      {showButton && <ActionBtn type="second" />}
    </div>
  );
};

export default Container;
