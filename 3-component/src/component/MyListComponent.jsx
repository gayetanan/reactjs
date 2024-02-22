import styles from "../list-style.module.css"
// turn list into component
// css module
export default function MyListComponent() {
    return (
      <ul className={styles.listStyle}>
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
        <li>element 4</li>
      </ul>
    );
  }
  