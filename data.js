const i18nData = {
  zh: {
    ui: {
      badge: "🍁 2026 秋季關西・京都大阪・樂園漫遊",
      title: "京都・大阪 11 天 10 夜行程規劃",
      subtitle: "2026/09/29 ～ 2026/10/09 ｜ 中華航空 CI152 / CI153",
      tab1: "📅 每日行程",
      tab2: "✈️ 航班住宿",
      print: "🖨️ 列印 A4"
    },
    days: [
      {
        num: 1, date: "9/29 二",
        header: "Day 1：啟程抵達關西・直奔京都",
        events: [
          { time: "09:00 - 12:50", title: "搭乘華航 CI152", desc: "桃園 T2 飛往 關西 T1。抵達後領取 Haruka 車票。" },
          { time: "14:14 - 15:35", title: "Haruka 直達京都", desc: "搭乘特急列車直達京都車站。" },
          { time: "16:00 - 17:30", title: "京都飯店 Check-in", desc: "入住四條烏丸/河原町周邊飯店。" },
          { time: "18:00 - 21:00", title: "鴨川與先斗町晚餐", desc: "漫步鴨川，享用道地燒肉或居酒屋。" }
        ]
      },
      {
        num: 2, date: "9/30 三",
        header: "Day 2：經典洛東・清水寺與祇園",
        events: [
          { time: "08:30 - 11:30", title: "清水寺", desc: "參觀清水舞台與音羽之瀑。" },
          { time: "11:30 - 14:00", title: "二年坂・三年坂", desc: "石板街漫步與享用午餐。" },
          { time: "14:30 - 18:00", title: "八坂神社與花見小路", desc: "探尋傳統藝伎茶屋文化。" }
        ]
      },
      {
        num: 7, date: "10/5 一",
        header: "Day 7：日本環球影城 (USJ) 全日暢遊",
        events: [
          { time: "07:30 - 08:30", title: "抵達 USJ", desc: "提早排隊入園，開啟 App 領取整理券。" },
          { time: "08:30 - 12:00", title: "超級任天堂世界", desc: "瑪利歐賽車與咚奇剛新園區。" },
          { time: "13:00 - 18:00", title: "哈利波特與飛天翼龍", desc: "刺激遊樂設施體驗。" }
        ]
      }
      // 可依此格式接續補齊 Day 3 ~ Day 11
    ]
  },
  vi: {
    ui: {
      badge: "🍁 Du lịch mùa thu Kansai 2026",
      title: "Lịch trình Kyoto - Osaka 11 ngày 10 đêm",
      subtitle: "29/09/2026 ～ 09/10/2026 ｜ Chuyến bay China Airlines",
      tab1: "📅 Lịch trình",
      tab2: "✈️ Chuyến bay & Khách sạn",
      print: "🖨️ In bản A4"
    },
    days: [
      {
        num: 1, date: "29/9 T3",
        header: "Ngày 1: Đến Kansai・Đi thẳng đến Kyoto",
        events: [
          { time: "09:00 - 12:50", title: "Chuyến bay CI152", desc: "Khởi hành từ Đào Viên (Đài Loan) đến sân bay Kansai." },
          { time: "14:14 - 15:35", title: "Tàu tốc hành Haruka", desc: "Đi tàu thẳng đến ga Kyoto." },
          { time: "16:00 - 17:30", title: "Nhận phòng khách sạn", desc: "Nhận phòng tại khu vực Shijo Karasuma." },
          { time: "18:00 - 21:00", title: "Ăn tối tại Pontocho", desc: "Đi dạo bờ sông Kamogawa và ăn tối." }
        ]
      },
      {
        num: 2, date: "30/9 T4",
        header: "Ngày 2: Đền Kiyomizu-dera & Gion",
        events: [
          { time: "08:30 - 11:30", title: "Chùa Thanh Thuỷ", desc: "Tham quan kiến trúc gỗ nổi tiếng." },
          { time: "11:30 - 14:00", title: "Đường Ninenzaka", desc: "Dạo phố cổ và ăn trưa." },
          { time: "14:30 - 18:00", title: "Đền Yasaka & Gion", desc: "Khám phá khu phố Geisha truyền thống." }
        ]
      },
      {
        num: 7, date: "5/10 T2",
        header: "Ngày 7: Universal Studios Nhật Bản (USJ)",
        events: [
          { time: "07:30 - 08:30", title: "Đến USJ", desc: "Đến sớm xếp hàng và lấy vé điện tử qua App." },
          { time: "08:30 - 12:00", title: "Super Nintendo World", desc: "Khu vui chơi Mario và Donkey Kong." },
          { time: "13:00 - 18:00", title: "Harry Potter", desc: "Trải nghiệm các trò chơi cảm giác mạnh." }
        ]
      }
      // 可依此格式接續補齊 Day 3 ~ Day 11
    ]
  }
};
