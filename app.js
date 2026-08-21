// 應用程式邏輯控制 (App Logic & i18n Controller)
let currentLang = 'zh';
let activeDay = 1;
let activeTab = 'itinerary';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderLanguage(currentLang);
  initEventListeners();
});

function initEventListeners() {
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      renderLanguage(currentLang);
    });
  }

  const printBtn = document.getElementById('btn-print');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// 切換語系並重新渲染所有區塊
function renderLanguage(lang) {
  const data = i18nData[lang];
  if (!data) return;

  // 1. 頂部資訊與 Header
  document.getElementById('badge-trip').innerText = data.header.badge;
  document.getElementById('hero-title').innerText = data.header.title;
  document.getElementById('hero-subtitle').innerText = data.header.subtitle;
  document.getElementById('btn-print').innerHTML = data.header.printBtn;

  // Header 統計數據
  document.getElementById('stat-duration-lbl').innerText = data.header.stats.durationLabel;
  document.getElementById('stat-duration-val').innerText = data.header.stats.durationVal;
  document.getElementById('stat-theme-lbl').innerText = data.header.stats.themeLabel;
  document.getElementById('stat-theme-val').innerText = data.header.stats.themeVal;
  document.getElementById('stat-stay-lbl').innerText = data.header.stats.stayLabel;
  document.getElementById('stat-stay-val').innerText = data.header.stats.stayVal;
  document.getElementById('stat-usj-lbl').innerText = data.header.stats.usjDateLabel;
  document.getElementById('stat-usj-val').innerText = data.header.stats.usjDateVal;

  // 2. 主導覽分頁標籤
  document.getElementById('tab-btn-itinerary').innerText = data.tabs.itinerary;
  document.getElementById('tab-btn-booking').innerText = data.tabs.booking;
  document.getElementById('tab-btn-usj').innerText = data.tabs.usj;
  document.getElementById('tab-btn-checklist').innerText = data.tabs.checklist;
  document.getElementById('tab-btn-budget').innerText = data.tabs.budget;

  // 3. Tab 1: 每日行程
  renderItinerary(data.days, lang);

  // 4. Tab 2: 航班與住宿卡片
  renderBooking(data.booking);

  // 5. Tab 3: 環球影城專題
  renderUSJ(data.usj);

  // 6. Tab 4: 行前待辦清單
  renderChecklist(data.checklist);

  // 7. Tab 5: 預算表格
  renderBudget(data.budget);

  // 8. 列印專用 A4 申請表
  renderPrintDocument(data.printDoc);

  // 恢復當前選取的分頁與天數
  switchTab(activeTab);
  showDay(activeDay);
}

// 渲染每日行程（按鈕列表 + 11天詳細行程卡片）
function renderItinerary(days, lang) {
  const daySelector = document.getElementById('day-selector');
  const dayCardsContainer = document.getElementById('day-cards-container');

  daySelector.innerHTML = '';
  dayCardsContainer.innerHTML = '';

  days.forEach((d) => {
    // 日期按鈕
    const btn = document.createElement('div');
    btn.className = `day-btn ${d.dayNum === activeDay ? 'active' : ''}`;
    btn.id = `day-btn-${d.dayNum}`;
    btn.onclick = () => showDay(d.dayNum);
    btn.innerHTML = `<div class="d-num">Day ${d.dayNum}</div><div class="d-date">${d.dateStr}</div>`;
    daySelector.appendChild(btn);

    // 每日詳細卡片
    const card = document.createElement('div');
    card.className = 'day-card day-section';
    card.id = `day-card-${d.dayNum}`;
    card.style.display = d.dayNum === activeDay ? 'block' : 'none';

    let timelineHtml = '';
    d.timeline.forEach((item) => {
      timelineHtml += `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
      `;
    });

    const mealLabel = lang === 'zh' ? '🍽️ 美食推薦' : '🍽️ Ẩm thực Đề xuất';
    const transitLabel = lang === 'zh' ? '🚇 交通方案' : '🚇 Di chuyển & Vé';
    const tipsLabel = lang === 'zh' ? '💡 貼心提醒' : '💡 Lưu ý Quan trọng';

    card.innerHTML = `
      <div class="day-header">
        <div class="day-title-group">
          <h2>${d.title} <span class="city-tag ${d.cityClass}">${d.city}</span></h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${d.fullDate}</span>
        </div>
      </div>
      <div class="day-body">
        <div class="timeline">
          ${timelineHtml}
        </div>
        <div class="day-meta-grid">
          <div class="meta-box">
            <h4>${mealLabel}</h4>
            <p>${d.meals}</p>
          </div>
          <div class="meta-box">
            <h4>${transitLabel}</h4>
            <p>${d.transit}</p>
          </div>
          <div class="meta-box">
            <h4>${tipsLabel}</h4>
            <p>${d.tips}</p>
          </div>
        </div>
      </div>
    `;

    dayCardsContainer.appendChild(card);
  });
}

