<template>
  <div class="home">
    HOME
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    
    const p = ref(null)
    console.log(p, p.value, 'uh oh')

    console.log('setup')
    //these aren't reactive values but can be made to be so
    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p }
  }
}
</script>
