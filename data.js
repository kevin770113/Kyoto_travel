// 繁體中文與越南語完整多語系資料庫 (i18n & Data)
const i18nData = {
  zh: {
    header: {
      badge: "🍁 2026 秋季關西・京都大阪・樂園漫遊",
      title: "京都・大阪 11 天 10 夜行程規劃",
      subtitle: "2026/09/29 (週二) ～ 2026/10/09 (週五) ｜ 中華航空 CI152 / CI153",
      printBtn: "🖨️ 列印 A4 申請表",
      stats: {
        durationLabel: "旅遊天數",
        durationVal: "11 天 10 夜",
        themeLabel: "重點主題",
        themeVal: "京都古都 + USJ環球",
        stayLabel: "住宿分段",
        stayVal: "京都 4 晚 + 大阪 6 晚",
        usjDateLabel: "USJ 日期",
        usjDateVal: "10/05 (週一)"
      }
    },
    tabs: {
      itinerary: "📅 每日詳細行程",
      booking: "✈️ 航班住宿狀態",
      usj: "🎢 環球影城專題",
      checklist: "📋 行前待辦清單",
      budget: "💰 預算花費估算"
    },
    booking: {
      flightCardTitle: "✈️ 航班規劃與預訂狀態",
      flightStatus: "機票暫定・待付款",
      outboundLabel: "去程航班（第 1 天）",
      inboundLabel: "回程航班（第 11 天）",
      outboundAirline: "中華航空 CI152",
      outboundTime: "09:00 桃園 T2 ➔ 12:50 關西 T1",
      outboundDetail: "飛行時間 2h 50m ｜ 空中巴士 A330-300",
      inboundAirline: "中華航空 CI153",
      inboundTime: "14:00 關西 T1 ➔ 16:00 桃園 T2",
      inboundDetail: "飛行時間 3h 00m ｜ 空中巴士 A330-300",
      flightTip: "💡 提示：行程確認後即可開票，出發前 48 小時可預辦線上登機選位。",
      hotelCardTitle: "🏨 飯店住宿規劃與狀態",
      hotelStatus: "待預訂",
      kyotoStayTitle: "📍 第一段：京都（4 晚）",
      kyotoDates: "2026/09/29 (二) ～ 2026/10/03 (六)",
      kyotoArea: "首選區域：四條烏丸／河原町 或 京都車站周邊",
      kyotoRecom: "推薦飯店：三井花園飯店京都河原町淨教寺、Cross Hotel Kyoto、京都千飯店 (THE THOUSAND KYOTO)",
      osakaStayTitle: "📍 第二段：大阪（6 晚）",
      osakaDates: "2026/10/03 (六) ～ 2026/10/09 (五)",
      osakaArea: "首選區域：難波／心齋橋 或 梅田商圈",
      osakaRecom: "推薦飯店：大阪南海瑞士飯店 (Swissotel Nankai)、大阪十字飯店 (Cross Hotel Osaka)、心齋橋日航酒店"
    },
    usj: {
      heroTitle: "🎢 2026/10/05 (週一) 日本環球影城攻略指南",
      heroDesc: "特別安排在平日週一進場，有效避開週末擁擠人潮！搭配快速通關（Express Pass）與官方 App 電子整理券，暢遊超級任天堂世界與各大熱門園區。",
      tips: [
        {
          title: "⏰ 搶票黃金時間點",
          desc: "門票與 Express 快速通關通常於入園前 2 個月（約 8 月初）開賣，務必第一時間鎖定含「任天堂」與「哈利波特」之方案！"
        },
        {
          title: "📱 官方 App 綁定",
          desc: "提前下載 USJ 官方 App 並登錄門票。入園刷過閘門後，立即開啟 App 搶抽「電子整理券（e-Timed Entry Ticket）」。"
        },
        {
          title: "🍄 超級任天堂世界",
          desc: "入園可購買能量手環敲磚塊收集金幣。重點設施：庫巴城堡瑪利歐賽車、耀西冒險，以及全新擴建的咚奇剛瘋狂礦車！"
        },
        {
          title: "⚡ 必玩熱門清單",
          desc: "哈利波特禁忌之旅、侏儸紀公園「飛天翼龍」、小小兵瘋狂乘車遊、好萊塢美夢乘車遊。"
        }
      ]
    },
    checklist: {
      cardTitle: "📋 出國前必備待辦與確認清單",
      progressText: "已完成 {checked} / {total} 項 ({pct}%)",
      items: [
        { title: "機票開票與付款確認", desc: "確認 9/29 CI152 (09:00 TPE ➔ 12:50 KIX) 與 10/9 CI153 正式開票。" },
        { title: "京都與大阪飯店預訂", desc: "完成京都 4 晚 (9/29-10/3) 與大阪 6 晚 (10/3-10/9) 訂房。" },
        { title: "USJ 門票與 Express 快速通關搶購", desc: "鎖定 10/5 (週一) 快速通關方案，於 2 個月前（8月初）購票。" },
        { title: "關西機場特急 Haruka 電子票預約", desc: "預訂關西機場直達京都之 Haruka 特急指定席車票。" },
        { title: "護照有效期限檢查", desc: "確認同行人員護照效期均在 6 個月以上。" },
        { title: "日本上網 eSIM / 漫遊開通", desc: "選購 Docomo/Softbank 雙電信網路方案。" },
        { title: "填寫 Visit Japan Web", desc: "出發前 3~7 天完成線上入境與海關申報，截圖 QR Code。" },
        { title: "日幣現金換匯與信用卡確認", desc: "準備適量日幣現金（神社御守、小吃）並開通海外刷卡通知。" }
      ]
    },
    budget: {
      cardTitle: "💰 預算編列與實際花費估算表",
      rateNote: "匯率估算：1 JPY ≈ 0.215 TWD",
      headers: ["項目分類", "說明細節", "預估費用 (TWD/人)", "付款狀態", "備註"],
      rows: [
        { cat: "✈️ 國際機票", desc: "華航 CI152/CI153 來回機票 (含20kg託運)", cost: "NT$ 15,000", status: "待付款", note: "桃園 ⇄ 關西" },
        { cat: "🏨 飯店住宿", desc: "京都 4 晚 + 大阪 6 晚 (雙人房均攤)", cost: "NT$ 22,000", status: "待預訂", note: "每人每晚約 NT$ 2,200" },
        { cat: "🎢 門票票券", desc: "USJ 門票 + Express 4 快速通關 + 海遊館門票", cost: "NT$ 7,500", status: "待購票", note: "快速通關為浮動票價" },
        { cat: "🚇 在地交通", desc: "Haruka 特急 + 南海電鐵 Rapi:t + 地鐵與近鐵", cost: "NT$ 3,200", status: "待預訂", note: "ICOCA 儲值使用" },
        { cat: "🍽️ 餐飲美食", desc: "11 天特色餐廳、咖啡廳、生鮮市場與居酒屋", cost: "NT$ 18,000", status: "旅程現付", note: "每日約 5,000~8,000 JPY" },
        { cat: "🛍️ 購物伴手禮", desc: "藥妝、日系服飾、特色文創與機場伴手禮", cost: "NT$ 15,000", status: "旅程現付", note: "依個人彈性調整" },
        { cat: "🛡️ 雜支保險", desc: "海外旅遊平安不便險 + eSIM 網卡", cost: "NT$ 1,500", status: "出發前付", note: "加強醫療與班機延誤保障" }
      ],
      totalLabel: "合計預估總額 (每人)",
      totalVal: "NT$ 82,200",
      totalNote: "實際花費將依匯率與現場消費調整"
    },
    days: [
      {
        dayNum: 1,
        dateStr: "9/29 二",
        fullDate: "2026/09/29 (週二)",
        city: "京都",
        cityClass: "kyoto",
        title: "Day 1：啟程抵達關西・直奔京都夜景",
        timeline: [
          { time: "09:00 - 12:50", title: "搭乘華航 CI152（桃園 T2 ➔ 關西 T1）", desc: "享受機上餐飲與影音，12:50 抵達關西機場辦理入境、提領行李並領取 Haruka 車票。" },
          { time: "14:14 - 15:35", title: "搭乘關空特急 Haruka 直達京都站", desc: "約 75~80 分鐘直達京都，車廂寬敞舒適設有大型行李架。" },
          { time: "16:00 - 17:30", title: "京都飯店 Check-in 卸下行李", desc: "入住四條烏丸／河原町周邊，交通生活機能便利。" },
          { time: "18:00 - 21:00", title: "四條河原町・先斗町石板街・鴨川夜景晚餐", desc: "漫步先斗町古町家巷弄，感受鴨川河畔悠閒氛圍，品嚐道地京料理或燒肉居酒屋。" }
        ],
        meals: "弘燒肉（四條木屋町店）、先斗町居酒屋、茶寮都路里抹茶甜品",
        transit: "關空特急 Haruka 電子票 + 京都市營地鐵 / ICOCA",
        tips: "出發前請確認 Visit Japan Web QR Code 已截圖，入境通關更順暢。"
      },
      {
        dayNum: 2,
        dateStr: "9/30 三",
        fullDate: "2026/09/30 (週三)",
        city: "京都",
        cityClass: "kyoto",
        title: "Day 2：經典洛東巡禮・古寺石板街與祇園",
        timeline: [
          { time: "08:30 - 11:30", title: "清水寺・清水舞台・音羽之瀑祈泉", desc: "早出發避開人潮，參觀宏偉木造清水舞台，於音羽之瀑祈求健康、學業或良緣。" },
          { time: "11:30 - 14:00", title: "產寧坂（三年坂）・二年坂漫步・午餐", desc: "漫步保存完好的古町家坡道，參觀特色茶屋與文創小店，享用道地湯豆腐或蕎麥麵。" },
          { time: "14:30 - 17:30", title: "八坂神社・圓山公園・花見小路（祇園）", desc: "走訪京都總鎮守八坂神社，傍晚穿梭於花見小路探尋藝伎茶屋文化與古木造建築。" },
          { time: "18:00 - 20:30", title: "祇園白川夜景・精緻京料理晚餐", desc: "欣賞白川垂柳與石橋流水夜景，享用精緻懷石料理或百年鰻魚飯。" }
        ],
        meals: "順正湯豆腐、奧丹清水、祇園鰻魚飯、鍵善良房黑糖葛切",
        transit: "京都市營巴士 207 / 206 號或短程計程車",
        tips: "二年坂・三年坂石階坡道較多，建議穿著舒適好走之防滑步行鞋。"
      },
      {
        dayNum: 3,
        dateStr: "10/1 四",
        fullDate: "2026/10/01 (週四)",
        city: "京都",
        cityClass: "kyoto",
        title: "Day 3：千本鳥居之美・錦市場廚房・金閣舍利殿",
        timeline: [
          { time: "08:00 - 10:30", title: "伏見稻荷大社（清晨千本鳥居）", desc: "搭 JR 奈良線清晨抵達，享受朱紅鳥居在晨光中的靜謐美景，漫步至四辻俯瞰市景。" },
          { time: "11:30 - 14:00", title: "錦市場「京都的廚房」美食探訪", desc: "品嚐豆乳甜甜圈、現烤海鮮、玉子燒、生鮮串燒等百年生鮮小吃。" },
          { time: "14:30 - 17:00", title: "金閣寺（鹿苑寺）或 二條城庭園", desc: "欣賞金碧輝煌的舍利殿在鏡湖池中的倒影，感受世界遺產的禪意庭園美景。" },
          { time: "18:00 - 20:30", title: "新風館商場文創散策・日式天婦羅晚餐", desc: "造訪隈研吾設計的紅磚歷史建築文創商場，享用酥脆天婦羅丼或日式洋食。" }
        ],
        meals: "錦市場三木雞卵玉子燒、こんなもんじゃ豆乳甜甜圈、祢ざめ家烤鰻魚",
        transit: "JR 奈良線 + 京都市營地鐵 / 巴士",
        tips: "伏見稻荷全山步道較長，可依體力於四辻折返，保留下午漫遊體力。"
      },
      {
        dayNum: 4,
        dateStr: "10/2 五",
        fullDate: "2026/10/02 (週五)",
        city: "京都",
        cityClass: "kyoto",
        title: "Day 4：嵯峨野嵐山・竹林秘境與渡月橋畔",
        timeline: [
          { time: "09:00 - 10:30", title: "嵯峨野觀光小火車（Torokko 復古鐵道）", desc: "沿著保津川溪谷行駛，欣賞初秋山林峽谷清幽風光與溪流。" },
          { time: "10:30 - 13:00", title: "嵐山竹林小徑・野宮神社・天龍寺庭園", desc: "漫步翠綠高聳的竹林隧道，參拜結緣野宮神社，參觀世界遺產天龍寺曹源池。" },
          { time: "13:30 - 16:30", title: "渡月橋散策・% Arabica 咖啡・嵐電足湯", desc: "在渡月橋畔欣賞桂川風光，品嚐超人氣 % Arabica 咖啡，於嵐電嵐山站享受足湯。" },
          { time: "18:00 - 20:30", title: "返回市區・京風鍋物晚餐・整理行李", desc: "享用暖心京風涮涮鍋，回飯店整理行李，準備明日移動至大阪。" }
        ],
        meals: "% Arabica Kyoto Arashiyama、廣川鰻魚飯、中村屋可樂餅",
        transit: "JR 嵯峨野線 / 京福電鐵（嵐電）",
        tips: "小火車車票建議提前 1 個月於線上預訂熱門時段。"
      },
      {
        dayNum: 5,
        dateStr: "10/3 六",
        fullDate: "2026/10/03 (週六)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 5：宇治茶香文化 ➔ 移動進駐大阪・道頓堀夜景",
        timeline: [
          { time: "09:30 - 12:30", title: "宇治平等院鳳凰堂・宇治神社古風散策", desc: "退房後前往宇治參觀日幣十圓硬幣上的千年國寶鳳凰堂與宇治川風光。" },
          { time: "12:30 - 14:30", title: "中村藤吉平等院店 享用頂級抹茶午餐與甜品", desc: "品嚐招牌宇治抹茶生茶凍、抹茶蕎麥麵定食與特製抹茶聖代。" },
          { time: "15:00 - 16:30", title: "移動至大阪・大阪飯店 Check-in", desc: "搭乘京阪電車或 JR 抵達大阪，入住難波／心齋橋商圈飯店（連續入住 6 晚）。" },
          { time: "17:30 - 21:30", title: "心齋橋・道頓堀霓虹夜景・固力果跑跑人合影", desc: "沉浸在大阪最熱鬧繁華的購物商圈，品嚐道地大阪燒與現烤章魚燒。" }
        ],
        meals: "中村藤吉抹茶、美津の大阪燒、十八番章魚燒、元祖串炸達摩",
        transit: "JR 奈良線 + 京阪本線 / 大阪地鐵御堂筋線",
        tips: "城市移動日可善用車站置物櫃或飯店行李直送服務，輕鬆無負擔。"
      },
      {
        dayNum: 6,
        dateStr: "10/4 日",
        fullDate: "2026/10/04 (週日)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 6：大阪城堡地標・新世界下町・梅田百萬夜景",
        timeline: [
          { time: "09:30 - 12:00", title: "大阪城公園・登天守閣俯瞰市區全景", desc: "登上天守閣欣賞大阪市區壯闊全景，參觀豐臣秀吉與戰國歷史文物展。" },
          { time: "12:30 - 15:30", title: "新世界商圈・通天閣溜滑梯體驗・吃元祖串炸", desc: "體驗濃濃昭和懷舊風情，體驗 Tower Slider 溜滑梯，品嚐香酥元祖炸串。" },
          { time: "16:30 - 18:30", title: "梅田大型商圈購物（Grand Front / 阪急百貨）", desc: "享受關西最大購物核心商場，採購精緻伴手禮與日系生活選品。" },
          { time: "18:30 - 21:00", title: "梅田藍天大廈空中庭園・欣賞 360 度百萬夜景", desc: "登上戶外露天展望台，將大阪繁華天際線盡收眼底，晚餐品嚐大阪燒名店。" }
        ],
        meals: "八重勝串炸 / 元祖串炸達摩、きじ木地大阪燒（梅田藍天店）",
        transit: "Osaka Metro 大阪地鐵一日券",
        tips: "明日為 USJ 全日極限挑戰，今晚建議提早回飯店休息補足體力！"
      },
      {
        dayNum: 7,
        dateStr: "10/5 一",
        fullDate: "2026/10/05 (週一)",
        city: "USJ 環球影城",
        cityClass: "usj",
        title: "Day 7：日本環球影城（USJ）全日極限暢遊 🌟",
        timeline: [
          { time: "07:00 - 08:00", title: "出發提早抵達 USJ 門口排隊入園", desc: "環球影城常比表定時間提早 30-45 分鐘開門，提早抵達搶第一波入園。" },
          { time: "08:30 - 12:00", title: "超級任天堂世界（瑪利歐賽車、咚奇剛新園區）", desc: "佩戴能量手環敲金幣，挑戰庫巴城堡賽車與全新擴建咚奇剛瘋狂礦車！" },
          { time: "12:30 - 14:00", title: "奇諾比奧咖啡店 蘑菇主題精緻午餐", desc: "品嚐超級蘑菇披薩碗、無敵星星飯、磚塊提拉米蘇甜點並拍照打卡。" },
          { time: "14:00 - 17:30", title: "哈利波特魔法世界・小小兵樂園・飛天翼龍", desc: "喝冰涼奶油啤酒、體驗禁忌之旅 4K 飛行，挑戰刺激飛天翼龍。" },
          { time: "18:30 - 21:00", title: "霍格華茲城堡夜間美景・周邊大採購・返程", desc: "在霍格華茲城堡夜景下合影，買齊限定爆米花桶與周邊紀念品。" }
        ],
        meals: "奇諾比奧咖啡店、三根掃帚奶油啤酒、小小兵爆米花桶",
        transit: "JR 大阪環狀線 ➔ 西九條轉 JR 夢咲線 ➔ 環球影城站",
        tips: "排在平日週一人潮較少！務必於入園前 2 個月線上搶購 Express Pass。"
      },
      {
        dayNum: 8,
        dateStr: "10/6 二",
        fullDate: "2026/10/06 (週二)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 8：海遊館療癒鯨鯊・黑門市場生鮮・難波八阪巨獅",
        timeline: [
          { time: "09:30 - 12:00", title: "大阪海遊館（Kaiyukan）＆ 天保山大摩天輪", desc: "世界級水族館，沿著螺旋迴廊近距離觀賞巨大鯨鯊、魟魚與企鵝餵食秀。" },
          { time: "12:30 - 14:30", title: "黑門市場生猛海鮮午餐大快朵頤", desc: "現剖海膽、黑鮪魚大腹握壽司、A5 和牛現烤串燒與新鮮烤生蠔。" },
          { time: "15:00 - 17:00", title: "難波八阪神社（巨型獅子殿開運祈福）", desc: "造訪極具震撼力的巨大獅子頭舞台，象徵把厄運吸走、招來勝利好運。" },
          { time: "17:30 - 20:30", title: "千日前道具街散策・元祖老店咖哩晚餐", desc: "逛逛日本特色廚具與擬真食物模型，品嚐自由軒百年名物生蛋咖哩。" }
        ],
        meals: "黑門三平海鮮刺身、丸善食肉店烤和牛、自由軒名物生蛋咖哩",
        transit: "Osaka Metro 地鐵中央線 + 千日前線 / 御堂筋線",
        tips: "海遊館門票建議先於網路預約時段，省去現場排隊時間。"
      },
      {
        dayNum: 9,
        dateStr: "10/7 三",
        fullDate: "2026/10/07 (週三)",
        city: "奈良近郊",
        cityClass: "osaka",
        title: "Day 9：古都奈良一日漫遊・東大寺大佛與親近萌鹿",
        timeline: [
          { time: "09:00 - 10:00", title: "搭乘近鐵快速急行（大阪難波 ➔ 近鐵奈良）", desc: "約 35~40 分鐘直達奈良，出站後步行即達商店街與奈良公園。" },
          { time: "10:00 - 12:30", title: "奈良公園餵鹿・世界最大木造建築「東大寺」", desc: "購買鹿仙貝與親切小鹿互動合影，瞻仰巍峨震撼的盧舍那大佛殿。" },
          { time: "13:00 - 14:30", title: "奈良町老街午餐・中谷堂現搗麻糬", desc: "品嚐志津香七轉釜飯，觀賞中谷堂高速搗麻糬並品嚐現做艾草麻糬。" },
          { time: "14:30 - 16:30", title: "春日大社・萬葉植物園古杉林散策", desc: "漫步於綠意古杉林與三千座石燈籠之間，感受清幽古都氛圍。" },
          { time: "18:00 - 20:30", title: "返回大阪難波・頂級國產牛燒肉大餐", desc: "犒賞一整天充實的步行，享受油脂豐富入口即化的高品質燒肉吃到飽。" }
        ],
        meals: "志津香釜飯、中谷堂現搗麻糬、難波 國產牛燒肉放題 (あぶりや)",
        transit: "近鐵電車單程票 / 奈良・斑鳩一日券",
        tips: "餵鹿時手中的仙貝請分散拿取，注意隨身紙袋背包避免被小鹿啃咬。"
      },
      {
        dayNum: 10,
        dateStr: "10/8 四",
        fullDate: "2026/10/08 (週四)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 10：中崎町文青老屋・梅田百貨・橘子街潮流掃貨",
        timeline: [
          { time: "10:00 - 12:30", title: "中崎町昭和老屋文青咖啡街", desc: "穿梭在二戰倖存的昭和長屋巷弄，探訪特色雜貨、手作選物與精品手沖咖啡。" },
          { time: "12:30 - 15:30", title: "梅田大型商圈購物（LUCUA / 阪急百貨）", desc: "享受關西最大購物中心，採購精緻伴手禮、日系服飾與保養品。" },
          { time: "16:00 - 19:00", title: "南堀江橘子街（Orange Street）潮流服飾散策", desc: "匯集 Supreme、BAPE、古著店與美式復古選品的潮流核心地帶。" },
          { time: "19:30 - 22:00", title: "藥妝/唐吉訶德最後補貨・行李打包整理", desc: "進行免稅藥妝與零食最後採購，回飯店秤重並整理 11 天滿滿戰利品。" }
        ],
        meals: "HARBS 水果千層蛋糕、利久牛舌（梅田店）、一蘭拉麵",
        transit: "Osaka Metro 地鐵御堂筋線 / 谷町線",
        tips: "液體與凝膠類商品務必放入託運行李，免稅密封袋不可在境內拆封。"
      },
      {
        dayNum: 11,
        dateStr: "10/9 五",
        fullDate: "2026/10/09 (週五)",
        city: "返台",
        cityClass: "osaka",
        title: "Day 11：滿載回憶・關西機場出境順利返台",
        timeline: [
          { time: "09:30 - 10:30", title: "飯店退房・前往南海難波站", desc: "悠閒享用早餐後退房，步行前往難波站搭乘特急 Rapi:t。" },
          { time: "10:30 - 11:15", title: "搭乘南海電鐵特急 Rapi:t 直達關西機場", desc: "約 38 分鐘直達關西國際機場第一航廈（T1）。" },
          { time: "11:30 - 13:30", title: "華航櫃台報到託運・機場免稅店最後採買", desc: "起飛前 2.5 小時完成行李託運，採購白色戀人、Royce 生巧克力等伴手禮。" },
          { time: "14:00 - 16:00", title: "搭乘華航 CI153 起飛・平安降落桃園機場 T2", desc: "平安抵達台灣，結束 11 天精彩難忘的關西秋日之旅！" }
        ],
        meals: "關西機場出境美食街、神座拉麵、機場限定抹茶點心",
        transit: "南海電鐵特急 Rapi:t 指定席",
        tips: "華航 CI153 表定 14:00 起飛，務必於 13:20 前抵達登機門登機。"
      }
    ],
    printDoc: {
      title: "TRAVEL ITINERARY / 行程規劃書",
      subtitle: "Japan Kansai Trip (Du lịch Kansai Nhật Bản)",
      infoNameLabel: "旅客姓名 (Traveler):",
      infoNameVal: "Chuang Shih-hsien & Partner",
      infoDateLabel: "旅遊日期 (Dates):",
      infoDateVal: "2026/09/29 – 2026/10/09 (11 Days 10 Nights)",
      infoFlightLabel: "來回航班 (Flights):",
      infoFlightVal: "Out: CI152 (09:00 TPE ➔ 12:50 KIX) | In: CI153 (14:00 KIX ➔ 16:00 TPE)",
      infoPurposeLabel: "訪日目的 (Purpose):",
      infoPurposeVal: "觀光旅遊 (Sightseeing / Tourism)",
      colDate: "日期 (Date)",
      colCity: "地區 (Area)",
      colPlan: "預定行程與活動內容 (Planned Schedule & Activities)",
      colHotel: "住宿地點與資訊 (Accommodation)",
      printRows: [
        { date: "09/29 (Tue)", city: "Osaka (KIX) ➔ Kyoto", plan: "Flight CI152 (09:00-12:50) to KIX. Haruka Express to Kyoto. Hotel check-in. Pontocho & Kamo River walk.", hotel: "Kyoto Hotel\n(Shijo Karasuma / Kawaramachi Area)\nTel: +81-75-xxx-xxxx" },
        { date: "09/30 (Wed)", city: "Kyoto", plan: "Kiyomizu-dera Temple, Sannenzaka & Ninenzaka, Yasaka Shrine, Gion & Hanamikoji street.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/01 (Thu)", city: "Kyoto", plan: "Fushimi Inari Taisha (Thousand Torii gates), Nishiki Market food tour, Kinkaku-ji (Golden Pavilion).", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/02 (Fri)", city: "Kyoto (Arashiyama)", plan: "Sagano Romantic Train, Arashiyama Bamboo Grove, Tenryu-ji Temple, Togetsukyo Bridge.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/03 (Sat)", city: "Kyoto ➔ Osaka", plan: "Uji sightseeing (Byodo-in Temple, Matcha). Transfer to Osaka in afternoon. Dotonbori & Shinsaibashi.", hotel: "Osaka Hotel\n(Namba / Shinsaibashi / Umeda Area)\nTel: +81-6-xxx-xxxx" },
        { date: "10/04 (Sun)", city: "Osaka", plan: "Osaka Castle Park & Main Keep, Shinsekai & Tsutenkaku Tower, Umeda Sky Building Observatory.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/05 (Mon)", city: "Osaka (USJ)", plan: "Universal Studios Japan (USJ) full-day visit (Super Nintendo World, Harry Potter, Jurassic Park).", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/06 (Tue)", city: "Osaka", plan: "Osaka Aquarium Kaiyukan, Tempozan Ferris Wheel, Kuromon Market seafood lunch, Namba Yasaka Shrine.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/07 (Wed)", city: "Nara (Day trip)", plan: "Day trip to Nara: Nara Deer Park, Todai-ji Temple (Great Buddha), Kasuga Taisha Shrine. Return to Osaka.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/08 (Thu)", city: "Osaka", plan: "Nakazakicho retro cafe district, Umeda Grand Front shopping, Orange Street streetwear, packing luggage.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/09 (Fri)", city: "Osaka ➔ TPE", plan: "Hotel check-out. Nankai Rapi:t Express to KIX. Flight CI153 (14:00-16:00) return to Taiwan (TPE).", hotel: "Departure Flight CI153\n(Return to Taiwan)" }
      ],
      footerNote: "* 此行程表供簽證申請、海關入境申報及個人旅遊規劃使用。所有航班與住宿均依實際確認單為準。"
    }
  },

  // 越南語系 (Tiếng Việt)
  vi: {
    header: {
      badge: "🍁 2026 Mùa thu Kansai・Kyoto Osaka・Công viên Giải trí",
      title: "Lịch trình Du lịch Kyoto - Osaka 11 Ngày 10 Đêm",
      subtitle: "29/09/2026 (Thứ Ba) ～ 09/10/2026 (Thứ Sáu) ｜ China Airlines CI152 / CI153",
      printBtn: "🖨️ In Lịch trình A4",
      stats: {
        durationLabel: "Thời gian",
        durationVal: "11 Ngày 10 Đêm",
        themeLabel: "Chủ đề chính",
        themeVal: "Cố đô Kyoto + USJ Osaka",
        stayLabel: "Lưu trú",
        stayVal: "Kyoto 4 đêm + Osaka 6 đêm",
        usjDateLabel: "Ngày đi USJ",
        usjDateVal: "05/10 (Thứ Hai)"
      }
    },
    tabs: {
      itinerary: "📅 Lịch trình Hàng ngày",
      booking: "✈️ Tình trạng Chuyến bay & Khách sạn",
      usj: "🎢 Cẩm nang Universal Studios (USJ)",
      checklist: "📋 Danh sách Cần chuẩn bị",
      budget: "💰 Dự toán Ngân sách"
    },
    booking: {
      flightCardTitle: "✈️ Kế hoạch & Tình trạng Chuyến bay",
      flightStatus: "Đã chọn chuyến・Chờ thanh toán",
      outboundLabel: "Chuyến bay đi (Ngày 1)",
      inboundLabel: "Chuyến bay về (Ngày 11)",
      outboundAirline: "China Airlines CI152",
      outboundTime: "09:00 Đài Bắc (TPE T2) ➔ 12:50 Osaka (KIX T1)",
      outboundDetail: "Thời gian bay 2h 50m ｜ Airbus A330-300",
      inboundAirline: "China Airlines CI153",
      inboundTime: "14:00 Osaka (KIX T1) ➔ 16:00 Đài Bắc (TPE T2)",
      inboundDetail: "Thời gian bay 3h 00m ｜ Airbus A330-300",
      flightTip: "💡 Gợi ý: Sau khi chốt lịch trình có thể xuất vé và làm thủ tục check-in trực tuyến trước 48 giờ.",
      hotelCardTitle: "🏨 Kế hoạch & Tình trạng Khách sạn",
      hotelStatus: "Chờ đặt phòng",
      kyotoStayTitle: "📍 Chặng 1: Kyoto (4 Đêm)",
      kyotoDates: "29/09/2026 (Thứ 3) ～ 03/10/2026 (Thứ 7)",
      kyotoArea: "Khu vực ưu tiên: Shijo Karasuma / Kawaramachi hoặc Ga Kyoto",
      kyotoRecom: "Khách sạn đề xuất: Mitsui Garden Hotel Kyoto Kawaramachi Jokyoji, Cross Hotel Kyoto, THE THOUSAND KYOTO",
      osakaStayTitle: "📍 Chặng 2: Osaka (6 Đêm)",
      osakaDates: "03/10/2026 (Thứ 7) ～ 09/10/2026 (Thứ 6)",
      osakaArea: "Khu vực ưu tiên: Namba / Shinsaibashi hoặc Khu vực Umeda",
      osakaRecom: "Khách sạn đề xuất: Swissotel Nankai Osaka, Cross Hotel Osaka, Hotel Nikko Osaka"
    },
    usj: {
      heroTitle: "🎢 Cẩm nang Trải nghiệm USJ Ngày 05/10/2026 (Thứ Hai)",
      heroDesc: "Đi vào Thứ Hai ngày trong tuần giúp tránh đáng kể lượng khách đông đúc cuối tuần! Kết hợp vé Express Pass và ứng dụng USJ để trải nghiệm trọn vẹn Super Nintendo World và các khu vực hấp dẫn.",
      tips: [
        {
          title: "⏰ Thời điểm Mở bán Vé",
          desc: "Vé vào cổng và vé Express Pass thường mở bán trước 2 tháng (khoảng đầu tháng 8). Hãy mua sớm để chọn khung giờ vào Nintendo và Harry Potter!"
        },
        {
          title: "📱 Cài đặt Ứng dụng USJ",
          desc: "Tải trước App USJ chính thức và lưu vé. Ngay khi qua cổng soát vé, hãy vào App để rút vé điện tử (e-Timed Entry Ticket)."
        },
        {
          title: "🍄 Super Nintendo World",
          desc: "Mua Vòng tay Năng lượng (Power-Up Band) để tích lũy xu. Điểm nhấn: Mario Kart ở Lâu đài Bowser, Yoshi's Adventure và khu vực Donkey Kong mới!"
        },
        {
          title: "⚡ Trò chơi Không thể bỏ lỡ",
          desc: "Harry Potter and the Forbidden Journey, Tàu lượn The Flying Dinosaur, Minion Mayhem, Hollywood Dream - The Ride."
        }
      ]
    },
    checklist: {
      cardTitle: "📋 Danh sách Việc cần làm trước Chuyến đi",
      progressText: "Đã hoàn thành {checked} / {total} mục ({pct}%)",
      items: [
        { title: "Xác nhận và thanh toán Vé máy bay", desc: "Xác nhận chuyến bay 29/09 CI152 (09:00 TPE ➔ 12:50 KIX) và 09/10 CI153." },
        { title: "Đặt Khách sạn Kyoto & Osaka", desc: "Hoàn tất đặt 4 đêm tại Kyoto (29/9-3/10) và 6 đêm tại Osaka (3/10-9/10)." },
        { title: "Mua Vé USJ & Express Pass", desc: "Chọn gói vé cho ngày 05/10 (Thứ Hai), mua trước 2 tháng (đầu tháng 8)." },
        { title: "Đặt Vé tàu Tốc hành Haruka", desc: "Đặt trước vé tàu Haruka từ Sân bay KIX đi thẳng đến Ga Kyoto." },
        { title: "Kiểm tra Hạn Hộ chiếu", desc: "Đảm bảo hộ chiếu của tất cả hành khách còn hạn trên 6 tháng." },
        { title: "Mua eSIM / Sim 4G Nhật Bản", desc: "Chọn gói mạng Docomo/Softbank dung lượng cao hoặc không giới hạn." },
        { title: "Khai báo Visit Japan Web", desc: "Hoàn thành khai báo nhập cảnh và hải quan trực tuyến 3-7 ngày trước khi bay." },
        { title: "Đổi tiền Yên Nhật & Thẻ thanh toán", desc: "Chuẩn bị tiền mặt JPY (đền chùa, ăn vặt) và mở tính năng quẹt thẻ quốc tế." }
      ]
    },
    budget: {
      cardTitle: "💰 Bảng Dự toán Chi phí & Ngân sách",
      rateNote: "Tỷ giá ước tính: 1 JPY ≈ 0.215 TWD (~170 VND/JPY)",
      headers: ["Hạng mục", "Chi tiết", "Chi phí ước tính (TWD/người)", "Tình trạng", "Ghi chú"],
      rows: [
        { cat: "✈️ Vé máy bay quốc tế", desc: "China Airlines CI152/CI153 khứ hồi (kèm 20kg ký gửi)", cost: "NT$ 15,000", status: "Chờ thanh toán", note: "Đài Bắc ⇄ Kansai" },
        { cat: "🏨 Khách sạn lưu trú", desc: "Kyoto 4 đêm + Osaka 6 đêm (chia đôi phòng đôi)", cost: "NT$ 22,000", status: "Chờ đặt phòng", note: "~NT$ 2,200/người/đêm" },
        { cat: "🎢 Vé tham quan & Công viên", desc: "Vé USJ + Express 4 Pass + Thủy cung Kaiyukan + Đền chùa", cost: "NT$ 7,500", status: "Chờ mua vé", note: "Giá vé Express theo ngày" },
        { cat: "🚇 Di chuyển nội địa", desc: "Tàu Haruka + Tàu Nankai Rapi:t + Tàu điện ngầm & Kintetsu", cost: "NT$ 3,200", status: "Chờ đặt", note: "Thẻ nạp ICOCA" },
        { cat: "🍽️ Ăn uống & Ẩm thực", desc: "11 ngày ăn uống tại nhà hàng, quán cà phê và chợ hải sản", cost: "NT$ 18,000", status: "Thanh toán tại chỗ", note: "~5,000 - 8,000 JPY/ngày" },
        { cat: "🛍️ Mua sắm & Quà lưu niệm", desc: "Mỹ phẩm, quần áo thời trang, quà sân bay", cost: "NT$ 15,000", status: "Thanh toán tại chỗ", note: "Tùy nhu cầu cá nhân" },
        { cat: "🛡️ Bảo hiểm & Sim 4G", desc: "Bảo hiểm du lịch quốc tế + Sim eSIM 4G", cost: "NT$ 1,500", status: "Trả trước chuyến đi", note: "Bảo hiểm y tế & chậm chuyến" }
      ],
      totalLabel: "Tổng Chi phí Dự kiến (Mỗi người)",
      totalVal: "NT$ 82,200",
      totalNote: "Chi phí thực tế sẽ điều chỉnh theo tỷ giá và chi tiêu thực tế"
    },
    days: [
      {
        dayNum: 1,
        dateStr: "29/9 T3",
        fullDate: "29/09/2026 (Thứ Ba)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 1: Đến Kansai・Di chuyển về Kyoto ngắm cảnh đêm",
        timeline: [
          { time: "09:00 - 12:50", title: "Bay chuyến CI152 (Đài Bắc T2 ➔ Kansai T1)", desc: "Ăn trưa trên máy bay. 12:50 hạ cánh Sân bay Kansai, làm thủ tục nhập cảnh, lấy hành lý và nhận vé Haruka." },
          { time: "14:14 - 15:35", title: "Đi tàu Haruka Express về Ga Kyoto", desc: "Mất khoảng 75-80 phút chạy thẳng về Kyoto, tàu rộng rãi có khoang để hành lý lớn." },
          { time: "16:00 - 17:30", title: "Check-in khách sạn Kyoto & Cất hành lý", desc: "Khách sạn tại khu vực Shijo Karasuma / Kawaramachi, rất thuận tiện đi lại và ăn uống." },
          { time: "18:00 - 21:00", title: "Dạo phố Shijo Kawaramachi・Hẻm Pontocho・Bờ sông Kamo", desc: "Dạo bước trên phố cổ lát đá Pontocho, tận hưởng không khí lãng mạn ven sông Kamo và ăn tối món nướng/Izakaya." }
        ],
        meals: "Thịt nướng Hiro Yakiniku (Shijo Kiyamachi), Quán ăn Pontocho, Tráng miệng trà xanh Saryo Tsujiri",
        transit: "Vé điện tử Haruka Express + Tàu điện ngầm Kyoto / Thẻ ICOCA",
        tips: "Nên chụp màn hình mã QR của Visit Japan Web trước khi lên máy bay để qua cổng hải quan nhanh chóng."
      },
      {
        dayNum: 2,
        dateStr: "30/9 T4",
        fullDate: "30/09/2026 (Thứ Tư)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 2: Cố đô Phía Đông・Chùa Thanh Thủy & Phố Cổ Gion",
        timeline: [
          { time: "08:30 - 11:30", title: "Chùa Thanh Thủy (Kiyomizu-dera) & Thác Nước Otowa", desc: "Đi sớm tránh đông đúc, chiêm ngưỡng Điện chính bằng gỗ tráng lệ và uống nước thác Otowa cầu may mắn." },
          { time: "11:30 - 14:00", title: "Dốc Sannenzaka & Ninenzaka・Ăn trưa phố cổ", desc: "Tản bộ qua các dãy nhà cổ Machiya, ghé các tiệm thủ công truyền thống và ăn trưa đậu phụ Yuransen/mì Soba." },
          { time: "14:30 - 17:30", title: "Đền Yasaka・Công viên Maruyama・Phố Hanamikoji (Gion)", desc: "Viếng đền Yasaka linh thiêng, chiều muộn dạo phố Hanamikoji tìm hiểu văn hóa Geisha truyền thống." },
          { time: "18:00 - 20:30", title: "Ngắm cảnh đêm sông Shirakawa Gion・Bữa tối ẩm thực Kyoto", desc: "Đi dạo ven hàng liễu và cầu đá Shirakawa, thưởng thức bữa tối Kaiseki hoặc cơm lươn nướng truyền thống." }
        ],
        meals: "Đậu phụ Junsei, Đậu phụ Okutan Kiyomizu, Cơm lươn Gion, Bánh thạch Kudzu Kagizen Yoshifusa",
        transit: "Xe buýt Kyoto số 207 / 206 hoặc taxi đoạn ngắn",
        tips: "Khu vực Ninenzaka/Sannenzaka nhiều bậc thang dốc, nên mang giày đi bộ êm ái chống trơn trượt."
      },
      {
        dayNum: 3,
        dateStr: "01/10 T5",
        fullDate: "01/10/2026 (Thứ Năm)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 3: Ngàn Cổng Torii・Chợ Nishiki・Chùa Vàng Kinkaku-ji",
        timeline: [
          { time: "08:00 - 10:30", title: "Đền Fushimi Inari Taisha (Ngàn cổng Torii buổi sáng)", desc: "Đi tàu JR Nara lúc sáng sớm để tận hưởng không gian huyền bí của hàng ngàn cổng Torii đỏ thắm." },
          { time: "11:30 - 14:00", title: "Khám phá Ẩm thực Chợ Nishiki (Nhà bếp Kyoto)", desc: "Thưởng thức bánh rán sữa đậu nành, hải sản nướng than, trứng cuộn Tamagoyaki và xiên que đường phố." },
          { time: "14:30 - 17:00", title: "Chùa Vàng Kinkaku-ji hoặc Lâu đài Nijo", desc: "Ngắm nhìn ngôi chùa dát vàng rực rỡ soi bóng xuống mặt hồ Kyoko-chi tuyệt đẹp." },
          { time: "18:00 - 20:30", title: "Dạo Trung tâm thương mại ShinPuhKan・Ăn tối Tempura", desc: "Khu phức hợp kiến trúc độc đáo của Kengo Kuma, thưởng thức cơm Tempura giòn tan." }
        ],
        meals: "Trứng cuộn Miki Keiran, Bánh sữa đậu nành Konnamonja, Cơm lươn Nezameya",
        transit: "Tàu JR Nara Line + Tàu điện ngầm / Xe buýt Kyoto",
        tips: "Nếu không leo hết đỉnh núi Inari, có thể đi đến ngã tư Yotsutsuji ngắm toàn cảnh thành phố rồi quay lại."
      },
      {
        dayNum: 4,
        dateStr: "02/10 T6",
        fullDate: "02/10/2026 (Thứ Sáu)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 4: Thung lũng Arashiyama・Rừng Trúc & Cầu Togetsukyo",
        timeline: [
          { time: "09:00 - 10:30", title: "Tàu hỏa ngắm cảnh lãng mạn Sagano (Torokko)", desc: "Tàu hỏa chạy men theo hẻm núi Hozugawa, ngắm nhìn phong cảnh thiên nhiên thung lũng." },
          { time: "10:30 - 13:00", title: "Rừng trúc Arashiyama・Đền Nonomiya・Chùa Tenryu-ji", desc: "Dạo bước giữa rừng trúc xanh ngắt, viếng đền cầu duyên Nonomiya và vườn cảnh Tenryu-ji." },
          { time: "13:30 - 16:30", title: "Cầu Togetsukyo・Cà phê % Arabica・Ngâm chân suối khoáng", desc: "Ngắm sông Katsura bên cầu Togetsukyo, uống cà phê % Arabica nổi tiếng và ngâm chân tại Ga Randen." },
          { time: "18:00 - 20:30", title: "Về trung tâm Kyoto・Bữa tối lẩu Shabu-shabu・Chuẩn bị hành lý", desc: "Ăn tối món lẩu ấm cúng, về khách sạn sắp xếp đồ đạc chuẩn bị chuyển sang Osaka ngày mai." }
        ],
        meals: "Cà phê % Arabica Arashiyama, Cơm lươn Hirokawa (cần đặt trước), Bánh thịt chiên Nakamura",
        transit: "Tàu JR Sagano Line / Tàu điện Randen",
        tips: "Vé tàu Torokko nên đặt online trước 1 tháng để chọn được khoang số 5 ngắm cảnh đẹp nhất."
      },
      {
        dayNum: 5,
        dateStr: "03/10 T7",
        fullDate: "03/10/2026 (Thứ Bảy)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 5: Trà xanh Uji ➔ Di chuyển đến Osaka・Phố Đèn Dotonbori",
        timeline: [
          { time: "09:30 - 12:30", title: "Chùa Byodoin Phượng Hoàng Uji・Dạo bờ sông Uji", desc: "Check-out khách sạn, đi Uji viếng ngôi chùa nghìn năm Byodoin in trên đồng xu 10 Yên Nhật." },
          { time: "12:30 - 14:30", title: "Thưởng thức Trà xanh & Bữa trưa tại Nakamura Tokichi", desc: "Thưởng thức thạch trà xanh tươi mát, mì Soba trà xanh và kem Matcha thượng hạng." },
          { time: "15:00 - 16:30", title: "Di chuyển đến Osaka・Check-in Khách sạn Osaka", desc: "Đi tàu Keihan/JR về Osaka, nhận phòng tại Namba / Shinsaibashi (ở liên tục 6 đêm)." },
          { time: "17:30 - 21:30", title: "Phố đi bộ Shinsaibashi・Biển hiệu Glico Dotonbori・Ăn tối", desc: "Hòa mình vào khu phố sầm uất nhất Osaka, chụp ảnh với biển hiệu Glico Man, ăn bánh xèo và Takoyaki." }
        ],
        meals: "Matcha Nakamura Tokichi, Bánh xèo Mizuno Okonomiyaki, Takoyaki Juhachiban, Xiên que Kushikatsu Daruma",
        transit: "Tàu JR Nara Line + Tàu Keihan / Tàu điện ngầm Midosuji Osaka",
        tips: "Ngày chuyển khách sạn có thể gửi hành lý tại tủ gửi đồ ở ga hoặc dùng dịch vụ chuyển phát hành lý."
      },
      {
        dayNum: 6,
        dateStr: "04/10 CN",
        fullDate: "04/10/2026 (Chủ Nhật)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 6: Lâu đài Osaka・Phố cổ Shinsekai・Ngắm Cảnh đêm Umeda",
        timeline: [
          { time: "09:30 - 12:00", title: "Công viên Lâu đài Osaka・Lên Tháp Lâu đài", desc: "Lên đỉnh lâu đài ngắm toàn cảnh thành phố, tìm hiểu lịch sử thời Chiến Quốc của Toyotomi Hideyoshi." },
          { time: "12:30 - 15:30", title: "Khu phố Shinsekai・Tháp Tsutenkaku (Cầu trượt)・Ăn xiên que", desc: "Trải nghiệm không gian hoài cổ thập niên Showa, thử cầu trượt Tower Slider, ăn xiên que chiên giòn." },
          { time: "16:30 - 18:30", title: "Mua sắm khu phức hợp Umeda (Grand Front / Hankyu)", desc: "Mua sắm tại trung tâm thương mại lớn nhất Kansai, chọn quà lưu niệm và đồ thời trang Nhật Bản." },
          { time: "18:30 - 21:00", title: "Tòa nhà Umeda Sky Building・Đài quan sát ngắm cảnh đêm 360°", desc: "Lên đài quan sát ngoài trời ngắm triệu ánh đèn lung linh của Osaka, ăn tối bánh xèo Kiji." }
        ],
        meals: "Xiên que Yaekatsu / Daruma, Bánh xèo Kiji (Chi nhánh Umeda Sky)",
        transit: "Vé 1 ngày Tàu điện ngầm Osaka Metro 1-Day Pass",
        tips: "Ngày mai là lịch trình trọn ngày tại USJ, tối nay nên về khách sạn nghỉ ngơi sớm để nạp năng lượng!"
      },
      {
        dayNum: 7,
        dateStr: "05/10 T2",
        fullDate: "05/10/2026 (Thứ Hai)",
        city: "USJ",
        cityClass: "usj",
        title: "Ngày 7: Universal Studios Japan (USJ) Trọn Ngày Tuyệt Vời 🌟",
        timeline: [
          { time: "07:00 - 08:00", title: "Khởi hành sớm đến cổng USJ xếp hàng vào cổng", desc: "Công viên thường mở cửa sớm hơn 30-45 phút so với giờ công bố, đến sớm để vào đợt đầu." },
          { time: "08:30 - 12:00", title: "Super Nintendo World (Mario Kart & Khu Donkey Kong)", desc: "Đeo Vòng tay Năng lượng đập khối gạch ăn xu, đua xe Mario Kart tại Lâu đài Bowser và tàu lượn Donkey Kong!" },
          { time: "12:30 - 14:00", title: "Ăn trưa theo chủ đề Nấm tại Kinopio's Cafe", desc: "Thưởng thức bát Pizza Nấm, cơm Ngôi Sao May Mắn, tráng miệng bánh Tiramisu và chụp ảnh check-in." },
          { time: "14:00 - 17:30", title: "Thế giới Phù thủy Harry Potter・Minion Park・The Flying Dinosaur", desc: "Uống bia bơ mát lạnh, trải nghiệm Forbidden Journey 4K và thử thách tàu lượn siêu tốc The Flying Dinosaur." },
          { time: "18:30 - 21:00", title: "Lâu đài Hogwarts lên đèn・Mua quà lưu niệm・Trở về", desc: "Chụp ảnh lâu đài Hogwarts lung linh về đêm, mua bình bỏng ngô Mario/Minion giới hạn." }
        ],
        meals: "Quán Kinopio's Cafe, Bia bơ Quán Ba Cây Chổi, Bỏng ngô Minion",
        transit: "Tàu JR Osaka Loop Line ➔ Ga Nishikujo đổi tàu JR Yumesaki Line ➔ Ga Universal City",
        tips: "Đi vào Thứ Hai trong tuần vắng hơn cuối tuần! Nhớ mua vé Express Pass trước 2 tháng."
      },
      {
        dayNum: 8,
        dateStr: "06/10 T3",
        fullDate: "06/10/2026 (Thứ Ba)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 8: Thủy cung Kaiyukan・Hải sản Chợ Kuromon・Đền Sư Tử Namba",
        timeline: [
          { time: "09:30 - 12:00", title: "Thủy cung Kaiyukan Osaka & Vòng đu quay Tempozan", desc: "Một trong những thủy cung lớn nhất thế giới, ngắm cá mập voi khổng lồ, cá đuối và chim cánh cụt." },
          { time: "12:30 - 14:30", title: "Thưởng thức Đại tiệc Hải sản Chợ Kuromon", desc: "Nếm thử nhím biển tươi sống, sushi cá ngừ Otoro, thịt bò A5 Wagyu nướng tại chỗ và hàu nướng bơ." },
          { time: "15:00 - 17:00", title: "Đền Namba Yasaka (Sân khấu Đầu Sư Tử khổng lồ)", desc: "Chiêm ngưỡng đầu sư tử khổng lồ uy nghiêm, mang ý nghĩa nuốt chửng vận xui và mang lại may mắn." },
          { time: "17:30 - 20:30", title: "Phố dụng cụ bếp Sennichimae・Ăn tối cơm Cà ri Jiyuken", desc: "Khám phá đồ làm bếp truyền thống và mô hình thức ăn giả, ăn tối cơm cà ri đập trứng sống Jiyuken." }
        ],
        meals: "Hải sản Kuromon Sanpei, Bò nướng Maruzen, Cơm cà ri truyền thống Jiyuken",
        transit: "Tàu điện ngầm Osaka Metro Tuyến Chuo + Tuyến Sennichimae",
        tips: "Nên đặt trước khung giờ vào Thủy cung Kaiyukan qua mạng để không phải xếp hàng mua vé."
      },
      {
        dayNum: 9,
        dateStr: "07/10 T4",
        fullDate: "07/10/2026 (Thứ Tư)",
        city: "Nara",
        cityClass: "osaka",
        title: "Ngày 9: Cố đô Nara・Tương tác Hươu sao & Đại Phật Chùa Todai-ji",
        timeline: [
          { time: "09:00 - 10:00", title: "Đi tàu Kintetsu Rapid Express (Osaka Namba ➔ Kintetsu Nara)", desc: "Chỉ mất khoảng 35-40 phút chạy thẳng đến Nara, ra khỏi ga là đến phố đi bộ và công viên." },
          { time: "10:00 - 12:30", title: "Cho hươu ăn tại Công viên Nara・Chùa Todai-ji", desc: "Mua bánh Senbei cho hươu ăn thân thiện, chiêm ngưỡng tượng Đại Phật uy nghiêm trong ngôi chùa gỗ lớn nhất thế giới." },
          { time: "13:00 - 14:30", title: "Ăn trưa phố cổ Naramachi・Bánh dày giã tay Nakatanidou", desc: "Thưởng thức cơm niêu Shizuka Kamameshi nóng hổi, xem biểu diễn giã bánh dày siêu tốc Nakatanidou." },
          { time: "14:30 - 16:30", title: "Đền Kasuga Taisha & Rừng cây nguyên sinh", desc: "Dạo bước giữa rừng cây cổ thụ và 3.000 chiếc đèn lồng đá rêu phong cổ kính." },
          { time: "18:00 - 20:30", title: "Về lại Namba Osaka・Thịt nướng bò Nhật Bản Buffet", desc: "Tự thưởng bữa tối Buffet thịt nướng cao cấp Aburiya sau ngày dài đi bộ khám phá." }
        ],
        meals: "Cơm niêu Shizuka Kamameshi, Bánh dày lá ngải cứu Nakatanidou, Bò nướng Aburiya Namba",
        transit: "Vé tàu Kintetsu một chiều / Thẻ Nara-Ikaruga 1-Day Pass",
        tips: "Khi cho hươu ăn nên cầm từng miếng nhỏ, chú ý giữ túi xách và đồ đạc cẩn thận."
      },
      {
        dayNum: 10,
        dateStr: "08/10 T5",
        fullDate: "08/10/2026 (Thứ Năm)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 10: Phố cổ Nakazakicho・Khu mua sắm Umeda・Phố Cam Orange Street",
        timeline: [
          { time: "10:00 - 12:30", title: "Khu phố cổ Nakazakicho nghệ thuật & Cà phê", desc: "Lang thang qua các con hẻm nhà gỗ thời Showa, khám phá tiệm đồ thủ công, vintage và quán cà phê rang xay." },
          { time: "12:30 - 15:30", title: "Mua sắm khu Umeda (LUCUA / Trung tâm bách hóa Hankyu)", desc: "Mua sắm mỹ phẩm, quà lưu niệm cao cấp và quần áo thời trang thiết kế Nhật Bản." },
          { time: "16:00 - 19:00", title: "Dạo phố thời trang Orange Street (Minamihorie)", desc: "Khu phố tập trung các thương hiệu streetwear như Supreme, BAPE, đồ Vintage và nội thất hiện đại." },
          { time: "19:30 - 22:00", title: "Mua sắm miễn thuế Don Quijote・Đóng gói hành lý", desc: "Mua sắm mỹ phẩm, bánh kẹo miễn thuế lần cuối, về phòng cân hành lý và sắp xếp đồ đạc." }
        ],
        meals: "Bánh crepe nghìn lớp hoa quả HARBS, Lưỡi bò nướng Rikyu Umeda, Mì ramen Ichiran",
        transit: "Tàu điện ngầm Osaka Metro Tuyến Midosuji / Tuyến Tanimachi",
        tips: "Hàng miễn thuế đóng gói trong túi niêm phong không được mở ra tại Nhật. Đồ dạng lỏng phải để ở hành lý ký gửi."
      },
      {
        dayNum: 11,
        dateStr: "09/10 T6",
        fullDate: "09/10/2026 (Thứ Sáu)",
        city: "Về nước",
        cityClass: "osaka",
        title: "Ngày 11: Tạm biệt Nhật Bản・Khởi hành về nước từ Sân bay KIX",
        timeline: [
          { time: "09:30 - 10:30", title: "Check-out khách sạn・Đến Ga Namba", desc: "Thong thả ăn sáng, trả phòng khách sạn và đi bộ ra Ga Nankai Namba đón tàu." },
          { time: "10:30 - 11:15", title: "Đi tàu tốc hành Nankai Rapi:t ra Sân bay Kansai", desc: "Khoảng 38 phút chạy thẳng đến Nhà ga T1 Sân bay Quốc tế Kansai (KIX)." },
          { time: "11:30 - 13:30", title: "Làm thủ tục gửi hành lý・Mua sắm miễn thuế sân bay", desc: "Gửi hành lý trước 2.5 tiếng, mua sắm bánh Shiroi Koibito, socola tươi Royce, Tokyo Banana miễn thuế." },
          { time: "14:00 - 16:00", title: "Chuyến bay CI153 cất cánh・Hạ cánh Sân bay Đào Viên T2", desc: "Hạ cánh an toàn tại Đài Bắc, kết thúc chuyến du lịch 11 ngày tuyệt vời tại Kansai!" }
        ],
        meals: "Khu ẩm thực Sân bay Kansai, Mì Kamukura Ramen, Bánh trà xanh sân bay",
        transit: "Tàu tốc hành Nankai Rapi:t ghế đặt trước",
        tips: "Chuyến bay CI153 cất cánh lúc 14:00, cần có mặt tại cửa khởi hành trước 13:20."
      }
    ],
    printDoc: {
      title: "TRAVEL ITINERARY / LỊCH TRÌNH DU LỊCH",
      subtitle: "Japan Kansai Trip (Kyoto & Osaka)",
      infoNameLabel: "Họ tên Khách (Traveler):",
      infoNameVal: "Chuang Shih-hsien & Partner",
      infoDateLabel: "Thời gian (Dates):",
      infoDateVal: "29/09/2026 – 09/10/2026 (11 Ngày 10 Đêm)",
      infoFlightLabel: "Chuyến bay (Flights):",
      infoFlightVal: "Đi: CI152 (09:00 TPE ➔ 12:50 KIX) | Về: CI153 (14:00 KIX ➔ 16:00 TPE)",
      infoPurposeLabel: "Mục đích (Purpose):",
      infoPurposeVal: "Du lịch tự túc (Sightseeing / Tourism)",
      colDate: "Ngày (Date)",
      colCity: "Khu vực (Area)",
      colPlan: "Hoạt động & Lịch trình dự kiến (Planned Schedule)",
      colHotel: "Nơi lưu trú & Liên hệ (Accommodation)",
      printRows: [
        { date: "29/09 (T3)", city: "Osaka (KIX) ➔ Kyoto", plan: "Chuyến bay CI152 (09:00-12:50) đến KIX. Đi tàu Haruka về Kyoto. Nhận phòng. Dạo hẻm Pontocho & Sông Kamo.", hotel: "Kyoto Hotel\n(Khu Shijo Karasuma / Kawaramachi)\nTel: +81-75-xxx-xxxx" },
        { date: "30/09 (T4)", city: "Kyoto", plan: "Chùa Thanh Thủy (Kiyomizu-dera), Dốc Sannenzaka & Ninenzaka, Đền Yasaka, Phố cổ Gion Hanamikoji.", hotel: "Kyoto Hotel\n(Như trên)" },
        { date: "01/10 (T5)", city: "Kyoto", plan: "Đền Fushimi Inari (Ngàn cổng Torii), Khám phá ẩm thực Chợ Nishiki, Chùa Vàng Kinkaku-ji.", hotel: "Kyoto Hotel\n(Như trên)" },
        { date: "02/10 (T6)", city: "Kyoto (Arashiyama)", plan: "Tàu hỏa lãng mạn Sagano, Rừng trúc Arashiyama, Chùa Tenryu-ji, Cầu Togetsukyo, Cà phê % Arabica.", hotel: "Kyoto Hotel\n(Như trên)" },
        { date: "03/10 (T7)", city: "Kyoto ➔ Osaka", plan: "Tham quan Chùa Byodoin Uji, Thưởng thức Matcha. Chiều chuyển sang Osaka. Phố đi bộ Dotonbori & Shinsaibashi.", hotel: "Osaka Hotel\n(Khu Namba / Shinsaibashi / Umeda)\nTel: +81-6-xxx-xxxx" },
        { date: "04/10 (CN)", city: "Osaka", plan: "Công viên Lâu đài Osaka, Phố cổ Shinsekai & Tháp Tsutenkaku, Đài quan sát Umeda Sky Building ngắm cảnh đêm.", hotel: "Osaka Hotel\n(Như trên)" },
        { date: "05/10 (T2)", city: "Osaka (USJ)", plan: "Vui chơi trọn ngày Universal Studios Japan (Super Nintendo World, Harry Potter, Jurassic Park).", hotel: "Osaka Hotel\n(Như trên)" },
        { date: "06/10 (T3)", city: "Osaka", plan: "Thủy cung Kaiyukan Osaka, Vòng đu quay Tempozan, Ăn hải sản Chợ Kuromon, Đền Sư tử Namba Yasaka.", hotel: "Osaka Hotel\n(Như trên)" },
        { date: "07/10 (T4)", city: "Nara (Trong ngày)", plan: "Đi trong ngày đến Nara: Công viên Hươu Nara, Đại Phật Chùa Todai-ji, Đền Kasuga Taisha. Tối về Osaka.", hotel: "Osaka Hotel\n(Như trên)" },
        { date: "08/10 (T5)", city: "Osaka", plan: "Phố cổ Nakazakicho, Mua sắm khu phức hợp Umeda, Dạo phố thời trang Orange Street, Đóng gói hành lý.", hotel: "Osaka Hotel\n(Như trên)" },
        { date: "09/10 (T6)", city: "Osaka ➔ TPE", plan: "Check-out khách sạn. Đi tàu Nankai Rapi:t ra Sân bay KIX. Chuyến bay CI153 (14:00-16:00) về Đài Bắc.", hotel: "Chuyến bay về CI153\n(Về lại Đài Loan)" }
      ],
      footerNote: "* Lịch trình này được lập cho mục đích xin visa và kế hoạch du lịch cá nhân. Mọi chi tiết vé máy bay và khách sạn căn cứ theo xác nhận thực tế."
    }
  }
};
