app.component("counter-display", {
  template:
    /*html*/`
        <div class="counter-display">
            Counter Display component: {{ count }}
        </div>
    `,
    props: {
        count: {
            type: Number,
            default: 0
        }
    }
});