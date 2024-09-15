deploy:
	git branch -D gh-pages
	git checkout -b gh-pages
	npm run build
	git add -f dist && git commit -m "Deploy"
	git subtree push --prefix dist origin gh-pages
	git checkout main

clear:
	sudo chmod 777 -R .nuxt
	rm -r .nuxt
	sudo chmod 777 -R node_modules
	rm -r node_modules
	npm install

clear-cache:
	sudo chmod 777 -R .nuxt
	rm -r .nuxt

