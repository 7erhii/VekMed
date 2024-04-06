import Image, { StaticImageData } from "next/image";
import React from "react"; 

interface AchievementCardProps {
  icon: StaticImageData; 
  number: number | string;
  text: string;
  borderRadius: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, number, text, borderRadius }) => {
  return (
    <div style={{
      borderRadius: borderRadius,
      background: "#212121",
      border: "1px solid #404040",
      width: "18.1em",
      height: "16.25em",
      position: "relative",
    }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={icon}
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "center" }} // Примените стили здесь, если это необходимо
        />
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        position: "absolute", 
        top: 0, 
      }}>
        <p style={{ fontFamily: "inter, sans-serif", fontSize: "5em", fontWeight: "700", lineHeight: "100%" }}>{number}</p>
        <p style={{ fontFamily: "inter, sans-serif", fontSize: "1em", fontWeight: "100" }}>{text}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
