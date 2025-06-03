const app = Vue.createApp({
    data() {
        return {
            message: ''
        };
    },
    computed: {
        charCount() {
            const stripped = this.message.replace(/<[^>]*>/g, '');
            return stripped.length;
        },
        htmlOutput() {
            return marked.parse(this.message);
        }
    },
    mounted() {
        const saved = localStorage.getItem('markdownText');
        if (saved) this.message = saved;
    },
    watch: {
        message(newMessage) {
            localStorage.setItem('markdownText', newMessage);
        }
    }
});

app.mount('#app');