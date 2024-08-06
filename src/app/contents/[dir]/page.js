import { useStore } from "@/hooks/useStore";
import styles from "../../page.module.css";

export default function Dir(params) {

    // store
    const {
        NaviStore: { navi, setNavi },
    } = useStore();

    setNavi(params.params.dir);

  console.log(params);
  console.log(params.params);
  console.log(params.params.dir);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {params.params.dir}
      </div>
    </main>
  );
}
