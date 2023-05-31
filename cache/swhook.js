/* 
 * Semantic Web Hook - A Useful Microdata Framework
 * Version - 0.5.2
 * https://swhook.com/
 * 
 * (C) Copyright, Alex Dawson, 2023
 * Released Under - MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
// Global Functions
function download(filename, encode, text) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:" + encode + ";charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function random(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
   return result;
}
(function global(){
	// Global CSS (Code, META, hRecipe & recipe)
	let css = document.createElement("style");
	css.innerHTML = "code a { display: block; } .hidden { height: 1px; left: -1000px; overflow: hidden; position: absolute; top: -1px; width: 1px; }";
	document.head.appendChild(css);
})();
// HTML5 Elements - 5.2
(function mimeHelper(){
	// <a> MIME Type Helper
	// https://www.iana.org/assignments/media-types/media-types.xhtml
	let x = document.querySelectorAll("a");
	let style = document.createElement("style");
	let i;
	for (i = 0; i < x.length; i++) {
		const archive = ["zip", "zipx", "rar", "7z"];
		const music = ["mp3", "m4a", "mp4", "aac", "flac", "ogg", "oga", "opus", "wav"];
		const video = ["mkv", "mp4", "mpg", "mpeg", "hevc", "mov", "webm", "avi", "ogv", "avif"];
		const image = ["svg", "png", "webp", "jpg", "tiff", "gif", "ico", "cur", "bmp"];
		const ebook = ["pdf", "epub", "mobi"];
		const document = ["pages", "doc", "docx", "odt", "rtf", "txt", "log", "md", "markdown", "vcard", "vcf", "ics"];
		const spreadsheet = ["numbers", "xls", "xlsx", "ods"];
		const presentation = ["key", "ppt", "pptx", "odp"];
		const typeface = ["woff", "woff2", "eot", "otf", "ttf"];
		const all = archive.concat(music).concat(video).concat(image).concat(ebook).concat(document).concat(spreadsheet).concat(presentation).concat(typeface);
		let ref = x[i].getAttribute("href").split(".").pop();
		for (const elem of archive) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "📦"; }'; } }
		for (const elem of music) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "🎵"; }'; } }
		for (const elem of video) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "🖥"; }'; } }
		for (const elem of image) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "🖼"; }'; } }
		for (const elem of ebook) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "📚"; }'; } }
		for (const elem of document) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "📄"; }'; } }
		for (const elem of spreadsheet) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "📊"; }'; } }
		for (const elem of presentation) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "📽"; }'; } }
		for (const elem of typeface) {
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { content: "🔤"; }'; } }
		for (const elem of all) {
			if (ref == elem) {
				style.innerHTML = style.innerHTML + 'a[href$=".' + ref + '"]:before { margin-right: 0.5em; } a[href$=".' + ref + '"]:after { content: "(' + ref.toLowerCase() + ')"; margin-left: 0.5em; }';
				x[i].setAttribute("target","_blank"); } } }
	if (style.innerHTML != "") { document.head.appendChild(style); }
})();
(function pseudoWorker(){
	// <a> Pseudo Protoocol Worker
	// https://unionassets.com/ios-native-pro/launch-urls-for-popular-apps-608
	let x = document.querySelectorAll("a");
	let style = document.createElement("style");
	let i; let pseudo;
	for (i = 0; i < x.length; i++) {
		const email = ["mailto", "ms-outlook", "message"];
		const maps = ["maps"];
		const calendar = ["webcal"];
		const chat = ["tel", "callto", "facetime", "facetime-audio", "sms", "irc", "skype", "whatsapp", "fb-messenger", "signal"];
		const network = ["twitter", "fb", "snapchat", "instagram"];
		const audio = ["spotify", "music", "feed", "podcast"];
		const all = email.concat(maps).concat(calendar).concat(chat).concat(network).concat(audio);
		let ref = x[i].getAttribute("href").split(":")[0];
		for (const elem of email) {
			if (ref == elem) { pseudo = "E-mail"; style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "✉️"; }'; } }
		for (const elem of maps) {
			if (ref == elem) { pseudo = "Map"; style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "🗺"; }'; } }
		for (const elem of calendar) {
			if (ref == elem) { pseudo = "Calendar"; style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "📅"; }'; } }
		for (const elem of chat) {
			if (ref == elem) {
				if (ref == "tel" || ref == "callto" || ref == "facetime" || ref == "facetime-audio" ) { pseudo = "Call"; } else if (ref == "sms") { pseudo = "SMS"; }  else if (ref == "irc" || ref == "skype" || ref == "whatsapp" || ref == "fb-messenger" || ref == "signal") { pseudo = "Chat"; }
				style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "💬"; }'; } }
		for (const elem of network) {
			if (ref == "twitter") { pseudo = "Twitter"; } else if (ref == "fb") { pseudo = "Facebook"; } else if (ref == "snapchat") { pseudo = "SnapChat"; } else if (ref == "instagram") { pseudo = "Instagram"; }
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "👥"; }'; } }
		for (const elem of audio) {
			if (ref == "spotify") { pseudo = "Spotify"; } else if (ref == "music") { pseudo = "Apple Music"; } else if (ref == "feed") { pseudo = "RSS Feed"; } else if (ref == "podcast") { pseudo = "Podcast"; }
			if (ref == elem) { style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { content: "💿"; }'; } }
		for (const elem of all) {
			if (ref == elem) {
				style.innerHTML = style.innerHTML + 'a[href^="' + ref + '"]:before { margin-right: 0.5em; } a[href^="' + ref + '"]:after { content: "(' + pseudo + ')"; margin-left: 0.5em; }'; } } }
	if (style.innerHTML != "") { document.head.appendChild(style); }
})();
(function abbr(){
	// <abbr> HTML5 Element
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
	let x = document.querySelectorAll("abbr");
	let style = document.createElement("style");
	let i; let acronym;
	for (i = 0; i < x.length; i++) {
		let flag = x[i].getAttribute("title");
		if (flag == undefined || flag == null) { flag = x[i].innerHTML; }
		let ref = x[i].getAttribute("data-meta");
		const arr = ["wiktionary", "lexico", "merriam-webster", "cambridge", "macmillan"];
		for (const elem of arr) { if (ref == elem) { acronym = ref; } }
		let body = x[i].innerText;
		x[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(body));
		x[i].appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "wiktionary") {
			anchor.setAttribute("href","https://en.wiktionary.org/wiki/" + flag);
			} else if (acronym == "lexico" ) {
			anchor.setAttribute("href","https://www.lexico.com/en/definition/" + flag);
			} else if (acronym == "merriam-webster" ) {
			anchor.setAttribute("href","https://www.merriam-webster.com/dictionary/" + flag);
			} else if (acronym == "cambridge" ) {
			anchor.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/" + flag);
			} else if (acronym == "macmillan" ) {
			anchor.setAttribute("href","https://www.macmillandictionary.com/dictionary/american/" + flag); }
		anchor.setAttribute("target","_blank"); }
	style.innerHTML = "abbr, abbr a { cursor: help; font-weight: bold; text-decoration: underline; }";
	document.head.appendChild(style);
})();
(function address(){
	// <address> HTML5 Element
	// https://en.wikipedia.org/wiki/VCard
	let x = document.querySelectorAll("address");
	let i;
	for (i = 0; i < x.length; i++) {
		const arr = ["firstname","surname","business","birthday","cell-phone", "iphone-phone", "home-phone", "work-phone", "main-phone", "other-phone","home-fax", "work-fax", "other-fax","pager","home-address", "work-address", "other-address","home-email", "work-email", "other-email","home-website", "work-website", "other-website","skype","jabber","icq","gadugadu","qq"];
		let text =  "BEGIN:VCARD\n" +
					"VERSION:3.0\n" +
					"PRODID:-//SW Hook//EN\n";
		for (const elem of arr) {
			let arr = x[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				let first = x[i].getElementsByClassName("firstname")[0]; let second = x[i].getElementsByClassName("surname")[0];
				if ((first != undefined) && (second != undefined) && (elem == "surname")) {
					text = text + "N:" + second.innerText + ";" + first.innerText + ";;;\n" +
					"FN:" + first.innerText + " " + second.innerText + "\n"; }
				if (elem == "business") { text = text + "ORG:" + arr.innerText + "\n"; }
				if (elem == "birthday") { text = text + "BDAY:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; }
				if (elem == "cell-phone") { text = text + "TEL;type=CELL;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "iphone-phone") { text = text + "TEL;type=IPHONE;type=CELL;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "school-phone") { text = text + "TEL;type=WORK;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "mobile-phone") { text = text + "TEL;type=CELL;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "main-phone") { text = text + "TEL;type=MAIN;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "home-phone") { text = text + "TEL;type=HOME;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "work-phone") { text = text + "TEL;type=WORK;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "other-phone") { text = text + "TEL;type=OTHER;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "home-fax") { text = text + "TEL;type=HOME;type=FAX:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "work-fax") { text = text + "TEL;type=WORK;type=FAX:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "other-fax") { text = text + "TEL;type=OTHER;type=FAX:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "pager") { text = text + "TEL;type=PAGER:" + arr.innerText.replace(/\./g,"") + "\n"; }
				if (elem == "home-address" && arr != undefined) { let tmp = arr.innerText.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=HOME:;;" + tmp + "\n"; }
				if (elem == "work-address" && arr != undefined) { let tmp = arr.innerText.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=WORK:;;" + tmp + "\n"; }
				if (elem == "school-address" && arr != undefined) { let tmp = arr.innerText.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=WORK:;;" + tmp + "\n"; }
				if (elem == "other-address" && arr != undefined) { let tmp = arr.innerText.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=OTHER:;;" + tmp + "\n"; }
				if (elem == "home-email") { text = (text + "EMAIL;type=HOME;type=INTERNET:" + arr.innerText + "\n").replace("mailto:",""); }
				if (elem == "work-email") { text = (text + "EMAIL;type=WORK;type=INTERNET:" + arr.innerText + "\n").replace("mailto:",""); }
				if (elem == "school-email") { text = (text + "EMAIL;type=WORK;type=INTERNET:" + arr.innerText + "\n").replace("mailto:",""); }
				if (elem == "other-email") { text = (text + "item1.EMAIL;type=INTERNET:" + arr.innerText + "\nitem1.X-ABLabel:_$!<Other>!$_\n").replace("mailto:",""); }
				if (elem == "homepage-website" && arr != undefined) { text = (text + "item2.URL;type=INTERNET:" + arr.innerText + "\nitem2.X-ABLabel:_$!<HomePage>!$_\n").replace("mailto:",""); }
				if (elem == "home-website" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "URL;type=HOME:" + url + "\n"; }
				if (elem == "work-website" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "URL;type=WORK:" + url + "\n"; }
				if (elem == "school-website" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "URL;type=WORK:" + url + "\n"; }
				if (elem == "other-website" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "item3.URL:" + url + "\nitem3.X-ABLabel:_$!<Other>!$_\n"; }
				if (elem == "skype" && arr != undefined) { let tmp = arr.getAttribute("href").split(":").pop(); text = text + "IMPP;X-SERVICE-TYPE=Skype;type=HOME:skype:" + tmp + "\n"; }
				if (elem == "twitter" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=twitter:" + url + "\n"; }
				if (elem == "facebook" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=facebook:" + url + "\n"; }
				if (elem == "flickr" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=flickr:" + url + "\n"; }
				if (elem == "linkedin" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=linkedin:" + url + "\n"; }
				if (elem == "myspace" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=myspace:" + url + "\n"; }
				if (elem == "sinaweibo" && arr != undefined) { let url = arr.getAttribute("href"); text = text + "X-SOCIALPROFILE;type=sinaweibo:" + url + "\n"; }
				if (elem == "jabber" && arr != undefined) { let tmp = arr.getAttribute("href").split(":").pop(); text = text + "X-JABBER;type=HOME;type=pref:" + tmp + "\nIMPP;X-SERVICE-TYPE=Jabber;type=HOME:xmpp:" + tmp + "\n"; }
				if (elem == "icq") { text = text + "item1.X-ICQ;type=pref:" + arr.innerText + "\nitem1.X-ABLabel:ICQ\nIMPP;X-SERVICE-TYPE=ICQ;type=pref:aim:" + arr.innerText + "\n"; }
				if (elem == "aim") { text = text + "item2.X-AIM;type=pref:" + arr.innerText + "\nitem2.X-ABLabel:AIM\nitem3.IMPP;X-SERVICE-TYPE=AIM:aim:" + arr.innerText + "\nitem3.X-ABLabel:AIM\n"; }
				if (elem == "msn") { text = text + "item4.X-MSN;type=pref:" + arr.innerText + "\nitem4.X-ABLabel:MSN\nitem5.IMPP;X-SERVICE-TYPE=MSN;type=pref:msnim:" + arr.innerText + "\nitem5.X-ABLabel:MSN\n"; }
				if (elem == "yahoo") { text = text + "item6.X-Yahoo;type=pref:" + arr.innerText + "\nitem6.X-ABLabel:Yahoo\nitem7.IMPP;X-SERVICE-TYPE=Yahoo:ymsgr:" + arr.innerText + "\nitem7.X-ABLabel:Yahoo\n"; }
				if (elem == "g-talk") { text = text + "item8.IMPP;X-SERVICE-TYPE=GoogleTalk:xmpp:" + arr.innerText + "\nitem8.X-ABLabel:GoogleTalk\n"; }
				if (elem == "messenger") { text = text + "item9.IMPP;X-SERVICE-TYPE=Facebook:xmpp:" + arr.innerText + "\nitem9.X-ABLabel:Facebook\n"; }
				if (elem == "gadugadu") { text = text + "IMPP;X-SERVICE-TYPE=GaduGadu;type=HOME:x-apple:" + arr.innerText + "\n"; }
				if (elem == "qq") { text = text + "IMPP;X-SERVICE-TYPE=QQ;type=HOME:x-apple:" + arr.innerText + "\n"; } } }
		text = text + "END:VCARD";
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = "Download (vCard)";
		button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", text); }, false);
		x[i].appendChild(button); }
})();
(function quote(){
	// <blockquote>, <cite> & <q> HTML5 Element
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
	let b = document.querySelectorAll("blockquote");
	let c = document.querySelectorAll("cite");
	let q = document.querySelectorAll("q");
	let style = document.createElement("style");
	let i;
	for (i = 0; i < b.length; i++) {
		let target = b[i].getAttribute("href");
		let body = b[i].innerText;
		b[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(body));
		b[i].appendChild(anchor);
		if (target != undefined && target != null ) { anchor.setAttribute("href",target); }
			else { anchor.setAttribute("href","https://www.google.com/search?q=" + body); }
		anchor.setAttribute("target","_blank"); }
	for (i = 0; i < c.length; i++) {
		try {
			let target = c[i].getElementsByTagName("a");
			target[i].setAttribute("target","_blank");
		} catch (e) {
			let body = c[i].innerText;
			c[i].innerText = "";
			let anchor = document.createElement("a");
			anchor.appendChild(document.createTextNode(body));
			c[i].appendChild(anchor);
			anchor.setAttribute("href","https://www.google.com/search?q=" + body);
			anchor.setAttribute("target","_blank"); } }
	for (i = 0; i < q.length; i++) {
		let target = q[i].getAttribute("cite");
			let body = q[i].innerText;
			q[i].innerText = "";
			let anchor = document.createElement("a");
			anchor.appendChild(document.createTextNode(body));
			q[i].appendChild(anchor);
		if (target != undefined && target != null ) { anchor.setAttribute("href",target); } else { anchor.setAttribute("href","https://www.google.com/search?q=" + body); }
			anchor.setAttribute("target","_blank"); }
	style.innerHTML = "blockquote::before, cite::before { content: open-quote; } blockquote::after, cite::after { content: close-quote; } blockquote { margin-left: 0; } blockquote, q { font-style: italic; }";
	document.head.appendChild(style);
})();
(function code(){
	// <code> HTML5 Element
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
	let x = document.querySelectorAll("pre");
	let i; let code;
	for (i = 0; i < x.length; i++) {
		let y = x[i].querySelectorAll("code");
		for (i = 0; i < y.length; i++) {
			let flag = y[i].innerHTML;
			let ref = y[i].getAttribute("data-meta");
			let url = y[i].getAttribute("data-url");
			const arr = ["codepen", "jsfiddle", "dabblet", "jsbin", "liveweave"];
			for (const elem of arr) { if (ref == elem) { code = ref; } }
			if (code == undefined || code == null || code == "codepen") {
				let anchor = document.createElement("form");
				let i1 = document.createElement("input");
				let i2 = document.createElement("input");
				y[i].appendChild(anchor);
				anchor.setAttribute("action","https://codepen.io/pen/define");
				anchor.setAttribute("method","POST");
				anchor.setAttribute("target","_blank");
				y[i].children[0].appendChild(i1);
				i1.setAttribute("name","data");
				i1.setAttribute("type","hidden");
				let data = flag.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n/g, "\\n");
				let json = '{"title": "New Pen!","description": "", "html": "' + data + '"}';
				i1.setAttribute("value",json);
				y[i].children[0].appendChild(i2);
				i2.setAttribute("type","submit");
				i2.setAttribute("value","Send to CodePen"); } else
			if (code == "jsfiddle" && url != "" && url != undefined && url != null && url.startsWith("https://jsfiddle.net/") ) {
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Open in JSFiddle"));
				y[i].appendChild(anchor);
				anchor.setAttribute("href",url);
				anchor.setAttribute("target","_blank"); } else
			if (code == "dabblet" ) {
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Open Dabblet"));
				y[i].appendChild(anchor);
				anchor.setAttribute("href","https://dabblet.com/");
				anchor.setAttribute("target","_blank"); } else
			if (code == "jsbin" && url != "" && url != undefined && url != null && url.startsWith("https://jsbin.com/") ) {
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Open in JSBin"));
				y[i].appendChild(anchor);
				anchor.setAttribute("href",url);
				anchor.setAttribute("target","_blank"); } else
			if (code == "liveweave" ) {
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Liveweave"));
				y[i].appendChild(anchor);
				anchor.setAttribute("href","https://liveweave.com");
				anchor.setAttribute("target","_blank"); }
			let button = document.createElement("a");
			button.setAttribute("href","#");
			button.innerHTML = "Copy to Clipboard";
			button.addEventListener("click", function(){ 
				let clip = document.createElement("textarea");
				clip.value = flag.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
				clip.setAttribute("class", "hidden");
				clip.setAttribute("readonly", "");
				document.body.appendChild(clip);
				clip.select();
				document.execCommand("copy"); }, false);
			y[i].appendChild(button); } }
})();
(function lang(){
	// <html> Lang Attribute
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
	let x = document.querySelectorAll("[lang]");
	let i; let lang;
	for (i = 1; i < x.length; i++) {
		let body = x[i].innerHTML;
		if (body == undefined || body == null) { body = x[i].innerHTML; }
		let ref = x[i].getAttribute("data-meta");
		const arr = ["g-translate", "yandex"];
		for (const elem of arr) { if (ref == elem) { lang = ref; } }
		x[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(body));
		x[i].appendChild(anchor);
		let rev = x[i].getAttribute("lang");
		if (lang == undefined || lang == null || lang == "g-translate") {
			anchor.setAttribute("href","https://translate.google.com/?tl=fr&sl=" + rev  + "&tl=auto&text=" + body);
		} else if (lang == "yandex" ) {
			anchor.setAttribute("href","https://translate.yandex.com/?lang=" + rev + "-en&text=" + body); }
		anchor.setAttribute("target","_blank"); }
})();
(function link(){
	// <link>, DCMI, FOAF, Geo, KML & RDFa
	// https://www.iana.org/assignments/link-relations/link-relations.xhtml
	// https://www.dublincore.org/specifications/dublin-core/dces/
	// https://developers.google.com/kml/documentation/
	// http://xmlns.com/foaf/spec/
	let x = document.querySelectorAll("link");
	let footer = document.createElement("footer");
	let i;
	const arr = ["p", "s", "t", "n"];
	document.body.appendChild(footer).setAttribute("class", "sw-meta");
	for (const elem of arr) {
		let ul = document.createElement("ul");
		footer.appendChild(ul).setAttribute("class", elem); }
	for (i = 0; i < x.length; i++) {
		const profile = ["author", "about","vcard","icalendar", "version-history"];
		const syndicate = ["alternate", "feed", "podcast"];
		const terms = ["license", "copyright", "payment", "privacy-policy", "terms-of-service"];
		const navigate = ["appendix", "contents", "glossary", "help", "index", "next", "prev", "previous"];
		const all = profile.concat(syndicate).concat(terms).concat(navigate);
		for (const elem of all) {
			let acronym = x[i].getAttribute("data-meta");
			if (elem == x[i].getAttribute("rel")) {
				if ((x[i].getAttribute("rel") != "alternate") || (x[i].getAttribute("rel") != "feed") || (x[i].getAttribute("rel") == "alternate" && x[i].getAttribute("type") == "application/json" || x[i].getAttribute("type") == "application/rss+xml" || x[i].getAttribute("type") == "application/atom+xml") || (x[i].getAttribute("rel") == "feed" && x[i].getAttribute("type") == "application/json" || x[i].getAttribute("type") == "application/rss+xml" || x[i].getAttribute("type") == "application/atom+xml")) {
					let li = document.createElement("li");
					let a = document.createElement("a");
					let href = x[i].getAttribute("href").toLowerCase();
					if ((x[i].getAttribute("rel") != "alternate") && (x[i].getAttribute("rel") != "feed") && (href != "humans.txt" && href != "change.log" && href != "version.txt" && href != "history.txt" && x[i].getAttribute("type") != "application/rdf+xml")) {
						if (href.includes("creativecommons") ) { a.appendChild(document.createTextNode("license (CC)")); } else
						if (href.includes("/mit")) { a.appendChild(document.createTextNode("license (MIT)")); } else
						if (href.includes("/gpl")) { a.appendChild(document.createTextNode("license (GPL)")); } else
						if (href.includes("/agpl")) { a.appendChild(document.createTextNode("license (AGPL)")); } else
						if (href.includes("/lgpl")) { a.appendChild(document.createTextNode("license (LGPL)")); } else
						if (href.includes("/mpl")) { a.appendChild(document.createTextNode("license (MPL)")); } else
						if (href.includes("apache")) { a.appendChild(document.createTextNode("license (Apache)")); }
							else { a.appendChild(document.createTextNode(elem)); }
					} else if (href == "humans.txt") {
						a.appendChild(document.createTextNode("humans"));
						a.setAttribute("target","_blank");
					} else if (href.includes(".vcf")) {
						a.appendChild(document.createTextNode("profile"));
					} else if (href.includes(".ics")) {
						a.appendChild(document.createTextNode("event"));
					} else if ((href.includes(".rdf")) != (href == "geo.rdf")) {
						fetch(href)
						.then(response => response.text())
						.then(data => {
						const array = ["dc.creator","dcterms.creator","foaf:knows","foaf:person","dc.publisher","dcterms.publisher","foaf:agent","foaf:group","foaf:made","foaf:maker","foaf:member","foaf:organization","dcterms.available","dc.date","dcterms.date","dcterms.issued","foaf:mbox","dc.coverage","dterms.coverage","dc.description","dcterms.description","dcterms.license","dc.rights","dcterms.rights","foaf:primaryTopic","dcterms.source","dcterms.bibliographicCitation","dcterms.isReferencedBy","dcterms.references","dc.source","dcterms.tableOfContents","foaf:document","foaf:homepage","foaf:isPrimaryTopicOf","foaf:page","foaf:weblog"];
						let address = ""; let name = ""; let org = ""; let bday = ""; let email = ""; let adr = ""; let note = ""; let url = "";
						let vCard = "BEGIN:VCARD\n" +
									"VERSION:3.0\n" +
									"PRODID:-//SW Hook//EN\n";
						for (const elem of array) {
							let tmp = data.match("<" + elem + ">" + "(.*)" + "</" + elem + ">");
							if (tmp != null ) {
								if (elem == "dc.creator" || elem == "dcterms.creator" || elem == "foaf:knows" || elem == "foaf:person") {
									name = "FN:" + tmp[1] + "\n"; }
								if (elem == "dc.publisher" || elem == "dcterms.publisher" || elem == "foaf:agent" || elem == "foaf:group" || elem == "foaf:made" || elem == "foaf:maker" || elem == "foaf:member" || elem == "foaf:organization") {
									org = "ORG:" + tmp[1] + "\n"; }
								if (elem == "dcterms.available" || elem == "dc.date" || elem == "dcterms.date" || elem == "dcterms.issued") {
									bday = "BDAY:" + tmp[1].replace(/\//g,"").replace(/-/g,"") + "\n"; }
								if (elem == "foaf:mbox") {
									email = "EMAIL;type=WORK;type=INTERNET:" + tmp[1] + "\n".replace("mailto:",""); }
								if (elem == "dc.coverage" || elem == "dterms.coverage") {
									adr = "ADR;type=WORK:;;" + tmp[1] + "\n"; }
								if (elem == "dc.description" || elem == "dcterms.description" || elem == "dcterms.license" || elem == "dc.rights" || elem == "dcterms.rights" || elem == "foaf:primaryTopic") {
									note = "NOTE:" + tmp[1] + "\n"; }
								if (elem == "dc.source" || elem == "dcterms.bibliographicCitation" || elem == "dcterms.isReferencedBy" || elem == "dcterms.references" || elem == "dcterms.source" || elem == "dcterms.tableOfContents") {
									url = "URL:" + tmp[1] + "\n"; } }
							else {
								tmp = data.match("<" + elem + ' rdf:resource="' + "(.*)" + ">");
								if (tmp != null ) {
									if (elem == "foaf:document" || elem == "foaf:homepage" || elem == "foaf:isPrimaryTopicOf" || elem == "foaf:page" || elem == "foaf:weblog") { url = "URL:" + tmp[1].substring(0, tmp[1].length - 1) + "\n"; } } } }
						address = vCard + name + org + bday + email + adr + note + url + "END:VCARD";
						a.appendChild(document.createTextNode("Download (vCard)"));
						a.setAttribute("href","#");
						a.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", address); }, false);
						});
					} else if (href == "geo.rdf") {
						fetch(href)
						.then(response => response.text())
						.then(data => {
							let lat = data.match("<" + "geo:lat" + ">" + "(.*)" + "</" + "geo:lat" + ">");
							let long = data.match("<" + "geo:long" + ">" + "(.*)" + "</" + "geo:long" + ">");
							a.appendChild(document.createTextNode("Find On Map"));
							if (acronym == undefined || acronym == null || acronym == "g-maps") {
							a.setAttribute("href","https://www.google.com/maps/place/?q=" + lat[1] + "," + long[1]);
							} else if (acronym == "apple-maps" ) {
							a.setAttribute("href","http://maps.apple.com/?ll=" + lat[1] + "," + long[1]);
							} else if (acronym == "openstreetmaps" ) {
							a.setAttribute("href","https://www.openstreetmap.org/search?query=" + lat[1] + "," + long[1]);
							} else if (acronym == "bing-maps" ) {
							a.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + lat[1] + "~" + long[1]);
							} else if (acronym == "wego-here" ) {
							a.setAttribute("href","https://wego.here.com/?x=ep&map=" + lat[1] + "," + long[1]); }
							a.setAttribute("target","_blank");
						});
					} else if (href.includes(".kml")) {
						fetch(href)
						.then(response => response.text())
						.then(data => {
							let lat = data.match("<" + "longitude" + ">" + "(.*)" + "</" + "longitude" + ">");
							let long = data.match("<" + "latitude" + ">" + "(.*)" + "</" + "latitude" + ">");
							let coord = data.match("<" + "coordinates" + ">" + "(.*)" + "</" + "coordinates" + ">");
							a.appendChild(document.createTextNode("Find On Map"));
							if (coord != undefined) {
								if (acronym == undefined || acronym == null || acronym == "g-maps") {
								a.setAttribute("href","https://www.google.com/maps/place/?q=" + coord[1]);
								} else if (acronym == "apple-maps" ) {
								a.setAttribute("href","http://maps.apple.com/?ll=" + coord[1]);
								} else if (acronym == "openstreetmaps" ) {
								a.setAttribute("href","https://www.openstreetmap.org/search?query=" + coord[1]);
								} else if (acronym == "bing-maps" ) {
								a.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + coord[1]);
								} else if (acronym == "wego-here" ) {
								a.setAttribute("href","https://wego.here.com/?x=ep&map=" + coord[1]); } }
							else {
								if (acronym == undefined || acronym == null || acronym == "g-maps") {
								a.setAttribute("href","https://www.google.com/maps/place/?q=" + lat[1] + "," + long[1]);
								} else if (acronym == "apple-maps" ) {
								a.setAttribute("href","http://maps.apple.com/?ll=" + lat[1] + "," + long[1]);
								} else if (acronym == "openstreetmaps" ) {
								a.setAttribute("href","https://www.openstreetmap.org/search?query=" + lat[1] + "," + long[1]);
								} else if (acronym == "bing-maps" ) {
								a.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + lat[1] + "~" + long[1]);
								} else if (acronym == "wego-here" ) {
								a.setAttribute("href","https://wego.here.com/?x=ep&map=" + lat[1] + "," + long[1]); } }
							a.setAttribute("target","_blank");
						});
					} else if (href == "change.log" || href == "version.txt" || href == "history.txt") {
						a.appendChild(document.createTextNode("history"));
						a.setAttribute("target","_blank"); }
					var uri = new RegExp('^([a-z]+://|//)', 'i');
					if (uri.test(href)) { a.setAttribute("target","_blank"); }
					if (x[i].getAttribute("type") == "application/json" || x[i].getAttribute("type") == "application/rss+xml" || x[i].getAttribute("type") == "application/atom+xml") {
						let serv;
						a.setAttribute("class", x[i].getAttribute("type").replace("application/","").replace("+xml",""));
						if (href.includes("itunes.apple.com")) { serv = " (iTunes)"; } else
						if (href.includes("open.spotify.com")) { serv = " (Spotify)"; } else
						if (href.includes("play.google.com")) { serv = " (gPlay)"; } else
						if (href.includes("subscribeonandroid.com")) { serv = " (Android)"; } else { serv = ""; }
						a.appendChild(document.createTextNode(x[i].getAttribute("type").replace("application/","").replace("+xml", serv)));
						a.setAttribute("href", href); } else {
						a.setAttribute("href", href);
						a.setAttribute("class", x[i].getAttribute("rel")); }
					let ulcl = document.querySelectorAll("ul[class]");
					for (const elemP of profile) { if (elemP == elem) { ulcl[0].appendChild(li).appendChild(a); } }
					for (const elemS of syndicate) { if (elemS == elem) { ulcl[1].appendChild(li).appendChild(a); } }
					for (const elemT of terms) { if (elemT == elem) { ulcl[2].appendChild(li).appendChild(a); } }
					for (const elemN of navigate) { if (elemN == elem) { ulcl[3].appendChild(li).appendChild(a); } } } } } }
})();
(function meta(){
	// <meta> HTML5 Element (Requires Link Module)
	// https://wiki.whatwg.org/wiki/MetaExtensions
	// https://www.google.com/intl/en/scholar/inclusion.html
	// https://www.dublincore.org/specifications/dublin-core/dces/
	// https://ogp.me
	// https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
	// http://www.geo-tag.de/informator/en2.html
	let x = document.querySelectorAll("meta");
	let title = document.querySelectorAll("title");
	let i; let date; let legal; let translate; let book = ""; let location;
	let fn; let sn; let name; let org; let dob; let phone; let addr; let email; let website; let social; let note;
	let authors = ""; let eml = ""; let head = ""; let journal = ""; let vol = "";
		let issue = ""; let yr = ""; let pages = ""; let id = ""; let uniq; let uri = "";
	let vCard = "BEGIN:VCARD\n" +
				"VERSION:3.0\n" +
				"PRODID:-//SW Hook//EN\n";
	let iCal =  "BEGIN:VCALENDAR\n" +
				"VERSION:2.0\n" +
				"PRODID:-//SW Hook//EN\n" +
				"CALSCALE:GREGORIAN\n" +
				"BEGIN:VEVENT\n";
	for (i = 0; i < x.length; i++) {
		if (x[i].getAttribute("name") == "profile:first_name" ) { fn = x[i].getAttribute("content"); }
		if (x[i].getAttribute("name") == "profile:last_name" ) { sn = x[i].getAttribute("content"); }
		const n = ["article:author","contributor","creator","dc.creator","dcterms.creator","designer","profile:username","web_author"];
		for (const elem of n) { if (x[i].getAttribute("name") == elem ) { name = x[i].getAttribute("content"); } }
		const o = ["apple-mobile-web-app-title","application-name","dc.publisher","dcterms.publisher","og:title","og:site_name"];
		for (const elem of o) { if (x[i].getAttribute("name") == elem ) { org = x[i].getAttribute("content"); } }
		if (x[i].getAttribute("name") == "dcterms.created" ) { dob = x[i].getAttribute("content"); }
		if (x[i].getAttribute("name") == "contact" ) {
			addr = x[i].getAttribute("content").match(/'(.*)'/);
			if (addr != undefined) { addr = addr.pop(); } }
		if (x[i].getAttribute("name") == "contact" ) { 
			phone = "+" + x[i].getAttribute("content").match(/\+(.*)/).pop();
			phone = phone.replace(addr,"").replace("''","").replace(" ",",").split(",").shift(); }
		if (x[i].getAttribute("name") == "contact" ) {
			email = x[i].getAttribute("content").replace(addr,"").replace(phone,"").replace("''","").replace(" ",""); }
		const w = ["application-url","appstore:developer_url","dc.description","dcterms.description","dcterms.tableOfContents","mobile-agent","og:url","twitter:url"];
		for (const elem of w) { if (x[i].getAttribute("name") == elem ) { website = x[i].getAttribute("content"); } }
		const s = ["twitter:creator","twitter:site"];
		for (const elem of s) { if (x[i].getAttribute("name") == elem ) { social = x[i].getAttribute("content").replace("@","https://twitter.com/"); } }
		if (x[i].getAttribute("name") == "pro" ) { note = x[i].getAttribute("content"); }
		const cal = ["dc.coverage","dc.date","dcterms.available","dterms.coverage","dcterms.date","dcterms.issued","subject-datetime"];
		for (const elem of cal) { if (x[i].getAttribute("name") == elem ) { date = x[i].getAttribute("content"); } }
		if (x[i].getAttribute("name") == "citation_author" ) { if (authors == "") { authors = authors + x[i].getAttribute("content"); } else { authors = authors + ", " + x[i].getAttribute("content"); } }
		if (x[i].getAttribute("name") == "citation_author_email" ) { eml = eml + x[i].getAttribute("content"); }
		const ref1 = ["citation_title"];
		for (const elem of ref1) { if (x[i].getAttribute("name") == elem ) { head = head + x[i].getAttribute("content"); } }
		const ref2 = ["citation_author_institution","citation_conference_title","citation_dissertation_institution","citation_journal_title","citation_technical_report_institution"];
		for (const elem of ref2) { if (x[i].getAttribute("name") == elem ) { journal = journal + x[i].getAttribute("content"); } }
		const ref3 = ["citation_technical_report_number","citation_volume"];
		for (const elem of ref3) { if (x[i].getAttribute("name") == elem ) { vol = vol + x[i].getAttribute("content"); } }
		if (x[i].getAttribute("name") == "citation_issue" ) { issue = issue + x[i].getAttribute("content"); }
		const ref4 = ["citation_date","citation_online_date","citation_publication_date"];
		for (const elem of ref4) { if (x[i].getAttribute("name") == elem ) { yr = yr + x[i].getAttribute("content"); } }
		if (x[i].getAttribute("name") == "citation_lastpage" ) { pages = pages + x[i].getAttribute("content"); }
		const ref5 = ["citation_isbn","citation_issn"];
		for (const elem of ref5) { if (x[i].getAttribute("name") == elem ) {
			uniq = x[i].getAttribute("name").replace("citation_","").toUpperCase(); id = id + x[i].getAttribute("content"); } }
		const ref6 = ["citation_fulltext_html_url","citation_pdf_url","dc.source","dcterms.bibliographicCitation","dcterms.isReferencedBy","dcterms.references","dcterms.source","origin"];
		for (const elem of ref6) { if (x[i].getAttribute("name") == elem ) { uri = uri + x[i].getAttribute("content"); } }
		const l = ["rights","dc.rights","dcterms.license","dcterms.rights"];
		for (const elem of l) { if (x[i].getAttribute("name") == elem ) { legal = x[i].getAttribute("content"); } }
		const t = ["dc.language","dcterms.language","og:locale"];
		for (const elem of t) { if (x[i].getAttribute("name") == elem ) { translate = x[i].getAttribute("content"); } }
		const b = ["book:author","book:isbn","book:release_date"];
		for (const elem of b) { if (x[i].getAttribute("name") == elem ) {
			if (book == "") { book = book + x[i].getAttribute("content"); }
			else { book = book + "," + x[i].getAttribute("content"); } } }
		const m = ["geo.placename","geo.position","ICBM"];
		for (const elem of m) { if (x[i].getAttribute("name") == elem ) { location = x[i].getAttribute("content"); } } }
	if (fn != undefined && sn != undefined) { vCard = vCard + "N:" + sn + ";" + fn + ";;;\n" }
	if (name != undefined) { vCard = vCard + "FN:" + name + "\n"; }
	if (org != undefined) { vCard = vCard + "ORG:" + org + "\n";
							iCal = iCal + "SUMMARY:" + org + "\n"; }
					else { iCal = iCal + "SUMMARY:" + title[0].innerText + "\n"; }
	if (dob != undefined) { vCard = vCard + "BDAY:" + dob.replace(/\//g,"").replace(/-/g,"") + "\n"; }
	if (phone != undefined && phone != "") { vCard = vCard + "TEL;type=MAIN;type=VOICE:" + phone.replace(/\./g,"") + "\n"; }
	if (addr != undefined && addr != "") { vCard = vCard + "ADR;type=WORK:;;" + addr + "\n"; }
	if (email != undefined && email != "") { vCard = (vCard + "EMAIL;type=WORK;type=INTERNET:" + email + "\n").replace("mailto:",""); }
	if (website != undefined) { vCard = vCard + "URL;type=WORK:" + website + "\n"; }
	if (social != undefined) { vCard = vCard + "X-SOCIALPROFILE;type=twitter:" + social + "\n"; }
	if (note != undefined) { vCard = vCard + "NOTE:" + note + "\n"; }
	vCard = vCard + "END:VCARD";
	if (date != undefined) { iCal = iCal + "DTSTART;VALUE=DATE:" + date.replace(/\//g,"").replace(/-/g,"") + "\n" + "DTEND;VALUE=DATE:" + date.replace(/\//g,"").replace(/-/g,"") + "\n"; }
	let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
	if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
	let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
	if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
	iCal = iCal + 	"DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
					"UID:" + random(20) + "\n" +
					"END:VEVENT\n" +
					"END:VCALENDAR";
	let z = document.getElementsByClassName("sw-meta");
	const arr = ["vCard","iCal"];
	for (const elem of arr) {
		let format; let extend;
		let li = document.createElement("li");
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = elem;
		if (elem == "vCard") {
			extend = ".vcf"; format = "text/vcard";
			button.addEventListener("click", function(){ download(elem + extend, format, vCard); }, false);
			if (((fn != undefined) || (name != undefined)) || (org != undefined) || (dob != undefined) || (phone != undefined) || (addr != undefined) || (email != undefined) || (website != undefined) || (social != undefined) || (note != undefined)) {
				z[0].childNodes[0].appendChild(li).appendChild(button).setAttribute("class",elem); } }
		else { extend = ".ics"; format = "text/calendar";
			button.addEventListener("click", function(){ download(elem + extend, format, iCal); }, false); 
			if (date != undefined) { z[0].childNodes[0].appendChild(li).appendChild(button).setAttribute("class",elem); } } }
	let refCite = "1. ";
	if (authors != "") { refCite = refCite + authors + ". "; }
	if (eml != "") { refCite = refCite + eml + ". "; }
	if (head != "") { refCite = refCite + "“" + head + "” "; }
	if (journal != "") { refCite = refCite + journal; }
	if (vol != "") { refCite = refCite + ", Vol. " + vol; }
	if (issue != "") { refCite = refCite + ", No. " + issue; }
	if (yr != "") { refCite = refCite + " (" + yr + ")"; }
	if (pages != "") { refCite = refCite + ", e" + pages; }
	if (id != "") { refCite = refCite + ", " + uniq + ":" + id; }
	if (uri != "") { refCite = refCite + ", " + uri; }
	const list = []; let child;
	if (refCite != "1. ") { list.push("cite","legal","translate","book","location"); }
	for (const elem of list) {
		let ul = document.createElement("li");
		let link = document.createElement("a");
		if (elem == "cite") {
			child = 0;
			link.setAttribute("href","#");
			link.innerHTML = elem + " (Clipboard)"
			link.addEventListener("click", function(){ 
			let clip = document.createElement("textarea");
			clip.value = refCite;
			clip.setAttribute("class", "hidden");
			clip.setAttribute("readonly", "");
			document.body.appendChild(clip);
			clip.select();
			document.execCommand("copy"); }, false);
		z[0].childNodes[child].appendChild(ul).appendChild(link).setAttribute("class",elem); } else
		if (elem == "legal" && legal != undefined) {
			let href = legal.toLowerCase(); child = 2;
			if (href.includes("creativecommons") ) { link.innerHTML = elem + " (CC)"; } else
			if (href.includes("/mit")) { link.innerHTML = elem + " (MIT)"; } else
			if (href.includes("/gpl")) { link.innerHTML = elem + " (GPL)"; } else
			if (href.includes("/agpl")) { link.innerHTML = elem + " (AGPL)"; } else
			if (href.includes("/lgpl")) { link.innerHTML = elem + " (LGPL)"; } else
			if (href.includes("/mpl")) { link.innerHTML = elem + " (MPL)"; } else
			if (href.includes("apache")) { link.innerHTML = elem + " (Apache)"; }
			link.setAttribute("href",legal);
			z[0].childNodes[child].appendChild(ul).appendChild(link).setAttribute("class",elem); } else
		if (elem == "translate" && translate != undefined) {
			child = 3; link.innerHTML = elem;
			link.setAttribute("href","https://translate.google.com/translate?u=" + translate);
			z[0].childNodes[child].appendChild(ul).appendChild(link).setAttribute("class",elem); } else
		if (elem == "book" && book != undefined) {
			child = 3; link.innerHTML = elem;
			link.setAttribute("href","https://www.google.com/search?q=" + book);
			z[0].childNodes[child].appendChild(ul).appendChild(link).setAttribute("class",elem); } else
		if (elem == "location" && location != undefined) {
			child = 0; link.innerHTML = elem;
			link.setAttribute("href","https://www.google.com/maps/search/?api=1&query=" + location);
			z[0].childNodes[child].appendChild(ul).appendChild(link).setAttribute("class",elem); } }
})();
(function time(){
	// <time> HTML5 Element
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	let x = document.querySelectorAll("time");
	let i;
	for (i = 0; i < x.length; i++) {
		let title = document.querySelectorAll("title");
		let date = x[i].getAttribute("datetime");
		if (date != null) { date = date.replace(/\//g,"").replace(/-/g,""); }
		let iCal =  "BEGIN:VCALENDAR\n" +
					"VERSION:2.0\n" +
					"PRODID:-//SW Hook//EN\n" +
					"CALSCALE:GREGORIAN\n" +
					"BEGIN:VEVENT\n" +
					"SUMMARY:" + title[0].innerText + "\n" +
					"DTSTART;VALUE=DATE:" + date + "\n" +
					"DTEND;VALUE=DATE:" + date + "\n";
		let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
		if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
		let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
		if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
		iCal = iCal + 	"DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
						"UID:" + random(20) + "\n" +
						"END:VEVENT\n" +
						"END:VCALENDAR";
		let body = x[i].innerText;
		x[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(body));
		anchor.setAttribute("href","#");
		x[i].appendChild(anchor);
		anchor.addEventListener("click", function(){ download("iCal.ics", "text/calendar", iCal); }, false); }
})();
// Microformats - 2.0
(function rel(){
	// Rel Attribute Microformats
	// https://webmasters.googleblog.com/2019/09/evolving-nofollow-new-ways-to-identify.html?m=1
	// http://microformats.org/wiki/rel-author
	// http://microformats.org/wiki/rel-license
	// http://microformats.org/wiki/rel-payment
	const arr = ["author","license","nofollow","payment","sponsored","ugc"];
	for (const elem of arr) {
		let x = document.querySelectorAll("[rel]");
		let i;
		for (i = 0; i < x.length; i++) {
			if (x[i].getAttribute("rel") == elem) {
				if ((x[i].getAttribute("rel") == "author") || (x[i].getAttribute("rel") == "payment") || (x[i].getAttribute("rel") == "sponsored")) { x[i].appendChild(document.createTextNode(" (" + elem + ")")); }
				if (x[i].getAttribute("rel") == "license") {
					let href = x[i].getAttribute("href").toLowerCase();
					if (href.includes("creativecommons") ) { x[i].appendChild(document.createTextNode(" (CC license)")); } else
					if (href.includes("/mit")) { x[i].appendChild(document.createTextNode(" (MIT license)")); } else
					if (href.includes("/gpl")) { x[i].appendChild(document.createTextNode(" (GPL license)")); } else
					if (href.includes("/agpl")) { x[i].appendChild(document.createTextNode(" (AGPL license)")); } else
					if (href.includes("/lgpl")) { x[i].appendChild(document.createTextNode(" (LGPL license)")); } else
					if (href.includes("/mpl")) { x[i].appendChild(document.createTextNode(" (MPL license)")); } else
					if (href.includes("apache")) { x[i].appendChild(document.createTextNode(" (Apache license)")); } }
				if ((x[i].getAttribute("rel") == "nofollow") || (x[i].getAttribute("rel") == "ugc")) { x[i].appendChild(document.createTextNode(" (external)")); }
				x[i].setAttribute("target","_blank"); } } }
})();
(function hCalendar(){
	// hCalendar, h-event
	// http://microformats.org/wiki/hcalendar
	// http://microformats.org/wiki/h-event
	let hcalendar = document.querySelectorAll(".vevent");
	let hevent = document.querySelectorAll(".h-event");
	let i; let uid;
	for (i = 0; i < hcalendar.length; i++) {
		let iCal =  "BEGIN:VCALENDAR\n" +
					"VERSION:2.0\n" +
					"PRODID:-//SW Hook//EN\n" +
					"CALSCALE:GREGORIAN\n" +
					"BEGIN:VEVENT\n";
		const arr = ["summary","attendee","contact","organizer","dtstart","dtend","location","url","uid"];
		for (const elem of arr) {
			let arr = hcalendar[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "summary" && arr != undefined) { iCal = iCal + "SUMMARY:" + arr.innerText + "\n"; }
				if ((elem == "attendee" && arr != undefined) || (elem == "contact" && arr != undefined) || (elem == "organizer" && arr != undefined)) {
					iCal = iCal + "ORGANIZER:" + arr.innerText + "\n"; }
				try { if ( hcalendar[i].getElementsByClassName("dtstart")[0].innerText != undefined && hcalendar[i].getElementsByClassName("dtend")[0].innerText != undefined ) {
					if (elem == "dtstart" && arr != undefined) {
						iCal = iCal + "DTSTART;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; }
					if (elem == "dtend" && arr != undefined) {
						iCal = iCal + "DTEND;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; } }
				} catch (e) { if ((elem == "dtstart" && arr != undefined) || (elem == "dtend")) {
					iCal = iCal +   "DTSTART;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n" +
									"DTEND;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; } }
				if (elem == "location") { iCal = iCal + "URL:https://www.google.com/maps/place/?q=" + arr.innerText + "\n"; }
				if (elem == "url" && arr != undefined) { iCal = iCal + "SUMMARY:" + arr.innerText + "\n"; }
				try { if ( hcalendar[i].getElementsByClassName("uid")[0].innerText != undefined) {
					if (elem == "uid" && arr != undefined) { iCal = iCal + "UID:" + arr.innerText + "\n"; } }
				} catch (e) { uid = "err"; } } }
		let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
		if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
		let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
		if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
		if (uid == "err") { iCal = iCal + "UID:" + random(20) + "\n"; }
		iCal = iCal + 	"DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
						"END:VEVENT\n" +
						"END:VCALENDAR";
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = "Download (iCal)";
		button.addEventListener("click", function(){ download("iCal.ics", "text/calendar", iCal); }, false);
		hcalendar[i].appendChild(button); }
	for (i = 0; i < hevent.length; i++) {
		let iCal =  "BEGIN:VCALENDAR\n" +
					"VERSION:2.0\n" +
					"PRODID:-//SW Hook//EN\n" +
					"CALSCALE:GREGORIAN\n" +
					"BEGIN:VEVENT\n";
		const arr = ["p-name","p-summary","p-attendee","p-organizer","dt-start","dt-end","p-location","u-url"];
		for (const elem of arr) {
			let arr = hevent[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if ((elem == "p-name") || (elem == "p-summary")) { iCal = iCal + "SUMMARY:" + arr.innerText + "\n"; }
				if ((elem == "p-attendee" && arr != undefined) || (elem == "p-organizer" && arr != undefined)) {
					iCal = iCal + "ORGANIZER:" + arr.innerText + "\n"; }
				try {
					if ( hevent[i].getElementsByClassName("dtstart")[0].innerText != undefined && hevent[i].getElementsByClassName("dtend")[0].innerText != undefined ) {
						if (elem == "dt-start" && arr != undefined) {
							iCal = iCal + "DTSTART;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; }
						if (elem == "dt-end" && arr != undefined) {
							iCal = iCal + "DTEND;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; } }
				} catch (e) {
					if ((elem == "dt-start" && arr != undefined) || (elem == "dt-end" && arr != undefined)) {
						iCal = iCal +   "DTSTART;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n" +
										"DTEND;VALUE=DATE:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; } }
				if (elem == "p-location" && arr != undefined) {
					iCal = iCal + "URL:https://www.google.com/maps/place/?q=" + arr.innerText + "\n"; }
				if (elem == "u-url" && arr != undefined) { iCal = iCal + "SUMMARY:" + arr.innerText + "\n"; } } }
		let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
		if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
		let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
		if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
		iCal = iCal + 	"DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
						"UID:" + random(20) + "\n" +
						"END:VEVENT\n" +
						"END:VCALENDAR";
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = "Download (iCal)";
		button.addEventListener("click", function(){ download("iCal.ics", "text/calendar", iCal); }, false);
		hevent[i].appendChild(button); }
})();
(function hCard(){
	// hCard, h-card
	// http://microformats.org/wiki/hcard
	// http://microformats.org/wiki/h-card
	let hcard = document.querySelectorAll(".vcard");
	let hcard2 = document.querySelectorAll(".h-card");
	let i;
	for (i = 0; i < hcard.length; i++) {
		const arr = ["fn","n","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","org","bday","tel","adr","street-address","locality","region","postal-code","country-name","email","url","note"];
		let text =  "BEGIN:VCARD\n" +
					"VERSION:3.0\n" +
					"PRODID:-//SW Hook//EN\n";
		for (const elem of arr) {
			let arr = hcard[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				let n = hcard[i].getElementsByClassName("n")[0];
				let last = hcard[i].getElementsByClassName("family-name")[0];
				let first = hcard[i].getElementsByClassName("given-name")[0];
				let middle = hcard[i].getElementsByClassName("additional-name")[0];
				let prefix = hcard[i].getElementsByClassName("honorific-prefix")[0];
				let suffix = hcard[i].getElementsByClassName("honorific-suffix")[0];
				if (elem == "fn" && first != undefined && last != undefined) {
					text = text + "FN:" + first.innerText + " " + last.innerText + "\n"; }
				if (elem == "n" && n != undefined ) {
					text = text + "N:";
					if (last != undefined) { text = text + last.innerText; } text = text + ";";
					if (first != undefined) { text = text + first.innerText; } text = text + ";";
					if (middle != undefined) { text = text + middle.innerText; } text = text + ";";
					if (prefix != undefined) { text = text + prefix.innerText; } text = text + ";";
					if (suffix != undefined) { text = text + suffix.innerText; } text = text + "\n"; }
				if (elem == "org" && arr != undefined) { text = text + "ORG:" + arr.innerText + "\n"; }
				if (elem == "bday" && arr != undefined) { text = text + "BDAY:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; }
				if (elem == "tel" && arr != undefined) { text = text + "TEL;type=WORK;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				let adr = hcard[i].getElementsByClassName("adr")[0];
				let street = hcard[i].getElementsByClassName("street-address")[0];
				let locality = hcard[i].getElementsByClassName("locality")[0];
				let region = hcard[i].getElementsByClassName("region")[0];
				let postcode = hcard[i].getElementsByClassName("postal-code")[0];
				let country = hcard[i].getElementsByClassName("country-name")[0];
				if (elem == "adr" && adr == undefined ) {
					text = text + "ADR;type=WORK:;;";
					if (street != undefined) { text = text + street.innerText; } text = text + ";";
					if (locality != undefined) { text = text + locality.innerText; } text = text + ";";
					if (region != undefined) { text = text + region.innerText; } text = text + ";";
					if (postcode != undefined) { text = text + postcode.innerText; } text = text + ";";
					if (country != undefined) { text = text + country.innerText; } text = text + "\n"; }
				else if (elem == "adr" && adr != undefined) {
					let tmp = arr.innerText.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=WORK:;;" + tmp + "\n"; }
				if (elem == "email") { text = (text + "EMAIL;type=WORK;type=INTERNET:" + arr + "\n").replace("mailto:",""); }
				if (elem == "url" && arr != undefined) { text = text + "URL:" + arr.getAttribute("href") + "\n"; }
				if (elem == "note" && arr != undefined) { text = text + "NOTE:" + arr.innerText + "\n"; }}}
		text = text + "END:VCARD";
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = "Download (vCard)";
		button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", text); }, false);
		hcard[i].appendChild(button); }
	for (i = 0; i < hcard2.length; i++) {
		const arr = ["p-name","p-honorific-prefix","p-given-name","p-additional-name","p-family-name","p-honorific-suffix","p-org","p-job-title","p-role","dt-bday","p-tel","p-adr","p-post-office-box","p-extended-address","p-street-address","p-locality","p-region","p-postal-code","p-country-name","u-email","u-url","u-impp","p-note"];
		let text =  "BEGIN:VCARD\n" +
					"VERSION:3.0\n" +
					"PRODID:-//SW Hook//EN\n";
		let xPrefix; let xFirst; let xMiddle; let xLast; let xSuffix;
		let xadr; let xPOB; let xAddress; let xStreet; let xLocality; let xRegion; let xPostcode; let xCountry;
		for (const elem of arr) {
			let arr = hcard2[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "p-name" && arr != undefined) { text = text + "FN:" + arr.innerText + "\n"; }
				let last = hcard2[i].getElementsByClassName("p-family-name")[0];
				let first = hcard2[i].getElementsByClassName("p-given-name")[0];
				let middle = hcard2[i].getElementsByClassName("p-additional-name")[0];
				let prefix = hcard2[i].getElementsByClassName("p-honorific-prefix")[0];
				let suffix = hcard2[i].getElementsByClassName("p-honorific-suffix")[0];
				if ((elem == "p-honorific-prefix") || (elem == "p-given-name") || (elem == "p-additional-name") || (elem == "p-family-name") || (elem == "p-honorific-suffix")) {
					if (last != undefined) { xLast = last.innerText; }
					if (first != undefined) { xFirst = first.innerText; }
					if (middle != undefined) { xMiddle = middle.innerText; }
					if (prefix != undefined) { xPrefix = prefix.innerText; }
					if (suffix != undefined) { xSuffix = suffix.innerText; } }
				if ((elem == "p-org" && arr != undefined) || (elem == "p-job-title" && arr != undefined) || (elem == "p-role" && arr != undefined)) {
					text = text + "ORG:" + arr.innerText + "\n"; }
				if (elem == "dt-bday" && arr != undefined) { text = text + "BDAY:" + arr.innerText.replace(/\//g,"").replace(/-/g,"") + "\n"; }
				if (elem == "p-tel" && arr != undefined) { text = text + "TEL;type=WORK;type=VOICE:" + arr.innerText.replace(/\./g,"") + "\n"; }
				let adr = hcard2[i].getElementsByClassName("p-adr")[0];
				let pobox = hcard2[i].getElementsByClassName("p-post-office-box")[0];
				let exaddress = hcard2[i].getElementsByClassName("p-extended-address")[0];
				let street = hcard2[i].getElementsByClassName("p-street-address")[0];
				let locality = hcard2[i].getElementsByClassName("p-locality")[0];
				let region = hcard2[i].getElementsByClassName("p-region")[0];
				let postcode = hcard2[i].getElementsByClassName("p-postal-code")[0];
				let country = hcard2[i].getElementsByClassName("p-country-name")[0];
				if ((elem == "adr") || (elem == "p-post-office-box") || (elem == "p-extended-address") || (elem == "p-street-address") || (elem == "p-locality") || (elem == "p-region") || (elem == "p-postal-code") || (elem == "p-country-name")) {
					if (adr != undefined) { xadr = adr.innerText; }
					if (pobox != undefined) { xPOB = pobox.innerText; }
					if (exaddress != undefined) { xAddress = exaddress.innerText; }
					if (street != undefined) { xStreet = street.innerText; }
					if (locality != undefined) { xLocality = locality.innerText; }
					if (region != undefined) { xRegion = region.innerText; }
					if (postcode != undefined) { xPostcode = postcode.innerText; }
					if (country != undefined) { xCountry = country.innerText; } }
				if (elem == "u-email") { text = (text + "EMAIL;type=WORK;type=INTERNET:" + arr + "\n").replace("mailto:",""); }
				if (elem == "u-url" && arr != undefined) { text = text + "URL:" + arr.getAttribute("href") + "\n"; }
				if (elem == "u-impp" && arr != undefined) { text = text + "IMPP::" + arr.getAttribute("href") + "\n"; }
				if (elem == "p-note" && arr != undefined) { text = text + "NOTE:" + arr.innerText + "\n"; } } }
		if ((xPrefix != undefined) || (xFirst != undefined) || (xMiddle != undefined) || (xLast != undefined) || (xSuffix != undefined)) { text = (text + "N:" + xLast + ";" + xFirst + ";" + xMiddle + ";" + xPrefix + ";" + xSuffix + "\n").replace(/undefined/g,""); }
		if ((xPOB != undefined) || (xAddress != undefined) || (xStreet != undefined) || (xLocality != undefined) || (xRegion != undefined) || (xPostcode != undefined) || (xCountry != undefined)) {
			if (xadr != undefined) {
				let tmp = xadr.replace(/, /g, ";").replace(/(\r\n|\n|\r)/g, ";").replace(/;;/g, ";"); text = text + "ADR;type=WORK:;;" + tmp + "\n"; }
			else { text = (text + "ADR;type=WORK:" + xPOB + ";" + xAddress + ";" + xStreet + ";" + xLocality + ";" + xRegion + ";" + xPostcode + ";" + xCountry + "\n").replace(/undefined;/g,""); } }
		text = text + "END:VCARD";
		let button = document.createElement("a");
		button.setAttribute("href","#");
		button.innerHTML = "Download (vCard)";
		button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", text); }, false);
		hcard2[i].appendChild(button); }
})();
(function geo(){
	// adr, h-adr, geo, h-geo
	// http://microformats.org/wiki/adr
	// http://microformats.org/wiki/h-adr
	// http://microformats.org/wiki/geo
	// http://microformats.org/wiki/h-geo
	let adr = document.querySelectorAll(".adr");
	let hadr = document.querySelectorAll(".h-adr");
	let geo = document.querySelectorAll(".geo");
	let hgeo = document.querySelectorAll(".h-geo");
	let i;
	for (i = 0; i < adr.length; i++) {
		let address = ""; let acronym;
		let ref = adr[i].getAttribute("data-meta");
		const array = ["g-maps", "apple-maps", "openstreetmaps", "bing-maps", "wego-here"];
		const arr = ["post-office-box","street-address","extended-address","locality","region","postal-code","country-name"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = adr[i].getElementsByClassName(elem)[0];
			if (arr != undefined) { address = address + arr.innerText + ", "; } }
		address = address + ", ";
		address = address.replace (", , ","");
		adr[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(address));
		adr[i].appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "g-maps") {
			anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
			} else if (acronym == "apple-maps" ) {
			anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
			} else if (acronym == "openstreetmaps" ) {
			anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
			} else if (acronym == "bing-maps" ) {
				address = address.replace(", ","~");
			anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
			} else if (acronym == "wego-here" ) {
			anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
		anchor.setAttribute("target","_blank"); }
	for (i = 0; i < hadr.length; i++) {
		let address = ""; let geo = ""; let acronym; let url;
		let ref = hadr[i].getAttribute("data-meta");
		const array = ["g-maps", "apple-maps", "openstreetmaps", "bing-maps", "wego-here"];
		const arr = ["p-post-office-box","p-street-address","p-extended-address","p-locality","p-region","p-postal-code","p-country-name","p-latitude","p-longitude","p-altitude"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hadr[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if ((elem == "p-latitude" && arr != undefined) || (elem == "p-longitude" && arr != undefined)) {
					geo = geo + arr.innerText + ", "; }
				else { address = address + arr.innerText + ", "; } } }
		address = address + ", "; geo = geo + ", ";
		address = address.replace (", , ",""); geo = geo.replace (", , ","");
		hadr[i].innerText = "";
		let anchor = document.createElement("a");
		if (geo == ", ") { url = address; anchor.appendChild(document.createTextNode(address)); }
		else { url = geo; anchor.appendChild(document.createTextNode(geo)); }
		hadr[i].appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "g-maps") {
			anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + url);
			} else if (acronym == "apple-maps" ) {
			anchor.setAttribute("href","http://maps.apple.com/?ll=" + url);
			} else if (acronym == "openstreetmaps" ) {
			anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + url);
			} else if (acronym == "bing-maps" ) {
				address = address.replace(", ","~");
			anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + url);
			} else if (acronym == "wego-here" ) {
			anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + url); }
		anchor.setAttribute("target","_blank"); }
	for (i = 0; i < geo.length; i++) {
		let address = ""; let acronym;
		let ref = geo[i].getAttribute("data-meta");
		const array = ["g-maps", "apple-maps", "openstreetmaps", "bing-maps", "wego-here"];
		const arr = ["latitude","longitude"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = geo[i].getElementsByClassName(elem)[0];
			if (arr != undefined) { address = address + arr.innerText + ", "; } }
		address = address + ", ";
		address = address.replace (", , ","");
		geo[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(address));
		geo[i].appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "g-maps") {
			anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
			} else if (acronym == "apple-maps" ) {
			anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
			} else if (acronym == "openstreetmaps" ) {
			anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
			} else if (acronym == "bing-maps" ) {
				address = address.replace(", ","~");
			anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
			} else if (acronym == "wego-here" ) {
			anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
		anchor.setAttribute("target","_blank"); }
	for (i = 0; i < hgeo.length; i++) {
		let address = ""; let acronym;
		let ref = hgeo[i].getAttribute("data-meta");
		const array = ["g-maps", "apple-maps", "openstreetmaps", "bing-maps", "wego-here"];
		const arr = ["p-latitude","p-longitude","p-altitude"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hgeo[i].getElementsByClassName(elem)[0];
			if (arr != undefined) { address = address + arr.innerText + ", "; } }
		address = address + ", ";
		address = address.replace (", , ","");
		hgeo[i].innerText = "";
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode(address));
		hgeo[i].appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "g-maps") {
			anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
			} else if (acronym == "apple-maps" ) {
			anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
			} else if (acronym == "openstreetmaps" ) {
			anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
			} else if (acronym == "bing-maps" ) {
				address = address.replace(", ","~");
			anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
			} else if (acronym == "wego-here" ) {
			anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
		anchor.setAttribute("target","_blank"); }
})();
(function hProduct(){
	// hProduct, h-product
	// http://microformats.org/wiki/hproduct
	// http://microformats.org/wiki/h-product
	let hproduct = document.querySelectorAll(".hproduct");
	let hproduct2 = document.querySelectorAll(".h-product");
	let i;
	for (i = 0; i < hproduct.length; i++) {
		let address = ""; let acronym;
		let ref = hproduct[i].getAttribute("data-meta");
		const array = ["google", "duckduckgo", "bing", "swisscows", "quant"];
		const arr = ["brand","fn","identifier type","category","price","url"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hproduct[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "identifier type" && arr != undefined) {
					address = address + arr.getAttribute("title") + ", "; }
				else if (elem == "url" && arr != undefined) {
					address = address + arr.getAttribute("href") + ", "; }
				else {
					address = (address + arr.innerText + ", ").replace("Download (vCard)","").replace("Download (iCal)",""); } } }
		let p = document.createElement("p");
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode("Find product"));
		hproduct[i].appendChild(p); p.appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "google") {
			anchor.setAttribute("href","https://www.google.com/search?q=" + address);
			} else if (acronym == "duckduckgo" ) {
			anchor.setAttribute("href","https://duckduckgo.com/?q=" + address);
			} else if (acronym == "bing" ) {
			anchor.setAttribute("href","https://www.bing.com/search?q=" + address);
			} else if (acronym == "swisscows" ) {
				address = address.replace(", ","~");
			anchor.setAttribute("href","https://swisscows.ch/web?query=" + address);
			} else if (acronym == "quant" ) {
			anchor.setAttribute("href","https://www.qwant.com/?q=" + address); }
		anchor.setAttribute("target","_blank");
	}
	for (i = 0; i < hproduct2.length; i++) {
		let address = ""; let acronym;
		let ref = hproduct2[i].getAttribute("data-meta");
		const array = ["google", "duckduckgo", "bing", "swisscows", "quant"];
		const arr = ["p-brand","p-name","u-identifier type","p-category","p-price","u-url"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hproduct2[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "u-identifier type" && arr != undefined) {
					address = address + arr.getAttribute("title") + ", "; }
				else if (elem == "url" && arr != undefined) {
					address = address + arr.getAttribute("href") + ", "; }
				else {
					address = (address + arr.innerText + ", ").replace("Download (vCard)","").replace("Download (iCal)",""); } } }
		let p = document.createElement("p");
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode("Find product"));
		hproduct2[i].appendChild(p); p.appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "google") {
			anchor.setAttribute("href","https://www.google.com/search?q=" + address);
			} else if (acronym == "duckduckgo" ) {
			anchor.setAttribute("href","https://duckduckgo.com/?q=" + address);
			} else if (acronym == "bing" ) {
			anchor.setAttribute("href","https://www.bing.com/search?q=" + address);
			} else if (acronym == "swisscows" ) {
			address = address.replace(", ","~");
			anchor.setAttribute("href","https://swisscows.ch/web?query=" + address);
			} else if (acronym == "quant" ) {
			anchor.setAttribute("href","https://www.qwant.com/?q=" + address); }
		anchor.setAttribute("target","_blank");
	}
})();
(function hRecipe(){
	// hRecipe, h-recipe
	// http://microformats.org/wiki/hrecipe
	// http://microformats.org/wiki/h-recipe
	let recipe = ""; let hrecipe = document.querySelectorAll(".hrecipe");
	let hrecipe2 = document.querySelectorAll(".h-recipe");
	let i;
	for (i = 0; i < hrecipe.length; i++) {
		let acronym; let ref = hrecipe[i].getAttribute("data-meta");
		const array = ["paprika", "bigoven", "yummly", "allrecipes", "mycookbook"];
		const arr = ["fn","author","published","summary","nutrition","duration","yield","ingredient","instructions"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hrecipe[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "ingredient") {
					let z; let y = hrecipe[i].querySelectorAll(".ingredient");
					for (z = 0; z < y.length; z++) {
						recipe = recipe + elem + ": " + hrecipe[i].getElementsByClassName(elem)[z].innerText + "\n"; } }
				else { recipe = recipe + elem.replace("fn","name") + ": " + arr.innerText + "\n"; } } }
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let copy = document.createElement("a");
		copy.appendChild(document.createTextNode("Copy Recipe"));
		copy.setAttribute("href","#");
		copy.addEventListener("click", function(){ 
			let clip = document.createElement("textarea");
			clip.value = recipe.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
			clip.setAttribute("class", "hidden");
			clip.setAttribute("readonly", "");
			document.body.appendChild(clip);
			clip.select();
			document.execCommand("copy"); }, false);
		hrecipe[i].appendChild(p1); p1.appendChild(copy);
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode("Get App"));
		hrecipe[i].appendChild(p2); p2.appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "paprika") {
			anchor.setAttribute("href","https://www.paprikaapp.com/");
			} else if (acronym == "bigoven" ) {
			anchor.setAttribute("href","https://www.bigoven.com/");
			} else if (acronym == "yummly" ) {
			anchor.setAttribute("href","https://www.yummly.co.uk/");
			} else if (acronym == "allrecipes" ) {
			anchor.setAttribute("href","https://www.allrecipes.com/");
			} else if (acronym == "mycookbook" ) {
			anchor.setAttribute("href","https://www.mycookbook-online.net/"); }
		anchor.setAttribute("target","_blank"); }
	for (i = 0; i < hrecipe2.length; i++) {
		let acronym; let ref = hrecipe2[i].getAttribute("data-meta");
		const array = ["paprika", "bigoven", "yummly", "allrecipes", "mycookbook"];
		const arr = ["p-name","p-author","dt-published","p-summary","p-nutrition","dt-duration","p-yield","p-ingredient","e-instructions"];
		for (const elem of array) { if (ref == elem) { acronym = ref; } }
		for (const elem of arr) {
			let arr = hrecipe2[i].getElementsByClassName(elem)[0];
			if (arr != undefined) {
				if (elem == "p-ingredient") {
					let z; let y = hrecipe2[i].querySelectorAll(".p-ingredient");
					for (z = 0; z < y.length; z++) {
						recipe = recipe + elem.replace("p-","") + ": " + hrecipe2[i].getElementsByClassName(elem)[z].innerText + "\n"; } }
				else { recipe = recipe + elem.replace("p-","").replace("dt-","").replace("e-","") + ": " + arr.innerText + "\n"; } } }
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let copy = document.createElement("a");
		copy.appendChild(document.createTextNode("Copy Recipe"));
		copy.setAttribute("href","#");
		copy.addEventListener("click", function(){ 
			let clip = document.createElement("textarea");
			clip.value = recipe.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
			clip.setAttribute("class", "hidden");
			clip.setAttribute("readonly", "");
			document.body.appendChild(clip);
			clip.select();
			document.execCommand("copy"); }, false);
		hrecipe2[i].appendChild(p1); p1.appendChild(copy);
		let anchor = document.createElement("a");
		anchor.appendChild(document.createTextNode("Get App"));
		hrecipe2[i].appendChild(p2); p2.appendChild(anchor);
		if (acronym == undefined || acronym == null || acronym == "paprika") {
			anchor.setAttribute("href","https://www.paprikaapp.com/");
			} else if (acronym == "bigoven" ) {
			anchor.setAttribute("href","https://www.bigoven.com/");
			} else if (acronym == "yummly" ) {
			anchor.setAttribute("href","https://www.yummly.co.uk/");
			} else if (acronym == "allrecipes" ) {
			anchor.setAttribute("href","https://www.allrecipes.com/");
			} else if (acronym == "mycookbook" ) {
			anchor.setAttribute("href","https://www.mycookbook-online.net/"); }
		anchor.setAttribute("target","_blank"); }
})();
// Structured Data - 20.0
(function audiobook(){
	// Audiobook (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Audiobook","AudiobookFormat"];
	const array = ["about","alternateName","alternativeHeadline","name","bookEdition","identifier","isbn","asin","author","contributor","creator","producer","readBy","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","productionCompany","publisher","sourceOrganization","abridged","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["audible", "google", "kobo", "downpour"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let ident = ""; let author = ""; let reader = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "bookEdition") { edition = "Edition:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "isbn" || elem == "asin") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "readBy") { reader = reader + "Reader:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "productionCompany" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "abridged") { let tmp = prop[x].getAttribute("content");
								if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + edition + ident + author + reader + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Audiobook"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "audible") {
					anchor.setAttribute("href","https://www.audible.com/search?keywords=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "kobo" ) {
					anchor.setAttribute("href","https://www.kobo.com/en/search?query=" + address);
					} else if (acronym == "downpour" ) {
					anchor.setAttribute("href","https://www.downpour.com/catalogsearch/result/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let ident = ""; let author = ""; let reader = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "bookEdition") { edition = "Edition:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "isbn" || elem == "asin") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "readBy") { reader = reader + "Reader:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "productionCompany" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "abridged") { let tmp = prop[x].getAttribute("content");
								if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + edition + ident + author + reader + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Audiobook"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "audible") {
					anchor.setAttribute("href","https://www.audible.com/search?keywords=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "kobo" ) {
					anchor.setAttribute("href","https://www.kobo.com/en/search?query=" + address);
					} else if (acronym == "downpour" ) {
					anchor.setAttribute("href","https://www.downpour.com/catalogsearch/result/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let ident = ""; let author = ""; let reader = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "bookEdition") { edition = "Edition:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier" || elem == "isbn" || elem == "asin") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "readBy") { reader = reader + "Reader:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "productionCompany" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "abridged") { let tmp; tmp = txt["schema:" + elem]; if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + edition + ident + author + reader + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Audiobook"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "audible") {
					anchor.setAttribute("href","https://www.audible.com/search?keywords=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "kobo" ) {
					anchor.setAttribute("href","https://www.kobo.com/en/search?query=" + address);
					} else if (acronym == "downpour" ) {
					anchor.setAttribute("href","https://www.downpour.com/catalogsearch/result/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function book(){
	// Book (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Book","BookSeries","EBook","GraphicNovel","Hardcover","Paperback","ShortStory"];
	const array = ["about","alternateName","alternativeHeadline","name","bookEdition","bookFormat","identifier","isbn","asin","issn","character","author","contributor","creator","producer","illustrator","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","sourceOrganization","abridged","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["amazon","barnesandnoble","apple","worldofbooks","alibris","google","ebay"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let format = ""; let ident = ""; let char = ""; let author = ""; let img = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "bookEdition") { edition = "Edition:" + prop[x].innerHTML + ","; }
							if (elem == "bookFormat") { format = "Format:" + prop[x].getAttribute("content") + prop[x].getAttribute("href").replace("http://schema.org/","") + ","; }
							if (elem == "identifier" || elem == "isbn" || elem == "asin" || elem == "issn") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "character") { char = "Character:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "illustrator") { img = img + "Art:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "abridged") { let tmp = prop[x].getAttribute("content");
								if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + edition + format + ident + char + author + img + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Book"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.com/s?k=" + address);
					} else if (acronym == "barnesandnoble" ) {
					anchor.setAttribute("href","https://www.barnesandnoble.com/s/" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://books.apple.com/us/book/" + address);
					} else if (acronym == "worldofbooks" ) {
					anchor.setAttribute("href","https://www.worldofbooks.com/en-us/category/all?search=" + address);
					} else if (acronym == "alibris" ) {
					anchor.setAttribute("href","https://www.alibris.com/booksearch?keyword=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=267&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let format = ""; let ident = ""; let char = ""; let author = ""; let img = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "bookEdition") { edition = "Edition:" + prop[x].innerHTML + ","; }
							if (elem == "bookFormat") { format = "Format:" + prop[x].getAttribute("content") + prop[x].getAttribute("href").replace("http://schema.org/","") + ","; }
							if (elem == "identifier" || elem == "isbn" || elem == "asin" || elem == "issn") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "character") { char = "Character:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "illustrator") { img = img + "Art:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "abridged") { let tmp = prop[x].getAttribute("content");
								if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + edition + format + ident + char + author + img + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Book"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.com/s?k=" + address);
					} else if (acronym == "barnesandnoble" ) {
					anchor.setAttribute("href","https://www.barnesandnoble.com/s/" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://books.apple.com/us/book/" + address);
					} else if (acronym == "worldofbooks" ) {
					anchor.setAttribute("href","https://www.worldofbooks.com/en-us/category/all?search=" + address);
					} else if (acronym == "alibris" ) {
					anchor.setAttribute("href","https://www.alibris.com/booksearch?keyword=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=267&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let edition = ""; let format = ""; let ident = ""; let char = ""; let author = ""; let img = ""; let year = ""; let genre = ""; let copyright = ""; let abridged = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "bookEdition") { edition = "Edition:" + txt["schema:" + elem] + ","; }
						if (elem == "bookFormat") { format = "Format:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier" || elem == "isbn" || elem == "asin" || elem == "issn") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "character") { char = "Character:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "illustrator") { img = img + "Art:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "abridged") { let tmp = txt["schema:" + elem];
							if (tmp == true) { abridged = "Abridged" + ","; } else { abridged = "Unabridged" + ","; } }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + edition + format + ident + char + author + img + year + genre + copyright + abridged + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Book"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.com/s?k=" + address);
					} else if (acronym == "barnesandnoble" ) {
					anchor.setAttribute("href","https://www.barnesandnoble.com/s/" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://books.apple.com/us/book/" + address);
					} else if (acronym == "worldofbooks" ) {
					anchor.setAttribute("href","https://www.worldofbooks.com/en-us/category/all?search=" + address);
					} else if (acronym == "alibris" ) {
					anchor.setAttribute("href","https://www.alibris.com/booksearch?keyword=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://play.google.com/store/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=267&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function branding(){
	// Branding (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Barcode","Brand","DiscussionForumPosting","MobileApplication","Recommendation","SocialMediaPosting","SoftwareApplication","WebApplication"];
	const array = ["downloadUrl","installUrl","url"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "downloadUrl" || elem == "installUrl" || elem == "url") { address = prop[x].getAttribute("href"); } } } }
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get " + elem));
				mData[i].appendChild(anchor);
				anchor.setAttribute("href",address);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "downloadUrl" || elem == "installUrl" || elem == "url") { address = prop[x].getAttribute("href"); } } } }
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get " + elem));
				rdf[i].appendChild(anchor);
				anchor.setAttribute("href",address);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = "";
				for (const elem of array) {
					if (txt["@type"] != undefined) { if (elem == "downloadUrl" || elem == "installUrl" || elem == "url") { address = txt["schema:" + elem]; } } }
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get" + elem));
				json[i].parentElement.appendChild(paragraph);
				paragraph.setAttribute("href",address);
				paragraph.appendChild(anchor);
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function broadcast(){
	// Broadcast (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["AMRadioChannel","BroadcastChannel","BroadcastService","FMRadioChannel","RadioBroadcastService","RadioChannel","CableOrSatelliteService","TelevisionChannel"];
	const array = ["alternateName","broadcastDisplayName","name","broadcastChannelId","broadcastFrequency","brand","broadcastAffiliateOf","broadcaster","parentService","provider","category","genre","url"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let url = "";
				let channel = ""; let number = ""; let freq = ""; let brand = ""; let genre = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "broadcastDisplayName" || elem == "name") { channel = "Channel:" + prop[x].innerHTML + ","; }
							if (elem == "broadcastChannelId") { number = "(Number:" + prop[x].innerHTML + ","; }
							if (elem == "broadcastFrequency") { freq = "Frequency:" + prop[x].innerHTML + ","; }
							if (elem == "brand" || elem == "broadcastAffiliateOf" || elem == "broadcaster" || elem == "parentService" || elem == "provider") { brand = "Provider:" + prop[x].innerHTML + ","; }
							if (elem == "category" || elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "url") { url = prop[x].getAttribute("href"); } } } }
				address = channel + number + freq + brand + genre;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "") + ")";
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode(address));
				mData[i].appendChild(anchor);
				anchor.setAttribute("href",url);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let url = "";
				let channel = ""; let number = ""; let freq = ""; let brand = ""; let genre = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "broadcastDisplayName" || elem == "name") { channel = "Channel:" + prop[x].innerHTML + ","; }
							if (elem == "broadcastChannelId") { number = "(Number:" + prop[x].innerHTML + ","; }
							if (elem == "broadcastFrequency") { freq = "Frequency:" + prop[x].innerHTML + ","; }
							if (elem == "brand" || elem == "broadcastAffiliateOf" || elem == "broadcaster" || elem == "parentService" || elem == "provider") { brand = "Provider:" + prop[x].innerHTML + ","; }
							if (elem == "category" || elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "url") { url = prop[x].getAttribute("href"); } } } }
				address = channel + number + freq + brand + genre;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "") + ")";
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode(address));
				rdf[i].appendChild(anchor);
				anchor.setAttribute("href",url);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let url = "";
				let channel = ""; let number = ""; let freq = ""; let brand = ""; let genre = "";
				for (const elem of array) {
					if (txt["@type"] != undefined) {
						if (elem == "alternateName" || elem == "broadcastDisplayName" || elem == "name") { channel = "Channel:" + txt["schema:" + elem] + ","; }
						if (elem == "broadcastChannelId") { number = "(Number:" + txt["schema:" + elem] + ","; }
						if (elem == "broadcastFrequency") { freq = "Frequency:" + txt["schema:" + elem] + ","; }
						if (elem == "brand" || elem == "broadcastAffiliateOf" || elem == "broadcaster" || elem == "parentService" || elem == "provider") { brand = "Provider:" + txt["schema:" + elem] + ","; }
						if (elem == "category" || elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "url") { url = txt["schema:" + elem]; } } }
				address = channel + number + freq + brand + genre;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "") + ")";
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode(address));
				json[i].parentElement.appendChild(paragraph);
				paragraph.setAttribute("href",url);
				paragraph.appendChild(anchor);
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function comic(){
	// Comic (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["ComicIssue","ComicStory","ComicSeries"];
	const array = ["about","alternateName","alternativeHeadline","name","issueNumber","identifier","issn","author","contributor","creator","producer","artist","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","publisherImprint","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["gcd","google","ebay"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let issue = ""; let ident = ""; let author = ""; let artist = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "issueNumber") { issue = "Issue:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "issn") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "artist") { artist = artist + "Artist:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "publisherImprint" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + issue + ident + author + artist + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Comic"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "gcd") {
					anchor.setAttribute("href","https://www.comics.org/searchNew/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=63&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let issue = ""; let ident = ""; let author = ""; let artist = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "issueNumber") { issue = "Issue:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "issn") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "artist") { artist = artist + "Artist:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "publisherImprint" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + issue + ident + author + artist + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Comic"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "gcd") {
					anchor.setAttribute("href","https://www.comics.org/searchNew/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=63&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let issue = ""; let ident = ""; let author = ""; let artist = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "issueNumber") { issue = "Issue:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier" || elem == "issn") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "artist") { artist = artist + "Artist:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "publisherImprint" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + issue + ident + author + artist + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Comic"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "gcd") {
					anchor.setAttribute("href","https://www.comics.org/searchNew/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=63&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function define(){
	// Define (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["DefinedTerm"];
	const array = ["alternateName","name"];
	const service = ["wiktionary","lexico","merriam-webster","cambridge","macmillan"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "name") { address = prop[x].innerHTML; } } } }
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Define Word"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "wiktionary") {
					anchor.setAttribute("href","https://en.wiktionary.org/wiki/" + address);
					} else if (acronym == "lexico" ) {
					anchor.setAttribute("href","https://www.lexico.com/en/definition/" + address);
					} else if (acronym == "merriam-webster" ) {
					anchor.setAttribute("href","https://www.merriam-webster.com/dictionary/" + address);
					} else if (acronym == "cambridge" ) {
					anchor.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/" + address);
					} else if (acronym == "macmillan" ) {
					anchor.setAttribute("href","https://www.macmillandictionary.com/dictionary/american/" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "name") { address = prop[x].innerHTML; } } } }
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Define Word"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "wiktionary") {
					anchor.setAttribute("href","https://en.wiktionary.org/wiki/" + address);
					} else if (acronym == "lexico" ) {
					anchor.setAttribute("href","https://www.lexico.com/en/definition/" + address);
					} else if (acronym == "merriam-webster" ) {
					anchor.setAttribute("href","https://www.merriam-webster.com/dictionary/" + address);
					} else if (acronym == "cambridge" ) {
					anchor.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/" + address);
					} else if (acronym == "macmillan" ) {
					anchor.setAttribute("href","https://www.macmillandictionary.com/dictionary/american/" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "alternateName" || elem == "name") { address = txt["schema:" + elem]; } } }
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Define Word"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "wiktionary") {
					anchor.setAttribute("href","https://en.wiktionary.org/wiki/" + address);
					} else if (acronym == "lexico" ) {
					anchor.setAttribute("href","https://www.lexico.com/en/definition/" + address);
					} else if (acronym == "merriam-webster" ) {
					anchor.setAttribute("href","https://www.merriam-webster.com/dictionary/" + address);
					} else if (acronym == "cambridge" ) {
					anchor.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/" + address);
					} else if (acronym == "macmillan" ) {
					anchor.setAttribute("href","https://www.macmillandictionary.com/dictionary/american/" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function email(){
	// Email (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["EmailMessage","Message"];
	const array = ["toRecipient","ccRecipient","bccRecipient","about","description","text"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = "mailto:";
				let to = ""; let cc = ""; let bcc = ""; let subject = ""; let body = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "toRecipient") { to = prop[x].innerHTML; }
							address = address + "?";
							if (elem == "ccRecipient") { cc = cc + "cc=" + prop[x].innerHTML + "&"; }
							if (elem == "bccRecipient") { bcc = bcc + "bcc=" + prop[x].innerHTML + "&"; }
							if (elem == "about" || elem == "description") { subject = "subject=" + prop[x].innerHTML + "&"; }
							if (elem == "text") { body = "body=" + prop[x].innerHTML; } } } }
				address = to + cc + bcc + subject + body;
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("E-mail Message"));
				mData[i].appendChild(anchor);
				anchor.setAttribute("href",address);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = "mailto:";
				let to = ""; let cc = ""; let bcc = ""; let subject = ""; let body = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "toRecipient") { to = prop[x].innerHTML; }
							address = address + "?";
							if (elem == "ccRecipient") { cc = cc + "cc=" + prop[x].innerHTML + "&"; }
							if (elem == "bccRecipient") { bcc = bcc + "bcc=" + prop[x].innerHTML + "&"; }
							if (elem == "about" || elem == "description") { subject = "subject=" + prop[x].innerHTML + "&"; }
							if (elem == "text") { body = "body=" + prop[x].innerHTML; } } } }
				address = to + cc + bcc + subject + body;
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("E-mail Message"));
				rdf[i].appendChild(anchor);
				anchor.setAttribute("href",address);
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = "mailto:";
				let to = ""; let cc = ""; let bcc = ""; let subject = ""; let body = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "toRecipient") { to = txt["schema:" + elem]; }
						address = address + "?";
						if (elem == "ccRecipient") { cc = cc + "cc=" + txt["schema:" + elem] + "&"; }
						if (elem == "bccRecipient") { bcc = bcc + "bcc=" + txt["schema:" + elem] + "&"; }
						if (elem == "about" || elem == "description") { subject = "subject=" + txt["schema:" + elem] + "&"; }
						if (elem == "text") { body = "body=" + txt["schema:" + elem]; } } }
				address = to + cc + bcc + subject + body;
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("E-mail Message"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				paragraph.setAttribute("href",address);
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function event(){
	// Event (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["AggregateOffer","BoatReservation","BoatTrip","BroadcastEvent","BusinessEvent","BusReservation","BusTrip","ChildrensEvent","ComedyEvent","Course","CourseInstance","CreativeWorkSeason","DanceEvent","DeliveryEvent","DiagnosticProcedure","DoseSchedule","EducationEvent","Event","EventCancelled","EventPostponed","EventRescheduled","EventReservation","EventScheduled","EventSeries","ExhibitionEvent","Festival","Flight","FlightReservation","FoodEstablishmentReservation","FoodEvent","LiteraryEvent","LodgingReservation","MedicalProcedure","MerchantReturnPolicy","MusicEvent","Offer","OnDemandEvent","OpeningHoursSpecification","Project","PublicationEvent","RadioSeason","RentalCarReservation","ResearchProject","Reservation","ReservationPackage","SaleEvent","Seat","Schedule","ScreeningEvent","SocialEvent","SportsEvent","SurgicalProcedure","TaxiReservation","TheaterEvent","TherapeuticProcedure","Ticket","TouristTrip","TrainReservation","TrainTrip","Trip","TVSeason","VisualArtsEvent","lowPrice"];
	const array = [
		"about","alternateName","alternativeHeadline","name","accessCode","arrivalAirport","arrivalBusStop","arrivalGate","arrivalPlatform","arrivalStation","arrivalTerminal","awayTeam","bodyLocation","busName","busNumber","competitor","courseCode","departureAirport","departureBusStop","departureGate","departurePlatform","departureStation","departureTerminal","doseUnit","doseValue","drug","educationalCredentialAwarded","episode","flightNumber","homeTeam","occupationalCredentialAwarded","partySize","performer","price","procedureType","reservationId","reservationFor","seasonNumber","seatNumber","seatRow","seatSection","ticketNumber","ticketToken","trainName","trainNumber","accountablePerson","author","contactPoint","creator","email","faxNumber","instructor","issuedBy","organizer","parentOrganization","provider","publishedBy","publisher","sourceOrganization","telephone","underName","availabilityStarts","availableFrom","byMonth","byMonthDay","checkinTime","datePublished","departureTime","doorTime","doseSchedule","opens","startDate","validFrom","arrivalTime","availabilityEnds","availableThrough","checkoutTime","closes","dropoffTime","endDate","expires","frequency","pickupTime","priceValidUntil","repeatCount","validThrough","address","areaServed","availableAtOrFrom","contentLocation","dropoffLocation","itinerary","location","pickupLocation","customerRemorseReturnFees", "itemDefectReturnFees", "merchantReturnDays", "merchantReturnLink","bookingTime","url"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address =   "BEGIN:VCALENDAR\n" +
								"VERSION:2.0\n" +
								"PRODID:-//SW Hook//EN\n" +
								"CALSCALE:GREGORIAN\n" +
								"BEGIN:VEVENT\n";
				let summary = ""; let describe = ""; let organize = ""; let datestart = ""; let dateend = ""; let location = ""; let url = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { summary = "SUMMARY:" + prop[x].innerHTML + "\n"; }
							describe = "DESCRIPTION:";
							if (elem == "accessCode" || elem == "arrivalAirport" || elem == "arrivalBusStop" || elem == "arrivalGate" || elem == "arrivalPlatform" || elem == "arrivalStation" || elem == "arrivalTerminal" || elem == "awayTeam" || elem == "bodyLocation" || elem == "busName" || elem == "busNumber" || elem == "competitor" || elem == "courseCode" || elem == "departureAirport" || elem == "departureBusStop" || elem == "departureGate" || elem == "departurePlatform" || elem == "departureStation" || elem == "departureTerminal" || elem == "doseUnit" || elem == "doseValue" || elem == "drug" || elem == "educationalCredentialAwarded" || elem == "episode" || elem == "flightNumber" || elem == "homeTeam" || elem == "occupationalCredentialAwarded" || elem == "partySize" || elem == "performer" || elem == "price" || elem == "procedureType" || elem == "reservationId" || elem == "reservationFor" || elem == "seasonNumber" || elem == "seatNumber" || elem == "seatRow" || elem == "seatSection" || elem == "ticketNumber" || elem == "ticketToken" || elem == "trainName" || elem == "trainNumber" || elem == "customerRemorseReturnFees" || elem == "itemDefectReturnFees" || elem == "merchantReturnDays" || elem == "lowPrice") {
								describe = describe + elem.charAt(0).toUpperCase() + elem.slice(1) + prop[x].innerHTML + "\\n"; }
							organize = "ORGANIZER";
							if (elem == "accountablePerson" || elem == "author" || elem == "creator" || elem == "instructor" || elem == "issuedBy" || elem == "organizer" || elem == "parentOrganization" || elem == "provider" || elem == "publishedBy" || elem == "publisher" || elem == "sourceOrganization" || elem == "underName") { organize = organize + ";CN=" + prop[x].innerHTML + "\n"; }
							else if (elem == "email") { organize + ":MAILTO:" + prop[x].innerHTML + "\n"; }
							else if (elem == "contactPoint" || elem == "faxNumber" || elem == "telephone") { organize = organize + ":TEL:" + prop[x].innerHTML + "\n"; }
							if (elem == "availabilityStarts" || elem == "availableFrom" || elem == "byMonth" || elem == "byMonthDay" || elem == "checkinTime" || elem == "datePublished" || elem == "departureTime" || elem == "doorTime" || elem == "doseSchedule" || elem == "opens" || elem == "startDate" || elem == "validFrom" || elem == "bookingTime") { datestart = "DTSTART;VALUE=DATE:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "arrivalTime" || elem == "availabilityEnds" || elem == "availableThrough" || elem == "checkoutTime" || elem == "closes" || elem == "dropoffTime" || elem == "endDate" || elem == "expires" || elem == "frequency" || elem == "pickupTime" || elem == "priceValidUntil" || elem == "repeatCount" || elem == "validThrough") { dateend = "DTEND;VALUE=DATE:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "address" || elem == "areaServed" || elem == "availableAtOrFrom" || elem == "contentLocation" || elem == "dropoffLocation" || elem == "itinerary" || elem == "location" || elem == "pickupLocation") { location = "LOCATION:" + prop[x].innerHTML + "\n"; }
							if (elem == "url" || elem == "merchantReturnLink") { url = "URL:" + prop[x].getAttribute("href") + "\n"; } } } }
				address = address + summary + describe + organize + datestart + dateend + location + url;
				let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
				if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
				let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
				if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
				address = address + "DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
									"UID:" + random(20) + "\n" +
									"END:VEVENT\n" +
									"END:VCALENDAR";
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (iCal)";
				button.addEventListener("click", function(){ download("iCal.ics", "text/calendar", address); }, false);
				mData[i].appendChild(button);
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address =   "BEGIN:VCALENDAR\n" +
								"VERSION:2.0\n" +
								"PRODID:-//SW Hook//EN\n" +
								"CALSCALE:GREGORIAN\n" +
								"BEGIN:VEVENT\n";
				let summary = ""; let describe = ""; let organize = ""; let datestart = ""; let dateend = ""; let location = ""; let url = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { summary = "SUMMARY:" + prop[x].innerHTML + "\n"; }
							describe = "DESCRIPTION:";
							if (elem == "accessCode" || elem == "arrivalAirport" || elem == "arrivalBusStop" || elem == "arrivalGate" || elem == "arrivalPlatform" || elem == "arrivalStation" || elem == "arrivalTerminal" || elem == "awayTeam" || elem == "bodyLocation" || elem == "busName" || elem == "busNumber" || elem == "competitor" || elem == "courseCode" || elem == "departureAirport" || elem == "departureBusStop" || elem == "departureGate" || elem == "departurePlatform" || elem == "departureStation" || elem == "departureTerminal" || elem == "doseUnit" || elem == "doseValue" || elem == "drug" || elem == "educationalCredentialAwarded" || elem == "episode" || elem == "flightNumber" || elem == "homeTeam" || elem == "occupationalCredentialAwarded" || elem == "partySize" || elem == "performer" || elem == "price" || elem == "procedureType" || elem == "reservationId" || elem == "reservationFor" || elem == "seasonNumber" || elem == "seatNumber" || elem == "seatRow" || elem == "seatSection" || elem == "ticketNumber" || elem == "ticketToken" || elem == "trainName" || elem == "trainNumber") {
								describe = describe + elem.charAt(0).toUpperCase() + elem.slice(1) + prop[x].innerHTML + "\\n"; }
							organize = "ORGANIZER";
							if (elem == "accountablePerson" || elem == "author" || elem == "creator" || elem == "instructor" || elem == "issuedBy" || elem == "organizer" || elem == "parentOrganization" || elem == "provider" || elem == "publishedBy" || elem == "publisher" || elem == "sourceOrganization" || elem == "underName") { organize = organize + ";CN=" + prop[x].innerHTML + "\n"; }
							else if (elem == "email") { organize + ":MAILTO:" + prop[x].innerHTML + "\n"; }
							else if (elem == "contactPoint" || elem == "faxNumber" || elem == "telephone") { organize = organize + ":TEL:" + prop[x].innerHTML + "\n"; }
							if (elem == "availabilityStarts" || elem == "availableFrom" || elem == "byMonth" || elem == "byMonthDay" || elem == "checkinTime" || elem == "datePublished" || elem == "departureTime" || elem == "doorTime" || elem == "doseSchedule" || elem == "opens" || elem == "startDate" || elem == "validFrom" || elem == "bookingTime") { datestart = "DTSTART;VALUE=DATE:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "arrivalTime" || elem == "availabilityEnds" || elem == "availableThrough" || elem == "checkoutTime" || elem == "closes" || elem == "dropoffTime" || elem == "endDate" || elem == "expires" || elem == "frequency" || elem == "pickupTime" || elem == "priceValidUntil" || elem == "repeatCount" || elem == "validThrough") { dateend = "DTEND;VALUE=DATE:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "address" || elem == "areaServed" || elem == "availableAtOrFrom" || elem == "contentLocation" || elem == "dropoffLocation" || elem == "itinerary" || elem == "location" || elem == "pickupLocation") { location = "LOCATION:" + prop[x].innerHTML + "\n"; }
							if (elem == "url") { url = "URL:" + prop[x].getAttribute("href") + "\n"; } } } }
				address = address + summary + describe + organize + datestart + dateend + location + url;
				let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
				if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
				let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
				if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
				address = address + "DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
									"UID:" + random(20) + "\n" +
									"END:VEVENT\n" +
									"END:VCALENDAR";
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (iCal)";
				button.addEventListener("click", function(){ download("iCal.ics", "text/calendar", address); }, false);
				rdf[i].appendChild(button);
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address =   "BEGIN:VCALENDAR\n" +
								"VERSION:2.0\n" +
								"PRODID:-//SW Hook//EN\n" +
								"CALSCALE:GREGORIAN\n" +
								"BEGIN:VEVENT\n";
				let summary = ""; let describe = ""; let organize = ""; let datestart = ""; let dateend = ""; let location = ""; let url = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { summary = "SUMMARY:" + txt["schema:" + elem] + "\n"; }
						describe = "DESCRIPTION:";
						if (elem == "accessCode" || elem == "arrivalAirport" || elem == "arrivalBusStop" || elem == "arrivalGate" || elem == "arrivalPlatform" || elem == "arrivalStation" || elem == "arrivalTerminal" || elem == "awayTeam" || elem == "bodyLocation" || elem == "busName" || elem == "busNumber" || elem == "competitor" || elem == "courseCode" || elem == "departureAirport" || elem == "departureBusStop" || elem == "departureGate" || elem == "departurePlatform" || elem == "departureStation" || elem == "departureTerminal" || elem == "doseUnit" || elem == "doseValue" || elem == "drug" || elem == "educationalCredentialAwarded" || elem == "episode" || elem == "flightNumber" || elem == "homeTeam" || elem == "occupationalCredentialAwarded" || elem == "partySize" || elem == "performer" || elem == "price" || elem == "procedureType" || elem == "reservationId" || elem == "reservationFor" || elem == "seasonNumber" || elem == "seatNumber" || elem == "seatRow" || elem == "seatSection" || elem == "ticketNumber" || elem == "ticketToken" || elem == "trainName" || elem == "trainNumber") {
							describe = describe + elem.charAt(0).toUpperCase() + elem.slice(1) + txt["schema:" + elem] + "\\n"; }
						organize = "ORGANIZER";
						if (elem == "accountablePerson" || elem == "author" || elem == "creator" || elem == "instructor" || elem == "issuedBy" || elem == "organizer" || elem == "parentOrganization" || elem == "provider" || elem == "publishedBy" || elem == "publisher" || elem == "sourceOrganization" || elem == "underName") { organize = organize + ";CN=" + txt["schema:" + elem] + "\n"; }
						else if (elem == "email") { organize + ":MAILTO:" + txt["schema:" + elem] + "\n"; }
						else if (elem == "contactPoint" || elem == "faxNumber" || elem == "telephone") { organize = organize + ":TEL:" + txt["schema:" + elem] + "\n"; }
						if (elem == "availabilityStarts" || elem == "availableFrom" || elem == "byMonth" || elem == "byMonthDay" || elem == "checkinTime" || elem == "datePublished" || elem == "departureTime" || elem == "doorTime" || elem == "doseSchedule" || elem == "opens" || elem == "startDate" || elem == "validFrom" || elem == "bookingTime") { datestart = "DTSTART;VALUE=DATE:" + txt["schema:" + elem].replace(/\//g,"").replace(/-/g,"") + "\n"; }
						if (elem == "arrivalTime" || elem == "availabilityEnds" || elem == "availableThrough" || elem == "checkoutTime" || elem == "closes" || elem == "dropoffTime" || elem == "endDate" || elem == "expires" || elem == "frequency" || elem == "pickupTime" || elem == "priceValidUntil" || elem == "repeatCount" || elem == "validThrough") { dateend = "DTEND;VALUE=DATE:" + txt["schema:" + elem].replace(/\//g,"").replace(/-/g,"") + "\n"; }
						if (elem == "address" || elem == "areaServed" || elem == "availableAtOrFrom" || elem == "contentLocation" || elem == "dropoffLocation" || elem == "itinerary" || elem == "location" || elem == "pickupLocation") { location = "LOCATION:" + txt["schema:" + elem] + "\n"; }
						if (elem == "url") { url = "URL:" + txt["schema:" + elem] + "\n"; } } }
				address = address + summary + describe + organize + datestart + dateend + location + url;
				let year = new Date().getFullYear(); let month = new Date().getMonth() + 1; let day = new Date().getDate();
				if (month < 10) { month = "0" + month; } if (day < 10) { day = "0" + day; }
				let hours = new Date().getHours(); let mins = new Date().getMinutes(); let secs = new Date().getSeconds();
				if (hours < 10) { hours = "0" + hours; } if (mins < 10) { mins = "0" + mins; } if (secs < 10) { secs = "0" + secs; }
				address = address + "DTSTAMP:" + year + month + day + "T" + hours + mins + secs + "Z\n" +
									"UID:" + random(20) + "\n" +
									"END:VEVENT\n" +
									"END:VCALENDAR";
				let paragraph = document.createElement("p");
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (iCal)";
				button.addEventListener("click", function(){ download("iCal.ics", "text/calendar", address); }, false);
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(button);
		} }
	}
})();
(function game(){
	// Game (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Game","gameEdition","VideoGame","VideoGameClip","VideoGameSeries"];
	const array = ["about","alternateName","alternativeHeadline","name","character","numberOfPlayers","identifier","author","contributor","creator","producer","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["ign","gamespot","boardgamegeek","google","ebay"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let char = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "character") { char = "Character:" + prop[x].innerHTML + ","; }
							if (elem == "numberOfPlayers") { players = "Players:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + char + players + ident + author + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Game"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "ign") {
					anchor.setAttribute("href","https://www.ign.com/search?q=" + address);
					} else if (acronym == "gamespot" ) {
					anchor.setAttribute("href","https://www.gamespot.com/search/?i=&q=" + address);
					} else if (acronym == "boardgamegeek" ) {
					anchor.setAttribute("href","https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=1249&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let char = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "character") { char = "Character:" + prop[x].innerHTML + ","; }
							if (elem == "numberOfPlayers") { players = "Players:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + char + players + ident + author + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Game"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "ign") {
					anchor.setAttribute("href","https://www.ign.com/search?q=" + address);
					} else if (acronym == "gamespot" ) {
					anchor.setAttribute("href","https://www.gamespot.com/search/?i=&q=" + address);
					} else if (acronym == "boardgamegeek" ) {
					anchor.setAttribute("href","https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=1249&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let char = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "character") { char = "Character:" + txt["schema:" + elem] + ","; }
						if (elem == "numberOfPlayers") { players = "Players:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + char + players + ident + author + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Game"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "ign") {
					anchor.setAttribute("href","https://www.ign.com/search?q=" + address);
					} else if (acronym == "gamespot" ) {
					anchor.setAttribute("href","https://www.gamespot.com/search/?i=&q=" + address);
					} else if (acronym == "boardgamegeek" ) {
					anchor.setAttribute("href","https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=1249&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function general(){
	// General (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Blog", "BlogPosting", "LiveBlogPosting", "BusOrCoach","Car","CreativeWork","FloorPlan","Guide","HyperToc","HyperTocEntry","LearningResource","Motorcycle","MotorizedBicycle","Newspaper","Periodical","Product","ProductGroup","PronounceableText","Quotation","SolveMathAction","SpecialAnnouncement","Vehicle"];
	const array = ["about","alternateName","alternativeHeadline","name","color","itemCondition","numberOfDoors","seatingCapacity","vehicleSeatingCapacity","identifier","issn","model","author","brand","contributor","creator","producer","spokenByCharacter","copyrightYear","dateCreated","datePublished","endDate","modelDate","productionDate","startDate","vehicleModelDate","genre","accountablePerson","copyrightHolder","manufacturer","provider","publication","publisher","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange", "phoneticText", "textValue","abstract","accessibilitySummary","archivedAt","award","citation","text","positiveNotes","negativeNotes","url","gettingTestedInfo","diseasePreventionInfo","newsUpdatesAndGuidelines","publicTransportClosuresInfo","quarantineGuidelines","schoolClosuresInfo","travelBans","eduQuestionType"];
	const service = ["google","duckduckgo","bing","swisscows","quant"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let color = ""; let condition = ""; let doors = ""; let capacity = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let txt = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "color") { color = "Color:" + prop[x].innerHTML + ","; }
							if (elem == "itemCondition") { condition = "Condition:" + prop[x].innerHTML + ","; }
							if (elem == "numberOfDoors") { doors = "Doors:" + prop[x].innerHTML + ","; }
							if (elem == "seatingCapacity" || elem == "vehicleSeatingCapacity") { capacity = "Capacity:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "issn" || elem == "model") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "brand" || elem == "contributor" || elem == "creator" || elem == "producer" || elem == "spokenByCharacter") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished" || elem == "endDate" || elem == "modelDate" || elem == "productionDate" || elem == "startDate" || elem == "vehicleModelDate") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "manufacturer" || elem == "provider" || elem == "publication" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; }
							if (elem == "phoneticText" || elem == "textValue") { ident = "Spoken:" + prop[x].innerHTML + ","; }
							if (elem == "award") { ident = "Award:" + prop[x].innerHTML + ","; }
							if (elem == "citation") { ident = "Citation:" + prop[x].innerHTML + ","; }
							if (elem == "text") { txt = "Content:" + prop[x].innerHTML + ","; }
							if (elem == "positiveNotes" || elem == "negativeNotes") { capacity = "Notes:" + prop[x].innerHTML + ","; }
							if (elem == "gettingTestedInfo" | elem == "diseasePreventionInfo" | elem == "quarantineGuidelines") { txt = "Details:" + prop[x].getAttribute("href") + ","; }
							if (elem == "eduQuestionType") { txt = "Type:" + prop[x].innerHTML + ","; }
							if (elem == "newsUpdatesAndGuidelines" | elem == "publicTransportClosuresInfo" | elem == "schoolClosuresInfo" | elem == "travelBans") { txt = "Alert:" + prop[x].getAttribute("href") + ","; }
							if (elem == "url") { txt = "Website:" + prop[x].getAttribute("href") + ","; } } } }
				address = title + color + condition + doors + capacity + players + ident + author + year + genre + copyright + rating + txt;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Now"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "google") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "duckduckgo" ) {
					anchor.setAttribute("href","https://duckduckgo.com/?q=" + address);
					} else if (acronym == "bing" ) {
					anchor.setAttribute("href","https://www.bing.com/search?q=" + address);
					} else if (acronym == "swisscows" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://swisscows.ch/web?query=" + address);
					} else if (acronym == "quant" ) {
					anchor.setAttribute("href","https://www.qwant.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let color = ""; let condition = ""; let doors = ""; let capacity = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let txt = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "color") { color = "Color:" + prop[x].innerHTML + ","; }
							if (elem == "itemCondition") { condition = "Condition:" + prop[x].innerHTML + ","; }
							if (elem == "numberOfDoors") { doors = "Doors:" + prop[x].innerHTML + ","; }
							if (elem == "seatingCapacity" || elem == "vehicleSeatingCapacity") { capacity = "Capacity:" + prop[x].innerHTML + ","; }
							if (elem == "identifier" || elem == "issn" || elem == "model") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "brand" || elem == "contributor" || elem == "creator" || elem == "producer" || elem == "spokenByCharacter") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished" || elem == "endDate" || elem == "modelDate" || elem == "productionDate" || elem == "startDate" || elem == "vehicleModelDate") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "manufacturer" || elem == "provider" || elem == "publication" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; }
							if (elem == "phoneticText" || elem == "textValue") { ident = "Spoken:" + prop[x].innerHTML + ","; }
							if (elem == "award") { ident = "Award:" + prop[x].innerHTML + ","; }
							if (elem == "citation") { ident = "Citation:" + prop[x].innerHTML + ","; }
							if (elem == "text") { txt = "Content:" + prop[x].innerHTML + ","; }
							if (elem == "positiveNotes" || elem == "negativeNotes") { capacity = "Notes:" + prop[x].innerHTML + ","; }
							if (elem == "gettingTestedInfo" | elem == "diseasePreventionInfo" | elem == "quarantineGuidelines") { txt = "Pandemic Info:" + prop[x].getAttribute("href") + ","; }
							if (elem == "eduQuestionType") { txt = "Type:" + prop[x].innerHTML + ","; }
							if (elem == "newsUpdatesAndGuidelines" | elem == "publicTransportClosuresInfo" | elem == "schoolClosuresInfo" | elem == "travelBans") { txt = "Alert:" + prop[x].getAttribute("href") + ","; }
							if (elem == "url") { txt = "Website:" + prop[x].getAttribute("href") + ","; } } } }
				address = title + color + condition + doors + capacity + players + ident + author + year + genre + copyright + rating + txt;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Now"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "google") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "duckduckgo" ) {
					anchor.setAttribute("href","https://duckduckgo.com/?q=" + address);
					} else if (acronym == "bing" ) {
					anchor.setAttribute("href","https://www.bing.com/search?q=" + address);
					} else if (acronym == "swisscows" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://swisscows.ch/web?query=" + address);
					} else if (acronym == "quant" ) {
					anchor.setAttribute("href","https://www.qwant.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let color = ""; let condition = ""; let doors = ""; let capacity = ""; let players = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let txt = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "color") { color = "Color:" + txt["schema:" + elem] + ","; }
						if (elem == "itemCondition") { condition = "Condition:" + txt["schema:" + elem] + ","; }
						if (elem == "numberOfDoors") { doors = "Doors:" + txt["schema:" + elem] + ","; }
						if (elem == "seatingCapacity" || elem == "vehicleSeatingCapacity") { capacity = "Capacity:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier" || elem == "issn" || elem == "model") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "brand" || elem == "contributor" || elem == "creator" || elem == "producer" || elem == "spokenByCharacter") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished" || elem == "endDate" || elem == "modelDate" || elem == "productionDate" || elem == "startDate" || elem == "vehicleModelDate") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "manufacturer" || elem == "provider" || elem == "publication" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; }
						if (elem == "phoneticText" || elem == "textValue") { ident = "Spoken:" + txt["schema:" + elem] + ","; }
						if (elem == "award") { ident = "Award:" + txt["schema:" + elem] + ","; }
						if (elem == "citation") { ident = "Citation:" + txt["schema:" + elem] + ","; }
						if (elem == "text") { txt = "Content:" + txt["schema:" + elem] + ","; }
						if (elem == "positiveNotes" || elem == "negativeNotes") { capacity = "Notes:" + prop[x].innerHTML + ","; }
						if (elem == "gettingTestedInfo" | elem == "diseasePreventionInfo" | elem == "quarantineGuidelines") { txt = "Pandemic Info:" + txt["schema:" + elem] + ","; }
						if (elem == "eduQuestionType") { txt = "Type:" + txt["schema:" + elem] + ","; }
						if (elem == "newsUpdatesAndGuidelines" | elem == "publicTransportClosuresInfo" | elem == "schoolClosuresInfo" | elem == "travelBans") { txt = "Alert:" + txt["schema:" + elem] + ","; }
						if (elem == "url") { txt = "Website:" + txt["schema:" + elem] + ","; } } }
				address = title + color + condition + doors + capacity + players + ident + author + year + genre + copyright + rating + txt;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Now"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "google") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "duckduckgo" ) {
					anchor.setAttribute("href","https://duckduckgo.com/?q=" + address);
					} else if (acronym == "bing" ) {
					anchor.setAttribute("href","https://www.bing.com/search?q=" + address);
					} else if (acronym == "swisscows" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://swisscows.ch/web?query=" + address);
					} else if (acronym == "quant" ) {
					anchor.setAttribute("href","https://www.qwant.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function maps(){
	// Maps (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["AdministrativeArea","AutomatedTeller","Beach","BodyOfWater","Bridge","BusStop","Canal","Cemetery","City","Continent","Country","DefinedRegion","GeoCoordinates","LakeBodyOfWater","LandmarksOrHistoricalBuildings","Map","Mountain","OceanBodyOfWater","Park","ParkingMap","Playground","Pond","PostalAddress","PublicToilet","Reservoir","RiverBodyOfWater","SeaBodyOfWater","SeatingMap","State","TouristDestination","TransitMap","VenueMap","Volcano","Waterfall"];
	const array = ["address","areaServed","billingAddress","contentLocation","deliveryAddress","foundingLocation","hasMap","geo","geographicArea","latitude","locationCreated","longitude","addressCountry","addressLocality","addressRegion","postalCode","postOfficeBoxNumber","streetAddress","postalCodePrefix"];
	const service = ["g-maps","apple-maps","openstreetmaps","bing-maps","wego-here"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let geo = ""; let pobox = ""; let street = ""; let locale = ""; let region = ""; let postcode = ""; let country = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "address" || elem == "areaServed" || elem == "billingAddress" || elem == "contentLocation" || elem == "deliveryAddress" || elem == "foundingLocation" || elem == "hasMap" || elem == "geo" || elem == "geographicArea" || elem == "locationCreated") { geo = prop[x].innerHTML + ","; }
							if (elem == "postOfficeBoxNumber") { pobox = prop[x].innerHTML + ","; }
							if (elem == "streetAddress") { street = prop[x].innerHTML + ","; }
							if (elem == "addressLocality") { locale = prop[x].innerHTML + ","; }
							if (elem == "addressRegion") { region = prop[x].innerHTML + ","; }
							if (elem == "postalCode" || elem == "postalCodePrefix") { postcode = prop[x].innerHTML + ","; }
							if (elem == "addressCountry") { country = prop[x].innerHTML + ","; } } } }
				address = geo + pobox + street + locale + region + postcode + country;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find On Map"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "g-maps") {
					anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
					} else if (acronym == "apple-maps" ) {
					anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
					} else if (acronym == "openstreetmaps" ) {
					anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
					} else if (acronym == "bing-maps" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
					} else if (acronym == "wego-here" ) {
					anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let geo = ""; let pobox = ""; let street = ""; let locale = ""; let region = ""; let postcode = ""; let country = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "address" || elem == "areaServed" || elem == "billingAddress" || elem == "contentLocation" || elem == "deliveryAddress" || elem == "foundingLocation" || elem == "hasMap" || elem == "geo" || elem == "geographicArea" || elem == "locationCreated") { geo = prop[x].innerHTML + ","; }
							if (elem == "postOfficeBoxNumber") { pobox = prop[x].innerHTML + ","; }
							if (elem == "streetAddress") { street = prop[x].innerHTML + ","; }
							if (elem == "addressLocality") { locale = prop[x].innerHTML + ","; }
							if (elem == "addressRegion") { region = prop[x].innerHTML + ","; }
							if (elem == "postalCode") { postcode = prop[x].innerHTML + ","; }
							if (elem == "addressCountry") { country = prop[x].innerHTML + ","; } } } }
				address = geo + pobox + street + locale + region + postcode + country;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find On Map"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "g-maps") {
					anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
					} else if (acronym == "apple-maps" ) {
					anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
					} else if (acronym == "openstreetmaps" ) {
					anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
					} else if (acronym == "bing-maps" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
					} else if (acronym == "wego-here" ) {
					anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let geo = ""; let pobox = ""; let street = ""; let locale = ""; let region = ""; let postcode = ""; let country = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "address" || elem == "areaServed" || elem == "billingAddress" || elem == "contentLocation" || elem == "deliveryAddress" || elem == "foundingLocation" || elem == "hasMap" || elem == "geo" || elem == "geographicArea" || elem == "locationCreated") { geo = txt["schema:" + elem] + ","; }
						if (elem == "postOfficeBoxNumber") { pobox = txt["schema:" + elem] + ","; }
						if (elem == "streetAddress") { street = txt["schema:" + elem] + ","; }
						if (elem == "addressLocality") { locale = txt["schema:" + elem] + ","; }
						if (elem == "addressRegion") { region = txt["schema:" + elem] + ","; }
						if (elem == "postalCode") { postcode = txt["schema:" + elem] + ","; }
						if (elem == "addressCountry") { country = txt["schema:" + elem] + ","; } } }
				address = geo + pobox + street + locale + region + postcode + country;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find On Map"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "g-maps") {
					anchor.setAttribute("href","https://www.google.com/maps/place/?q=" + address);
					} else if (acronym == "apple-maps" ) {
					anchor.setAttribute("href","http://maps.apple.com/?ll=" + address);
					} else if (acronym == "openstreetmaps" ) {
					anchor.setAttribute("href","https://www.openstreetmap.org/search?query=" + address);
					} else if (acronym == "bing-maps" ) {
					address = address.replace(", ","~");
					anchor.setAttribute("href","https://bing.com/maps/default.aspx?cp=" + address);
					} else if (acronym == "wego-here" ) {
					anchor.setAttribute("href","https://wego.here.com/?x=ep&map=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function media(){
	// Media (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Clip","Episode","ImageGallery","MediaGallery","MediaReview","Movie","MovieClip","MovieSeries","TVClip","TVEpisode","TVSeries","VideoGallery"];
	const array = ["about","alternateName","alternativeHeadline","name","partOfSeason","partOfSeries","episodeNumber","actor","character","director","author","contributor","creator","producer","identifier","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange","mediaAuthenticityCategory"];
	const service = ["imdb","tmdb","rt"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + prop[x].innerHTML + ","; }
							if (elem == "episodeNumber") { epsiode = "Episode:" + prop[x].innerHTML + ","; }
							if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre" || elem == "mediaAuthenticityCategory") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + season + epsiode + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Media"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "imdb") {
					anchor.setAttribute("href","https://www.imdb.com/find?ref_=" + address);
					} else if (acronym == "tmdb" ) {
					anchor.setAttribute("href","https://www.themoviedb.org/search?query=" + address);
					} else if (acronym == "rt" ) {
					anchor.setAttribute("href","https://www.rottentomatoes.com/search/?search=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + prop[x].innerHTML + ","; }
							if (elem == "episodeNumber") { epsiode = "Episode:" + prop[x].innerHTML + ","; }
							if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre" || elem == "mediaAuthenticityCategory") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + season + epsiode + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Media"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "imdb") {
					anchor.setAttribute("href","https://www.imdb.com/find?ref_=" + address);
					} else if (acronym == "tmdb" ) {
					anchor.setAttribute("href","https://www.themoviedb.org/search?query=" + address);
					} else if (acronym == "rt" ) {
					anchor.setAttribute("href","https://www.rottentomatoes.com/search/?search=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + txt["schema:" + elem] + ","; }
						if (elem == "episodeNumber") { epsiode = "Episode:" + txt["schema:" + elem] + ","; }
						if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre" || elem == "mediaAuthenticityCategory") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + season + epsiode + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Media"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "imdb") {
					anchor.setAttribute("href","https://www.imdb.com/find?ref_=" + address);
					} else if (acronym == "tmdb" ) {
					anchor.setAttribute("href","https://www.themoviedb.org/search?query=" + address);
					} else if (acronym == "rt" ) {
					anchor.setAttribute("href","https://www.rottentomatoes.com/search/?search=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function movie(){
	// Movie
	// https://schema.org/docs/full.html
	const arr = ["DVDFormat","LaserDiscFormat"];
	const array = ["about","alternateName","alternativeHeadline","name","actor","character","director","author","contributor","creator","producer","identifier","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["amazon","netflix","google","itunes","ebay"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find DVD"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.itunes.apple.com/us/movie/" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=617&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find DVD"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.itunes.apple.com/us/movie/" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=617&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let ident = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "actor" || elem == "character" || elem == "director") { person = person + "Person:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + person + author + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find DVD"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address);
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.itunes.apple.com/us/movie/" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=617&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function music(){
	// Music (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["AlbumRelease","CassetteFormat","CDFormat","CompilationAlbum","DigitalAudioTapeFormat","DJMixAlbum","DemoAlbum","EPRelease","LiveAlbum","MixtapeAlbum","MusicAlbum","MusicComposition","MusicRecording","MusicRelease","RemixAlbum","SingleRelease","SoundtrackAlbum","SpokenWordAlbum","StudioAlbum","VinylFormat"];
	const array = ["about","albumRelease","alternateName","alternativeHeadline","inAlbum","name","releaseOf","track","byArtist","composer","creditedTo","lyricist","author","contributor","creator","producer","musicReleaseFormat","identifier","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","recordLabel","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange"];
	const service = ["spotify","itunes","amazon","youtube","ebay"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let format = ""; let ident = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "albumRelease" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "inAlbum" || elem == "name" || elem == "releaseOf" || elem == "track") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "byArtist" || elem == "composer" || elem == "creditedTo" || elem == "lyricist") { person = person + "Artist:" + prop[x].innerHTML + ",";  }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "musicReleaseFormat") { format = "Format:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "recordLabel" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + person + author + format + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Music"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "spotify") {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/" + address);
					} else if (acronym == "amazon" ) {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=popular");
					} else if (acronym == "youtube" ) {
					anchor.setAttribute("href","https://www.youtube.com/results?search_query=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=11233&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let format = ""; let ident = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "albumRelease" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "inAlbum" || elem == "name" || elem == "releaseOf" || elem == "track") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "byArtist" || elem == "composer" || elem == "creditedTo" || elem == "lyricist") { person = person + "Artist:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "musicReleaseFormat") { format = "Format:" + prop[x].innerHTML + ","; }
							if (elem == "identifier") { ident = "Code:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "recordLabel" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; } } } }
				address = title + person + author + format + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Music"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "spotify") {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/" + address);
					} else if (acronym == "amazon" ) {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=popular");
					} else if (acronym == "youtube" ) {
					anchor.setAttribute("href","https://www.youtube.com/results?search_query=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=11233&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let format = ""; let ident = ""; let year = ""; let genre = ""; let copyright = ""; let rating = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "albumRelease" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "inAlbum" || elem == "name" || elem == "releaseOf" || elem == "track") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "byArtist" || elem == "composer" || elem == "creditedTo" || elem == "lyricist") { person = person + "Artist:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "musicReleaseFormat") { format = "Format:" + txt["schema:" + elem] + ","; }
						if (elem == "identifier") { ident = "Code:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "recordLabel" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; } } }
				address = title + person + author + format + ident + year + genre + copyright + rating;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Music"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "spotify") {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/" + address);
					} else if (acronym == "amazon" ) {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=popular");
					} else if (acronym == "youtube" ) {
					anchor.setAttribute("href","https://www.youtube.com/results?search_query=" + address);
					} else if (acronym == "ebay" ) {
					anchor.setAttribute("href","https://www.ebay.com/sch/i.html?_nkw=&LH_BIN=1&_sacat=11233&_nkw=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function organization(){
	// Organization (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Accommodation","AccountingService","AdultEntertainment","Airline","Airport","AmusementPark","AnimalShelter","Apartment","ApartmentComplex","Aquarium","ArchiveOrganization","ArtGallery","Attorney","AutoBodyShop","AutoDealer","AutomotiveBusiness","AutoPartsStore","AutoRental","AutoRepair","AutoWash","Bakery","BankOrCreditUnion","BarOrPub","BeautySalon","BedAndBreakfast","BikeStore","BoatTerminal","BookStore","BowlingAlley","Brewery","BuddhistTemple","BusStation","CafeOrCoffeeShop","Campground","CampingPitch","Casino","CatholicChurch","ChildCare","Church","CityHall","CivicStructure","ClothingStore","CollegeOrUniversity","ComedyClub","CommunityHealth","ComputerStore","Consortium","ContactPoint","ConvenienceStore","Corporation","Courthouse","Crematorium","DanceGroup","DaySpa","DefenceEstablishment","Dentist","DepartmentStore","Dermatology","DiagnosticLab","DietNutrition","Distillery","DryCleaningOrLaundry","EducationalOrganization","Electrician","ElectronicsStore","ElementarySchool","Embassy","Emergency","EmergencyService","EmploymentAgency","EntertainmentBusiness","EventVenue","ExerciseGym","FastFoodRestaurant","FinancialService","FireStation","Florist","FoodEstablishment","FundingAgency","FundingScheme","FurnitureStore","GardenStore","GasStation","GatedResidenceCommunity","GeneralContractor","Geriatric","GolfCourse","GovernmentBuilding","GovernmentOffice","GovernmentOrganization","GroceryStore","Gynecologic","HairSalon","HardwareStore","HealthAndBeautyBusiness","HealthClub","HearingImpairedSupported","HighSchool","HinduTemple","HobbyShop","HomeAndConstructionBusiness","HomeGoodsStore","Hospital","Hostel","Hotel","HotelRoom","House","HousePainter","HVACBusiness","IceCreamShop","InsuranceAgency","InternetCafe","JewelryStore","JobPosting","LegalService","LegislativeBuilding","Library","LiquorStore","LocalBusiness","Locksmith","LodgingBusiness","MedicalBusiness","MedicalClinic","MedicalOrganization","MeetingRoom","MensClothingStore","MiddleSchool","Midwifery","MobilePhoneStore","Mosque","Motel","MotorcycleDealer","MotorcycleRepair","MovieRentalStore","MovieTheater","MovingCompany","Museum","MusicGroup","MusicStore","MusicVenue","NailSalon","NewsMediaOrganization","NGO","NightClub","Notary","Nursing","Obstetric","OfficeEquipmentStore","Oncologic","OnlineBusiness","OnlineStore","Optician","Optometric","Otolaryngologic","OutletStore","ParkingFacility","PawnShop","Pediatric","PerformingArtsTheater","PerformingGroup","PetStore","Pharmacy","Physician","Physiotherapy","PlaceOfWorship","PlasticSurgery","Plumber","Podiatric","PoliceStation","PostOffice","Preschool","PrimaryCare","ProfessionalService","Psychiatric","PublicHealth","PublicSwimmingPool","RadioStation","RealEstateAgent","RecyclingCenter","ResearchOrganization","Residence","Resort","Restaurant","RoofingContractor","Room","RVPark","School","SchoolDistrict","SelfStorage","ShoeStore","ShoppingCenter","SingleFamilyResidence","SkiResort","SportingGoodsStore","SportsActivityLocation","SportsClub","SportsOrganization","SportsTeam","StadiumOrArena","Store","SubwayStation","Suite","Synagogue","TattooParlor","TaxiStand","TelevisionStation","TennisComplex","TheaterGroup","TireShop","TollFree","TouristAttraction","TouristInformationCenter","ToyStore","TrainStation","TravelAgency","VeterinaryCare","WebSite","WholesaleStore","Winery","WorkersUnion","Zoo"];
	const array = ["about","accountablePerson","alternateName","applicationContact","directApply","jobLocation","hiringOrganization","athlete","author","coach","copyrightHolder","creator","employee","founder","name","producer","publisher","brand","department","legalName","parentOrganization","provider","sourceOrganization","copyrightYear","dateCreated","foundingDate","contactPoint","telephone","faxNumber","address","areaServed","foundingLocation","returnPolicyCountry","geo","hasMap","location","locationCreated","email","note","url"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address =   "BEGIN:VCARD\n" +
								"VERSION:3.0\n" +
								"PRODID:-//SW Hook//EN\n";
				let fullname = ""; let business = ""; let birthday = ""; let phone = ""; let fax = ""; let addr = ""; let email = ""; let website = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "accountablePerson" || elem == "alternateName" || elem == "athlete" || elem == "author" || elem == "coach" || elem == "copyrightHolder" || elem == "creator" || elem == "employee" || elem == "founder" || elem == "name" || elem == "producer" || elem == "publisher") { fullname = "FN:" + prop[x].innerHTML + "\n"; }
							if (elem == "brand" || elem == "department" || elem == "legalName" || elem == "parentOrganization" || elem == "provider" || elem == "sourceOrganization" || elem == "hiringOrganization") { business = "ORG:" + prop[x].innerHTML + "\n"; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "foundingDate") { birthday = "BDAY:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "contactPoint" || elem == "telephone" || elem == "applicationContact") { phone = "TEL;type=MAIN;type=VOICE:" + prop[x].innerHTML.replace(/\./g,"") + "\n"; }
							if (elem == "faxNumber") { fax = "TEL;type=WORK;type=FAX:" + prop[x].innerHTML.replace(/\./g,"") + "\n"; }
							if (elem == "address" || elem == "areaServed" || elem == "foundingLocation" || elem == "returnPolicyCountry" || elem == "geo" || elem == "hasMap" || elem == "location" || elem == "locationCreated" || elem == "jobLocation") { addr = "ADR;type=WORK:;;" + prop[x].innerHTML + "\n"; }
							if (elem == "email") { email = ("EMAIL;type=WORK;type=INTERNET:" + prop[x].innerHTML + "\n").replace("mailto:",""); }
							if (elem == "url" || elem == "directApply") { website = "URL:" + prop[x].getAttribute("href") + "\n"; } } } }
				address = address + fullname + business + birthday + phone + fax + addr + email + website + "END:VCARD";
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (vCard)";
				button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", address); }, false);
				mData[i].appendChild(button);
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address =   "BEGIN:VCARD\n" +
								"VERSION:3.0\n" +
								"PRODID:-//SW Hook//EN\n";
				let fullname = ""; let business = ""; let birthday = ""; let phone = ""; let fax = ""; let addr = ""; let email = ""; let website = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "accountablePerson" || elem == "alternateName" || elem == "athlete" || elem == "author" || elem == "coach" || elem == "copyrightHolder" || elem == "creator" || elem == "employee" || elem == "founder" || elem == "name" || elem == "producer" || elem == "publisher") { fullname = "FN:" + prop[x].innerHTML + "\n"; }
							if (elem == "brand" || elem == "department" || elem == "legalName" || elem == "parentOrganization" || elem == "provider" || elem == "sourceOrganization") { business = "ORG:" + prop[x].innerHTML + "\n"; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "foundingDate") { birthday = "BDAY:" + prop[x].innerHTML.replace(/\//g,"").replace(/-/g,"") + "\n"; }
							if (elem == "contactPoint" || elem == "telephone") { phone = "TEL;type=MAIN;type=VOICE:" + prop[x].innerHTML.replace(/\./g,"") + "\n"; }
							if (elem == "faxNumber") { fax = "TEL;type=WORK;type=FAX:" + prop[x].innerHTML.replace(/\./g,"") + "\n"; }
							if (elem == "address" || elem == "areaServed" || elem == "foundingLocation" || elem == "geo" || elem == "hasMap" || elem == "location" || elem == "locationCreated") { addr = "ADR;type=WORK:;;" + prop[x].innerHTML + "\n"; }
							if (elem == "email") { email = ("EMAIL;type=WORK;type=INTERNET:" + prop[x].innerHTML + "\n").replace("mailto:",""); }
							if (elem == "url") { website = "URL:" + prop[x].getAttribute("href") + "\n"; } } } }
				address = address + fullname + business + birthday + phone + fax + addr + email + website + "END:VCARD";
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (vCard)";
				button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", address); }, false);
				rdf[i].appendChild(button);
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address =   "BEGIN:VCARD\n" +
								"VERSION:3.0\n" +
								"PRODID:-//SW Hook//EN\n";
				let fullname = ""; let business = ""; let birthday = ""; let phone = ""; let fax = ""; let addr = ""; let email = ""; let website = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "accountablePerson" || elem == "alternateName" || elem == "athlete" || elem == "author" || elem == "coach" || elem == "copyrightHolder" || elem == "creator" || elem == "employee" || elem == "founder" || elem == "name" || elem == "producer" || elem == "publisher") { fullname = "FN:" + txt["schema:" + elem] + "\n"; }
						if (elem == "brand" || elem == "department" || elem == "legalName" || elem == "parentOrganization" || elem == "provider" || elem == "sourceOrganization") { business = "ORG:" + txt["schema:" + elem] + "\n"; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "foundingDate") { birthday = "BDAY:" + txt["schema:" + elem].replace(/\//g,"").replace(/-/g,"") + "\n"; }
						if (elem == "contactPoint" || elem == "telephone") { phone = "TEL;type=MAIN;type=VOICE:" + txt["schema:" + elem].replace(/\./g,"") + "\n"; }
						if (elem == "faxNumber") { fax = "TEL;type=WORK;type=FAX:" + txt["schema:" + elem].replace(/\./g,"") + "\n"; }
						if (elem == "address" || elem == "areaServed" || elem == "foundingLocation" || elem == "geo" || elem == "hasMap" || elem == "location" || elem == "locationCreated") { addr = "ADR;type=WORK:;;" + txt["schema:" + elem] + "\n"; }
						if (elem == "email") { email = ("EMAIL;type=WORK;type=INTERNET:" + txt["schema:" + elem] + "\n").replace("mailto:",""); }
						if (elem == "url") { website = "URL:" + txt["schema:" + elem] + "\n"; } } }
				address = address + fullname + business + birthday + phone + fax + addr + email + website + "END:VCARD";
				let paragraph = document.createElement("p");
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Download (vCard)";
				button.addEventListener("click", function(){ download("vCard.vcf", "text/vcard", address); }, false);
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(button);
		} }
	}
})();
(function radio(){
	// Radio (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["RadioEpisode","RadioSeries"];
	const array = ["about","alternateName","alternativeHeadline","name","episodeNumber","partOfSeason","partOfSeries","author","contributor","creator","producer","copyrightYear","dateCreated","datePublished","genre","accountablePerson","copyrightHolder","provider","publisher","sourceOrganization","contentRating","isFamilyFriendly","typicalAgeRange","url"];
	const service = ["rss","itunes","spotify","g-play","android"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let url = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + prop[x].innerHTML + ","; }
							if (elem == "episodeNumber") { epsiode = "Episode:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; }
							if (elem == "url") { url = prop[x].getAttribute("href"); } } } }
				if (url != "") { address = url; } { address = title + season + epsiode + author + year + genre + copyright + rating; }
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Movie"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "rss" || acronym == "g-play" || acronym == "android") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://podcasts.apple.com/us/podcast/" + address);
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address + "/podcasts"); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let url = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + ","; }
							if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + prop[x].innerHTML + ","; }
							if (elem == "episodeNumber") { epsiode = "Episode:" + prop[x].innerHTML + ","; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + ","; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + ","; }
							if (elem == "genre") { genre = "Genre:" + prop[x].innerHTML + ","; }
							if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + prop[x].innerHTML + ","; }
							if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + prop[x].innerHTML; }
							if (elem == "url") { url = prop[x].getAttribute("href"); } } } }
				if (url != "") { address = url; } { address = title + season + epsiode + author + year + genre + copyright + rating; }
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Movie"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "rss" || acronym == "g-play" || acronym == "android") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://podcasts.apple.com/us/podcast/" + address);
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address + "/podcasts"); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let season = ""; let epsiode = ""; let author = ""; let year = ""; let genre = ""; let copyright = ""; let rating = ""; let url = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + ","; }
						if (elem == "partOfSeason" || elem == "partOfSeries") { season = "Season:" + txt["schema:" + elem] + ","; }
						if (elem == "episodeNumber") { epsiode = "Episode:" + txt["schema:" + elem] + ","; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + ","; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + ","; }
						if (elem == "genre") { genre = "Genre:" + txt["schema:" + elem] + ","; }
						if (elem == "accountablePerson" || elem == "copyrightHolder" || elem == "provider" || elem == "publisher" || elem == "sourceOrganization") { copyright = "Copyright:" + txt["schema:" + elem] + ","; }
						if (elem == "contentRating" || elem == "isFamilyFriendly" || elem == "typicalAgeRange") { rating = "Rating:" + txt["schema:" + elem]; }
						if (elem == "url") { url = txt["schema:" + elem]; } } }
				if (url != "") { address = url; } { address = title + season + epsiode + author + year + genre + copyright + rating; }
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Movie"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "rss" || acronym == "g-play" || acronym == "android") {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "itunes" ) {
					anchor.setAttribute("href","https://podcasts.apple.com/us/podcast/" + address);
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address + "/podcasts"); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function recipe(){
	// Recipe (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Recipe"];
	// "fn","author","published","summary","nutrition","duration","yield","ingredient","instructions"
	const array = ["about","alternateName","alternativeHeadline","name","author","contributor","creator","producer","copyrightYear","dateCreated","datePublished","headline","description","text","recipeCuisine","recipeCategory","suitableForDiet","nutrition","cookTime","totalTime","recipeYield","yield","estimatedCost","recipeIngredient","recipeInstructions"];
	const service = ["paprika","bigoven","yummly","allrecipes","mycookbook"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let year = ""; let summary = ""; let category = ""; let diet = ""; let nutrition = ""; let time = ""; let amount = ""; let cost = ""; let ingredient = ""; let instruct = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + "\n"; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + "\n"; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + "\n"; }
							if (elem == "headline" || elem == "description" || elem == "text") { summary = "Summary:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeCuisine" || elem == "recipeCategory") { category = "Category:" + prop[x].innerHTML + "\n"; }
							if (elem == "suitableForDiet") { diet = "Diet:" + prop[x].innerHTML + "\n"; }
							if (elem == "nutrition") { diet = "Nutrition:" + prop[x].innerHTML + "\n"; }
							if (elem == "cookTime" || elem == "totalTime") { time = "Time:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeYield" || elem == "yield") { amount = "Yield:" + prop[x].innerHTML + "\n"; }
							if (elem == "estimatedCost") { cost = "Cost:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeIngredient") { ingredient = ingredient + "Ingredient:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeInstructions") { instruct = "Insructions:" + prop[x].innerHTML + "\n"; } } } }
				address = title + person + author + year + summary + category + diet + nutrition + time + amount + cost + ingredient + instruct;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let p1 = document.createElement("p");
				let p2 = document.createElement("p");
				let copy = document.createElement("a");
				copy.appendChild(document.createTextNode("Copy Recipe"));
				copy.setAttribute("href","#");
				copy.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = address.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				mData[i].appendChild(p1); p1.appendChild(copy);
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get App"));
				mData[i].appendChild(p2); p2.appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "paprika") {
					anchor.setAttribute("href","https://www.paprikaapp.com/");
					} else if (acronym == "bigoven" ) {
					anchor.setAttribute("href","https://www.bigoven.com/");
					} else if (acronym == "yummly" ) {
					anchor.setAttribute("href","https://www.yummly.co.uk/");
					} else if (acronym == "allrecipes" ) {
					anchor.setAttribute("href","https://www.allrecipes.com/");
					} else if (acronym == "mycookbook" ) {
					anchor.setAttribute("href","https://www.mycookbook-online.net/"); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let year = ""; let summary = ""; let category = ""; let diet = ""; let nutrition = ""; let time = ""; let amount = ""; let cost = ""; let ingredient = ""; let instruct = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + prop[x].innerHTML + "\n"; }
							if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + prop[x].innerHTML + "\n"; }
							if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + prop[x].innerHTML + "\n"; }
							if (elem == "headline" || elem == "description" || elem == "text") { summary = "Summary:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeCuisine" || elem == "recipeCategory") { category = "Category:" + prop[x].innerHTML + "\n"; }
							if (elem == "suitableForDiet") { diet = "Diet:" + prop[x].innerHTML + "\n"; }
							if (elem == "nutrition") { diet = "Nutrition:" + prop[x].innerHTML + "\n"; }
							if (elem == "cookTime" || elem == "totalTime") { time = "Time:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeYield" || elem == "yield") { amount = "Yield:" + prop[x].innerHTML + "\n"; }
							if (elem == "estimatedCost") { cost = "Cost:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeIngredient") { ingredient = ingredient + "Ingredient:" + prop[x].innerHTML + "\n"; }
							if (elem == "recipeInstructions") { instruct = "Insructions:" + prop[x].innerHTML + "\n"; } } } }
				address = title + person + author + year + summary + category + diet + nutrition + time + amount + cost + ingredient + instruct;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let p1 = document.createElement("p");
				let p2 = document.createElement("p");
				let copy = document.createElement("a");
				copy.appendChild(document.createTextNode("Copy Recipe"));
				copy.setAttribute("href","#");
				copy.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = address.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				rdf[i].appendChild(p1); p1.appendChild(copy);
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get App"));
				rdf[i].appendChild(p2); p2.appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "paprika") {
					anchor.setAttribute("href","https://www.paprikaapp.com/");
					} else if (acronym == "bigoven" ) {
					anchor.setAttribute("href","https://www.bigoven.com/");
					} else if (acronym == "yummly" ) {
					anchor.setAttribute("href","https://www.yummly.co.uk/");
					} else if (acronym == "allrecipes" ) {
					anchor.setAttribute("href","https://www.allrecipes.com/");
					} else if (acronym == "mycookbook" ) {
					anchor.setAttribute("href","https://www.mycookbook-online.net/"); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = ""; let person = ""; let author = ""; let year = ""; let summary = ""; let category = ""; let diet = ""; let nutrition = ""; let time = ""; let amount = ""; let cost = ""; let ingredient = ""; let instruct = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "about" || elem == "alternateName" || elem == "alternativeHeadline" || elem == "name") { title = "Name:" + txt["schema:" + elem] + "\n"; }
						if (elem == "author" || elem == "contributor" || elem == "creator" || elem == "producer") { author = author + "Author:" + txt["schema:" + elem] + "\n"; }
						if (elem == "copyrightYear" || elem == "dateCreated" || elem == "datePublished") { year = "Year:" + txt["schema:" + elem] + "\n"; }
						if (elem == "headline" || elem == "description" || elem == "text") { summary = "Summary:" + txt["schema:" + elem] + "\n"; }
						if (elem == "recipeCuisine" || elem == "recipeCategory") { category = "Category:" + txt["schema:" + elem] + "\n"; }
						if (elem == "suitableForDiet") { diet = "Diet:" + txt["schema:" + elem] + "\n"; }
						if (elem == "nutrition") { diet = "Nutrition:" + txt["schema:" + elem] + "\n"; }
						if (elem == "cookTime" || elem == "totalTime") { time = "Time:" + txt["schema:" + elem] + "\n"; }
						if (elem == "recipeYield" || elem == "yield") { amount = "Yield:" + txt["schema:" + elem] + "\n"; }
						if (elem == "estimatedCost") { cost = "Cost:" + txt["schema:" + elem] + "\n"; }
						if (elem == "recipeIngredient") { ingredient = ingredient + "Ingredient:" + txt["schema:" + elem] + "\n"; }
						if (elem == "recipeInstructions") { instruct = "Insructions:" + txt["schema:" + elem] + "\n"; } } }
				address = title + person + author + year + summary + category + diet + nutrition + time + amount + cost + ingredient + instruct;
				if (address[address.length -1] == ",") { address = address.slice(0, -1); }
				address = address.replace(/,,/g, "");
				let p1 = document.createElement("p");
				let p2 = document.createElement("p");
				let copy = document.createElement("a");
				copy.appendChild(document.createTextNode("Copy Recipe"));
				copy.setAttribute("href","#");
				copy.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = address.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				json[i].parentElement.appendChild(p1); p1.appendChild(copy);
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Get App"));
				json[i].parentElement.appendChild(p2); p2.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "paprika") {
					anchor.setAttribute("href","https://www.paprikaapp.com/");
					} else if (acronym == "bigoven" ) {
					anchor.setAttribute("href","https://www.bigoven.com/");
					} else if (acronym == "yummly" ) {
					anchor.setAttribute("href","https://www.yummly.co.uk/");
					} else if (acronym == "allrecipes" ) {
					anchor.setAttribute("href","https://www.allrecipes.com/");
					} else if (acronym == "mycookbook" ) {
					anchor.setAttribute("href","https://www.mycookbook-online.net/"); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();
(function source(){
	// Source (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["Code","SoftwareSourceCode"];
	const array = ["name","text"];
	const service = ["codepen","jsfiddle","dabblet","jsbin","liveweave"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let acronym;
				let name = ""; let text = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "name") { name = prop[x].innerHTML; }
							if (elem == "text") { text = prop[x].innerHTML; } } } }				
				let ref = mData[i].getAttribute("data-meta");
				let url = mData[i].getAttribute("data-url");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "codepen") {
					let anchor = document.createElement("form");
					let i1 = document.createElement("input");
					let i2 = document.createElement("input");
					mData[i].appendChild(anchor);
					anchor.setAttribute("action","https://codepen.io/pen/define");
					anchor.setAttribute("method","POST");
					anchor.setAttribute("target","_blank");
					mData[i].children[0].appendChild(i1);
					i1.setAttribute("name","data");
					i1.setAttribute("type","hidden");
					let data = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n/g, "\\n");
					let json = '{"title": ' + name + ',"description": "", "html": "' + data + '"}';
					i1.setAttribute("value",json);
					mData[i].children[0].appendChild(i2);
					i2.setAttribute("type","submit");
					i2.setAttribute("value","Send to CodePen"); } else
				if (acronym == "jsfiddle" && url != "" && url != undefined && url != null && url.startsWith("https://jsfiddle.net/") ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSFiddle"));
					mData[i].appendChild(anchor);
					anchor.setAttribute("href",url);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "dabblet" ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open Dabblet"));
					mData[i].appendChild(anchor);
					anchor.setAttribute("href","https://dabblet.com/");
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "jsbin" && url != "" && url != undefined && url != null && url.startsWith("https://jsbin.com/") ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSBin"));
					mData[i].appendChild(anchor);
					anchor.setAttribute("href",url);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "liveweave" ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Liveweave"));
					mData[i].appendChild(anchor);
					anchor.setAttribute("href","https://liveweave.com");
					anchor.setAttribute("target","_blank"); }
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Copy to Clipboard";
				button.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				mData[i].appendChild(button);
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let acronym;
				let name = ""; let text = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "name") { name = prop[x].innerHTML; }
							if (elem == "text") { text = prop[x].innerHTML; } } } }				
				let ref = rdf[i].getAttribute("data-meta");
				let url = rdf[i].getAttribute("data-url");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "codepen") {
					let anchor = document.createElement("form");
					let i1 = document.createElement("input");
					let i2 = document.createElement("input");
					rdf[i].appendChild(anchor);
					anchor.setAttribute("action","https://codepen.io/pen/define");
					anchor.setAttribute("method","POST");
					anchor.setAttribute("target","_blank");
					rdf[i].children[0].appendChild(i1);
					i1.setAttribute("name","data");
					i1.setAttribute("type","hidden");
					let data = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n/g, "\\n");
					let json = '{"title": ' + name + ',"description": "", "html": "' + data + '"}';
					i1.setAttribute("value",json);
					rdf[i].children[0].appendChild(i2);
					i2.setAttribute("type","submit");
					i2.setAttribute("value","Send to CodePen"); } else
				if (acronym == "jsfiddle" && url != "" && url != undefined && url != null && url.startsWith("https://jsfiddle.net/") ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSFiddle"));
					rdf[i].appendChild(anchor);
					anchor.setAttribute("href",url);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "dabblet" ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open Dabblet"));
					rdf[i].appendChild(anchor);
					anchor.setAttribute("href","https://dabblet.com/");
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "jsbin" && url != "" && url != undefined && url != null && url.startsWith("https://jsbin.com/") ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSBin"));
					rdf[i].appendChild(anchor);
					anchor.setAttribute("href",url);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "liveweave" ) {
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Liveweave"));
					rdf[i].appendChild(anchor);
					anchor.setAttribute("href","https://liveweave.com");
					anchor.setAttribute("target","_blank"); }
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Copy to Clipboard";
				button.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				rdf[i].appendChild(button);
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let acronym;
				let name = ""; let text = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "name") { name = txt["schema:" + elem]; }
						if (elem == "text") { text = txt["schema:" + elem]; } } }			
				let ref = json[i].getAttribute("data-meta");
				let url = json[i].getAttribute("data-url");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "codepen") {
					let anchor = document.createElement("form");
					let i1 = document.createElement("input");
					let i2 = document.createElement("input");
					json[i].parentElement.appendChild(anchor);
					anchor.setAttribute("action","https://codepen.io/pen/define");
					anchor.setAttribute("method","POST");
					anchor.setAttribute("target","_blank");
					anchor.appendChild(i1);
					i1.setAttribute("name","data");
					i1.setAttribute("type","hidden");
					let data = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n/g, "\\n");
					let json = '{"title": ' + name + ',"description": "", "html": "' + data + '"}';
					i1.setAttribute("value",json);
					anchor.appendChild(i2);
					i2.setAttribute("type","submit");
					i2.setAttribute("value","Send to CodePen"); } else
				if (acronym == "jsfiddle" && url != "" && url != undefined && url != null && url.startsWith("https://jsfiddle.net/") ) {
					let paragraph = document.createElement("p");
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSFiddle"));
					anchor.setAttribute("href",url);
					json[i].parentElement.appendChild(paragraph);
					paragraph.appendChild(anchor);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "dabblet" ) {
					let paragraph = document.createElement("p");
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open Dabblet"));
					anchor.setAttribute("href","https://dabblet.com/");
					json[i].parentElement.appendChild(paragraph);
					paragraph.appendChild(anchor);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "jsbin" && url != "" && url != undefined && url != null && url.startsWith("https://jsbin.com/") ) {
					let paragraph = document.createElement("p");
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Open in JSBin"));
					anchor.setAttribute("href",url);
					json[i].parentElement.appendChild(paragraph);
					paragraph.appendChild(anchor);
					anchor.setAttribute("target","_blank"); } else
				if (acronym == "liveweave" ) {
					let paragraph = document.createElement("p");
					let anchor = document.createElement("a");
					anchor.appendChild(document.createTextNode("Liveweave"));
					anchor.setAttribute("href","https://liveweave.com");
					json[i].parentElement.appendChild(paragraph);
					paragraph.appendChild(anchor);
					anchor.setAttribute("target","_blank"); }
				let paragraph = document.createElement("p");
				let button = document.createElement("a");
				button.setAttribute("href","#");
				button.innerHTML = "Copy to Clipboard";
				button.addEventListener("click", function(){ 
					let clip = document.createElement("textarea");
					clip.value = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					clip.setAttribute("class", "hidden");
					clip.setAttribute("readonly", "");
					document.body.appendChild(clip);
					clip.select();
					document.execCommand("copy"); }, false);
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(button);
		} }
	}
})();
(function subscription(){
	// Subscription (Microdata, RDFa, JSON-LD)
	// https://schema.org/docs/full.html
	const arr = ["MediaSubscription"];
	const array = ["alternateName","name"];
	const service = ["amazon","google","apple","spotify","netflix"];
	for (const elem of arr) {
		let mData = document.querySelectorAll("[itemscope]");
		let rdf = document.querySelectorAll("[vocab]");
		let json = document.querySelectorAll('script[type="application/ld+json"]');
		let i;
		for (i = 0; i < mData.length; i++) {
			let item = mData[i].getAttribute("itemtype");
			if ("http://schema.org/" + elem == item) {
				let address = ""; let acronym;
				let title = "";
				for (const elem of array) {
					let x; let prop = mData[i].querySelectorAll("[itemprop='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "name") { title = "Name:" + prop[x].innerHTML; } } } }
				address = title;
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Item"));
				mData[i].appendChild(anchor);
				let ref = mData[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/album/" + address + "&mt=1&app=music");
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < rdf.length; i++) {
			let item = rdf[i].getAttribute("typeof");
			if (elem == item) {
				let address = ""; let acronym;
				let title = "";
				for (const elem of array) {
					let x; let prop = rdf[i].querySelectorAll("[property='" + elem + "']");
					for (x = 0; x < prop.length; x++) {
						if (prop[x] != undefined) {
							if (elem == "alternateName" || elem == "name") { title = "Name:" + prop[x].innerHTML; } } } }
				address = title;
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Item"));
				rdf[i].appendChild(anchor);
				let ref = rdf[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/album/" + address + "&mt=1&app=music");
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
		for (i = 0; i < json.length; i++) {
			let txt = JSON.parse(json[i].textContent);
			if (elem == txt["@type"] || "schema:" + elem == txt["@type"]) {
				let address = ""; let acronym;
				let title = "";
				for (const elem of array) {
					if (txt["schema:" + elem] != undefined) {
						if (elem == "alternateName" || elem == "name") { title = "Name:" + txt["schema:" + elem]; } } }
				address = title;
				let paragraph = document.createElement("p");
				let anchor = document.createElement("a");
				anchor.appendChild(document.createTextNode("Find Item"));
				json[i].parentElement.appendChild(paragraph);
				paragraph.appendChild(anchor);
				let ref = json[i].getAttribute("data-meta");
				for (const elem of service) { if (ref == elem) { acronym = ref; } }
				if (acronym == undefined || acronym == null || acronym == "amazon") {
					anchor.setAttribute("href","https://www.amazon.co.uk/s?k=" + address + "&i=dvd");
					} else if (acronym == "google" ) {
					anchor.setAttribute("href","https://www.google.com/search?q=" + address);
					} else if (acronym == "apple" ) {
					anchor.setAttribute("href","https://geo.music.apple.com/us/album/" + address + "&mt=1&app=music");
					} else if (acronym == "spotify" ) {
					anchor.setAttribute("href","https://open.spotify.com/search/" + address);
					} else if (acronym == "netflix" ) {
					anchor.setAttribute("href","http://unogs.com/?q=" + address); }
				anchor.setAttribute("target","_blank");
		} }
	}
})();