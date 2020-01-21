<template>
  <section class="container">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
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
          <v-btn v-on="on" color="purple" dark>Open Code</v-btn>
        </div>
      </template>
      <v-sheet class="text-center">
        <v-btn @click="sheet = !sheet" class="mt-6" flat color="red"
          >close</v-btn
        >
        <v-btn @click="copyText" class="mt-6" flat color="purple">copy</v-btn>
        <div class="quill-code">
          <div class="title">Code</div>
          <code ref="htmlText" v-html="contentCode" class="hljs xml"></code>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </section>
</template>

<script>
import hljs from 'highlight.js'
import { mapGetters } from 'vuex'
import _ from 'lodash'
import contentjs, { selectText } from './ext_obj.js'

export default {
  layout: 'auth',
  data() {
    return {
      sheet: false,
      contentCode: null,
      editorContent: contentjs.content,
      editorOption: {
        // some quill options
        placeholder: 'What’s on your mind? Image can resize, drag/paste',
        theme: 'snow',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'image', 'video']
            ]
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
            modules: ['Resize', 'DisplaySize', 'Toolbar']
          }
        }
      }
    }
  },
  computed: mapGetters({
    todos: 'todos/todos'
  }),
  watch: {
    editorContent(newC, oldC) {
      this.contentCode = '<p>Waiting for you to stop typing...</p>'
      this.debouncedGetContent()
    }
  },
  mounted() {
    this.getContent()
    console.log('app init, my quill insrance object is:', this.myQuillEditor)
  },
  created() {
    this.debouncedGetContent = _.debounce(this.getContent, 500)
  },
  methods: {
    selectText,
    addTodo() {
      const text = 'abc'
      this.$store.commit('todos/add', { text })
    },
    copyText() {
      this.selectText(this.$refs.htmlText)
      document.execCommand('copy')
    },
    imageHandler() {
      alert('image handler customize')
    },
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    getContent() {
      this.contentCode = hljs.highlightAuto(`${this.editorContent}`).value
    }
  }
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
  padding: 5px 0;
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
