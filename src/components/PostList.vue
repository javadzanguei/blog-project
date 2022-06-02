<template>
    <message-alert>
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <template #temp>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </template>
        <template #title="aa">
            <h2>{{ aa.item }} </h2>
        </template>
        
    </message-alert>
    <!-- <alert>
         <h4 class="alert-heading">Hell Roocket!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </alert>
    <alert>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci itaque vero asperiores expedita quas laboriosam, libero delectus labore excepturi. Corporis eligendi ad laborum repudiandae dolor quis minus ea voluptatem.</p>
    </alert> -->

     <div class="col-lg-8">
            <div v-if="! loading">
                <!-- Featured blog post-->
                <post-item :post="posts[0]"></post-item>
                <!-- Nested row for non-featured blog posts-->
                <div class="row">
                    <div class="col-lg-6" v-for="(postGroup , index) in posts.slice(1)" :key="index">
                        <!-- Blog post-->
                        <post-item v-for="post in postGroup" :key="post.id" :post="post"></post-item>
                    </div>
                </div>
            </div>
            <div v-else>loading</div>
            <pagination :currentPage="page.current" :totalPage="page.totalPage" @pagechanged="changePage"></pagination>
        </div>
</template>

<script>
import { ref , reactive } from 'vue';
import PostItem from './PostItem.vue'
import axios from 'axios';
import _ from 'underscore';
import Pagination from './Pagination.vue';
import MessageAlert from './MessageAlert.vue';

export default {
    components : {
        PostItem,
        Pagination,
        MessageAlert
    },
    setup() {
        const posts = ref([]);
        const loading = ref(false);
        const page = reactive({
                current : 1,
                totalPage : 0
            })


        function getPostData(pageNumber = 1) {
            loading.value = true;
            axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=9`)
                .then(res => {
                    loading.value = false;
                    posts.value = res.data;
                    let mainPost = posts.value.shift()

                    posts.value = [mainPost , ..._.chunk(posts.value,  2)]
                    page.current = pageNumber;
                    page.totalPage = parseInt(parseInt(res.headers['x-total-count']) / 9)
                })
                .catch(err => console.log(err))
        }

        function changePage(page) {
            getPostData(page);
        }

        getPostData(1);


        return {
            posts,
            loading,
            changePage,
            page
        }
        
    }
}
</script>