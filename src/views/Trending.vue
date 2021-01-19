<template>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Rome />
 </div>
 <div class="col-5">
 <MachuPicchu/>
 </div>
 <div class="col-5">
 <Iceland />
 </div>
 <div class="col-5">
 <Amsterdam />
 </div>
 </div>
</template>

<script>
import Rome from '@/components/Rome.vue';
import MachuPicchu from '@/components/MachuPicchu.vue';
import Amsterdam from '@/components/Amsterdam.vue';
import Dubai from '@/components/Dubai.vue';
import Venezia from '@/components/Venezia.vue';
import Iceland from '@/components/Iceland.vue';
export default {
 name: 'trending',
 components: {
 Rome,
 MachuPicchu,
 Amsterdam,
 Dubai,
 Venezia,
 Iceland,
 },
};


</script>
<style lang="scss">
 .card {
 margin-bottom: 20px;
 }
 

</style>
  