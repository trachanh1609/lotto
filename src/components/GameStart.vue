<template lang="html">
  <div class="row">
    <div class="col-sm-12 text-center">
      <div class="buttonWrapper">
        <button class="btn" type="button" @click="draw()">New Number</button>
        <button class="btn" type="button" @click="reset()">Reset</button>
      </div>
    </div>
    <br>
    <div class="col-sm-12">
      <div class="row">

        <transition name="slide-fade">
          <div v-if="show">
            <figure class="circleBig">{{lastNumber}}</figure>
          </div>
        </transition>

      </div>
      <div class="row">
        <section class="stage" v-for="number in displayNumbers">
          <!-- <figure class="ball">{{number}}<span class="shadow"></span></figure> -->
          <figure class="circle">{{number}}</figure>
        </section>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      drawedNumber : []
    }
  },
  computed: {
    displayNumbers() {
      if (this.drawedNumber.length > 0){
        return this.drawedNumber.slice(0, -1)
      }else {
        return []
      }
    },
    lastNumber(){
      if (this.drawedNumber.length > 0){

        return [ ...this.drawedNumber].pop();
      }else {
        return ''
      }
    }
  },
  methods: {
    draw() {
      let rand = 0 ;
      if( this.drawedNumber.length >98 ) {
        return
      }
      do {
        rand = Math.floor(Math.random() * 99) + 1;
        console.log(rand)
      } while(this.drawedNumber.includes(rand))

      this.drawedNumber.push(rand);
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 800);

    },
    reset() {
      this.drawedNumber = [];
    },
    toggleShow(){
      this.show = false;
      this.show = true;
    }
  }
}
</script>

<style lang="css">
</style>
