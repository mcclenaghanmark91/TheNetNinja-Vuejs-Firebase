<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ name2 }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const ninjaOne = ref({ name: 'Mario', age: 30})
    const ninjaTwo = reactive({ name: 'Luigi', age: 35})

    const name1 = ref('mario')
    const name2 = reactive('luigi')

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, name2 }
  }
}
</script>
