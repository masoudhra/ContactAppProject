import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://github.com/masoudhra">Masoud Ramezani</a> | React.js Project
      </p>
    </div>
  );
}

export default Header;
