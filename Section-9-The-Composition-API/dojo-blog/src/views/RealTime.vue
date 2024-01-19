<template>
    <h1>RealTime Data</h1>
    <div v-for="post in posts" :key="post.id">
        <div>{{ post.title }}</div>
    </div>
</template>

<script>
import { projectFirestore } from '@/Firebase/config';
import {ref} from 'vue'
export default {
    setup(){
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id}
                })
                console.log('documents: ', docs)
                posts.value = docs
            })

        
        return {posts}
    }
}
</script>
<style>
    
</style>