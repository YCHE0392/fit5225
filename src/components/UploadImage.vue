<template>
  <div>
    <h1>Upload Image</h1>
    <input type="file" @change="onFileChange" />
    <button :disabled="!file" @click="uploadFile">Upload</button>
  </div>
</template>

<script>
export default {
  name: 'UploadImage',
  data() {
    return {
      file: null
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
   
    
  }
};
</script>
