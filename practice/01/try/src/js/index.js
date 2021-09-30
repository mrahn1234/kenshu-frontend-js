let result = {};
Object.assign(
  result,
  {
    company_id: 1234,
    company_name: "会社名",
  },
  {},
  {
    article_id: 9876,
    article_title: "タイトル",
  }
);

console.log(result);