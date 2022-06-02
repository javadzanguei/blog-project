import { ref } from 'vue';

export default function ModalHook() {
    const activeModal = ref(false);

    function hideModal() {
        activeModal.value = false;
    }

    function showModal() {
        activeModal.value = true;
    }

    return [
        activeModal,
        hideModal,
        showModal
    ]
}