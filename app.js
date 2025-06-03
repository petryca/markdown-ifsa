const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light'
        };
    },
    computed: {
        charCount() {
            const stripped = this.message.replace(/<[^>]*>/g, '');
            return stripped.length;
        },
        htmlOutput() {
            return marked.parse(this.message);
        },
        themeIcon() {
            return this.theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    },
    mounted() {
        const saved = localStorage.getItem('markdownText');
        if (saved) this.message = saved;
    },
    watch: {
        message(newMessage) {
            localStorage.setItem('markdownText', newMessage);
        },
        theme(newTheme) {
            document.documentElement.setAttribute('data-bs-theme', newTheme);
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
        }
    }
});

app.mount('#app');