import Image from "next/image";
import { StaticImageData } from "next/image";

interface AchievementCardProps {
  icon: StaticImageData;
  number: string;
  text: string;
  borderRadius: string;
}

export default function AchievementCard({ icon, number, text, borderRadius }: AchievementCardProps) {
  return (
    <div style={{
      borderRadius: borderRadius,
      background: "#212121",
      border: "1px solid #404040",
      width: "18.1em",
      height: "16.25em",
      position: "relative",
    }}>
      <Image
        src={icon}
        alt=""
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
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




// import Image from "next/image";

// export default function AchievementCard({ IconComponent, number, text }) {
//   return (
//     <div className={`p-1 text-center `}>
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <Image src={IconComponent} alt="" width={40} height={40} />
//       </div>
//       <p className="text-white text-3xl font-bold mt-3">{number}</p>
//       <p className="text-white text-lg">{text}</p>
//     </div>
//   );
// }
