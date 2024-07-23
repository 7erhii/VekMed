"use client";
import React from "react";
import styles from "./style.module.css";


function BlockWrapper({children}:any) {
  return (
    <div className={styles.BlockWrapper}>
      {children}
    </div>
  )
}

function BlockWrapperSmall({children}:any) {
  return (
    <div>
      {children}
    </div>
  )
}

export {BlockWrapper, BlockWrapperSmall}
