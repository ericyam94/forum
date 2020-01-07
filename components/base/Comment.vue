<template>
  <div>
    <v-list-item class="px-0">
      <v-list-item-avatar
        class="mr-2 my-0"
        style="align-items: flex-start; align-self: flex-start"
      >
        <v-avatar :size="size">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
        </v-avatar>
      </v-list-item-avatar>

      <v-list-item-content class="py-0 pb-3">
        <v-list-item-title v-html="comment" class="comment" />

        <v-list-item-subtitle class="mb-4">
          <v-layout>
            <b-button-text class="mx-1 ml-0">Liked</b-button-text>
            <b-button-text class="mx-1">Reply</b-button-text>
            <b-button-text class="mx-1">3h</b-button-text>
            <b-button-text class="mx-1">16 likes</b-button-text>
          </v-layout>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- Sub comments start here -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 30
    }
  }
}
</script>

<style scoped>
.comment {
  white-space: normal;
}

.comment >>> p {
  word-wrap: break-word !important;
  word-break: break-word !important;
  line-height: 24px !important;
}

.comment >>> *:last-child {
  margin-bottom: 5px;
}
</style>
