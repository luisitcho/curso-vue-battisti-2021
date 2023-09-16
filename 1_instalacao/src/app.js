const MyApp = {
    data() {
        return {
            name: '',
            age: 24,
            input_name: '',
        }
    },

    methods: {
        submitForm(e) {
            e.preventDefault()

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyApp).mount('#app')