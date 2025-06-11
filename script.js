// ==== script.js ====
// 1) 先確認將下列 URL 改成您的真實 Invoke URL
const API_URL = 'https://84l1zi5hjc.execute-api.ap-northeast-1.amazonaws.com/submit';

// 2) 表單與按鈕 DOM
const form = document.getElementById('awsForm');
const submitBtn = document.getElementById('submitBtn');

/* ---------- 動態欄位切換 ---------- */

// select 類「其他」
function toggleOtherSelect(selectEl, otherInputName) {
  const otherInput = form.querySelector(`[name="${otherInputName}"]`);
  if (!otherInput) return;
  const isOther = selectEl.value === 'other';
  otherInput.classList.toggle('hidden', !isOther);
  otherInput.required = isOther;
  if (!isOther) otherInput.value = '';
}

// checkbox 類「其他」
function toggleOtherCheckbox(groupName, otherInputName) {
  const otherCheckbox = form.querySelector(`input[name="${groupName}"][value="other"]`);
  const otherInput = form.querySelector(`[name="${otherInputName}"]`);
  if (!otherCheckbox || !otherInput) return;
  const isChecked = otherCheckbox.checked;
  otherInput.classList.toggle('hidden', !isChecked);
  otherInput.required = isChecked;
  if (!isChecked) otherInput.value = '';
}

// 表單監聽 change 事件
form.addEventListener('change', e => {
  const { name } = e.target;
  if (name === 'deployment_location') toggleOtherSelect(e.target, 'deployment_location_other');
  if (name === 'web_server_type')     toggleOtherSelect(e.target, 'web_server_type_other');
  if (name === 'db_type')             toggleOtherSelect(e.target, 'db_type_other');

  if (name === 'os_types' || name === 'programming_languages') {
    toggleOtherCheckbox('os_types', 'os_types_other');
    toggleOtherCheckbox('programming_languages', 'programming_languages_other');
  }
});

/* ---------- 表單序列化 ---------- */

function serializeForm(fd) {
  const obj = {};
  for (const [key, value] of fd.entries()) {
    // checkbox 同名累加為陣列
    if (obj[key]) {
      if (Array.isArray(obj[key])) obj[key].push(value);
      else obj[key] = [obj[key], value];
    } else {
      obj[key] = value;
    }
  }

  // 移除「空白的 *_other」欄位
  Object.keys(obj).forEach(k => {
    if (k.endsWith('_other') && obj[k] === '') delete obj[k];
  });
  return obj;
}

/* ---------- Submit ---------- */

form.addEventListener('submit', async e => {
  e.preventDefault();
  submitBtn.disabled = true;

  const payload = serializeForm(new FormData(form));

  try {
    const resp = await fetch(API_URL, {
      method : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body   : JSON.stringify(payload)
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    alert(`提交成功！\nKey: ${data.key || 'n/a'}`);
    form.reset();
  } catch (err) {
    console.error(err);
    alert('提交失敗，請稍後再試');
  } finally {
    submitBtn.disabled = false;
  }
});
