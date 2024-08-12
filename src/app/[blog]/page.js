import { useStore } from "@/hooks/useStore";
import styles from "../page.module.css";

export default function Blog(params) {

  console.log(params);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {params.params.blog}
      </div>
    </main>
  );
}
