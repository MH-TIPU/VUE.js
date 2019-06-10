<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue.js basic</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://unpkg.com/vue"></script>
</head>
	<body>
		<div id="paragraph">
			<input type="button" v-on:keyup="up">
			<input type="button" v-on:keydown="down">
			<input type="button" v-on:keyright="right">
			<input type="button" v-on:keyleft="left">
			<input type="button" v-on:keyenter="submit">
		</div>
		<script src="vue.js"></script>
	</body>
</html>