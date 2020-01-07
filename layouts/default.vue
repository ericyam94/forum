<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app elevate-on-scroll>
      <v-container class="py-0" fill-height>
        <v-row align="center">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <div class="d-none d-sm-flex">
            <!-- <v-toolbar-items> -->
            <v-btn :to="{ name: 'feed' }" text>Feed</v-btn>
            <v-btn :to="{ name: 'test' }" text>Discover</v-btn>
            <v-btn text>Community</v-btn>
            <!-- </v-toolbar-items> -->
          </div>
          <v-text-field
            dense
            filled
            hide-details
            placeholder="Search..."
            rounded
            single-line
          />
          <v-spacer />

          <v-menu auto offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon medium text>
                <v-badge content="6" overlap>
                  <v-icon :size="20">mdi-bell</v-icon>
                </v-badge>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-avatar class="d-none d-sm-flex">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-account-tie',
          title: 'new-story',
          to: '/admin/newstory'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}
</style>
