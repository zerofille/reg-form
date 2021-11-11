import React from "react";
import styles from "./style.module.scss";
function Header(props) {
  const { href, children } = props;
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="/">
        <img src="https://www.squadhelp.com/img/logo.png" />
      </a>
      <a className={styles.logBtn} href={href} children={children}></a>
    </div>
  );
}

export default Header;
