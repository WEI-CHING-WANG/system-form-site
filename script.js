const API_URL = 'https://84l1zi5hjc.execute-api.ap-northeast-1.amazonaws.com/'; // 待替換
document.getElementById('sysForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const obj = Object.fromEntries(fd.entries());

  try {
    const r = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });
    const data = await r.json();
    alert(`結果：${data.message}`);
  } catch (err) {
    alert('提交失敗，請稍後再試');
    console.error(err);
  }
});