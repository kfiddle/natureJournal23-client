import styles from "./Homepage.module.css";

const Homepage = () => {
  const journalClicker = () => {
    console.log("I was clicked");
  };

  return (
    <div className={styles.outerContainer}>
      {/* <div>HOMEPAGE</div> */}
      <button className={styles.journalButton} onClick={journalClicker}>
        My Nature Journal
      </button>
    </div>
  );
};

export default Homepage;
