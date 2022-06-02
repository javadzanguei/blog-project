<template>
    <div>
        <div>{{ title }}</div>
         <div>{{ content }}</div>

         <button @click="resetData">reset data</button>
    </div>
</template>

<script>
import { computed, toRefs , inject } from 'vue'
export default {
    setup(props , context) {

        const title = inject('title')
        const content = inject('content');
        const reset = inject('reset');

        // const { title , content } = toRefs(props);
        // const title = computed(() => 'title : ' + props.title )
        // const content = computed(() => 'content : ' + props.content )


        function resetData() {
            reset()
        }

        

        return {
            title ,
            content,
            resetData
        }

    }   
}
</script>