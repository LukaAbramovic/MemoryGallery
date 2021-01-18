<template>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Rome />
 </div>
 <div class="col-5">
 <MachuPicchu/>
 </div>
 </div>
</template>

<script>
import Rome from '@/components/Rome.vue';
export default {
 name: 'trending',
 components: {
 Rome,
 },
};

<script>
import MachuPicchu from '@/components/MachuPicchu.vue';
export default {
 name: 'trending',
 components: {
 MachuPicchu,
 },
};

</script>
<style lang="scss">
 .card {
 margin-bottom: 20px;
 }
</style>
  