// 渲染航班與住宿（完整呈現去回程 CI152/CI153 與京都4晚/大阪6晚）
function renderBooking(b) {
  const container = document.getElementById('booking-container');
  container.innerHTML = `
    <div class="grid-2">
      <!-- Flight Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">${b.flightCardTitle}</div>
          <span class="badge-status pending">${b.flightStatus}</span>
        </div>
        
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">${b.outboundLabel}</div>
        <div class="flight-route">
          <div class="flight-point">
            <div class="flight-time">09:00</div>
            <div class="flight-code">TPE 桃園 T2</div>
          </div>
          <div class="flight-arrow">
            <span>${b.outboundAirline}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${b.outboundDetail}</span>
            <span>➔</span>
          </div>
          <div class="flight-point">
            <div class="flight-time">12:50</div>
            <div class="flight-code">KIX 關西 T1</div>
          </div>
        </div>

        <div style="font-size: 0.85rem; color: var(--text-muted); margin: 16px 0 6px;">${b.inboundLabel}</div>
        <div class="flight-route">
          <div class="flight-point">
            <div class="flight-time">14:00</div>
            <div class="flight-code">KIX 關西 T1</div>
          </div>
          <div class="flight-arrow">
            <span>${b.inboundAirline}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${b.inboundDetail}</span>
            <span>➔</span>
          </div>
          <div class="flight-point">
            <div class="flight-time">16:00</div>
            <div class="flight-code">TPE 桃園 T2</div>
          </div>
        </div>

        <div style="font-size: 0.85rem; color: var(--text-muted); background: var(--surface-subtle); padding: 10px; border-radius: var(--radius-sm); margin-top: 14px;">
          ${b.flightTip}
        </div>
      </div>

      <!-- Hotel Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">${b.hotelCardTitle}</div>
          <span class="badge-status pending">${b.hotelStatus}</span>
        </div>

        <div style="margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <strong style="color: var(--secondary); font-size: 1rem;">${b.kyotoStayTitle}</strong>
            <span style="font-size: 0.8rem; color: var(--accent); font-weight: 700;">${b.kyotoDates}</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px; line-height: 1.5;">
            <strong>${b.kyotoArea}</strong><br>
            ${b.kyotoRecom}
          </p>
        </div>

        <hr style="border: 0; border-top: 1px solid var(--border); margin: 14px 0;">

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <strong style="color: var(--secondary); font-size: 1rem;">${b.osakaStayTitle}</strong>
            <span style="font-size: 0.8rem; color: var(--accent); font-weight: 700;">${b.osakaDates}</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px; line-height: 1.5;">
            <strong>${b.osakaArea}</strong><br>
            ${b.osakaRecom}
          </p>
        </div>
      </div>
    </div>
  `;
}

