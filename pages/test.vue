<template>
  <v-container>
    <v-row>
      <v-col md="9">
        <h1 class="display-1 font-weight-medium	">How are you doing?</h1>
        <v-row>
          <v-col>
            <b-button @click="test" @hover="haha" class="px-0" text
              >Back to Community</b-button
            >
            <b-button @click="test" @hover="haha" class="px-0" text
              >Mute</b-button
            >
            <b-button @click="test" @hover="haha" class="px-0" text
              >Edit</b-button
            >
            <b-button @click="test" @hover="haha" class="px-0" text
              >Report</b-button
            >
          </v-col>
        </v-row>

        <!-- <v-card flat> -->
        <v-list-item class="grow px-1" three-line>
          <v-list-item-avatar>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold ">
              Evan You
            </v-list-item-title>
            <v-list-item-subtitle class="mb-4">
              3 days ago
            </v-list-item-subtitle>
            <v-list-item-content class="description py-0">
              <p class="mb-4">
                Welcome to 2020. If you’re subscribed to the newsletter, you
                probably got an email from me earlier today. But if for some
                reason you missed it, here’s what I’d like to wish you all in
                the upcoming year.
              </p>
              <p class="mb-4">
                But before that, I want to thank you all for your photos here on
                Tookapic. Thank you for being part of this unique community.
                Thank you for your support, your subscriptions and your kind
                words in emails and private messages.
              </p>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="grow px-1" three-line>
          <v-list-item-avatar>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-col class="pa-0">
              <v-textarea
                autofocus
                auto-grow
                class="mb-3"
                filled
                hide-details
                outlined
                placeholder="Type here to reply something..."
                rows="3"
                single-line
              />
              <v-btn elevation="0" rounded>Post comment</v-btn>
            </v-col>
          </v-list-item-content>
        </v-list-item>
        <!-- </v-card> -->

        <div class="my-4">
          <span>32 comments</span>
        </div>

        <v-layout
          class="test"
          style="position: relative"
          column
          justify-center
          align-start
        >
          <v-layout>
            <v-avatar class=" mb-2" size="30">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-avatar>
            <v-col>
              <span>asdasdsadas</span>
              <span>asdasdsadas</span>
              <span>asdasdsadas</span>
              <span>asdasdsadas</span>
            </v-col>
          </v-layout>

          <v-list-item class="px-0" three-line>
            <v-list-item-avatar>
              <v-avatar size="32">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                ></v-img>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content class="py-0">
              <p>
                asdasdasdsaasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdas
              </p>
              <p>asdasdasdsaasd</p>
              <p>asdasdasdsaasd</p>
            </v-list-item-content>
          </v-list-item>
        </v-layout>
      </v-col>

      <v-col md="3">
        asd
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseButton from '@/components/base/Button'

export default {
  components: {
    'b-button': BaseButton
  },
  methods: {
    test() {
      console.log('Button clicked')
    },
    haha() {
      console.log('hehe')
    }
  }
}
</script>

<style scoped>
.description p {
  line-height: 24px;
}
</style>

<style>
.test:before {
  left: 15px;
  bottom: 0;
  content: '';
  height: 100%;
  position: absolute;
  top: 0px;
  width: 2px;
  background: rgba(0, 0, 0, 0.12);
}
/* .v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
  left: 0;
}

.v-timeline--dense .v-timeline-item__body {
  max-width: calc(100% - 51px);
} */
</style>
