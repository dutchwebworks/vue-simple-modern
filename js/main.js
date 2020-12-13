const app = Vue.createApp({
    data() {
        return {
            title: "Vue Simple and Modern",
            count: 0
        }
    },
    methods: {
        onIncrement() {
            this.count++;
        },
        onDecrement() {
            return (this.count > 0) ? this.count-- : 0;
        }
    }
});