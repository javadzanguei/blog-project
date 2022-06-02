<template>
    <the-header></the-header>
        <!-- Page content-->
        <div class="container">
           
            <div class="row">
                <!-- Blog entries-->
                <button @click="showModal">show Modal</button>
                <message-modal :active="activeModal" @close-modal="hideModal"></message-modal>
                <post-list></post-list>
                <the-sidebar></the-sidebar>
            </div>
        </div>

</template>


<script>
  import TheHeader from '../layouts/TheHeader.vue';
  import TheSidebar from '../layouts/TheSidebar.vue';
  import PostList from '../PostList.vue'
  import ModalHook from './../../hooks/ModalHook';
  import MessageModal  from './../MessageModal.vue';

export default {
    components : {
        TheHeader ,
        PostList,
        TheSidebar,
        MessageModal
    },
    setup() {
        const [activeModal , hideModal , showModal] = ModalHook();

        return {
            activeModal,
            hideModal,
            showModal
        }
    }

}
</script>