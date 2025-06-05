const API_URL = 'arn:aws:apigateway:ap-northeast-1::/apis/84l1zi5hjc/routes/4j1g6pu';

document.getElementById('sysForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const obj = Object.fromEntries(new FormData(e.target).entries());

  try {
    const r = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });
    const data = await r.json();
    alert(data.message || '已送出');
  } catch (err) {
    console.error(err);
    alert('提交失敗');
  }
});