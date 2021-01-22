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

}
console.log('!');
/*
import router from '../router'
setTimeout(() => router.push('green'), 6000);
*/
</script>


<style>
#red {
  background-color: #f00;
  opacity: 0.3;
}

#yellow {
  background-color: #ff0;
}

#green {
  background-color: #0f0;
  opacity: 0.3;
}
</style>
