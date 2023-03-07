Vue.component("click-counter", {
  template: "#click-counter-template",
  data() {
    return {
      count: 0,
    };
  },
});

let PlanComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
    selectedPlan: {
      type: String,
    },
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    },
  },
  methods: {
    select() {
      console.log(this.name);
      this.$emit("select", this.name);
    },
  },
};

let PlanPickerComponent = {
  //The template that is being rendered with the component
  template: "#plan-picker-template",
  //Listening to child components
  components: {
    plan: PlanComponent,
  },
  data() {
    return {
      plans: ["The Hacker", "The Sinner", "The Chosen One", "The Cheese"],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
};

new Vue({
  el: "#app",
  //If a component doesn't have a parent add it here
  components: {
    "plan-picker": PlanPickerComponent,
  },
});
