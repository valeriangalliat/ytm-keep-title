VERSION := $(shell sed -n 's/.*"version": "\(.*\)".*/\1/p' manifest.json)

zip:
	mkdir -p dist && rm -f dist/ytm-keep-title-$(VERSION).zip
	zip -q dist/ytm-keep-title-$(VERSION).zip manifest.json content.js
