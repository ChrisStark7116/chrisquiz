<template>

 <v-card
    class="ma-15"
    max-width="544"
    
 >
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter Text" v-model="stringInput"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doString" >
        Count Vowel
   </v-btn>
   </v-card-actions>
 <hr>
   <p>
Number of vowel = {{vowelCount}} <br>
Convery vowel to '*' = {{convert}} <br>
String to uppercase = {{up}} <br>
Consonant to uppercase = {{up2}}


</p>
 </v-card>  

</template>

<script setup>
import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref()
const convert = ref()
const up = ref()
const up2 = ref()


function doString () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     convert.value = stringInput.value.replace (/[aeiouAEIOU]/gi,'*');
     up.value = stringInput.value.toUpperCase();
     up2.value = stringInput.value.replace(/([b-df-hj-n-tv-z])/g, function (match) { return match.toUpperCase(); });

        return vowelCount.value, convert.value, up.value, up2.value; 
}

</script>
