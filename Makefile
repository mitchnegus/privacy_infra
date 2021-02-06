CHROME_PATH=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
SLIDES_PDF_NAME=enigma2021.pdf

.PHONY : slides
slides :
	decktape generic \
		--screenshots \
		--chrome-path $(CHROME_PATH) \
       		--pause 2000 \
		http://0.0.0.0:8000 $(SLIDES_PDF_NAME)

