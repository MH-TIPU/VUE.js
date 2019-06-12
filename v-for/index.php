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
			<form @submit.prevent="addItems">
				<input type="text" v-model="newItem">
			</form>

			<div>
				<li v-for="item in items">
				  	{{item}}
				</li>
			</div>

			<form @submit.prevent="addProfiles">
				<input type="text" v-model="newProfilesName">
				<input type="text" v-model="newProfilesAge">
				<input type="submit" value="submit">
			</form>
			<ul>
				<li v-for="profile in profiles">
				    {{profile.name}} - {{profile.age}} 
				</li>
			</div>


		</div>
		<script src="vue.js"></script>
	</body>
</html>  