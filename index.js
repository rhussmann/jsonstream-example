var JSONStream = require('JSONStream');
var stream = require('stream');

function convertArticleToMarkdown(article) {
  return {
    byLine: "### " + article.author + " - " + article.title,
    linkLine: "[Link](" + article.url + ")"
  };
}

process.stdin.pipe(JSONStream.parse("*", function(data) {
  var markdownObject = convertArticleToMarkdown(data);
  var outputData = [markdownObject.byLine, markdownObject.linkLine, "\n"];
  return outputData.join("\n");
})).pipe(process.stdout);
