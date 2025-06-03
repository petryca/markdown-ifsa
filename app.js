const app = Vue.createApp({
    data() {
        return {
            message: ''
        };
    },
    computed: {
        charCount() {
            return this.message.length;
        }
    }
});

app.mount('#app');