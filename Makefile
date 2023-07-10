deploy:
	git branch -D gh-pages
	git checkout -b gh-pages
	npm run build
	git add -f dist && git commit -m "Deploy"
	git subtree push --prefix dist origin gh-pages
	git checkout main
