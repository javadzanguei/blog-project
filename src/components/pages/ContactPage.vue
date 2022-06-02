<template>
    <div class="container">
    <h2>Contact Page</h2>
    <show-form-data class="color-red"></show-form-data>
    <form @submit.prevent="submitHanlder">
        <div class="mb-3" @click="eventHandler">
            <label for="title" class="form-label">عنوان پیام</label>
            <input type="email" class="form-control" id="title" ref="inputElement" v-model="form.title">
            {{ title }}
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">متن پیام</label>
            <textarea id="content" class="form-control" name="content" cols="30" rows="10" v-model="form.content"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">ارسال پیام</button>
        </form>
    </div>
</template>


<script>

import { ref , reactive , computed, toRefs , watch , provide , onMounted } from 'vue';
import ShowFormData from './../ShowFormData.vue';

export default {
    components : {
        ShowFormData
    },
    setup() {
        const inputElement = ref(null);

        const form = reactive({
            title : '',
            content : ''
        });

        const { title , content } = toRefs(form);


        onMounted(() => {
            console.log('mounted')
        })

        console.log('created')

        provide('title' , title);
        provide('content' , content)

        function submitHanlder() {
            console.log(form);
        }

        function eventHandler() {
            console.log(inputElement.value.value);
        }

        function resetHandler() {
            form.title = '';
            form.content = '';
        }

        provide('reset' , resetHandler)


        // const title = computed(() => form.title)

        return {
            form,
            title,
            inputElement,
            eventHandler,
            resetHandler,
            submitHanlder
        }
    }
}
</script>