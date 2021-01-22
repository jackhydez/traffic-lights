<template>
  <div class="wrapper">
		<div class="circle" id="red">
		</div>
		<div class="circle" id="yellow">
		</div>
		<div class="circle" id="green">
		</div>
	</div>
</template>

<script>
export default {
	created(){
	}

}
import router from '../router'
//this.$router.push('yellow');
//this.$router.push({ path: 'yellow' });
let sec = 0;
setInterval( function timer() {
	sec++;
	console.log(sec);	
	if (sec === 4) {
		router.push('/yellow');
		router.go('/yellow');
		  //next('/yellow')
		sec = 0;
	}
}, 1000);

</script>

<style>
#red {
  background-color: #f00;
}

#yellow {
  background-color: #ff0;
  opacity: 0.3;
}

#green {
  background-color: #0f0;
  opacity: 0.3;
}
</style>
