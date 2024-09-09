import styles from "../../page.module.css";

export default function Page(params) {

  console.log(params);
  

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="contents">
          {params.params.blog}
          {params.params.page}
          <div style={{border: "1px red solid", width: "900px", height:"auto"}}>
            sd
          </div>          
        </div>
      </div>
    </main>
  );
}


