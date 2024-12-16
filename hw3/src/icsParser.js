import ICAL from "ical.js";

export const parseICS = (icsData) => {
  try {
    // 使用 ICAL 解析 icsData
    const jcalData = ICAL.parse(icsData); // 將 .ics 轉換為 jCal 格式
    const comp = new ICAL.Component(jcalData);
    const events = comp.getAllSubcomponents("vevent"); // 獲取所有事件

    // 將事件格式化為陣列
    return events.map((event) => {
      const vevent = new ICAL.Event(event); // 使用 ICAL 的 Event 類
      return {
        summary: vevent.summary, // 事件標題
        start: vevent.startDate.toJSDate(), // 開始時間 (轉換為 JavaScript Date 格式)
        end: vevent.endDate.toJSDate(), // 結束時間
        description: vevent.description, // 描述 (如果有)
        location: vevent.location, // 地點 (如果有)
      };
    });
  } catch (error) {
    console.error("Failed to parse .ics data:", error);
    return [];
  }
};
