import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set() //Sets cannot contain duplicates so this is good way

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet]

    return { tags }
}

export default useTags