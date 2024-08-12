import styles from "../../page.module.css";

export default function Page(params) {

  console.log(params);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {params.params.blog}
        {params.params.page}
      </div>
    </main>
  );
}