// 渲染 USJ 專題
function renderUSJ(u) {
  const container = document.getElementById('usj-container');
  let tipsHtml = '';
  u.tips.forEach((t) => {
    tipsHtml += `
      <div class="usj-tip-card">
        <div class="usj-tip-title">${t.title}</div>
        <div class="usj-tip-desc">${t.desc}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="usj-hero">
      <h3>${u.heroTitle}</h3>
      <p>${u.heroDesc}</p>
      <div class="usj-tips-grid">
        ${tipsHtml}
      </div>
    </div>
  `;
}

// 渲染行前清單
function renderChecklist(c) {
  const container = document.getElementById('checklist-container');
  let itemsHtml = '';
  c.items.forEach((item, idx) => {
    const isChecked = idx === 0 || idx === 4;
    itemsHtml += `
      <div class="checklist-item">
        <input type="checkbox" id="chk-${idx}" ${isChecked ? 'checked' : ''} onchange="updateProgress()">
        <div class="checklist-text">
          <label for="chk-${idx}" class="checklist-title">${item.title}</label>
          <div class="checklist-desc">${item.desc}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${c.cardTitle}</div>
        <span style="font-size: 0.85rem; color: var(--text-muted);" id="checklist-counter">已完成 2 / ${c.items.length} 項</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" id="checklist-progress" style="width: 25%;"></div>
      </div>
      <div class="checklist-group">
        ${itemsHtml}
      </div>
    </div>
  `;
  updateProgress();
}

// 更新進度條
function updateProgress() {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  if (!checkboxes.length) return;
  let checked = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) checked++;
  });
  const total = checkboxes.length;
  const pct = Math.round((checked / total) * 100);
  const progressBar = document.getElementById('checklist-progress');
  const counter = document.getElementById('checklist-counter');
  if (progressBar) progressBar.style.width = pct + '%';
  if (counter) {
    const data = i18nData[currentLang].checklist;
    counter.innerText = data.progressText.replace('{checked}', checked).replace('{total}', total).replace('{pct}', pct);
  }
}

// 渲染預算表格
function renderBudget(b) {
  const container = document.getElementById('budget-container');
  let rowsHtml = '';
  b.rows.forEach((r) => {
    rowsHtml += `
      <tr>
        <td><strong>${r.cat}</strong></td>
        <td>${r.desc}</td>
        <td class="num-col">${r.cost}</td>
        <td class="num-col"><span class="badge-status pending">${r.status}</span></td>
        <td>${r.note}</td>
      </tr>
    `;
  });

  let thsHtml = '';
  b.headers.forEach((h, idx) => {
    thsHtml += `<th class="${idx === 2 || idx === 3 ? 'num-col' : ''}">${h}</th>`;
  });

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${b.cardTitle}</div>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${b.rateNote}</span>
      </div>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>${thsHtml}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
          <tfoot>
            <tr class="tfoot-total">
              <td colspan="2">${b.totalLabel}</td>
              <td class="num-col" style="color: var(--primary);">${b.totalVal}</td>
              <td colspan="2" style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">${b.totalNote}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;
}

// 渲染 A4 列印格式
function renderPrintDocument(p) {
  const container = document.getElementById('print-container');
  let tableRows = '';
  p.printRows.forEach((r) => {
    tableRows += `
      <tr>
        <td class="print-col-date">${r.date}</td>
        <td class="print-col-city">${r.city}</td>
        <td class="print-col-plan">${r.plan}</td>
        <td class="print-col-hotel">${r.hotel}</td>
      </tr>
    `;
  });

  container.innerHTML = `
    <div class="print-header">
      <div class="print-title">${p.title}</div>
      <div class="print-subtitle">${p.subtitle}</div>
    </div>

    <div class="print-info-grid">
      <div class="print-info-item"><strong>${p.infoNameLabel}</strong> ${p.infoNameVal}</div>
      <div class="print-info-item"><strong>${p.infoDateLabel}</strong> ${p.infoDateVal}</div>
      <div class="print-info-item"><strong>${p.infoFlightLabel}</strong> ${p.infoFlightVal}</div>
      <div class="print-info-item"><strong>${p.infoPurposeLabel}</strong> ${p.infoPurposeVal}</div>
    </div>

    <table class="print-table">
      <thead>
        <tr>
          <th class="print-col-date">${p.colDate}</th>
          <th class="print-col-city">${p.colCity}</th>
          <th class="print-col-plan">${p.colPlan}</th>
          <th class="print-col-hotel">${p.colHotel}</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>

    <div class="print-footer">${p.footerNote}</div>
  `;
}

// 分頁切換
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.tab-content').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach((el) => el.classList.remove('active'));

  const target = document.getElementById(`tab-${tabId}`);
  const btn = document.getElementById(`tab-btn-${tabId}`);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// 天數切換
function showDay(dayNum) {
  activeDay = dayNum;
  document.querySelectorAll('.day-section').forEach((el) => (el.style.display = 'none'));
  document.querySelectorAll('.day-btn').forEach((el) => el.classList.remove('active'));

  const targetCard = document.getElementById(`day-card-${dayNum}`);
  const targetBtn = document.getElementById(`day-btn-${dayNum}`);
  if (targetCard) targetCard.style.display = 'block';
  if (targetBtn) targetBtn.classList.add('active');
}
