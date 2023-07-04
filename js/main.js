const app = Vue.createApp({
    //data, functions
    data() {
        return {
            wantbooks: false,
            url:"https://registrar.nu.edu.kz",
            books: [
                {title: 'Hello', author: 'Zhake', age: 24},
                {title: 'Bye', author: 'Sake', age: 19},
                {title: 'Japan', author: 'Take', age: 21},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        // changeTitle(title){
        //     this.title = title
        // }
        showBooks(){
            this.wantbooks = true
        },
        
        hideBooks(){
            this.wantbooks = false
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')