import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.css";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

const SocialLink = ({ href, src, alt }: SocialLinkProps) => {
  return (
    <div>
      <Link href={href} className={styles.HeaderSocialItem}>
        <Image src={src} alt={alt} width={24} height={24} />
      </Link>
    </div>
  );
};

export default SocialLink;
