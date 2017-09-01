! function(e) { "use strict";

function t(e) { h.put(e), r() }

function n(e) { d.load(e, function(n, i) { n && s("failed to get JSON (" + e + ")"), t(i) }) }

function i() { c.resultsContainer.innerHTML = "" }

function l(e) { c.resultsContainer.innerHTML += e }

function r() { c.searchInput.addEventListener("keyup", function(e) { var t = e.which; if (a(t)) { i(); var n = e.target.value;
			o(n) && u(h.search(n)) } }) }

function u(e) { if (0 === e.length) return l(c.noResultsText); for (var t = 0; t < e.length; t++) l(p.compile(e[t])) }

function o(e) { return e && e.length > 0 }

function a(e) { return -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(e) }

function s(e) { throw new Error("SimpleJekyllSearch --- " + e) } var c = { searchInput: null, resultsContainer: null, json: [], searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>', templateMiddleware: function() {}, noResultsText: "No results found", limit: 10, fuzzy: !1, exclude: [] },
	f = ["searchInput", "resultsContainer", "json"],
	p = require("./Templater"),
	h = require("./Repository"),
	d = require("./JSONLoader"),
	m = require("./OptionsValidator")({ required: f }),
	S = require("./utils");
e.SimpleJekyllSearch = function(e) { var i = m.validate(e);
	i.length > 0 && s("You must specify the following required options: " + f), c = S.merge(c, e), p.setOptions({ template: c.searchResultTemplate, middleware: c.templateMiddleware }), h.setOptions({ fuzzy: c.fuzzy, limit: c.limit }), S.isJSON(c.json) ? t(c.json) : n(c.json) }, e.SimpleJekyllSearch.init = e.SimpleJekyllSearch, "function" == typeof e.SimpleJekyllSearchInit && e.SimpleJekyllSearchInit.call(this, e.SimpleJekyllSearch) }(window, document);