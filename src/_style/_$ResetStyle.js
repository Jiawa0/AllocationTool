import { createGlobalStyle } from 'styled-components';

export const _$ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: none;
	font: inherit;
  vertical-align: baseline;
  font-family: 'Noto Sans TC', sans-serif;
  box-sizing: border-box;
}


html, body {

    scroll-behavior: smooth;
}

ol, ul {
  list-style: none;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
  display: block;
}

audio, canvas, video {
  display: inline-block;
}

audio:not([controls]) {
	display: none;
  height: 0;
}

[hidden] {
  display: none;
}

a {
	text-decoration: none;
}

a, a:hover, a:focus, a:active {
  color: inherit;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b, strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

hr {
	-moz-box-sizing: content-box;
	box-sizing: content-box;
  height: 0;
}

mark {
	background: #FFFF00;
  color: #000000;
}

code, kbd, pre, samp {
	font-family: monospace, serif;
  font-size: 1em;
}

pre {
  white-space: pre-wrap;
}

q {
  quotes: "\\201C" "\\201D" "\\2018" "\\2019";
}

small {
  font-size: 80%;
}

sub {
	font-size: 75%;
	line-height: 0;
	position: relative;
  vertical-align: baseline;
}

sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
	max-width: 100%;
  height: auto;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

fieldset {
	border: 1px solid #C0C0C0;
	margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
	border: 0;
  padding: 0;
}

button {
border: none;
background-color: transparent;
}

button, input, select, textarea {
	font-family: inherit;
	font-size: 100%;
  margin: 0;
}

button, input {
  line-height: normal;
}

button, select {
  text-transform: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 button, html input[type="button"] {
	-webkit-appearance: button;
	padding: 2px 6px;
	cursor: pointer;
  outline: none;
} 

 input {
	&[type="reset"], &[type="submit"] {
		-webkit-appearance: button;
    cursor: pointer;
  }
} 

button[disabled], html input[disabled] {
  cursor: default;
}

 input {
	&[type="checkbox"], &[type="radio"] {
		box-sizing: border-box;
    padding: 0;
  }

	&[type="search"] {
		-webkit-appearance: textfield;
		-moz-box-sizing: content-box;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
		&::-webkit-search-cancel-button, &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  }
} 

button::-moz-focus-inner, input::-moz-focus-inner {
	border: 0;
  padding: 0;
}

textarea {
	overflow: auto;
  vertical-align: top;
}

table {
	border-collapse: collapse;
  border-spacing: 0;
}

`;
