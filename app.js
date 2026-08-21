let currentLang = 'zh';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// 切換語系
function changeLanguage() {
  currentLang = document.getElementById('langSelector').value;
  renderApp();
}

// 重新渲染畫面
function renderApp() {
  const data = i18nData[currentLang];
  
  // 更新 UI 靜態文字
  document.getElementById('ui-badge').innerText = data.ui.badge;
  document.getElementById('ui-title').innerText = data.ui.title;
  document.getElementById('ui-subtitle').innerText = data.ui.subtitle;
  document.getElementById('tab-1').innerText = data.ui.tab1;
  document.getElementById('tab-2').innerText = data.ui.tab2;
  document.getElementById('ui-print-btn').innerText = data.ui.print;

  // 渲染日期選擇器
  const selectorContainer = document.getElementById('daySelectorContainer');
  selectorContainer.innerHTML = '';
  data.days.forEach((day, index) => {
    const btn = document.createElement('div');
    btn.className = `day-btn ${index === 0 ? 'active' : ''}`;
    btn.onclick = () => showDay(day.num, btn);
    btn.innerHTML = `<div class="d-num">Day ${day.num}</div><div class="d-date">${day.date}</div>`;
    selectorContainer.appendChild(btn);
  });

  // 渲染每日行程內容
  const contentContainer = document.getElementById('dayContentContainer');
  contentContainer.innerHTML = '';
  data.days.forEach((day, index) => {
    let eventsHtml = day.events.map(ev => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${ev.time}</div>
        <div class="timeline-title">${ev.title}</div>
        <div class="timeline-desc">${ev.desc}</div>
      </div>
    `).join('');

    const dayCard = document.createElement('div');
    dayCard.className = 'day-card day-section';
    dayCard.id = `day-${day.num}`;
    dayCard.style.display = index === 0 ? 'block' : 'none';
    dayCard.innerHTML = `
      <div class="day-header"><h2>${day.header}</h2></div>
      <div class="timeline">${eventsHtml}</div>
    `;
    contentContainer.appendChild(dayCard);
  });
}

// 分頁切換邏輯
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  btn.classList.add('active');
}

// 每日行程切換邏輯
function showDay(dayNum, btn) {
  document.querySelectorAll('.day-section').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.day-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('day-' + dayNum).style.display = 'block';
  btn.classList.add('active');
}
