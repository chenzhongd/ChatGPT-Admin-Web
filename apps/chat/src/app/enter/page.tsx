"use client";

import { useRouter } from "next/navigation";

import styles from "@/app/login/login.module.scss";
import Locales from "@/locales";

export default function Index() {
  const router = useRouter();

  return (
    <div className={styles["content"]}>
      <h2 className={styles["text"]}>ChatGPT 无需翻墙</h2>
      <h3 className={styles["text"]}>关注微信公众号:AI创客工坊  获取免费账号/使用攻略</h3>
      <div className={styles["buttons"]}>
        <button
          className={styles["button"]}
          onClick={() => router.push("/login")}
        >
          {Locales.Index.Login}
        </button>
        <button
          className={styles["button"]}
          onClick={() => router.push("/register")}
        >
          {Locales.Index.Register}
        </button>
      </div>
    </div>
  );
}
