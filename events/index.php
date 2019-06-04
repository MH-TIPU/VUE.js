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

			<p>{{counter}}</p>

			<button v-on:click="counter++">Plus 1</button>
			<!-- or -->
			<button @click="counter--">Minus 1</button>
			<br>
			<button v-on:click="reset">Reset</button>
			<br>
			<!-- Double Click -->
			<button @:dblclick="art">Double Click</button>


			
		</div>
		<script src="vue.js"></script>
	</body>
</html>