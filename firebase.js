// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAwnmV_8lt3aZawvDxXDUNnpftJCc4uz0o",
  authDomain: "plant-app-513f4.firebaseapp.com",
  projectId: "plant-app-513f4",
  storageBucket: "plant-app-513f4.firebasestorage.app",
  messagingSenderId: "966110748803",
  appId: "1:966110748803:web:ddc825ff986c3b0e003bb6"
};

// 1️⃣ Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 2️⃣ Messaging 생성
const messaging = firebase.messaging();

// 3️⃣ 서비스워커 등록 + 토큰 요청
navigator.serviceWorker.register('/plant-app/firebase-messaging-sw.js')
.then((registration) => {

  Notification.requestPermission().then((permission) => {

    if (permission === "granted") {

      messaging.getToken({
        vapidKey: "BC8eHHRZnarrqnvRJoMyxK5eG3ZlqoZKR56xpIzelt544b8dIBHK0nllgFhSacjjfY7JcyfwVcn6J927oz_d9_Y",
        serviceWorkerRegistration: registration
      })
      .then((currentToken) => {
        if (currentToken) {
          alert("토큰: " + currentToken);
          console.log("토큰:", currentToken);
        } else {
          alert("토큰 없음");
        }
      })
      .catch((err) => {
        alert("에러: " + err);
        console.log(err);
      });

    } else {
      alert("알림 권한 거부됨");
    }

  });

});
