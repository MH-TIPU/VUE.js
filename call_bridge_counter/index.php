<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue.js basic</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://unpkg.com/vue"></script>
</head>
	<body>
		<div id="paragraph">
			<table class="table">
			  	<thead class="thead-dark">
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col" v-for="name in names" >{{name}}</th>
				    </tr>
			  	</thead>

			  <tbody>

			    <tr v-for="(point, index) in points">
			      <td scope="col">{{index}}</td>
			      <td scope="col">{{point.player1}}</td>
			      <td scope="col">{{point.player2}}</td>
			      <td scope="col">{{point.player3}}</td>
			      <td scope="col">{{point.player4}}</td>
			    </tr>

				<tr v-show="gameEnd">	  
			       	<td scope="col"><input type="submit" v-on:click="addPoint"></td>
			       	<td scope="col"><input type="text" v-model="newPlayer1"></td>
			       	<td scope="col"><input type="text" v-model="newPlayer2"></td>
			       	<td scope="col"><input type="text" v-model="newPlayer3"></td>
			       	<td scope="col"><input type="text" v-model="newPlayer4"></td>
			    </tr>

			    <tr>
			      <td scope="col"><b>Total</b></td>
			      <td scope="col"><b>{{result1}}</b></td>
			      <td scope="col"><b>{{result2}}</b></td>
			      <td scope="col"><b>{{result3}}</b></td>
			      <td scope="col"><b>{{result4}}</b></td>
			    </tr>

			  </tbody>
			</table>
		</div>
		<script src="vue.js"></script>
	</body>
</html>

