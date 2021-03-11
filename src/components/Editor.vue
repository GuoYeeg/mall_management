<template>
  <div class="">
    <div class="editor"></div>
  </div>
</template>
 
<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
export default {
  name: 'Editor',
  data () {
    return {
      msg:'Welcome to your vueName',
      options: {
        theme: 'snow',
        modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ]
          },
          placeholder: 'Insert text here ...'
      }
    
    }
  },
  mounted() {
    let dom = this.$el.querySelector('.editor')
    this.quill = new Quill(dom, this.options);
    this.quill.setContents(this.value)
    this.quill.on('text-change', () => {
      this.$emit('input', this.quill.getContents())
    });
  }
}
</script>
 
<style scoped lang = "less">
.editor{
  height: 480px;
}
</style>