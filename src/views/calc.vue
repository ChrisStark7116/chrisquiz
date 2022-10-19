

<template>
<v-container fluid>
  <v-text-field label="First Number" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Number" v-model.number="sNumber"></v-text-field>

  <v-btn @click="doSum">Result</v-btn>
  
  <p>
Sum = {{sum}} <br>
Difference = {{diff}} <br>
Product = {{prod}} <br>
Quotient = {{quo}} <br>
Average = {{ave}} <br>

</p>
 
</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)
  const diff=ref(0)
  const prod=ref(0)
  const quo=ref(0)
  const ave=ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    diff.value = fNumber.value - sNumber.value
    prod.value = fNumber.value * sNumber.value
    quo.value = fNumber.value/sNumber.value
    ave.value = (sum.value + diff.value + prod.value + quo.value)/4
    return sum.value, diff.value, prod.value, quo.value, ave.value
  }
</script>


