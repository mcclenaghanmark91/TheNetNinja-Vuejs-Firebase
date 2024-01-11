<template>
  <div class="home">
    HOME
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    //const p = ref(null)

    //these aren't reactive values but can be made to be so
    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick}
  },
  data() {
    return {
      score: 5
    }
  }
}
</script>
