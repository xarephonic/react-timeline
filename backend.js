const express = require('express');
const app = express();

const articleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus vestibulum mauris, id congue velit dictum eget. Maecenas scelerisque purus lacus, nec aliquam diam pharetra sit amet. Pellentesque luctus nisi ac tincidunt malesuada. Maecenas et magna vitae odio sollicitudin volutpat. Etiam ullamcorper, nisl nec sollicitudin faucibus, erat massa porta magna, sodales interdum orci nisi et risus. In rutrum enim quis eleifend tristique. Pellentesque at tortor nec est finibus molestie quis quis elit. Maecenas euismod consectetur dolor id tempus. Vivamus ac elementum mauris. Vivamus ullamcorper mollis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
const articlePreviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus vestibulum mauris, id congue velit dictum eget. Maecenas scelerisque purus lacus, nec aliquam diam pharetra sit amet. Pellentesque luctus nisi ac tincidunt malesuada. Maecenas et magna vitae odio...";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/article/:id', (req, res) => {
	let data = {
		id: req.params.id,
		text: articleText,
        title: "Article Title"
	}
	res.send(data);
});

app.get('/getArticlePreviews', (req, res) => {
	let data = {
		articles: [
			{
				id: 0,
				text: articlePreviewText,
				title: "Article Title"
			},
			{
				id: 1,
				text: articlePreviewText,
				title: "Article Title"
			},
			{
				id: 2,
				text: articlePreviewText,
				title: "Article Title"
			},
			{
				id: 3,
				text: articlePreviewText,
				title: "Article Title"
			}
		]
	}
	res.send(data);
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))