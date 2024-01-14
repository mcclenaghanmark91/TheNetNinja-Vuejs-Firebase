<template>
    <div class="postList">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>

        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import {onMounted, onUnmounted, onUpdated} from 'vue'

export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props) {
    }
}
</script>

<style>

</style>