.PHONY: deploy
deploy:
	rm -r docs
	npm run build
	mv dist docs
	git add docs -f
	git commit -m "adding docs"
	git push origin master:gh-pages