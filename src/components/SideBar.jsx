import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./../components/AppNav";
import { Outlet } from "react-router-dom";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <p>List of Citites</p>
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
