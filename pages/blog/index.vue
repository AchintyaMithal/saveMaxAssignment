<template>
  <div>
    <v-snackbar v-model="showAlert" :timeout="3000" top-right>
      Selected user is logged out
      <v-btn icon @click="showAlert = false"><v-icon>mdi-close</v-icon></v-btn>
    </v-snackbar>
  <v-col>
    <h1>Posts</h1>
  </v-col>
  <div v-for="(post, index) in posts" :key="index">
    <v-card class="my-2" elevation="1" >
      <div class="d-flex">
        <v-col cols="8" style="cursor: pointer;">
          <p>Author: {{ post?.userId || '--' }}</p>
          <p>{{ post?.title || '--' }}</p>
      </v-col>
      <p v-if="post?.userId % 2 !== 0">User is logged out</p>
      <v-btn v-else color="#e0e0e0" @click.stop="handleBlogClicked(post)">View More</v-btn>
      </div>
      
      
    </v-card>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      showAlert :false,
    }
  },
  computed:{
    posts:{
      get(){
        return this.$store.state.posts
      }
    },
  },
  mounted(){
    this.getPosts()
  },
  methods:{
    async getPosts(){
      await this.$store.dispatch('getPosts')
    },
    handleBlogClicked(item){
      if(item.userId % 2 === 0){
        this.$router.push({
        name: "blog-id",
        params:{
          id: item.userId,
        }
      })
      }else{
        this.showAlert = true
      }
      
    }
  }
}
</script>
