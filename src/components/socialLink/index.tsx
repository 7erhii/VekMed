import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

interface SocialLinkProps {
  href: string;
  ico: React.ElementType;
  alt: string;
  text?: string;
  className?: string;
}

const SocialLink = ({ href, ico: Icon, alt, text, className = "" }: SocialLinkProps) => {
  return (
    <div>
      <Link href={href} className={`${styles.HeaderSocialItem} ${className}`}>
        <Icon aria-label={alt} className={styles.Icon} />
        {text && <p className={styles.Text}>{text}</p>}
      </Link>
    </div>
  );
};

export default SocialLink;
