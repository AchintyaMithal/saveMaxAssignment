export const state = () =>({
    posts: [],
    showSnackbar: false,
})

export const mutations ={
    setPosts(state,posts){
        state.posts = posts
    },
    setSnackbar(state,showSnackbar){
        state.showSnackbar = showSnackbar
    }
}
export const actions = {
    async getPosts({commit}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data)
            commit('setPosts',data)
        }catch(error){
            console.error(error)
        }
    },
    setSnackBarTrueValue({commit}){
        commit('setSnackbar',true)
    }
}