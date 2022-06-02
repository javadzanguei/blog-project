import MessageModal from './../components/MessageModal.vue';

export default {
    components : {
        MessageModal
    },
    data() {
        return {
            activeModel : false
        }
    },
    methods: { 
        hideModal() {
            this.activeModel = false
        },
        showModal() {
            this.activeModel = true;
        }
    }
}