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
			
			<!-- example 1 --> 
			<a :href="facebook">Click here for Facebook</a>
			
			<br><br><br><br>
			<!-- example 2 --> 
			<a v-bind:href="facebook">Click here for Facebook</a>

			<br><br><br><br>
			<!-- data bind in input   --> 
			<input type="text" :value="name" />

			<br><br><br><br>
			<!-- data Bind with html tag --> 
			<p v-html='htmlTag' ></p>


		</div>
		<script src="vue.js"></script>
	</body>
</html>