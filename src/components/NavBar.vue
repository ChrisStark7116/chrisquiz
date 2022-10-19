<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>
      <v-toolbar-title >
        <span class="font-weight-light">Activity </span>

      </v-toolbar-title>
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/Dashboard' },
           { title: 'Calculator', icon: 'mdi-plus-one', path: '/calc' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'quizapp', icon: 'mdi-help-box', path: '/quizapp'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>