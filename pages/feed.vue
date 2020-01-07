<template>
  <div>
    <v-row>
      <v-col v-for="i in 4" :key="i" align="center" cols="12" md="4" lg="3">
        <b-card :to="{ name: 'test' }" link />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-list-item class="px-0" three-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold headline"
              >Discussion & Articles</v-list-item-title
            >
            <v-list-item-subtitle
              >View all 123 discussions</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <b-button color="primary" elevation="0" rounded
              >Create New Post</b-button
            >
          </v-list-item-action>
        </v-list-item>

        <v-list-item class="px-0" three-line>
          <v-list-item-avatar size="50">
            <v-col class="pa-0" align="center">
              <v-avatar size="50">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-col>
          </v-list-item-avatar>

          <v-list-item-content class="py-0">
            <v-list-item-title class="font-weight-bold title">
              Photo correlations
            </v-list-item-title>
            <v-list-item-subtitle>
              How are you doing? I am good enough to fight all the stuff... How
              are you doing? I am good enough to fight all the stuff... Author 3
              hours ago 26 replies
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            asdsa
          </v-list-item-action>
        </v-list-item>
      </v-col>

      <v-col cols="12" md="4">
        <!-- <v-list-item class="px-0">
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              Photo correlations
            </v-list-item-title>
            <v-list-item-subtitle>
              How are you doing? I am good enough to fight all the stuff...
              Author 3 hours ago 26 replies
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            asdsa
          </v-list-item-action>
        </v-list-item> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
