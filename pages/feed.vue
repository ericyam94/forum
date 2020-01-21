<template>
  <div>
    <v-row>
      <v-col v-for="i in 4" :key="i" align="center" cols="12" md="4" lg="3">
        <b-card :to="{ name: 'test' }" :ripple="false" link />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-list-item class="px-0">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold headline">
              Discussion & Articles
            </v-list-item-title>
            <v-list-item-subtitle>
              <b-button-text :to="{ name: 'discussion' }" @click="haha">
                View all 123 discussions
              </b-button-text>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <b-button color="primary" elevation="0" rounded>
              Create New Post
            </b-button>
          </v-list-item-action>
        </v-list-item>

        <template v-for="i in 4">
          <v-list-item :key="i" class="mb-3 px-0">
            <v-list-item-avatar size="50">
              <v-avatar size="50">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
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
              <!-- <v-row align="center" class="ma-0">
                  <v-icon class="px-1">mdi-chat-outline</v-icon>
                  <span>114</span>
                </v-row> -->
              <v-spacer></v-spacer>
              <v-list-item-action-text>
                <span class="mr-2">6 hours ago</span>
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>

          <!-- <v-divider :key="'haha' + i" /> -->
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    haha() {
      console.log('haha')
    }
  }
}
</script>

<style></style>
