// 年月日の取得
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

// 年月日の取得
console.log(year + '年' + month + '月' + day + '日');