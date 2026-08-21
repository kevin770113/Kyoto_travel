const i18nData = {
  zh: {
    ui: {
      badge: "🍁 2026 秋季關西・京都大阪・樂園漫遊",
      title: "京都・大阪 11 天 10 夜行程規劃",
      subtitle: "2026/09/29 ～ 2026/10/09 ｜ 中華航空 CI152 / CI153",
      tab1: "📅 每日詳細行程",
      tab2: "✈️ 航班住宿狀態",
      print: "🖨️ 列印 A4 申請表"
    },
    days: [
      {
        num: 1, date: "9/29 二",
        header: "Day 1：啟程抵達關西・直奔京都夜景",
        events: [
          { time: "09:00 - 12:50", title: "搭乘華航 CI152（桃園 T2 ➔ 關西 T1）", desc: "享受機上餐點與影音，12:50 抵達關西機場後辦理入境、提領行李並領取關空特急 Haruka 電子票。" },
          { time: "14:14 - 15:35", title: "搭乘關空特急 Haruka 直達京都站", desc: "約 75~80 分鐘直達京都，車廂舒適且設有專用大型行李架。" },
          { time: "16:00 - 17:30", title: "京都飯店 Check-in 卸下行李", desc: "建議入住四條烏丸／河原町周邊，地理位置便利，生活機能極佳。" },
          { time: "18:00 - 21:00", title: "四條河原町・先斗町石板街・鴨川漫步與晚餐", desc: "漫步於先斗町古樸石板巷弄，感受鴨川河畔悠閒氛圍，品嚐道地京料理或日式燒肉居酒屋。" }
        ]
      },
      {
        num: 2, date: "9/30 三",
        header: "Day 2：經典洛東巡禮・古寺石板街與祇園",
        events: [
          { time: "08:30 - 11:30", title: "清水寺・清水舞台・音羽之瀑祈泉", desc: "晨間早點出發避開旅行團人潮，參觀壯麗的木造清水舞台、仁王門，並於音羽之瀑祈求健康、學業或良緣。" },
          { time: "11:30 - 14:00", title: "產寧坂（三年坂）・二年坂漫步・古町家午餐", desc: "沿著保存完好的古町家石板坡道漫步，參觀特色茶屋與文創小店，享用道地湯豆腐或蕎麥麵定食。" },
          { time: "14:30 - 17:30", title: "八坂神社・圓山公園・花見小路（祇園）", desc: "走訪京都總鎮守八坂神社，傍晚穿梭於花見小路探尋傳統藝伎茶屋文化與古色古香的木造建築。" },
          { time: "18:00 - 20:30", title: "祇園白川夜景・精緻京料理晚餐", desc: "沿著白川南通欣賞垂柳與石板小橋流水夜景，享用精緻懷石料理或百年鰻魚飯。" }
        ]
      },
      {
        num: 3, date: "10/1 四",
        header: "Day 3：千本鳥居之美・錦市場廚房・金閣舍利殿",
        events: [
          { time: "08:00 - 10:30", title: "伏見稻荷大社（清晨千本鳥居）", desc: "搭乘 JR 奈良線清晨抵達，享受朱紅鳥居隧道在晨光中的靜謐神秘美景，漫步至四辻展望台欣賞京都市景。" },
          { time: "11:30 - 14:00", title: "錦市場「京都的廚房」深度漫步午餐", desc: "品嚐豆乳甜甜圈、章魚燒、現烤海鮮、高湯玉子燒等百年生鮮與在地小吃。" },
          { time: "14:30 - 17:00", title: "金閣寺（鹿苑寺）或 二條城庭園", desc: "欣賞金碧輝煌的舍利殿在鏡湖池中的倒影，感受世界文化遺產的宏偉與禪意庭園美景。" },
          { time: "18:00 - 20:30", title: "新風館商場文創散策・日式天婦羅晚餐", desc: "造訪由隈研吾設計的紅磚歷史建築文創商場，享用酥脆天婦羅丼或日式洋食。" }
        ]
      },
      {
        num: 4, date: "10/2 五",
        header: "Day 4：嵯峨野嵐山・竹林秘境與渡月橋畔",
        events: [
          { time: "09:00 - 10:30", title: "嵯峨野觀光小火車（Torokko 復古鐵道）", desc: "沿著保津川溪谷行駛，欣賞初秋山林峽谷清幽風光與溪流景色。" },
          { time: "10:30 - 13:00", title: "嵐山竹林小徑・野宮神社・天龍寺庭園", desc: "漫步翠綠高聳的竹林隧道，參拜祈求良緣的野宮神社，參觀世界遺產天龍寺曹源池庭園。" },
          { time: "13:30 - 16:30", title: "渡月橋散策・嵐山大街・% Arabica 咖啡・嵐電足湯", desc: "在渡月橋畔欣賞桂川風光，品嚐排隊名店 % Arabica 咖啡，最後在嵐電嵐山站享受愜意溫泉足湯。" },
          { time: "18:00 - 20:30", title: "返回京都烏丸・京風鍋物晚餐・整理行李", desc: "享用暖心京風涮涮鍋或湯葉料理，回飯店提早整理行囊，準備明日移動至大阪。" }
        ]
      },
      {
        num: 5, date: "10/3 六",
        header: "Day 5：宇治茶香文化 ➔ 移動進駐大阪・道頓堀夜景",
        events: [
          { time: "09:30 - 12:30", title: "宇治平等院鳳凰堂・宇治神社古風散策", desc: "京都飯店退房後，前往宇治參觀日幣十圓硬幣上的千年國寶鳳凰堂與宇治川風光。" },
          { time: "12:30 - 14:30", title: "中村藤吉平等院店 享用頂級抹茶午餐與甜點", desc: "品嚐招牌宇治抹茶生茶凍、抹茶蕎麥麵定食與特製抹茶聖代。" },
          { time: "15:00 - 16:30", title: "移動至大阪・大阪飯店 Check-in 卸行李", desc: "搭乘京阪電車或 JR 抵達大阪，入住難波／心齋橋商圈飯店（連續入住 6 晚）。" },
          { time: "17:30 - 21:30", title: "心齋橋・道頓堀霓虹夜景・固力果跑跑人合影", desc: "沉浸在大阪最熱鬧繁華的購物商圈，品嚐大阪燒、現烤章魚燒與美味拉麵。" }
        ]
      },
      {
        num: 6, date: "10/4 日",
        header: "Day 6：大阪城堡地標・新世界懷舊下町・梅田夜景",
        events: [
          { time: "09:30 - 12:00", title: "大阪城公園・登天守閣俯瞰市區全景", desc: "登上天守閣欣賞大阪市區壯闊全景，參觀豐臣秀吉與戰國歷史文物展示。" },
          { time: "12:30 - 15:30", title: "新世界商圈・通天閣（體驗巨型溜滑梯）・吃元祖炸串", desc: "體驗濃濃昭和懷舊感的大阪下町風情，體驗通天閣 Tower Slider 溜滑梯，品嚐香酥不膩的元祖炸串。" },
          { time: "16:30 - 18:30", title: "梅田大型商圈（Grand Front Osaka / 阪急百貨）", desc: "享受關西最大購物核心商場，採購精緻伴手禮與日系生活選物。" },
          { time: "18:30 - 21:00", title: "梅田藍天大廈空中庭園・欣賞絕美 360 度百萬夜景", desc: "登上戶外露天展望台，將大阪繁華天際線盡收眼底，晚餐品嚐道地大阪燒名店。" }
        ]
      },
      {
        num: 7, date: "10/5 一",
        header: "Day 7：日本環球影城（USJ）全日極限暢遊 🌟",
        events: [
          { time: "07:00 - 08:00", title: "出發提早抵達 USJ 門口排隊入園", desc: "環球影城常比表定時間提早 30-45 分鐘開門，提早抵達可搶第一波無等待體驗。" },
          { time: "08:30 - 12:00", title: "超級任天堂世界（瑪利歐賽車、耀西冒險、咚奇剛新園區）", desc: "佩戴能量手環敲磚塊金幣，挑戰庫巴城堡的 AR 瑪利歐賽車與全新擴建的咚奇剛瘋狂礦車！" },
          { time: "12:30 - 14:00", title: "奇諾比奧咖啡店 蘑菇主題精緻午餐", desc: "品嚐超級蘑菇披薩碗、無敵星星飯、磚塊提拉米蘇甜點並打卡拍照。" },
          { time: "14:00 - 17:30", title: "哈利波特魔法世界・小小兵樂園・飛天翼龍", desc: "喝冰涼奶油啤酒、體驗禁忌之旅 4K 沉浸式飛行，挑戰侏儸紀公園驚險刺激的飛天翼龍。" },
          { time: "18:30 - 21:00", title: "霍格華茲城堡夜間燈光・周邊大採購・返程晚餐", desc: "在霍格華茲城堡夜景下合影，買齊限定爆米花桶與周邊紀念品。" }
        ]
      },
      {
        num: 8, date: "10/6 二",
        header: "Day 8：海遊館療癒鯨鯊・黑門市場生鮮・難波八阪巨獅",
        events: [
          { time: "09:30 - 12:00", title: "大阪海遊館（Kaiyukan）＆ 天保山大摩天輪", desc: "世界規模最大水族館之一，沿著螺旋迴廊近距離觀賞巨大鯨鯊、魟魚與企鵝餵食秀。" },
          { time: "12:30 - 14:30", title: "黑門市場生猛海鮮午餐大快朵頤", desc: "現剖海膽、黑鮪魚大腹握壽司、A5 和牛現烤串燒與新鮮烤生蠔。" },
          { time: "15:00 - 17:00", title: "難波八阪神社（巨型獅子殿開運祈福）", desc: "造訪極具視覺震撼的巨大獅子頭舞台，象徵把厄運吸走、招來勝利好運。" },
          { time: "17:30 - 20:30", title: "千日前道具街散策・元祖老店咖哩晚餐", desc: "逛逛日本特色廚房器具與擬真食物模型，晚餐品嚐自由軒百年名物生蛋咖哩。" }
        ]
      },
      {
        num: 9, date: "10/7 三",
        header: "Day 9：古都奈良一日漫遊・東大寺大佛與親近萌鹿",
        events: [
          { time: "09:00 - 10:00", title: "搭乘近鐵快速急行（大阪難波 ➔ 近鐵奈良）", desc: "約 35~40 分鐘即可直達奈良，出站後步行即達商店街與奈良公園。" },
          { time: "10:00 - 12:30", title: "奈良公園餵鹿・世界最大木造建築「東大寺」", desc: "購買鹿仙貝與親切小鹿互動合影，瞻仰巍峨震撼的盧舍那大佛。" },
          { time: "13:00 - 14:30", title: "奈良町老街午餐・中谷堂現搗麻糬", desc: "品嚐熱騰騰志津香七轉釜飯，觀賞中谷堂高速搗麻糬表演並品嚐現做艾草麻糬。" },
          { time: "14:30 - 16:30", title: "春日大社・萬葉植物園散策", desc: "漫步於綠意古杉林與三千座石燈籠之間，感受清幽古都氛圍。" },
          { time: "18:00 - 20:30", title: "返回大阪難波・頂級國產牛燒肉大餐", desc: "犒賞一整天充實的步行，享受油脂豐富入口即化的高品質燒肉吃到飽。" }
        ]
      },
      {
        num: 10, date: "10/8 四",
        header: "Day 10：中崎町文青老屋・梅田百貨・橘子街潮流掃貨",
        events: [
          { time: "10:00 - 12:30", title: "中崎町（Nakazakicho）昭和老屋文青咖啡街", desc: "穿梭在二戰倖存的昭和長屋巷弄，探訪特色雜貨、手作選物店與精品手沖咖啡。" },
          { time: "12:30 - 15:30", title: "梅田大型商圈購物（LUCUA / 阪急百貨）", desc: "享受關西最大購物中心，採購精緻伴手禮、日系服飾與保養品。" },
          { time: "16:00 - 19:00", title: "南堀江橘子街（Orange Street）潮流服飾散策", desc: "匯集 Supreme、BAPE、古著店與美式復古傢俱的時尚核心地帶。" },
          { time: "19:30 - 22:00", title: "大國藥妝/唐吉訶德最後補貨・行李打包整理", desc: "進行免稅藥妝與零食最後採購，回飯店秤重並整理 11 天滿滿的戰利品。" }
        ]
      },
      {
        num: 11, date: "10/9 五",
        header: "Day 11：滿載回憶・關西機場出境順利返台",
        events: [
          { time: "09:30 - 10:30", title: "飯店退房・前往南海難波站", desc: "悠閒享用早餐後退房，步行前往難波站搭乘南海電鐵特急 Rapi:t。" },
          { time: "10:30 - 11:15", title: "搭乘南海電鐵特急 Rapi:t 直達關西機場", desc: "約 38 分鐘直達關西國際機場第一航廈（T1）。" },
          { time: "11:30 - 13:30", title: "華航櫃台報到託運・機場免稅店最後採買", desc: "起飛前 2.5 小時完成行李託運，採購白色戀人、Royce 生巧克力、東京芭娜娜等伴手禮。" },
          { time: "14:00 - 16:00", title: "搭乘華航 CI153 起飛・平安降落桃園機場 T2", desc: "平安抵達台灣，結束 11 天精彩難忘的關西秋日之旅！" }
        ]
      }
    ]
  },
  vi: {
    ui: {
      badge: "🍁 Du lịch mùa thu Kansai 2026",
      title: "Lịch trình Kyoto - Osaka 11 ngày 10 đêm",
      subtitle: "29/09/2026 ～ 09/10/2026 ｜ Chuyến bay China Airlines CI152 / CI153",
      tab1: "📅 Chi tiết lịch trình",
      tab2: "✈️ Chuyến bay & Khách sạn",
      print: "🖨️ In bản A4"
    },
    days: [
      {
        num: 1, date: "29/9 T3",
        header: "Ngày 1: Đến Kansai・Đi thẳng đến Kyoto",
        events: [
          { time: "09:00 - 12:50", title: "Chuyến bay CI152 (Đào Viên T2 ➔ Kansai T1)", desc: "Khởi hành đến sân bay Kansai, làm thủ tục nhập cảnh, lấy hành lý và đổi vé tàu tốc hành Haruka." },
          { time: "14:14 - 15:35", title: "Tàu tốc hành Haruka đến Kyoto", desc: "Đi tàu thẳng đến ga Kyoto (khoảng 75-80 phút), trên tàu có chỗ để hành lý rộng rãi." },
          { time: "16:00 - 17:30", title: "Nhận phòng khách sạn tại Kyoto", desc: "Khuyên dùng khách sạn quanh khu vực Shijo Karasuma hoặc Kawaramachi, rất thuận tiện đi lại." },
          { time: "18:00 - 21:00", title: "Dạo bờ sông Kamogawa・Ăn tối tại Pontocho", desc: "Đi dạo dọc con hẻm đá Pontocho truyền thống, thưởng thức đồ nướng Yakiniku hoặc quán nhậu Izakaya." }
        ]
      },
      {
        num: 2, date: "30/9 T4",
        header: "Ngày 2: Đền Kiyomizu-dera & Phố cổ Gion",
        events: [
          { time: "08:30 - 11:30", title: "Chùa Thanh Thuỷ (Kiyomizu-dera)", desc: "Xuất phát sớm để tránh đông người. Tham quan kiến trúc gỗ nổi tiếng và uống nước tại thác Otowa cầu may mắn." },
          { time: "11:30 - 14:00", title: "Đường Ninenzaka・Sannenzaka & Ăn trưa", desc: "Dạo bước trên con dốc lát đá với nhiều ngôi nhà cổ, cửa hàng lưu niệm. Thưởng thức đậu hũ luộc truyền thống." },
          { time: "14:30 - 17:30", title: "Đền Yasaka・Công viên Maruyama・Phố Hanamikoji", desc: "Tham quan đền Yasaka và khám phá khu phố Geisha truyền thống Hanamikoji ở Gion." },
          { time: "18:00 - 20:30", title: "Cảnh đêm Shirakawa・Ăn tối Kaiseki", desc: "Ngắm cảnh đêm ven suối Shirakawa và thưởng thức ẩm thực Kaiseki hoặc cơm lươn nướng." }
        ]
      },
      {
        num: 3, date: "1/10 T5",
        header: "Ngày 3: Ngàn cổng Torii・Chợ Nishiki・Chùa Kinkakuji",
        events: [
          { time: "08:00 - 10:30", title: "Đền Fushimi Inari Taisha", desc: "Đi tàu JR tuyến Nara đến sớm để ngắm hàng ngàn cổng Torii màu đỏ tuyệt đẹp dưới ánh nắng ban mai." },
          { time: "11:30 - 14:00", title: "Chợ Nishiki - 'Nhà bếp của Kyoto'", desc: "Thưởng thức hải sản nướng, bánh bạch tuộc Takoyaki, bánh rán sữa đậu nành và nhiều món ăn vặt hấp dẫn." },
          { time: "14:30 - 17:00", title: "Chùa Gác Vàng Kinkakuji hoặc Lâu đài Nijo", desc: "Chiêm ngưỡng ngôi chùa dát vàng lấp lánh soi bóng xuống mặt hồ, một di sản văn hóa thế giới." },
          { time: "18:00 - 20:30", title: "Khu phức hợp Shinpuhkan・Ăn tối Tempura", desc: "Tham quan khu mua sắm với kiến trúc gạch đỏ kết hợp hiện đại, thưởng thức cơm Tempura giòn rụm." }
        ]
      },
      {
        num: 4, date: "2/10 T6",
        header: "Ngày 4: Sagano Arashiyama・Rừng trúc & Cầu Togetsukyo",
        events: [
          { time: "09:00 - 10:30", title: "Tàu ngắm cảnh Sagano (Torokko)", desc: "Đi chuyến tàu cổ điển chạy dọc theo thung lũng sông Hozu, ngắm nhìn phong cảnh thiên nhiên êm đềm." },
          { time: "10:30 - 13:00", title: "Rừng trúc Arashiyama・Đền Nonomiya・Chùa Tenryuji", desc: "Tản bộ qua con đường rừng trúc xanh mướt, viếng đền cầu duyên Nonomiya và tham quan vườn thiền Tenryuji." },
          { time: "13:30 - 16:30", title: "Cầu Togetsukyo・Cà phê % Arabica・Ngâm chân", desc: "Ngắm cảnh bên cầu Togetsukyo, uống cà phê % Arabica nổi tiếng và thư giãn ngâm chân tại ga Randen." },
          { time: "18:00 - 20:30", title: "Trở về trung tâm Kyoto・Ăn tối Lẩu・Sắp xếp hành lý", desc: "Thưởng thức lẩu Shabu-shabu ấm áp, về khách sạn thu dọn hành lý chuẩn bị di chuyển sang Osaka vào ngày mai." }
        ]
      },
      {
        num: 5, date: "3/10 T7",
        header: "Ngày 5: Văn hóa trà Uji ➔ Di chuyển đến Osaka・Cảnh đêm Dotonbori",
        events: [
          { time: "09:30 - 12:30", title: "Chùa Byodoin tại Uji", desc: "Trả phòng khách sạn, đến Uji tham quan ngôi chùa Phượng Hoàng lịch sử được in trên đồng 10 Yên." },
          { time: "12:30 - 14:30", title: "Trà quán Nakamura Tokichi", desc: "Thưởng thức bữa trưa và món tráng miệng làm từ trà xanh Matcha thượng hạng của vùng Uji." },
          { time: "15:00 - 16:30", title: "Di chuyển đến Osaka・Nhận phòng khách sạn", desc: "Đi tàu Keihan hoặc JR đến Osaka. Nhận phòng khách sạn tại khu vực Namba / Shinsaibashi (ở lại 6 đêm)." },
          { time: "17:30 - 21:30", title: "Shinsaibashi・Dotonbori・Chụp ảnh cùng Glico", desc: "Hòa mình vào khu mua sắm sầm uất nhất Osaka, ăn bánh xèo Okonomiyaki và Takoyaki." }
        ]
      },
      {
        num: 6, date: "4/10 CN",
        header: "Ngày 6: Lâu đài Osaka・Phố cổ Shinsekai・Cảnh đêm Umeda",
        events: [
          { time: "09:30 - 12:00", title: "Công viên Lâu đài Osaka", desc: "Lên tháp chính ngắm toàn cảnh thành phố Osaka và tìm hiểu lịch sử thời chiến quốc Nhật Bản." },
          { time: "12:30 - 15:30", title: "Khu Shinsekai・Tháp Tsutenkaku・Ăn xiên que chiên", desc: "Trải nghiệm không khí hoài cổ thời Showa, thử chơi cầu trượt khổng lồ và ăn món xiên chiên Kushikatsu." },
          { time: "16:30 - 18:30", title: "Khu mua sắm Umeda (Grand Front / Hankyu)", desc: "Tự do mua sắm tại khu trung tâm thương mại lớn nhất vùng Kansai." },
          { time: "18:30 - 21:00", title: "Tòa nhà Umeda Sky Building・Ngắm cảnh đêm", desc: "Lên đài quan sát ngoài trời ngắm nhìn cảnh đêm 360 độ tuyệt đẹp của Osaka, ăn tối tại nhà hàng địa phương." }
        ]
      },
      {
        num: 7, date: "5/10 T2",
        header: "Ngày 7: Vui chơi trọn ngày tại Universal Studios Nhật Bản (USJ) 🌟",
        events: [
          { time: "07:00 - 08:00", title: "Đến sớm xếp hàng trước cổng USJ", desc: "Công viên thường mở cửa sớm hơn 30-45 phút so với lịch trình, đến sớm sẽ chơi được nhiều trò không phải đợi lâu." },
          { time: "08:30 - 12:00", title: "Super Nintendo World (Mario Kart, Donkey Kong)", desc: "Đeo vòng tay đập gạch ăn xu vàng, trải nghiệm đua xe Mario Kart AR và khu mỏ Donkey Kong mới mở!" },
          { time: "12:30 - 14:00", title: "Ăn trưa tại Quán cà phê Kinopio", desc: "Thưởng thức các món ăn trang trí theo chủ đề nấm Super Mario cực kỳ dễ thương." },
          { time: "14:00 - 17:30", title: "Thế giới Harry Potter・Minions・Tàu lượn The Flying Dinosaur", desc: "Uống bia bơ, bay cùng chổi thần 4K và thử thách tàu lượn siêu tốc bay trên không đầy kịch tính." },
          { time: "18:30 - 21:00", title: "Cảnh đêm lâu đài Hogwarts・Mua sắm lưu niệm", desc: "Chụp ảnh trước lâu đài Hogwarts lung linh về đêm, mua thùng bắp rang bơ phiên bản giới hạn." }
        ]
      },
      {
        num: 8, date: "6/10 T3",
        header: "Ngày 8: Thủy cung Kaiyukan・Hải sản chợ Kuromon・Đền Namba Yasaka",
        events: [
          { time: "09:30 - 12:00", title: "Thủy cung Osaka Kaiyukan & Vòng đu quay Tempozan", desc: "Một trong những thủy cung lớn nhất thế giới, ngắm nhìn cá nhám voi khổng lồ và chim cánh cụt." },
          { time: "12:30 - 14:30", title: "Chợ Kuromon・Ăn trưa hải sản tươi sống", desc: "Thưởng thức nhím biển tươi, sushi cá ngừ béo ngậy, hàu nướng và xiên thịt bò Wagyu A5." },
          { time: "15:00 - 17:00", title: "Đền Namba Yasaka (Đầu sư tử khổng lồ)", desc: "Ghé thăm ngôi đền với kiến trúc đầu sư tử khổng lồ, mang ý nghĩa nuốt chửng xui xẻo và mang lại may mắn." },
          { time: "17:30 - 20:30", title: "Phố Sennichimae Doguyasuji・Cơm cà ri truyền thống", desc: "Dạo phố chuyên bán dụng cụ nhà bếp Nhật Bản, ăn tối với món cơm cà ri trộn trứng sống nổi tiếng của quán Jiyuken." }
        ]
      },
      {
        num: 9, date: "7/10 T4",
        header: "Ngày 9: Một ngày ở cố đô Nara・Chùa Todaiji & Chơi với hươu",
        events: [
          { time: "09:00 - 10:00", title: "Đi tàu Kintetsu (Namba ➔ Kintetsu Nara)", desc: "Di chuyển khoảng 35-40 phút là đến thẳng Nara, bước ra khỏi ga là đến ngay phố mua sắm và công viên." },
          { time: "10:00 - 12:30", title: "Công viên Nara・Chùa Todaiji (Đông Đại Tự)", desc: "Mua bánh quy cho những chú hươu thân thiện ăn, chiêm ngưỡng bức tượng Phật khổng lồ trong ngôi chùa gỗ lớn nhất thế giới." },
          { time: "13:00 - 14:30", title: "Khu Naramachi・Bánh dày Nakatanidou", desc: "Ăn trưa với món cơm nồi đất Kamameshi, xem biểu diễn giã bánh giầy tốc độ cao Nakatanidou và thưởng thức bánh mochi mới làm." },
          { time: "14:30 - 16:30", title: "Đền Kasuga Taisha・Vườn thực vật Manyo", desc: "Đi dạo dưới bóng cây cổ thụ và hàng ngàn chiếc đèn lồng đá, cảm nhận bầu không khí tĩnh lặng của cố đô." },
          { time: "18:00 - 20:30", title: "Về lại Namba・Ăn tối Buffet thịt nướng Yakiniku", desc: "Tự thưởng một bữa tiệc thịt bò nướng chất lượng cao ăn thỏa thích sau một ngày đi bộ tham quan." }
        ]
      },
      {
        num: 10, date: "8/10 T5",
        header: "Ngày 10: Phố cổ Nakazakicho・Trung tâm Umeda・Phố thời trang Orange Street",
        events: [
          { time: "10:00 - 12:30", title: "Phố cổ Nakazakicho・Quán cà phê mang phong cách Showa", desc: "Dạo quanh những con hẻm cổ kính còn sót lại sau Thế chiến II, ghé thăm các cửa hàng đồ thủ công và quán cà phê vintage." },
          { time: "12:30 - 15:30", title: "Mua sắm tại Umeda (LUCUA / Hankyu)", desc: "Thoải mái mua sắm quần áo, mỹ phẩm Nhật Bản và quà lưu niệm tinh tế." },
          { time: "16:00 - 19:00", title: "Orange Street (Minamihorie)・Phố thời trang đường phố", desc: "Khu phố tập trung các thương hiệu thời trang nổi tiếng, đồ cổ và nội thất phong cách Mỹ." },
          { time: "19:30 - 22:00", title: "Daikoku / Don Quijote・Đóng gói hành lý", desc: "Mua sắm đợt cuối các mặt hàng mỹ phẩm, thuốc và bánh kẹo miễn thuế. Về khách sạn cân và đóng gói toàn bộ hành lý." }
        ]
      },
      {
        num: 11, date: "9/10 T6",
        header: "Ngày 11: Đầy ắp kỷ niệm・Sân bay Kansai & Trở về Đài Loan",
        events: [
          { time: "09:30 - 10:30", title: "Trả phòng khách sạn・Di chuyển đến ga Namba", desc: "Ăn sáng thong thả, làm thủ tục trả phòng và đi bộ ra ga Namba để bắt tàu ra sân bay." },
          { time: "10:30 - 11:15", title: "Đi tàu tốc hành Nankai Rapi:t ra sân bay", desc: "Tàu chạy thẳng mất khoảng 38 phút là đến nhà ga số 1 (T1) của Sân bay Quốc tế Kansai." },
          { time: "11:30 - 13:30", title: "Làm thủ tục gửi hành lý・Mua quà lưu niệm tại sân bay", desc: "Làm thủ tục trước 2.5 tiếng, tranh thủ mua sắm bánh Shiroi Koibito, chocolate Royce và Tokyo Banana." },
          { time: "14:00 - 16:00", title: "Chuyến bay CI153 cất cánh・Hạ cánh an toàn tại Đào Viên", desc: "Trở về Đài Loan an toàn, kết thúc chuyến du lịch mùa thu Kansai 11 ngày đầy những kỷ niệm khó quên!" }
        ]
      }
    ]
  }
};
