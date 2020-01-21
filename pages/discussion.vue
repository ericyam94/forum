<template>
  <v-row>
    <v-col>
      <h1 class="display-1 font-weight-medium	">All Discussions</h1>

      <div class="filter">
        <v-select
          v-model="value"
          :items="items"
          rounded
          dense
          append-icon="mdi-menu-swap"
          filled
          hide-details
          single-line
        />
      </div>

      <template v-for="i in 4">
        <v-list-item :key="i" class="mb-3 px-0">
          <v-list-item-avatar size="50">
            <v-avatar size="50">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="py-0">
            <b-button-text :to="{ name: 'test' }"
              ><v-list-item-title class="font-weight-bold title">
                Photo correlations
              </v-list-item-title>
            </b-button-text>
            <v-list-item-subtitle class="mb-2">
              <span class="mr-2">
                <b-button-text>Author</b-button-text> replied a day ago
              </span>
              <span class="mr-2">
                <v-icon>mdi-chat-outline</v-icon>
                <span>114</span>
              </span>
              <span class="mr-2">
                <v-icon>mdi-eye</v-icon>
                <span>17</span>
              </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-chip color="orange" label small text-color="white">
                Tags
              </v-chip>
              <v-chip color="pink" label small text-color="white">
                Business
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="mb-0">
            <v-spacer></v-spacer>
            <v-list-item-action-text>
              <span class="mr-2">6 hours ago</span>
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-col>
    <v-col md="3"> </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Recent', value: 'Recent' },
        { text: 'View', value: 'View' }
      ],
      value: 'Recent'
    }
  }
}
</script>

<style scoped>
.filter {
  max-width: 140px;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>
