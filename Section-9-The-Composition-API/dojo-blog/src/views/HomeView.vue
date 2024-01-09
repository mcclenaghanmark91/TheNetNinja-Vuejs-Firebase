<template>
  <div class="home">
    HOME
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    console.log('setup')
    //these aren't reactive values but can be made to be so
    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me')
    }

    return { name, age, handleClick }
  }
}
</script>
