import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyB1UhN_JB7B5ouUP19cZssIICx8IGT36jg",
        authDomain: "herat-exchange-app-2f0be.firebaseapp.com",
        projectId: "herat-exchange-app-2f0be",
        storageBucket: "herat-exchange-app-2f0be.appspot.com",
        messagingSenderId: "70882756300",
        appId: "1:70882756300:web:cb5191038147464b4e2469",
        measurementId: "G-M605QJ8DDB",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localStorage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BDz5RNUS0HMGnRS6PhewLB8PKncCguap9zGwMyvILdPep91VcQxkETIs1nch_Nw8JyBBDySdXs8-hdTvJnyAbuk",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
