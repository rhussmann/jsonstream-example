var JSONStream = require('JSONStream');
var stream = require('stream');

function convertArticleToMarkdown(article) {
  return {
    byLine: "### " + article.author + " - " + article.title,
    linkLine: "[Link](" + article.url + ")"
  };
}

process.stdin
  .pipe(JSONStream.parse("*"))
  .pipe(process.stdout);
