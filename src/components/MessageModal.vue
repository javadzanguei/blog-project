<template>
    <div class="modal" :class="{ 'fade' : ! active , 'show' : active}" :style="{'display' : active ? 'block' : 'none' , 'background-color' : 'rgba(0,0,0,.5)'}">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close-modal')">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits : ['close-modal'],
    props : {
        active : {
            type : Boolean,
            default : false,
            required : false,
        }
    }
}
</script>