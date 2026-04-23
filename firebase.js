navigator.serviceWorker.register('/plant-app/firebase-messaging-sw.js')
.then((registration) => {
  messaging.getToken({
    vapidKey: "BC8eHHRZnarrqnvRJoMyxK5eG3ZlqoZKR56xpIzelt544b8dIBHK0nllgFhSacjjfY7JcyfwVcn6J927oz_d9_Y",
    serviceWorkerRegistration: registration
  })
  .then((currentToken) => {
    if (currentToken) {
      alert("토큰: " + currentToken);
    } else {
      alert("토큰 없음");
    }
  })
  .catch((err) => {
    alert("에러: " + err);
  });
});
