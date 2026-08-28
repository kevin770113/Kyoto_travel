// 繁體中文與越南語完整多語系資料庫 (i18n & Data - 2026/10/01 ~ 2026/10/10 10天9夜)
const i18nData = {
  zh: {
    header: {
      badge: "🍁 2026 秋季關西・京都大阪・樂園漫遊",
      title: "京都・大阪 10 天 9 夜行程規劃",
      subtitle: "2026/10/01 (週四) ～ 2026/10/10 (週六) ｜ 中華航空 CI156 / CI153 (A350)",
      printBtn: "🖨️ 列印 A4 申請表",
      stats: {
        durationLabel: "旅遊天數",
        durationVal: "10 天 9 夜",
        themeLabel: "重點主題",
        themeVal: "京都古都 + USJ環球",
        stayLabel: "住宿分段",
        stayVal: "京都 4 晚 + 大阪 5 晚",
        usjDateLabel: "USJ 日期",
        usjDateVal: "10/06 (週二)"
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
      flightStatus: "航班已確認 (A350)",
      outboundLabel: "去程航班（第 1 天）",
      inboundLabel: "回程航班（第 10 天）",
      outboundAirline: "中華航空 CI156",
      outboundTime: "08:15 桃園 T2 ➔ 12:00 關西 T1",
      outboundDetail: "飛行時間 2h 45m ｜ 空中巴士 A350 ｜ 每人託運 1 件 (≦158cm)",
      inboundAirline: "中華航空 CI153",
      inboundTime: "14:00 關西 T1 ➔ 16:00 桃園 T2",
      inboundDetail: "飛行時間 3h 00m ｜ 空中巴士 A350 ｜ 每人託運 1 件 (≦158cm)",
      returnTransitTip: "🚆 大阪回程機場交通：預計於「南海難波站」搭乘【南海特急 Rapi:t】（約 38 分鐘直達關西機場 T1），全車對號座且設有大型行李架，最為省時舒適。",
      flightTip: "💡 提示：華航 A350 新機型舒適度佳，出發前 48 小時可預辦線上登機並劃位。",
      
      hotelCardTitle: "🏨 精選推薦飯店（每晚 NT$ 5,000 以下，交通/美食/伴手禮精選）",
      hotelSubTitle: "以下嚴選符合「京都下車即達／晚餐方便吃壽司燒肉」與「大阪近南海難波站／伴手禮採買便利」之高評價住宿：",
      
      kyotoSectionTitle: "⛩️ 京都推薦飯店（4 晚：10/01～10/05｜近車站／先斗町壽司燒肉首選）",
      kyotoHotels: [
        {
          name: "三井花園飯店 京都河原町淨教寺",
          enName: "Mitsui Garden Hotel Kyoto Kawaramachi Jokyoji",
          tag: "先斗町美食商圈 ⭐",
          price: "約 NT$ 4,200 ～ 4,800 / 晚",
          location: "阪急京都河原町站步行 1 分鐘／京阪祇園四條站步行 5 分鐘",
          advantage: "交通樞紐與古寺結合的特色飯店，設有質感大浴場。",
          foodHighlight: "🍣 壽司與 🔥 燒肉極致便利：步行 2 分鐘直達「先斗町」與「木屋町通」，聚集【京之燒肉處 弘（四條木屋町店）】、【Mori Mori 迴轉壽司】、【壽司之武藏三條店】與道地居酒屋。"
        },
        {
          name: "京都格蘭比亞維斯奇歐飯店",
          enName: "HOTEL VISCHIO KYOTO by GRANVIA",
          tag: "JR京都站八條口 🚄",
          price: "約 NT$ 3,800 ～ 4,500 / 晚",
          location: "JR 京都站八條口步行 2 分鐘（下機場 Haruka 出站即達）",
          advantage: "下機場特急後免拖大行李轉乘，館內附男女大浴場與免費住客休憩 Lounge。",
          foodHighlight: "🍣 壽司與 🔥 燒肉極致便利：車站共構 Porta 地下街與近鐵八條小路，有【京之燒肉處 弘（京都站前店）】、【壽司之武藏（八條口店）】、【築地壽司清（伊勢丹百貨店）】。"
        },
        {
          name: "京都阿拉飯店",
          enName: "Ala Hotel Kyoto",
          tag: "頂樓景觀溫泉 ♨️",
          price: "約 NT$ 3,600 ～ 4,300 / 晚",
          location: "JR 京都站中央口步行 4 分鐘",
          advantage: "高評價新開幕飯店，頂樓設有男女露天景觀大浴場與桑拿水療。",
          foodHighlight: "🍣 壽司與 🔥 燒肉極致便利：步行 3～5 分鐘可達【燒肉庵 兆（京都站前店）】、【天下的燒肉 大將軍】與京都塔 SANDO 美食地下街。"
        }
      ],

      osakaSectionTitle: "🛍️ 大阪推薦飯店（5 晚：10/05～10/10｜直達南海難波／伴手禮採買首選）",
      osakaHotels: [
        {
          name: "大阪十字飯店",
          enName: "Cross Hotel Osaka",
          tag: "伴手禮與逛街王者 👑",
          price: "約 NT$ 4,200 ～ 4,800 / 晚",
          location: "步行至「南海難波站」約 6～8 分鐘（搭 Rapi:t 直達機場）；心齋橋站 3 分鐘",
          advantage: "下樓即是心齋橋筋與道頓堀，房間寬敞新穎，地理位置最精華。",
          shoppingHighlight: "🎁 伴手禮極致便利：步行 3 分鐘達【大丸百貨心齋橋店】（B1 伴手禮街、AND THE FRIET 頂級薯條、獺祭清酒、Pokemon Center 旗艦店）；步行 6 分鐘達【高島屋百貨】（Bâton d'or 頂級 Pocky、福砂屋、Royce'）；24小時唐吉訶德與 551 蓬萊肉包總店都在身邊。"
        },
        {
          name: "格拉斯麗大阪難波飯店",
          enName: "Hotel Gracery Osaka Namba",
          tag: "南海難波站旁高 CP 🚆",
          price: "約 NT$ 3,200 ～ 3,800 / 晚",
          location: "步行至「南海難波站」僅約 4～5 分鐘（拖行李去機場超輕鬆）",
          advantage: "日式獨立衛浴乾濕分離，安靜舒適且性價比極高。",
          shoppingHighlight: "🎁 伴手禮極致便利：緊鄰【難波 CITY】、【難波 PARKS】與【高島屋大阪店】，買完伴手禮直接提回飯店放；步行 3 分鐘可達 551 蓬萊肉包總店與老爺爺起司蛋糕總店。"
        },
        {
          name: "難波御宿野乃天然溫泉飯店",
          enName: "Onyado Nono Namba Natural Hot Spring",
          tag: "天然溫泉＆黑門市場 ♨️",
          price: "約 NT$ 3,900 ～ 4,600 / 晚",
          location: "地鐵/近鐵日本橋站步行 1 分鐘／步行至「南海難波站」約 7 分鐘",
          advantage: "Dormy Inn 旗下全館日式榻榻米溫泉飯店，附設天然溫泉大浴場與免費夜鳴拉麵。",
          shoppingHighlight: "🎁 伴手禮極致便利：步行 2 分鐘即達【黑門市場】生鮮乾貨與【千日前道具街】，散步至難波高島屋與道頓堀商圈採購伴手禮非常便利。"
        }
      ]
    },
    usj: {
      heroTitle: "🎢 2026/10/06 (週二) 日本環球影城攻略指南",
      heroDesc: "特別安排在平日週二進場，有效避開週末與週一擁擠人潮！搭配快速通關（Express Pass）與官方 App 電子整理券，暢遊超級任天堂世界與各大熱門園區。",
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
      ],
      expressSectionTitle: "🎟️ 快速通關 4 項券（Express Pass 4）所有組合總覽",
      expressSectionSubtitle: "以下整理官方販售之 11 款 4 項快速通關組合，方便您與旅伴挑選最合適的方案：",
      expressCategories: [
        {
          catTitle: "🌟 雙保證入場【瑪利歐 ＋ 哈利波特】（最推薦）",
          badgeType: "dual",
          packages: [
            {
              name: "Race & JAWS",
              subname: "最經典全明星首選",
              badge: "最熱門 ⭐",
              entry: "保證入場：超級任天堂世界™ ＋ 哈利波特魔法世界™",
              rides: [
                "瑪利歐賽車～庫巴的挑戰書～",
                "哈利波特禁忌之旅™",
                "小小兵瘋狂乘車遊",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "一次玩齊三大經典人氣 IP，首次造訪 USJ 最佳首選！"
            },
            {
              name: "Minecart & JAWS",
              subname: "任天堂雙旗艦＋哈利波特",
              badge: "新園區必選 🍄",
              entry: "保證入場：超級任天堂世界™ ＋ 哈利波特魔法世界™",
              rides: [
                "瑪利歐賽車～庫巴的挑戰書～",
                "咚奇剛瘋狂礦車™（全新擴建設施）",
                "哈利波特禁忌之旅™ / 飛天翼龍（二擇一）",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "一次包攬咚奇剛新礦車＋瑪利歐賽車，任天堂重度粉絲首選！"
            },
            {
              name: "Backdrop & Race",
              subname: "刺激雲霄飛車組合",
              badge: "刺激愛好者 🎢",
              entry: "保證入場：超級任天堂世界™ ＋ 哈利波特魔法世界™",
              rides: [
                "瑪利歐賽車～庫巴的挑戰書～",
                "太空幻想列車",
                "好萊塢美夢・乘車遊～逆轉世界～",
                "哈利波特禁忌之旅™ / 飛天翼龍（二擇一）"
              ],
              note: "結合倒退式雲霄飛車與瑪利歐、哈利波特，適合追求速度感。"
            },
            {
              name: "Minion & Hollywood Dream",
              subname: "咚奇剛＋哈利波特＋小小兵",
              badge: "新設施精選",
              entry: "保證入場：超級任天堂世界™ ＋ 哈利波特魔法世界™",
              rides: [
                "咚奇剛瘋狂礦車™（全新擴建設施）",
                "哈利波特禁忌之旅™",
                "小小兵瘋狂乘車遊",
                "好萊塢美夢・乘車遊 / 大白鯊™（二擇一）"
              ],
              note: "主打全新咚奇剛礦車與禁忌之旅，瑪利歐賽車可現場排單人通道。"
            }
          ]
        },
        {
          catTitle: "🍄 單保證入場【僅含 超級任天堂世界】（無哈利波特）",
          badgeType: "mario",
          packages: [
            {
              name: "Minecart & Thrills",
              subname: "任天堂雙設施＋飛天翼龍",
              badge: "任天堂極限",
              entry: "保證入場：超級任天堂世界™",
              rides: [
                "瑪利歐賽車～庫巴的挑戰書～",
                "咚奇剛瘋狂礦車™",
                "飛天翼龍",
                "太空幻想列車 / 大白鯊™（二擇一）"
              ],
              note: "任天堂雙設施加上全園區最刺激的飛天翼龍！"
            },
            {
              name: "Minecart & Jurassic Park",
              subname: "溫和親子任天堂雙設施",
              badge: "親子家庭 👨‍👩‍👧",
              entry: "保證入場：超級任天堂世界™",
              rides: [
                "耀西冒險",
                "咚奇剛瘋狂礦車™",
                "小小兵瘋狂乘車遊",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "溫和版設施居多，適合親子長輩同遊。"
            },
            {
              name: "Minion & Theater",
              subname: "小小兵與 4-D 劇場版",
              badge: "劇場巡禮",
              entry: "保證入場：超級任天堂世界™",
              rides: [
                "耀西冒險",
                "小小兵瘋狂乘車遊",
                "小小兵瘋狂任務",
                "大白鯊™ / 名偵探柯南 4-D 表演秀（二擇一）"
              ],
              note: "適合喜愛小小兵與柯南 4-D 劇場表演的旅客。"
            },
            {
              name: "Race & Theater",
              subname: "瑪利歐賽車＋4-D 劇場",
              badge: "賽車劇場",
              entry: "保證入場：超級任天堂世界™",
              rides: [
                "瑪利歐賽車～庫巴的挑戰書～",
                "太空幻想列車",
                "名偵探柯南 4-D 表演秀",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "賽車結合室內沉浸式 4-D 體驗。"
            }
          ]
        },
        {
          catTitle: "⚡ 單保證入場【僅含 哈利波特】或【無指定園區】",
          badgeType: "potter",
          packages: [
            {
              name: "Variety Choice / Fun Ride",
              subname: "經典哈利波特與溫和設施",
              badge: "哈利波特專精",
              entry: "保證入場：哈利波特的魔法世界™",
              rides: [
                "哈利波特禁忌之旅™",
                "鷹馬的飛行™",
                "小小兵瘋狂乘車遊",
                "大白鯊™ / 好萊塢美夢・乘車遊（二擇一）"
              ],
              note: "包攬哈利波特雙設施，不含任天堂保證入園。"
            },
            {
              name: "Flying Dinosaur & 4-D",
              subname: "重度刺激與哈利波特",
              badge: "魔法極限",
              entry: "保證入場：哈利波特的魔法世界™",
              rides: [
                "哈利波特禁忌之旅™",
                "飛天翼龍",
                "名偵探柯南 4-D 表演秀",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "哈利波特禁忌之旅結合飛天翼龍。"
            },
            {
              name: "Thrills・MAX",
              subname: "極限尖叫雲霄飛車組合",
              badge: "尖叫無極限 😱",
              entry: "保證入場：無指定園區（現場抽整理券）",
              rides: [
                "飛天翼龍",
                "好萊塢美夢・乘車遊～逆轉世界～",
                "太空幻想列車",
                "大白鯊™ / 侏儸紀公園-乘船遊™（二擇一）"
              ],
              note: "專為雲霄飛車愛好者設計，不含任天堂保證入場。"
            }
          ]
        }
      ]
    },
    checklist: {
      cardTitle: "📋 出國前必備待辦與確認清單",
      progressText: "已完成 {checked} / {total} 項 ({pct}%)",
      items: [
        { title: "機票確認開票 (CI156/CI153)", desc: "確認 10/01 CI156 (08:15 TPE ➔ 12:00 KIX) 與 10/10 CI153 開票完成。" },
        { title: "京都與大阪飯店預訂", desc: "完成京都 4 晚 (10/1-10/5) 與大阪 5 晚 (10/5-10/10) 訂房。" },
        { title: "USJ 門票與 Express 快速通關搶購", desc: "鎖定 10/6 (週二) 快速通關方案，於 2 個月前（8月初）購票。" },
        { title: "關西機場特急 Haruka 電子票預約", desc: "預訂 10/1 關西機場直達京都之 Haruka 特急指定席車票。" },
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
        { cat: "✈️ 國際機票", desc: "華航 A350 來回機票 CI156/CI153 (含託運)", cost: "NT$ 15,500", status: "已確認", note: "桃園 ⇄ 關西" },
        { cat: "🏨 飯店住宿", desc: "京都 4 晚 + 大阪 5 晚 (雙人房均攤)", cost: "NT$ 20,000", status: "待預訂", note: "每人每晚約 NT$ 2,200" },
        { cat: "🎢 門票票券", desc: "USJ 門票 + Express 4 快速通關 + 景點門票", cost: "NT$ 7,500", status: "待購票", note: "快速通關為浮動票價" },
        { cat: "🚇 在地交通", desc: "Haruka 特急 + 南海電鐵 Rapi:t + 地鐵與近鐵", cost: "NT$ 3,000", status: "待預訂", note: "ICOCA 儲值使用" },
        { cat: "🍽️ 餐飲美食", desc: "10 天特色餐廳、咖啡廳、生鮮市場與居酒屋", cost: "NT$ 16,500", status: "旅程現付", note: "每日約 5,000~8,000 JPY" },
        { cat: "🛍️ 購物伴手禮", desc: "藥妝、日系服飾、特色文創與機場伴手禮", cost: "NT$ 15,000", status: "旅程現付", note: "依個人彈性調整" },
        { cat: "🛡️ 雜支保險", desc: "海外旅遊平安不便險 + eSIM 網卡", cost: "NT$ 1,500", status: "出發前付", note: "加強醫療與班機延誤保障" }
      ],
      totalLabel: "合計預估總額 (每人)",
      totalVal: "NT$ 79,000",
      totalNote: "實際花費將依匯率與現場消費調整"
    },
    days: [
      {
        dayNum: 1,
        dateStr: "10/1 四",
        fullDate: "2026/10/01 (週四)",
        city: "京都",
        cityClass: "kyoto",
        title: "Day 1：啟程抵達關西・直奔京都夜景",
        timeline: [
          { time: "08:15 - 12:00", title: "搭乘華航 CI156（桃園 T2 ➔ 關西 T1，A350）", desc: "享用機上餐點，12:00 準時抵達關西機場辦理入境、提領行李並領取 Haruka 車票。" },
          { time: "13:14 - 14:35", title: "搭乘關空特急 Haruka 直達京都站", desc: "約 75~80 分鐘直達京都，車廂寬敞舒適設有大型行李架。" },
          { time: "15:00 - 16:30", title: "京都飯店 Check-in 卸下行李", desc: "入住四條烏丸／河原町周邊，交通生活機能便利。" },
          { time: "17:30 - 21:00", title: "四條河原町・先斗町石板街・鴨川夜景晚餐", desc: "漫步先斗町古町家巷弄，感受鴨川河畔悠閒氛圍，品嚐道地京料理或燒肉居酒屋。" }
        ],
        meals: "弘燒肉（四條木屋町店）、先斗町居酒屋、茶寮都路里抹茶甜品",
        transit: "關空特急 Haruka 電子票 + 京都市營地鐵 / ICOCA",
        tips: "出發前請確認 Visit Japan Web QR Code 已截圖，入境通關更順暢。"
      },
      {
        dayNum: 2,
        dateStr: "10/2 五",
        fullDate: "2026/10/02 (週五)",
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
        dateStr: "10/3 六",
        fullDate: "2026/10/03 (週六)",
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
        dateStr: "10/4 日",
        fullDate: "2026/10/04 (週日)",
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
        dateStr: "10/5 一",
        fullDate: "2026/10/05 (週一)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 5：宇治茶香文化 ➔ 移動進駐大阪・道頓堀夜景",
        timeline: [
          { time: "09:30 - 12:30", title: "宇治平等院鳳凰堂・宇治神社古風散策", desc: "退房後前往宇治參觀日幣十圓硬幣上的千年國寶鳳凰堂與宇治川風光。" },
          { time: "12:30 - 14:30", title: "中村藤吉平等院店 享用頂級抹茶午餐與甜品", desc: "品嚐招牌宇治抹茶生茶凍、抹茶蕎麥麵定食與特製抹茶聖代。" },
          { time: "15:00 - 16:30", title: "移動至大阪・大阪飯店 Check-in", desc: "搭乘京阪電車或 JR 抵達大阪，入住難波／心齋橋商圈飯店（連續入住 5 晚）。" },
          { time: "17:30 - 21:30", title: "心齋橋・道頓堀霓虹夜景・固力果跑跑人合影", desc: "沉浸在大阪最熱鬧繁華的購物商圈，品嚐道地大阪燒與現烤章魚燒。" }
        ],
        meals: "中村藤吉抹茶、美津の大阪燒、十八番章魚燒、元祖串炸達摩",
        transit: "JR 奈良線 + 京阪本線 / 大阪地鐵御堂筋線",
        tips: "城市移動日可善用車站置物櫃或飯店行李直送服務，輕鬆無負擔。"
      },
      {
        dayNum: 6,
        dateStr: "10/6 二",
        fullDate: "2026/10/06 (週二)",
        city: "USJ 環球影城",
        cityClass: "usj",
        title: "Day 6：日本環球影城（USJ）全日極限暢遊 🌟",
        timeline: [
          { time: "07:00 - 08:00", title: "出發提早抵達 USJ 門口排隊入園", desc: "環球影城常比表定時間提早 30-45 分鐘開門，提早抵達搶第一波入園。" },
          { time: "08:30 - 12:00", title: "超級任天堂世界（瑪利歐賽車、咚奇剛新園區）", desc: "佩戴能量手環敲金幣，挑戰庫巴城堡賽車與全新擴建咚奇剛瘋狂礦車！" },
          { time: "12:30 - 14:00", title: "奇諾比奧咖啡店 蘑菇主題精緻午餐", desc: "品嚐超級蘑菇披薩碗、無敵星星飯、磚塊提拉米蘇甜點並拍照打卡。" },
          { time: "14:00 - 17:30", title: "哈利波特魔法世界・小小兵樂園・飛天翼龍", desc: "喝冰涼奶油啤酒、體驗禁忌之旅 4K 飛行，挑戰刺激飛天翼龍。" },
          { time: "18:30 - 21:00", title: "霍格華茲城堡夜間美景・周邊大採購・返程", desc: "在霍格華茲城堡夜景下合影，買齊限定爆米花桶與周邊紀念品。" }
        ],
        meals: "奇諾比奧咖啡店、三根掃帚奶油啤酒、小小兵爆米花桶",
        transit: "JR 大阪環狀線 ➔ 西九條轉 JR 夢咲線 ➔ 環球影城站",
        tips: "週二入園人潮較少！務必於入園前 2 個月線上搶購 Express Pass。"
      },
      {
        dayNum: 7,
        dateStr: "10/7 三",
        fullDate: "2026/10/07 (週三)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 7：大阪城堡地標・新世界下町・梅田百萬夜景",
        timeline: [
          { time: "09:30 - 12:00", title: "大阪城公園・登天守閣俯瞰市區全景", desc: "登上天守閣欣賞大阪市區壯闊全景，參觀豐臣秀吉與戰國歷史文物展。" },
          { time: "12:30 - 15:30", title: "新世界商圈・通天閣溜滑梯體驗・吃元祖串炸", desc: "體驗濃濃昭和懷舊風情，體驗 Tower Slider 溜滑梯，品嚐香酥元祖炸串。" },
          { time: "16:30 - 18:30", title: "梅田大型商圈購物（Grand Front / 阪急百貨）", desc: "享受關西最大購物核心商場，採購精緻伴手禮與日系生活選品。" },
          { time: "18:30 - 21:00", title: "梅田藍天大廈空中庭園・欣賞 360 度百萬夜景", desc: "登上戶外露天展望台，將大阪繁華天際線盡收眼底，晚餐品嚐大阪燒名店。" }
        ],
        meals: "八重勝串炸 / 元祖串炸達摩、きじ木地大阪燒（梅田藍天店）",
        transit: "Osaka Metro 大阪地鐵一日券",
        tips: "空中庭園傍晚日落至夜景時段最美，建議提前登頂卡位。"
      },
      {
        dayNum: 8,
        dateStr: "10/8 四",
        fullDate: "2026/10/08 (週四)",
        city: "奈良近郊",
        cityClass: "osaka",
        title: "Day 8：古都奈良一日漫遊・東大寺大佛與親近萌鹿",
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
        dayNum: 9,
        dateStr: "10/9 五",
        fullDate: "2026/10/09 (週五)",
        city: "大阪",
        cityClass: "osaka",
        title: "Day 9：海遊館/中崎町・黑門市場・橘子街潮流掃貨",
        timeline: [
          { time: "09:30 - 12:30", title: "大阪海遊館（鯨鯊）或 中崎町昭和文青咖啡街", desc: "探訪世界級水族館欣賞巨型鯨鯊，或漫步中崎町品味手沖咖啡與選物店。" },
          { time: "12:30 - 15:00", title: "黑門市場生鮮海鮮午餐 ＆ 難波八阪神社", desc: "享用黑鮪魚、海膽與烤和牛，參拜開運招福的巨大獅子殿舞台。" },
          { time: "15:30 - 18:30", title: "南堀江橘子街（Orange Street）潮流服飾散策", desc: "匯集 Supreme、BAPE、古著店與美式復古選品的潮流核心地帶。" },
          { time: "19:00 - 22:00", title: "唐吉訶德/大國藥妝最後補貨・行李打包整理", desc: "進行免稅藥妝與零食最後採購，回飯店秤重並整理 10 天滿滿戰利品。" }
        ],
        meals: "黑門三平海鮮、HARBS 水果千層蛋糕、一蘭拉麵",
        transit: "Osaka Metro 地鐵御堂筋線 / Tuyến Chuo",
        tips: "免稅商品密封袋不可在境內拆封。液體類商品必須放在託運行李。"
      },
      {
        dayNum: 10,
        dateStr: "10/10 六",
        fullDate: "2026/10/10 (週六)",
        city: "返台",
        cityClass: "osaka",
        title: "Day 10：滿載回憶・關西機場出境順利返台",
        timeline: [
          { time: "09:30 - 10:30", title: "飯店退房・前往南海難波站", desc: "悠閒享用早餐後退房，步行前往南海難波站搭乘特急 Rapi:t。" },
          { time: "10:30 - 11:15", title: "搭乘南海電鐵特急 Rapi:t 直達關西機場", desc: "約 38 分鐘直達關西國際機場第一航廈（T1），車廂舒適且有行李架。" },
          { time: "11:30 - 13:30", title: "華航櫃台報到託運・機場免稅店最後採買", desc: "起飛前 2.5 小時完成行李託運，採購白色戀人、Royce 生巧克力等伴手禮。" },
          { time: "14:00 - 16:00", title: "搭乘華航 CI153 起飛（A350）・平安降落桃園 T2", desc: "平安抵達台灣，結束 10 天精彩難忘的關西秋日之旅！" }
        ],
        meals: "關西機場出境美食街、神座拉麵、機場限定伴手禮點心",
        transit: "南海電鐵特急 Rapi:t 指定席",
        tips: "華航 CI153 表定 14:00 起飛，務必於 13:20 前抵達登機門登機。"
      }
    ],
    printDoc: {
      title: "TRAVEL ITINERARY / 行程規劃書",
      subtitle: "Japan Kansai Trip (Kyoto & Osaka 10 Days 9 Nights)",
      infoNameLabel: "旅客姓名 (Traveler):",
      infoNameVal: "Chuang Shih-hsien & Partner",
      infoDateLabel: "旅遊日期 (Dates):",
      infoDateVal: "2026/10/01 – 2026/10/10 (10 Days 9 Nights)",
      infoFlightLabel: "來回航班 (Flights):",
      infoFlightVal: "Out: CI156 (10/01 08:15 TPE ➔ 12:00 KIX) | In: CI153 (10/10 14:00 KIX ➔ 16:00 TPE)",
      infoPurposeLabel: "訪日目的 (Purpose):",
      infoPurposeVal: "觀光旅遊 (Sightseeing / Tourism)",
      colDate: "日期 (Date)",
      colCity: "地區 (Area)",
      colPlan: "預定行程與活動內容 (Planned Schedule & Activities)",
      colHotel: "住宿地點與資訊 (Accommodation)",
      printRows: [
        { date: "10/01 (Thu)", city: "Osaka (KIX) ➔ Kyoto", plan: "Flight CI156 (08:15-12:00) to KIX. Haruka Express to Kyoto. Hotel check-in. Pontocho & Kamo River evening walk.", hotel: "Kyoto Hotel\n(Shijo Karasuma / Kawaramachi Area)\nTel: +81-75-xxx-xxxx" },
        { date: "10/02 (Fri)", city: "Kyoto", plan: "Kiyomizu-dera Temple, Sannenzaka & Ninenzaka, Yasaka Shrine, Gion & Hanamikoji street, Shirakawa night view.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/03 (Sat)", city: "Kyoto", plan: "Fushimi Inari Taisha (Thousand Torii gates), Nishiki Market food tour, Kinkaku-ji (Golden Pavilion), ShinPuhKan.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/04 (Sun)", city: "Kyoto (Arashiyama)", plan: "Sagano Romantic Train, Arashiyama Bamboo Grove, Tenryu-ji Temple, Togetsukyo Bridge, % Arabica Cafe.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "10/05 (Mon)", city: "Kyoto ➔ Osaka", plan: "Uji sightseeing (Byodo-in Temple, Matcha). Transfer to Osaka hotel check-in. Dotonbori & Shinsaibashi.", hotel: "Osaka Hotel\n(Namba / Shinsaibashi / Umeda Area)\nTel: +81-6-xxx-xxxx" },
        { date: "10/06 (Tue)", city: "Osaka (USJ)", plan: "Universal Studios Japan (USJ) full-day visit (Super Nintendo World, Donkey Kong, Harry Potter, Jurassic Park).", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/07 (Wed)", city: "Osaka", plan: "Osaka Castle Park & Main Keep, Shinsekai & Tsutenkaku Tower Slider, Umeda Sky Building Observatory night view.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/08 (Thu)", city: "Nara (Day trip)", plan: "Day trip to Nara: Nara Deer Park, Todai-ji Temple (Great Buddha), Kasuga Taisha Shrine. Return to Osaka for Yakiniku.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/09 (Fri)", city: "Osaka", plan: "Osaka Aquarium Kaiyukan / Nakazakicho retro cafes, Kuromon Market, Orange Street shopping, packing luggage.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/10 (Sat)", city: "Osaka ➔ TPE", plan: "Hotel check-out. Nankai Rapi:t Express to KIX. Flight CI153 (14:00-16:00) return to Taiwan (TPE).", hotel: "Departure Flight CI153\n(Return to Taiwan)" }
      ],
      footerNote: "* 此行程表供簽證申請、海關入境申報及個人旅遊規劃使用。所有航班與住宿均依實際確認單為準。"
    }
  },

  // 越南語系 (Tiếng Việt)
  vi: {
    header: {
      badge: "🍁 2026 Mùa thu Kansai・Kyoto Osaka・Công viên Giải trí",
      title: "Lịch trình Du lịch Kyoto - Osaka 10 Ngày 9 Đêm",
      subtitle: "01/10/2026 (Thứ Năm) ～ 10/10/2026 (Thứ Bảy) ｜ China Airlines CI156 / CI153 (A350)",
      printBtn: "🖨️ In Lịch trình A4",
      stats: {
        durationLabel: "Thời gian",
        durationVal: "10 Ngày 9 Đêm",
        themeLabel: "Chủ đề chính",
        themeVal: "Cố đô Kyoto + USJ Osaka",
        stayLabel: "Lưu trú",
        stayVal: "Kyoto 4 đêm + Osaka 5 đêm",
        usjDateLabel: "Ngày đi USJ",
        usjDateVal: "06/10 (Thứ Ba)"
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
      flightStatus: "Chuyến bay đã xác nhận (A350)",
      outboundLabel: "Chuyến bay đi (Ngày 1)",
      inboundLabel: "Chuyến bay về (Ngày 10)",
      outboundAirline: "China Airlines CI156",
      outboundTime: "08:15 Đài Bắc (TPE T2) ➔ 12:00 Osaka (KIX T1)",
      outboundDetail: "Thời gian bay 2h 45m ｜ Airbus A350 ｜ Hành lý ký gửi 1 kiện (≦158cm)",
      inboundAirline: "China Airlines CI153",
      inboundTime: "14:00 Osaka (KIX T1) ➔ 16:00 Đài Bắc (TPE T2)",
      inboundDetail: "Thời gian bay 3h 00m ｜ Airbus A350 ｜ Hành lý ký gửi 1 kiện (≦158cm)",
      returnTransitTip: "🚆 Tàu ra sân bay ngày về: Dự kiến đón tàu tốc hành 【Nankai Rapi:t】 tại Ga Nankai Namba (khoảng 38 phút chạy thẳng đến Ga Sân bay Kansai T1), toàn bộ ghế đặt trước có khoang để hành lý lớn, nhanh chóng và thoải mái nhất.",
      flightTip: "💡 Gợi ý: Máy bay Airbus A350 hiện đại và tiện nghi. Có thể check-in online và chọn chỗ ngồi trước 48 giờ.",
      
      hotelCardTitle: "🏨 Danh Sách Khách Sạn Chọn Lọc (Dưới NT$ 5,000 / Đêm)",
      hotelSubTitle: "Khách sạn chất lượng cao đáp ứng tiêu chí: Kyoto gần ga & tiện ăn Sushi/Thịt nướng; Osaka gần Ga Nankai Namba & tiện mua quà lưu niệm:",
      
      kyotoSectionTitle: "⛩️ Khách Sạn Đề Xuất Tại Kyoto (4 Đêm: 01/10～05/10 ｜ Tiện ăn Sushi & Yakiniku)",
      kyotoHotels: [
        {
          name: "Mitsui Garden Hotel Kyoto Kawaramachi Jokyoji",
          enName: "Mitsui Garden Hotel Kyoto Kawaramachi Jokyoji",
          tag: "Ẩm thực Phố Cổ Pontocho ⭐",
          price: "~NT$ 4,200 ～ 4,800 / đêm",
          location: "Đi bộ 1 phút đến Ga Hankyu Kyoto-Kawaramachi / 5 phút đến Ga Keihan Gion-Shijo",
          advantage: "Khách sạn độc đáo kết hợp kiến trúc đền chùa cổ kính, có bồn tắm lớn công cộng sang trọng.",
          foodHighlight: "🍣 Sushi & 🔥 Thịt nướng siêu tiện lợi: Đi bộ 2 phút ra hẻm Pontocho và phố Kiyamachi, tập trung các quán nổi tiếng: 【Hiro Yakiniku (Shijo Kiyamachi)】、【Mori Mori Sushi】、【Sushi no Musashi Sanjo】 và nhiều quán Izakaya truyền thống."
        },
        {
          name: "HOTEL VISCHIO KYOTO by GRANVIA",
          enName: "HOTEL VISCHIO KYOTO by GRANVIA",
          tag: "Cửa Nam Ga Kyoto 🚄",
          price: "~NT$ 3,800 ～ 4,500 / đêm",
          location: "Đi bộ 2 phút từ Cửa Hachijo Ga JR Kyoto (Xuống tàu Haruka là đến ngay)",
          advantage: "Không cần kéo hành lý cồng kềnh chuyển xe, có bồn tắm lớn thư giãn và phòng chờ Lounge miễn phí.",
          foodHighlight: "🍣 Sushi & 🔥 Thịt nướng siêu tiện lợi: Kết nối trực tiếp khu mua sắm ngầm Porta và phố ẩm thực Hachijo: 【Hiro Yakiniku (Trước Ga Kyoto)】、【Sushi no Musashi (Cửa Hachijo)】、【Tsukiji Sushisay (Tầng ẩm thực Isetan)】."
        },
        {
          name: "Ala Hotel Kyoto",
          enName: "Ala Hotel Kyoto",
          tag: "Suối nước nóng Tầng thượng ♨️",
          price: "~NT$ 3,600 ～ 4,300 / đêm",
          location: "Đi bộ 4 phút từ Cửa Trung tâm Ga JR Kyoto",
          advantage: "Khách sạn mới mở đánh giá cao, tầng thượng có bồn tắm lộ thiên ngắm cảnh và phòng xông hơi Sauna.",
          foodHighlight: "🍣 Sushi & 🔥 Thịt nướng siêu tiện lợi: Đi bộ 3-5 phút đến 【Yakinikuan Megumi】、【Taikougun Yakiniku】 và khu ẩm thực Kyoto Tower SANDO."
        }
      ],

      osakaSectionTitle: "🛍️ Khách Sạn Đề Xuất Tại Osaka (5 Đêm: 05/10～10/10 ｜ Gần Ga Nankai Namba & Mua Sắm Quà)",
      osakaHotels: [
        {
          name: "Cross Hotel Osaka",
          enName: "Cross Hotel Osaka",
          tag: "Vua Mua Sắm & Quà Lưu Niệm 👑",
          price: "~NT$ 4,200 ～ 4,800 / đêm",
          location: "Đi bộ 6-8 phút đến Ga Nankai Namba (đón tàu Rapi:t ra sân bay); 3 phút đến Ga Shinsaibashi",
          advantage: "Ngay dưới sảnh là phố đi bộ Shinsaibashi và Dotonbori, phòng ốc hiện đại rộng rãi bậc nhất khu vực.",
          shoppingHighlight: "🎁 Mua quà lưu niệm cực kỳ tiện lợi: Đi bộ 3 phút đến 【Trung tâm Bách hóa Daimaru Shinsaibashi】 (Tầng B1 phố bánh kẹo quà tặng, khoai tây sấy AND THE FRIET, rượu Sake Dassai, Pokemon Center); đi bộ 6 phút đến 【Bách hóa Takashimaya】 (Bánh que Bâton d'or Pocky cao cấp, bánh bông lan Fukusaya, socola Royce); cửa hàng Don Quijote 24h và bánh bao 551 Horai ngay bên cạnh."
        },
        {
          name: "Hotel Gracery Osaka Namba",
          enName: "Hotel Gracery Osaka Namba",
          tag: "Sát Ga Nankai Namba Tiện Lợi 🚆",
          price: "~NT$ 3,200 ～ 3,800 / đêm",
          location: "Đi bộ chỉ 4-5 phút đến Ga Nankai Namba (kéo vali ra tàu cực kỳ thảnh thơi)",
          advantage: "Phòng tắm phân tách khô ướt chuẩn Nhật, không gian yên tĩnh và giá cả rất hợp lý.",
          shoppingHighlight: "🎁 Mua quà lưu niệm cực kỳ tiện lợi: Nằm sát 【Namba CITY】, 【Namba PARKS】 và 【Bách hóa Takashimaya Osaka】, mua sắm xong xách thẳng về phòng cất; đi bộ 3 phút đến cửa hàng Bánh bao 551 Horai và Bánh phô mai Rikuro Ojisan."
        },
        {
          name: "Onyado Nono Namba Natural Hot Spring",
          enName: "Onyado Nono Namba Natural Hot Spring",
          tag: "Tắm Khoáng & Chợ Kuromon ♨️",
          price: "~NT$ 3,900 ～ 4,600 / đêm",
          location: "Đi bộ 1 phút đến Ga Nippombashi / 7 phút đến Ga Nankai Namba",
          advantage: "Khách sạn phong cách chiếu cói Tatami truyền thống của tập đoàn Dormy Inn, có suối nước nóng Onsen tự nhiên và mì Ramen đêm miễn phí.",
          shoppingHighlight: "🎁 Mua quà lưu niệm cực kỳ tiện lợi: Đi bộ 2 phút đến 【Chợ hải sản Kuromon】 và 【Phố dụng cụ bếp Sennichimae】, dạo bộ đến Takashimaya Namba và Dotonbori mua quà rất thuận tiện."
        }
      ]
    },
    usj: {
      heroTitle: "🎢 Cẩm nang Trải nghiệm USJ Ngày 06/10/2026 (Thứ Ba)",
      heroDesc: "Đi vào Thứ Ba ngày trong tuần giúp tránh đáng kể lượng khách đông đúc! Kết hợp vé Express Pass và ứng dụng USJ để trải nghiệm trọn vẹn Super Nintendo World và các khu vực hấp dẫn.",
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
      ],
      expressSectionTitle: "🎟️ Tổng hợp Tất Cả Các Gói Vé Express Pass 4",
      expressSectionSubtitle: "Danh sách chi tiết 11 gói vé Express Pass 4 của USJ để bạn và bạn đồng hành dễ dàng so sánh:",
      expressCategories: [
        {
          catTitle: "🌟 Gói Đảm bảo Vào 2 Khu vực【Mario ＋ Harry Potter】(Khuyên dùng nhất)",
          badgeType: "dual",
          packages: [
            {
              name: "Race & JAWS",
              subname: "Gói Toàn Ngôi Sao Kinh Điển",
              badge: "Hot Nhất ⭐",
              entry: "Đảm bảo vào: Super Nintendo World™ ＋ Harry Potter™",
              rides: [
                "Mario Kart: Koopa's Challenge™",
                "Harry Potter and the Forbidden Journey™",
                "Despicable Me Minion Mayhem",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Trải nghiệm đủ 3 IP nổi tiếng nhất, lựa chọn tối ưu cho chuyến đi đầu tiên!"
            },
            {
              name: "Minecart & JAWS",
              subname: "Bộ Đôi Nintendo ＋ Harry Potter",
              badge: "Khu Vực Mới 🍄",
              entry: "Đảm bảo vào: Super Nintendo World™ ＋ Harry Potter™",
              rides: [
                "Mario Kart: Koopa's Challenge™",
                "Donkey Kong Mine Cart Madness™ (Mới)",
                "Harry Potter Forbidden Journey™ / The Flying Dinosaur (Chọn 1)",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Bao gồm trò chơi mới Donkey Kong và Mario Kart, dành cho fan Nintendo!"
            },
            {
              name: "Backdrop & Race",
              subname: "Tàu Lượn Siêu Tốc Cảm Giác Mạnh",
              badge: "Cảm Giác Mạnh 🎢",
              entry: "Đảm bảo vào: Super Nintendo World™ ＋ Harry Potter™",
              rides: [
                "Mario Kart: Koopa's Challenge™",
                "Space Fantasy The Ride",
                "Hollywood Dream - The Ride ~Backdrop~",
                "Harry Potter Forbidden Journey™ / The Flying Dinosaur (Chọn 1)"
              ],
              note: "Kết hợp tàu lượn lùi mạo hiểm và 2 khu vực hot nhất."
            },
            {
              name: "Minion & Hollywood Dream",
              subname: "Donkey Kong ＋ Harry Potter ＋ Minion",
              badge: "Gói Mới",
              entry: "Đảm bảo vào: Super Nintendo World™ ＋ Harry Potter™",
              rides: [
                "Donkey Kong Mine Cart Madness™ (Mới)",
                "Harry Potter and the Forbidden Journey™",
                "Despicable Me Minion Mayhem",
                "Hollywood Dream - The Ride / JAWS™ (Chọn 1)"
              ],
              note: "Trọng tâm là khu vực Donkey Kong mới và Lâu đài Harry Potter."
            }
          ]
        },
        {
          catTitle: "🍄 Gói Đảm bảo Vào 1 Khu vực【Chỉ có Super Nintendo World】",
          badgeType: "mario",
          packages: [
            {
              name: "Minecart & Thrills",
              subname: "Bộ Đôi Nintendo ＋ The Flying Dinosaur",
              badge: "Nintendo & Tàu Lượn",
              entry: "Đảm bảo vào: Super Nintendo World™",
              rides: [
                "Mario Kart: Koopa's Challenge™",
                "Donkey Kong Mine Cart Madness™",
                "The Flying Dinosaur",
                "Space Fantasy The Ride / JAWS™ (Chọn 1)"
              ],
              note: "Kết hợp 2 trò chơi Nintendo và tàu lượn cảm giác mạnh nhất công viên."
            },
            {
              name: "Minecart & Jurassic Park",
              subname: "Trò Chơi Nhẹ Nhàng Cho Gia Đình",
              badge: "Gia Đình 👨‍👩‍👧",
              entry: "Đảm bảo vào: Super Nintendo World™",
              rides: [
                "Yoshi's Adventure™",
                "Donkey Kong Mine Cart Madness™",
                "Despicable Me Minion Mayhem",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Nhiều trò chơi nhẹ nhàng, phù hợp cho gia đình có trẻ em hoặc người lớn tuổi."
            },
            {
              name: "Minion & Theater",
              subname: "Minion và Rạp Chiếu Phim 4-D",
              badge: "Rạp Phim 4-D",
              entry: "Đảm bảo vào: Super Nintendo World™",
              rides: [
                "Yoshi's Adventure™",
                "Despicable Me Minion Mayhem",
                "Freeze Ray Sliders",
                "JAWS™ / Detective Conan 4-D Live Show (Chọn 1)"
              ],
              note: "Thích hợp cho người hâm mộ Minion và Conan 4-D."
            },
            {
              name: "Race & Theater",
              subname: "Mario Kart ＋ Show Conan 4-D",
              badge: "Đua Xe & 4-D",
              entry: "Đảm bảo vào: Super Nintendo World™",
              rides: [
                "Mario Kart: Koopa's Challenge™",
                "Space Fantasy The Ride",
                "Detective Conan 4-D Live Show",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Kết hợp Mario Kart với trải nghiệm rạp phim không gian đa chiều."
            }
          ]
        },
        {
          catTitle: "⚡ Gói Đảm bảo Vào 1 Khu vực【Chỉ có Harry Potter】hoặc【Không chỉ định】",
          badgeType: "potter",
          packages: [
            {
              name: "Variety Choice / Fun Ride",
              subname: "Harry Potter Kinh Điển & Trò Nhẹ",
              badge: "Harry Potter",
              entry: "Đảm bảo vào: Harry Potter™",
              rides: [
                "Harry Potter and the Forbidden Journey™",
                "Flight of the Hippogriff™",
                "Despicable Me Minion Mayhem",
                "JAWS™ / Hollywood Dream - The Ride (Chọn 1)"
              ],
              note: "Bao gồm 2 trò chơi Harry Potter, không bao gồm vé vào cửa đảm bảo Nintendo."
            },
            {
              name: "Flying Dinosaur & 4-D",
              subname: "Cảm Giác Mạnh ＋ Harry Potter",
              badge: "Phù Thủy & Tàu Lượn",
              entry: "Đảm bảo vào: Harry Potter™",
              rides: [
                "Harry Potter and the Forbidden Journey™",
                "The Flying Dinosaur",
                "Detective Conan 4-D Live Show",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Trải nghiệm Harry Potter kết hợp tàu lượn The Flying Dinosaur."
            },
            {
              name: "Thrills・MAX",
              subname: "Tàu Lượn Cảm Giác Mạnh Tối Đa",
              badge: "Cảm Giác Cực Mạnh 😱",
              entry: "Không có vé vào cửa đảm bảo khu vực (Rút vé tại chỗ)",
              rides: [
                "The Flying Dinosaur",
                "Hollywood Dream - The Ride ~Backdrop~",
                "Space Fantasy The Ride",
                "JAWS™ / Jurassic Park - The Ride™ (Chọn 1)"
              ],
              note: "Dành riêng cho tín đồ mê tàu lượn siêu tốc, không đảm bảo vào Nintendo."
            }
          ]
        }
      ]
    },
    checklist: {
      cardTitle: "📋 Danh sách Việc cần làm trước Chuyến đi",
      progressText: "Đã hoàn thành {checked} / {total} mục ({pct}%)",
      items: [
        { title: "Xác nhận vé máy bay (CI156/CI153)", desc: "Xác nhận chuyến bay 01/10 CI156 (08:15 TPE ➔ 12:00 KIX) và 10/10 CI153." },
        { title: "Đặt Khách sạn Kyoto & Osaka", desc: "Hoàn tất đặt 4 đêm tại Kyoto (01/10-05/10) và 5 đêm tại Osaka (05/10-10/10)." },
        { title: "Mua Vé USJ & Express Pass", desc: "Chọn gói vé cho ngày 06/10 (Thứ Ba), mua trước 2 tháng (đầu tháng 8)." },
        { title: "Đặt Vé tàu Tốc hành Haruka", desc: "Đặt trước vé tàu Haruka từ Sân bay KIX đi thẳng đến Ga Kyoto ngày 01/10." },
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
        { cat: "✈️ Vé máy bay quốc tế", desc: "China Airlines CI156/CI153 khứ hồi (kèm 20kg ký gửi)", cost: "NT$ 15,500", status: "Đã xác nhận", note: "Đài Bắc ⇄ Kansai" },
        { cat: "🏨 Khách sạn lưu trú", desc: "Kyoto 4 đêm + Osaka 5 đêm (chia đôi phòng đôi)", cost: "NT$ 20,000", status: "Chờ đặt phòng", note: "~NT$ 2,200/người/đêm" },
        { cat: "🎢 Vé tham quan & Công viên", desc: "Vé USJ + Express 4 Pass + Thủy cung Kaiyukan + Đền chùa", cost: "NT$ 7,500", status: "Chờ mua vé", note: "Giá vé Express theo ngày" },
        { cat: "🚇 Di chuyển nội địa", desc: "Tàu Haruka + Tàu Nankai Rapi:t + Tàu điện ngầm & Kintetsu", cost: "NT$ 3,000", status: "Chờ đặt", note: "Thẻ nạp ICOCA" },
        { cat: "🍽️ Ăn uống & Ẩm thực", desc: "10 ngày ăn uống tại nhà hàng, quán cà phê và chợ hải sản", cost: "NT$ 16,500", status: "Thanh toán tại chỗ", note: "~5,000 - 8,000 JPY/ngày" },
        { cat: "🛍️ Mua sắm & Quà lưu niệm", desc: "Mỹ phẩm, quần áo thời trang, quà sân bay", cost: "NT$ 15,000", status: "Thanh toán tại chỗ", note: "Tùy nhu cầu cá nhân" },
        { cat: "🛡️ Bảo hiểm & Sim 4G", desc: "Bảo hiểm du lịch quốc tế + Sim eSIM 4G", cost: "NT$ 1,500", status: "Trả trước chuyến đi", note: "Bảo hiểm y tế & chậm chuyến" }
      ],
      totalLabel: "Tổng Chi phí Dự kiến (Mỗi người)",
      totalVal: "NT$ 79,000",
      totalNote: "Chi phí thực tế sẽ điều chỉnh theo tỷ giá và chi tiêu thực tế"
    },
    days: [
      {
        dayNum: 1,
        dateStr: "01/10 T5",
        fullDate: "01/10/2026 (Thứ Năm)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 1: Khởi hành đến Kansai・Tiến thẳng ngắm cảnh đêm Kyoto",
        timeline: [
          { time: "08:15 - 12:00", title: "Đón chuyến bay China Airlines CI156 (Đài Bắc T2 ➔ Kansai T1, A350)", desc: "Thưởng thức suất ăn trên máy bay, 12:00 hạ cánh đúng giờ tại sân bay Kansai làm thủ tục nhập cảnh, lấy hành lý và vé tàu Haruka." },
          { time: "13:14 - 14:35", title: "Đi tàu tốc hành Haruka chạy thẳng đến ga Kyoto", desc: "Khoảng 75~80 phút đến thẳng Kyoto, toa xe rộng rãi thoải mái có giá để hành lý lớn." },
          { time: "15:00 - 16:30", title: "Nhận phòng khách sạn ở Kyoto và cất hành lý", desc: "Nhận phòng quanh khu Shijo Karasuma / Kawaramachi, giao thông và tiện ích sinh hoạt tiện lợi." },
          { time: "17:30 - 21:00", title: "Shijo Kawaramachi・Đường lát đá Pontocho・Bữa tối ngắm cảnh đêm sông Kamo", desc: "Tản bộ qua các con hẻm cổ Pontocho, tận hưởng bầu không khí thư thái bên bờ sông Kamo, thưởng thức ẩm thực Kyoto hoặc quán thịt nướng Izakaya." }
        ],
        meals: "Thịt nướng Hiro (chi nhánh Shijo Kiyamachi), quán Izakaya ở Pontocho, món tráng miệng Matcha Saryo Tsujiri",
        transit: "Vé điện tử tàu tốc hành Haruka + Tàu điện ngầm Kyoto / Thẻ ICOCA",
        tips: "Trước khi khởi hành, vui lòng đảm bảo đã chụp màn hình mã QR Visit Japan Web để qua cổng hải quan thuận lợi hơn."
      },
      {
        dayNum: 2,
        dateStr: "02/10 T6",
        fullDate: "02/10/2026 (Thứ Sáu)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 2: Tham quan phía Đông Kyoto・Phố cổ & Gion",
        timeline: [
          { time: "08:30 - 11:30", title: "Chùa Kiyomizu-dera・Sân khấu Kiyomizu・Cầu nguyện tại thác Otowa", desc: "Khởi hành sớm tránh đám đông, tham quan sân khấu bằng gỗ hùng vĩ Kiyomizu, cầu nguyện sức khỏe, học tập hoặc tình duyên tại thác Otowa." },
          { time: "11:30 - 14:00", title: "Dạo bước Sannenzaka・Ninenzaka・Ăn trưa", desc: "Tản bộ trên những con dốc cổ kính được bảo tồn tốt, tham quan các quán trà và cửa hàng thủ công mỹ nghệ đặc sắc, thưởng thức đậu phụ luộc (Yudofu) hoặc mì Soba truyền thống." },
          { time: "14:30 - 17:30", title: "Đền Yasaka・Công viên Maruyama・Phố Hanamikoji (Gion)", desc: "Viếng đền Yasaka trấn giữ Kyoto, chiều tối len lỏi qua phố Hanamikoji khám phá văn hóa quán trà Geisha và kiến trúc gỗ cổ." },
          { time: "18:00 - 20:30", title: "Cảnh đêm Gion Shirakawa・Bữa tối Kaiseki tinh tế", desc: "Chiêm ngưỡng cảnh đêm rặng liễu rủ và dòng suối cầu đá Shirakawa, thưởng thức ẩm thực Kaiseki tinh tế hoặc cơm lươn trăm năm." }
        ],
        meals: "Đậu phụ luộc Junsei, Okutan Kiyomizu, Cơm lươn Gion, Món tráng miệng đường đen Kagizen Yoshifusa",
        transit: "Xe buýt thành phố Kyoto số 207 / 206 hoặc taxi quãng ngắn",
        tips: "Đường dốc đá Ninenzaka và Sannenzaka khá nhiều, nên mang giày đi bộ chống trượt thoải mái."
      },
      {
        dayNum: 3,
        dateStr: "03/10 T7",
        fullDate: "03/10/2026 (Thứ Bảy)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 3: Vẻ đẹp ngàn cổng Torii・Nhà bếp chợ Nishiki・Kinkaku-ji",
        timeline: [
          { time: "08:00 - 10:30", title: "Đền Fushimi Inari Taisha (Ngàn cổng Torii sáng sớm)", desc: "Đi tuyến JR Nara đến nơi vào sáng sớm, tận hưởng vẻ đẹp tĩnh lặng của những chiếc cổng Torii đỏ thắm trong nắng mai, tản bộ đến ngã tư Yotsutsuji ngắm nhìn toàn cảnh thành phố." },
          { time: "11:30 - 14:00", title: "Khám phá ẩm thực Chợ Nishiki 'Nhà bếp của Kyoto'", desc: "Thưởng thức bánh rán sữa đậu nành, hải sản nướng, trứng cuộn Tamagoyaki, xiên que tươi sống trăm năm tuổi." },
          { time: "14:30 - 17:00", title: "Chùa Vàng (Kinkaku-ji) hoặc Vườn lâu đài Nijo", desc: "Chiêm ngưỡng hình bóng Xá Lợi Điện dát vàng rực rỡ phản chiếu trên mặt hồ Kyoko-chi, cảm nhận vẻ đẹp khu vườn thiền di sản thế giới." },
          { time: "18:00 - 20:30", title: "Dạo chơi khu thương mại ShinPuhKan・Bữa tối Tempura kiểu Nhật", desc: "Ghé thăm khu thương mại sáng tạo kiến trúc gạch đỏ lịch sử do Kengo Kuma thiết kế, thưởng thức cơm Tempura giòn rụm hoặc món Âu kiểu Nhật." }
        ],
        meals: "Trứng cuộn Miki Keiran chợ Nishiki, bánh rán sữa đậu nành Konnamonja, lươn nướng Nezameya",
        transit: "Tuyến JR Nara + Tàu điện ngầm / Xe buýt thành phố Kyoto",
        tips: "Đường mòn lên núi Fushimi Inari khá dài, có thể quay lại tại Yotsutsuji tùy theo thể lực để dành sức cho buổi chiều."
      },
      {
        dayNum: 4,
        dateStr: "04/10 CN",
        fullDate: "04/10/2026 (Chủ Nhật)",
        city: "Kyoto",
        cityClass: "kyoto",
        title: "Ngày 4: Sagano Arashiyama・Rừng tre & Cầu Togetsukyo",
        timeline: [
          { time: "09:00 - 10:30", title: "Tàu lượn ngắm cảnh Sagano (Đường sắt cổ Torokko)", desc: "Chạy dọc theo thung lũng sông Hozugawa, ngắm nhìn phong cảnh thanh bình của núi rừng đầu thu và dòng suối." },
          { time: "10:30 - 13:00", title: "Đường mòn rừng tre Arashiyama・Đền Nonomiya・Vườn chùa Tenryu-ji", desc: "Tản bộ dưới đường hầm trúc xanh ngát cao vút, viếng đền Nonomiya cầu duyên, tham quan hồ Sogenchi di sản thế giới chùa Tenryu-ji." },
          { time: "13:30 - 16:30", title: "Dạo quanh cầu Togetsukyo・Cà phê % Arabica・Ngâm chân ga Randen", desc: "Ngắm cảnh sông Katsura bên cầu Togetsukyo, thưởng thức cà phê % Arabica siêu nổi tiếng, ngâm chân thư giãn tại ga Randen Arashiyama." },
          { time: "18:00 - 20:30", title: "Trở về trung tâm thành phố・Bữa tối lẩu phong cách Kyoto・Sắp xếp hành lý", desc: "Thưởng thức lẩu Shabu-shabu Kyoto ấm áp, về khách sạn sắp xếp hành lý, chuẩn bị di chuyển đến Osaka vào ngày mai." }
        ],
        meals: "% Arabica Kyoto Arashiyama, Cơm lươn Hirokawa, Bánh Croquette Nakamuraya",
        transit: "Tuyến JR Sagano / Đường sắt Keifuku (Randen)",
        tips: "Khuyên bạn nên đặt vé tàu lượn trực tuyến trước 1 tháng cho các khung giờ cao điểm."
      },
      {
        dayNum: 5,
        dateStr: "05/10 T2",
        fullDate: "05/10/2026 (Thứ Hai)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 5: Văn hóa trà Uji ➔ Di chuyển đến Osaka・Đêm Dotonbori",
        timeline: [
          { time: "09:30 - 12:30", title: "Phượng Hoàng Đường chùa Byodo-in ở Uji・Dạo bước phong cách cổ quanh Đền Uji", desc: "Sau khi trả phòng, đến Uji tham quan Phượng Hoàng Đường quốc bảo ngàn năm in trên đồng 10 Yên và ngắm cảnh sông Uji." },
          { time: "12:30 - 14:30", title: "Nakamura Tokichi chi nhánh Byodo-in Thưởng thức bữa trưa và tráng miệng Matcha hảo hạng", desc: "Thưởng thức thạch trà xanh Uji Matcha tươi trứ danh, set mì Soba Matcha và Parfait Matcha đặc biệt." },
          { time: "15:00 - 16:30", title: "Di chuyển đến Osaka・Nhận phòng khách sạn Osaka", desc: "Đi tàu điện Keihan hoặc JR đến Osaka, nhận phòng khách sạn khu thương mại Namba/Shinsaibashi (Lưu trú liên tục 5 đêm)." },
          { time: "17:30 - 21:30", title: "Shinsaibashi・Cảnh đêm biển hiệu neon Dotonbori・Chụp ảnh cùng Glico Running Man", desc: "Hòa mình vào khu mua sắm sầm uất và nhộn nhịp nhất Osaka, thưởng thức bánh xèo Okonomiyaki và bánh bạch tuộc Takoyaki nướng tại chỗ." }
        ],
        meals: "Matcha Nakamura Tokichi, Bánh xèo Mizuno Okonomiyaki, Bánh bạch tuộc Juhachiban, Xiên que chiên Kushikatsu Daruma nguyên bản",
        transit: "Tuyến JR Nara + Tuyến chính Keihan / Tuyến tàu điện ngầm Osaka Midosuji",
        tips: "Vào ngày di chuyển giữa các thành phố, bạn có thể tận dụng tủ khóa ga hoặc dịch vụ gửi hành lý trực tiếp của khách sạn để được thảnh thơi nhẹ nhàng."
      },
      {
        dayNum: 6,
        dateStr: "06/10 T3",
        fullDate: "06/10/2026 (Thứ Ba)",
        city: "USJ",
        cityClass: "usj",
        title: "Ngày 6: Vui chơi trọn ngày tại Universal Studios Japan (USJ) 🌟",
        timeline: [
          { time: "07:00 - 08:00", title: "Khởi hành đến sớm xếp hàng trước cổng USJ", desc: "Universal Studios thường mở cửa sớm 30-45 phút so với giờ niêm yết, hãy đến sớm để giành đợt vào cổng đầu tiên." },
          { time: "08:30 - 12:00", title: "Super Nintendo World (Mario Kart, Khu vực Donkey Kong mới)", desc: "Đeo Vòng tay Năng lượng đập gạch lấy xu, thử thách Đua xe Lâu đài Bowser và Tàu lượn mỏ cuồng nhiệt Donkey Kong mở rộng hoàn toàn mới!" },
          { time: "12:30 - 14:00", title: "Bữa trưa tinh tế chủ đề Nấm tại Kinopio's Cafe", desc: "Thưởng thức Bát Pizza Siêu Nấm, Cơm Ngôi Sao Vô Địch, Tráng miệng Tiramisu Khối Gạch và chụp ảnh check-in." },
          { time: "14:00 - 17:30", title: "Thế giới phép thuật Harry Potter・Công viên Minion・The Flying Dinosaur", desc: "Uống Bia Bơ mát lạnh, trải nghiệm chuyến bay 4K Hành trình Cấm kỵ, thử thách Tàu lượn khủng long bay cực đã." },
          { time: "18:30 - 21:00", title: "Cảnh đêm Lâu đài Hogwarts xinh đẹp・Mua sắm đồ lưu niệm・Quay về", desc: "Chụp ảnh lưu niệm dưới cảnh đêm của Lâu đài Hogwarts, mua đầy đủ xô bắp rang bơ phiên bản giới hạn và quà lưu niệm." }
        ],
        meals: "Kinopio's Cafe, Bia bơ Three Broomsticks, Xô bắp rang bơ Minion",
        transit: "Tuyến JR Osaka Loop ➔ Đổi sang tuyến JR Yumesaki tại Nishikujo ➔ Ga Universal City",
        tips: "Lượng khách vào thứ Ba thường ít hơn! Nhất định phải mua trực tuyến Express Pass trước ngày vào cổng 2 tháng."
      },
      {
        dayNum: 7,
        dateStr: "07/10 T4",
        fullDate: "07/10/2026 (Thứ Tư)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 7: Lâu đài Osaka・Khu Shinsekai・Cảnh đêm Umeda",
        timeline: [
          { time: "09:30 - 12:00", title: "Công viên Lâu đài Osaka・Lên Tháp Tenshukaku ngắm toàn cảnh thành phố", desc: "Lên Tháp Tenshukaku thưởng ngoạn toàn cảnh thành phố Osaka hùng vĩ, tham quan triển lãm hiện vật lịch sử thời Chiến Quốc và Toyotomi Hideyoshi." },
          { time: "12:30 - 15:30", title: "Khu thương mại Shinsekai・Trải nghiệm Cầu trượt Tsutenkaku・Ăn xiên que chiên Kushikatsu nguyên bản", desc: "Trải nghiệm phong cách hoài cổ thời kỳ Showa đậm đà, chơi cầu trượt Tower Slider, thưởng thức xiên que chiên Kushikatsu giòn thơm nguyên bản." },
          { time: "16:30 - 18:30", title: "Mua sắm tại khu thương mại lớn Umeda (Grand Front / Bách hóa Hankyu)", desc: "Tận hưởng trung tâm mua sắm cốt lõi lớn nhất Kansai, mua quà lưu niệm tinh tế và các sản phẩm phong cách sống Nhật Bản." },
          { time: "18:30 - 21:00", title: "Vườn treo Tòa nhà Umeda Sky・Thưởng thức cảnh đêm triệu đô 360 độ", desc: "Lên đài quan sát ngoài trời, thu trọn đường chân trời phồn hoa của Osaka vào tầm mắt, ăn tối tại nhà hàng Okonomiyaki danh tiếng." }
        ],
        meals: "Xiên que chiên Yaekatsu / Xiên que chiên Kushikatsu Daruma nguyên bản, Bánh xèo Kiji Okonomiyaki (Chi nhánh Umeda Sky)",
        transit: "Vé một ngày Tàu điện ngầm Osaka Metro",
        tips: "Thời điểm Vườn treo đẹp nhất là từ lúc hoàng hôn đến cảnh đêm, khuyên bạn nên lên đỉnh sớm để giữ chỗ."
      },
      {
        dayNum: 8,
        dateStr: "08/10 T5",
        fullDate: "08/10/2026 (Thứ Năm)",
        city: "Ngoại ô Nara",
        cityClass: "osaka",
        title: "Ngày 8: Dạo chơi cố đô Nara・Đại Phật Todai-ji & Chơi đùa với hươu",
        timeline: [
          { time: "09:00 - 10:00", title: "Đi tàu Kintetsu Rapid Express (Osaka Namba ➔ Kintetsu Nara)", desc: "Khoảng 35~40 phút đi thẳng đến Nara, ra khỏi ga đi bộ là đến ngay phố mua sắm và Công viên Nara." },
          { time: "10:00 - 12:30", title: "Cho hươu ăn tại Công viên Nara・Công trình kiến trúc gỗ lớn nhất thế giới 'Chùa Todai-ji'", desc: "Mua bánh quy hươu (Shika Senbei) và tương tác chụp ảnh với những chú hươu thân thiện, chiêm ngưỡng Điện Đại Phật Rushana hùng vĩ, chấn động." },
          { time: "13:00 - 14:30", title: "Ăn trưa ở phố cổ Naramachi・Mochi giã tay Nakatanidou", desc: "Thưởng thức cơm niêu Kamameshi Shizuka 7 vị, xem Nakatanidou giã bánh Mochi tốc độ cao và nếm thử bánh Mochi ngải cứu làm tại chỗ." },
          { time: "14:30 - 16:30", title: "Đền Kasuga Taisha・Tản bộ rừng tuyết tùng cổ Vườn Bách thảo Manyo", desc: "Tản bộ giữa rừng tuyết tùng cổ thụ xanh tươi và 3.000 chiếc đèn lồng đá, cảm nhận bầu không khí thanh tịnh của cố đô." },
          { time: "18:00 - 20:30", title: "Trở về Osaka Namba・Bữa tiệc thịt nướng bò Quốc sản cao cấp", desc: "Tự thưởng cho bản thân sau một ngày dài đi bộ bằng cách tận hưởng buffet thịt nướng chất lượng cao tan chảy trong miệng với nhiều vân mỡ." }
        ],
        meals: "Cơm niêu Shizuka Kamameshi, Bánh Mochi giã tay Nakatanidou, Buffet Thịt nướng bò Quốc sản Namba (Aburiya)",
        transit: "Vé một chiều tàu điện Kintetsu / Vé một ngày Nara - Ikaruga",
        tips: "Khi cho hươu ăn, vui lòng chia nhỏ bánh quy trên tay, chú ý túi giấy và balo mang theo để tránh bị hươu cắn."
      },
      {
        dayNum: 9,
        dateStr: "09/10 T6",
        fullDate: "09/10/2026 (Thứ Sáu)",
        city: "Osaka",
        cityClass: "osaka",
        title: "Ngày 9: Thủy cung/Nakazakicho・Chợ Kuromon・Mua sắm phố Orange",
        timeline: [
          { time: "09:30 - 12:30", title: "Thủy cung Osaka Kaiyukan (Cá mập voi) hoặc Phố cà phê hoài cổ Nakazakicho", desc: "Khám phá thủy cung đẳng cấp thế giới ngắm nhìn cá mập voi khổng lồ, hoặc tản bộ Nakazakicho thưởng thức cà phê pha tay và cửa hàng đồ chọn lọc." },
          { time: "12:30 - 15:00", title: "Bữa trưa hải sản tươi sống chợ Kuromon & Đền Namba Yasaka", desc: "Thưởng thức cá ngừ vây xanh, nhím biển và bò Wagyu nướng, viếng thăm sân khấu hình đầu sư tử khổng lồ cầu may mắn." },
          { time: "15:30 - 18:30", title: "Tản bộ ngắm đồ thời trang phố Orange Street Minami Horie", desc: "Khu trung tâm xu hướng thời trang tập trung Supreme, BAPE, cửa hàng quần áo secondhand và các sản phẩm phong cách retro kiểu Mỹ." },
          { time: "19:00 - 22:00", title: "Bổ sung hàng chót tại Don Quijote/Daikoku・Đóng gói hành lý", desc: "Thực hiện đợt mua sắm mỹ phẩm miễn thuế và đồ ăn vặt cuối cùng, về khách sạn cân và sắp xếp đầy ắp chiến lợi phẩm của 10 ngày." }
        ],
        meals: "Hải sản Kuromon Sanpei, Bánh crepe trái cây ngàn lớp HARBS, Mì Ramen Ichiran",
        transit: "Tuyến Tàu điện ngầm Osaka Metro Midosuji / Tuyến Chuo",
        tips: "Túi niêm phong hàng miễn thuế không được mở trong nước. Hàng hóa dạng lỏng bắt buộc phải để trong hành lý ký gửi."
      },
      {
        dayNum: 10,
        dateStr: "10/10 T7",
        fullDate: "10/10/2026 (Thứ Bảy)",
        city: "Về ĐL",
        cityClass: "osaka",
        title: "Ngày 10: Đầy ắp kỷ niệm・Xuất cảnh tại Sân bay Kansai về Đài Loan",
        timeline: [
          { time: "09:30 - 10:30", title: "Trả phòng khách sạn・Đến Ga Nankai Namba", desc: "Thong thả thưởng thức bữa sáng rồi trả phòng, đi bộ đến Ga Nankai Namba đón tàu tốc hành Rapi:t." },
          { time: "10:30 - 11:15", title: "Đi tàu Nankai Electric Railway tốc hành Rapi:t chạy thẳng đến Sân bay Kansai", desc: "Khoảng 38 phút đi thẳng đến Nhà ga số 1 (T1) Sân bay Quốc tế Kansai, toa xe thoải mái và có giá để hành lý." },
          { time: "11:30 - 13:30", title: "Check-in ký gửi tại quầy China Airlines・Mua sắm cuối cùng tại cửa hàng miễn thuế sân bay", desc: "Hoàn tất ký gửi hành lý 2.5 giờ trước khi cất cánh, mua quà lưu niệm như Shiroi Koibito, Socola tươi Royce." },
          { time: "14:00 - 16:00", title: "Đón chuyến bay China Airlines CI153 cất cánh (A350)・Hạ cánh an toàn tại TPE T2", desc: "Về đến Đài Loan an toàn, kết thúc chuyến du lịch mùa thu Kansai 10 ngày tuyệt vời và khó quên!" }
        ],
        meals: "Khu ẩm thực xuất cảnh sân bay Kansai, Mì Ramen Kamukura, Bánh kẹo quà lưu niệm giới hạn tại sân bay",
        transit: "Tàu tốc hành Nankai Rapi:t ghế đặt trước",
        tips: "Chuyến bay CI153 của China Airlines theo lịch trình cất cánh lúc 14:00, bắt buộc phải có mặt tại cửa lên máy bay trước 13:20."
      }
    ],
    printDoc: {
      title: "TRAVEL ITINERARY / LỊCH TRÌNH DU LỊCH",
      subtitle: "Japan Kansai Trip (Kyoto & Osaka 10 Days 9 Nights)",
      infoNameLabel: "Hành khách (Traveler):",
      infoNameVal: "Chuang Shih-hsien & Partner",
      infoDateLabel: "Ngày đi (Dates):",
      infoDateVal: "01/10/2026 – 10/10/2026 (10 Days 9 Nights)",
      infoFlightLabel: "Chuyến bay (Flights):",
      infoFlightVal: "Out: CI156 (01/10 08:15 TPE ➔ 12:00 KIX) | In: CI153 (10/10 14:00 KIX ➔ 16:00 TPE)",
      infoPurposeLabel: "Mục đích (Purpose):",
      infoPurposeVal: "Du lịch (Sightseeing / Tourism)",
      colDate: "Ngày (Date)",
      colCity: "Khu vực (Area)",
      colPlan: "Lịch trình & Hoạt động (Planned Schedule & Activities)",
      colHotel: "Chỗ ở (Accommodation)",
      printRows: [
        { date: "01/10 (Thu)", city: "Osaka (KIX) ➔ Kyoto", plan: "Flight CI156 (08:15-12:00) to KIX. Haruka Express to Kyoto. Hotel check-in. Pontocho & Kamo River evening walk.", hotel: "Kyoto Hotel\n(Shijo Karasuma / Kawaramachi Area)\nTel: +81-75-xxx-xxxx" },
        { date: "02/10 (Fri)", city: "Kyoto", plan: "Kiyomizu-dera Temple, Sannenzaka & Ninenzaka, Yasaka Shrine, Gion & Hanamikoji street, Shirakawa night view.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "03/10 (Sat)", city: "Kyoto", plan: "Fushimi Inari Taisha (Thousand Torii gates), Nishiki Market food tour, Kinkaku-ji (Golden Pavilion), ShinPuhKan.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "04/10 (Sun)", city: "Kyoto (Arashiyama)", plan: "Sagano Romantic Train, Arashiyama Bamboo Grove, Tenryu-ji Temple, Togetsukyo Bridge, % Arabica Cafe.", hotel: "Kyoto Hotel\n(Same as above)" },
        { date: "05/10 (Mon)", city: "Kyoto ➔ Osaka", plan: "Uji sightseeing (Byodo-in Temple, Matcha). Transfer to Osaka hotel check-in. Dotonbori & Shinsaibashi.", hotel: "Osaka Hotel\n(Namba / Shinsaibashi / Umeda Area)\nTel: +81-6-xxx-xxxx" },
        { date: "06/10 (Tue)", city: "Osaka (USJ)", plan: "Universal Studios Japan (USJ) full-day visit (Super Nintendo World, Donkey Kong, Harry Potter, Jurassic Park).", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "07/10 (Wed)", city: "Osaka", plan: "Osaka Castle Park & Main Keep, Shinsekai & Tsutenkaku Tower Slider, Umeda Sky Building Observatory night view.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "08/10 (Thu)", city: "Nara (Day trip)", plan: "Day trip to Nara: Nara Deer Park, Todai-ji Temple (Great Buddha), Kasuga Taisha Shrine. Return to Osaka for Yakiniku.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "09/10 (Fri)", city: "Osaka", plan: "Osaka Aquarium Kaiyukan / Nakazakicho retro cafes, Kuromon Market, Orange Street shopping, packing luggage.", hotel: "Osaka Hotel\n(Same as above)" },
        { date: "10/10 (Sat)", city: "Osaka ➔ TPE", plan: "Hotel check-out. Nankai Rapi:t Express to KIX. Flight CI153 (14:00-16:00) return to Taiwan (TPE).", hotel: "Departure Flight CI153\n(Return to Taiwan)" }
      ],
      footerNote: "* Lịch trình này được chuẩn bị cho mục đích xin visa, qua cổng hải quan và lên kế hoạch cá nhân. Thông tin chuyến bay và khách sạn có thể thay đổi theo xác nhận đặt chỗ thực tế."
    }
  }
};
