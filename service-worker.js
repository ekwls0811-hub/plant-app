self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("plant-app-v1").then(cache => {
      // 상대 경로(./)를 사용하여 현재 폴더 기준으로 파일을 찾도록 합니다.
      return cache.addAll([
        "./", 
        "./index.htm", // index.html이 아니라 index.htm인지 꼭 확인!
        "./manifest.json"
      ]).catch(err => console.error("캐시 실패 항목이 있습니다:", err));
    })
  );
});
