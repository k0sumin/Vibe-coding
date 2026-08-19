// 출결관리 진행바를 로딩 시 애니메이션으로 채움
document.querySelectorAll(".progress-fill").forEach((bar) => {
  const target = bar.dataset.progress;
  requestAnimationFrame(() => {
    bar.style.width = `${target}%`;
  });
});

// 각 카드의 "전체보기" 버튼은 아직 연결된 상세 페이지가 없어 안내만 표시
document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cardTitle = btn.closest(".card").querySelector("h2").textContent;
    alert(`${cardTitle} 상세 페이지는 준비 중입니다.`);
  });
});
