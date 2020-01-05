<template>
  <section class="container">
    <div class="quill-editor-example">
      <!-- quill-editor -->
      <v-btn color="primary">Save as Draft</v-btn>
      <v-btn color="primary">Save</v-btn>
      <no-ssr>
        <quill-editor
          v-model="editorContent"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
      </no-ssr>
      <div class="quill-code">
        <div class="title">Code</div>
        <code class="hljs xml" v-html="contentCode"></code>
      </div>
    </div>
  </section>
</template>

<script>
import hljs from 'highlight.js'
import contentjs from './ext_content.js'
import _ from 'lodash'

export default {
  data () {
    return {
      contentCode: null,
      editorContent: contentjs.content,
      editorOption: {
        // some quill options
        placeholder: 'What’s on your mind? Image can resize, drag/paste',
        theme: 'snow',
        modules: {
          toolbar: {
            container: [['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']],
            // handlers: {
            //   'image': this.imageHandler
            // }
          },
          // history: {
          //   delay: 1000,
          //   maxStack: 50,
          //   userOnly: false
          // },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar'],

          },
        },
      }
    }
  },
  methods: {
    imageHandler () {
      alert('image handler customize')
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    getContent () {
      this.contentCode = hljs.highlightAuto(`${this.editorContent}`).value
    }
  },
  watch: {
    editorContent (newC, oldC) {
      this.contentCode = '<p>Waiting for you to stop typing...</p>'
      this.debouncedGetContent()
    }
  },
  mounted () {
    this.getContent()
    console.log('app init, my quill insrance object is:', this.myQuillEditor)
  },
  created () {
    this.debouncedGetContent = _.debounce(this.getContent, 500)
  },
}
</script>

<style>
.quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 30rem;
  padding-bottom: 1rem;
}
</style>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  .quill-editor {
    min-height: 400px;
    max-height: 600px;
    overflow-y: auto;
  }
}
</style>
<style lang="scss" scoped>
.quill-code {
  height: auto;
  border: none;
  > .title {
    border: 1px solid #ccc;
    border-left: none;
    height: 3em;
    line-height: 3em;
    text-indent: 1rem;
    font-weight: bold;
  }
  > code {
    width: 100%;
    margin: 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-radius: 0;
    height: 30rem;
    overflow-y: auto;
  }
}
</style>