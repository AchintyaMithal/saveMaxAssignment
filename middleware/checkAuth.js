export default function({route,redirect,app,from} ){
    const userId = parseInt(route.params.id, 10)
    console.log(userId)
    if(userId && userId % 2 !==0){
        console.log('here')
        app.store.dispatch('setSnackbar',true)
        return redirect('/')
    }

}