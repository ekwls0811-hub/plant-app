const firebaseConfig = {
  apiKey: "AIzaSyAwnmV_8lt3aZawvDxXDUNnpftJCc4uz0o",
  authDomain: "plant-app-513f4.firebaseapp.com",
  projectId: "plant-app-513f4",
  storageBucket: "plant-app-513f4.firebasestorage.app",
  messagingSenderId: "966110748803",
  appId: "1:966110748803:web:ddc825ff986c3b0e003bb6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onMessage(payload => {
  new Notification(payload.notification.title, {
    body: payload.notification.body
  });
});
