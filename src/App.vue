<template>
  <div id="app">
    <!--
    <h1>hello</h1>
    -->
    <router-view />
 </div>
</template>

<script>
export default {
  name: 'app',
  /*
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  */
}

</script>

<style>
.wrapper {
	background:#333;
	width: 150px;
	height: 440px;
	border-radius: 10px;
  /*
	font-size: 70px;
	text-align:center;
  */
	padding: 1px 0;
	border: 6px solid #000;
	margin: auto;
}

.circle {
	background:#666;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin-left: 15px;
	margin-top: 20px;
	line-height: 120px;
	-webkit-transition: background-color 0.5s ease-out;
	-o-transition: background-color 0.5s ease-out;
	transition: background-color 0.5s ease-out;
}

/*Добавляем фоновый цвет*/
/*
.circleBGColor1 {
	background-color: #f00;
}
.circleBGColor2 {
	background-color: #ff0;
}
.circleBGColor3 {
	background-color: #0f0;
}

.circleColor1 {
	color: #f00;
}
.circleColor2 {
	color: #0f0;
}
*/
/*
????

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
*/
</style>
