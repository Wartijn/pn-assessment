import styles from "./page.module.css";
import CategoryMenu from "@/components/category-menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CategoryMenu />
      </main>
    </div>
  );
}
