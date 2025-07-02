<%*

const moment = window.moment;
//const moment = app.plugins.plugins["templater-obsidian"].moment;
const dv = app.plugins.plugins["dataview"].api;

if (!dv) {
  new Notice("Dataview 插件未启用！");
  return;
}

// 获取本周起始日期（周一）
//const today = tp.date.now("YYYY-MM-DD");
const today = moment();
const weekday = today.isoWeekday(); // 1 = 周一，7 = 周日
const monday = today.clone().subtract(weekday - 1, 'days');

let highlights = [];

for (let i = 0; i < weekday; i++) {
  const date = monday.clone().add(i, 'days').format("YYYY-MM-DD");
  const file = app.vault.getAbstractFileByPath(`ThinkBetter/DailyNotes/${date}.md`);
  if (!file) {
	  console.log(`未找到文件: DailyNotes/${date}.md`);
	  continue;
	}

  const content = await app.vault.read(file);
  const lines = content.split("\n");

  const matchedLines = lines.filter(line =>
    line.match(/==.*?==/) || line.match(/\[\[.*?\]\]/)
  );

  if (matchedLines.length > 0) {
    highlights.push(`### 📄 ${date}`);
    matchedLines.forEach(line => highlights.push("- " + line));
  }
}

if (highlights.length === 0) {
  new Notice("本周暂无高亮内容。");
  tR += "⚠️ 本周内无高亮标注或链接。";
} else {
  tR += `## 🧠 本周高亮标注与链接汇总\n\n${highlights.join("\n")}`;
}
%>
