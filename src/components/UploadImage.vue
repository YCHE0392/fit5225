<template>
  <div>
    <h1>Upload Image</h1>
    <input type="file" @change="onFileChange" />
    <button :disabled="!file" @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import { Storage } from 'aws-amplify';
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
    async uploadFile() {
      try {
        const result = await Storage.put(this.file.name, this.file, {
          contentType: this.file.type,
        });
        console.log('File uploaded:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }
};
</script>
