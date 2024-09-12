<template>
    <div>
    <v-col class="d-flex">
        <v-btn text :to="{path:'/'}" class="mr-5">Go To Home</v-btn>
      <h1>Posts Details</h1>
    </v-col>
    <div v-for="(post, index) in posts" :key="index">
    <v-card class="my-2" elevation="1" >
      <div class="d-flex">
        <v-col cols="8" style="cursor: pointer;">
          <p>Author: {{ post?.userId || '--' }}</p>
          <p>{{ post?.title || '--' }}</p>
      </v-col>     
      </div>
      
      
    </v-card>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    layout : 'blog',
    // middleware : 'checkAuth',
    data(){
      return{
        id: this.$route.params.id
      }
    },
    computed:{
      posts:{
        get(){
          const posts =  this.$store.state.posts
         return  posts.filter(post => post.userId === this.id)
        }
      }
    },
    mounted(){
      this.getPosts()
    },
    methods:{
      async getPosts(){
        await this.$store.dispatch('getPosts')
      }
    }
  }
  </script>
  