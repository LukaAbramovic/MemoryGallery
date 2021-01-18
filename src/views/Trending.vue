<template>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-7">
 <Slike />
 </div>
 <div class="col-3">
 Ovdje ide sidebar
 </div>
 </div>
</template>

<script>
import Slike from '@/components/Slike.vue'
export default {
 name: 'trending',
 components: {
 Slike
 }
}

</script>
<style lang="scss">
 .card {
 margin-bottom: 20px;
 }
</style>
  