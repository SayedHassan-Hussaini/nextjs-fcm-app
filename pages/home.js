import PushNotificationLayout from "../components/PushNotificationLayout";
import styles from "../styles/Home.module.css";

export default function Offers() {
  return (
    <PushNotificationLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Home page
          </h2>
          <p>Notifications</p>
        </main>
      </div>
    </PushNotificationLayout>
  );
}
