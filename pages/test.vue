<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <h1 class="display-1 font-weight-medium	">How are you doing?</h1>
        <v-row>
          <v-col>
            <b-btn @click="test" @hover="haha" class="px-0" text
              >Back to Community</b-btn
            >
            <b-btn @click="test" @hover="haha" class="px-0" text>Mute</b-btn>
            <b-btn @click="test" @hover="haha" class="px-0" text>Edit</b-btn>
            <b-btn @click="test" @hover="haha" class="px-0" text>Report</b-btn>
          </v-col>
        </v-row>

        <v-list-item class="grow px-1" three-line>
          <v-list-item-avatar>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Evan You
            </v-list-item-title>
            <v-list-item-subtitle class="mb-4">
              3 days ago
            </v-list-item-subtitle>
            <v-list-item-content class="py-0">
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
                v-model="comment"
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
              <b-btn @click="post" elevation="0" rounded>Post comment</b-btn>
            </v-col>
          </v-list-item-content>
        </v-list-item>

        <div class="my-4">
          <span>32 comments</span>
        </div>

        <v-slide-y-transition group>
          <v-layout
            v-for="c in comments"
            :key="c.id"
            :class="c.subcomments.length > 0 ? 'comment-container' : null"
            column
            justify-center
            align-start
          >
            <b-comment :comment="c.comment">
              <!-- Sub comments start here -->
              <v-list-item
                v-for="(sc, x) in c.subcomments"
                :key="x"
                class="px-0"
              >
                <v-list-item-avatar
                  class="mr-2 my-0"
                  style="align-items: flex-start; align-self: flex-start"
                ></v-list-item-avatar>
                <b-comment :comment="sc.comment"></b-comment>
              </v-list-item>
            </b-comment>
          </v-layout>
        </v-slide-y-transition>
      </v-col>

      <v-col cols="12" sm="12" md="3">
        asd
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseButton from '@/components/base/Button'
import BaseComment from '@/components/base/Comment'

export default {
  components: {
    'b-btn': BaseButton,
    'b-comment': BaseComment
  },
  data() {
    return {
      comments: [
        {
          id: 3,
          comment: `<p>
                  <span class="font-weight-bold">Eric You</span>
                  What are you doing oh?What are you doing oh?What are you doing
                  oh?What are you doing oh?What are you doing oh?What are you
                  doing oh?What are you doing oh?What are you doing oh?What are
                  you doing oh?What are you doing oh?What are you doing oh?What
                  are you doing oh?What are you doing oh?
                </p><p>
                  WhatWhatWhatWhatWhatWhatWhatWhatWhatWhatWhatWhatWhatWhat are you doing oh?What are you doing oh?What are you doing
                  oh?What are you doing oh?What are you doing oh?What are you
                  doing oh?What are you doing oh?What are you doing oh?What are
                  you doing oh?What are you doing oh?What are you doing oh?What
                  are you doing oh?What are you doing oh?
                      </p>`,
          subcomments: [
            {
              comment:
                '<p><span class="font-weight-bold">Eric You</span> asdasdasdasdasdasdas</p>'
            }
          ]
        },
        {
          id: 2,
          comment:
            '<p><span class="font-weight-bold">Only Comment</span> asdasdasdasdasdasdas</p>',
          subcomments: []
        },
        {
          id: 1,
          comment:
            '<p><span class="font-weight-bold">Only Comment 1</span> asdasdasdasdasdasdas</p>',
          subcomments: []
        }
      ],
      comment: null,
      count: 4
    }
  },
  methods: {
    test() {
      console.log('Button clicked')
    },
    haha() {
      console.log('hehe')
    },
    post() {
      this.comments.unshift({
        id: this.count++,
        comment: `<p><span class="font-weight-bold">Eric Yam</span> ${this.comment}</p>`,
        subcomments: []
      })
    }
  }
}
</script>

<style scoped>
p {
  line-height: 24px !important;
}

.comment-container {
  position: relative;
}

.comment-container:before {
  left: 19px;
  bottom: 0;
  content: '';
  height: calc(100% - 40px);
  position: absolute;
  top: 35px;
  width: 2px;
  background: rgba(0, 0, 0, 0.12);
}
</style>
