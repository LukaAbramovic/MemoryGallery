<template>
<div class="container">
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Rome />
 </div>
 <div class="col-5">
 <MachuPicchu/>
 </div>
 </div>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Iceland />
 </div>
 <div class="col-5">
 <Amsterdam />
 </div>
 </div>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Venezia />
 </div>
 <div class="col-5">
 <Dubai />
 </div>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-5">
 <Mexico />
 </div>
 <div class="col-5">
 <Norway />
 </div>
 </div>
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
import Mexico from '@/components/Mexico.vue';
import Norway from '@/components/Norway.vue';
export default {
 name: 'trending',
 components: {
 Rome,
 MachuPicchu,
 Amsterdam,
 Dubai,
 Venezia,
 Iceland,
 Mexico,
 Norway,
 },
};


</script>
<style lang="scss">
 .card {
 margin-bottom: 20px;
 }

 
 

</style>
  