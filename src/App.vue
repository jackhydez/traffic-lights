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
</style>
