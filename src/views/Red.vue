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
/*
const Foo = {
	beforeRouteEnter(to, from, next) {
    if ((from.path == "/") || (from.path == "/red")) {
      next('/yellow')
    }
     next();
  }
}
*/

//router.push('yellow');
//setTimeout(() => Router.push('/yellow'), 4000);

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
