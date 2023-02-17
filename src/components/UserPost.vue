<template>
  <div class="card">
    <div class="card-body">
      <div class="form-floating">
        <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">发帖区：</label>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button v-on:click="posting" type="button" class="btn btn-outline-info">发帖</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'UserPost',


    setup(props, context) {
        let content = ref('')
        let posting = () => {
            context.emit('posting', content.value);
            content.value = "";
        }

        return {
            content,
            posting,
        }
    },
}
</script>

<style scoped>
button {
    margin-top: 10px;
}
.card {
    margin-top: 20px;
}
</style>