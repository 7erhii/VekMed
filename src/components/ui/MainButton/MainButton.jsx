import styles from "./MainButton.module.css";

export default function MainButton({ color = 'Blue', size = 'medium', text }) {
  const colorClass = `mainButton${color}`; 
  return (
    <div>
      <button className={`${styles.mainButton} ${styles[colorClass]} ${styles[size]}`}>
        {text}
      </button>
    </div>
  );
}
