app.component("counter-display", {
  props: {
        count: {
            type: Number,
            default: 0,
            validator: value => value > 0
        }
    },
    template:
    /*html*/`
        <div class="counter-display">
            <h2><slot></slot> {{ count }}</h2>
        </div>
    `    
});