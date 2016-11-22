new Vue({
    el: '#app',
    data: {
        plans: [
            { name: 'Enterprise', price: 100 },
            { name: ' Pro', price: 50 },
            { name: 'Personal', price: 10 },
            { name: 'Free', price: 0 }
        ],
        active: {}
    },
    components: {
        plan: {
            template: '#plan-template',
            props: ['plan', 'active'],
            computed: {
                isUpgrade: function() {
                    return this.plan.price > this.active.price;
                },
                inactive: function() {
                    return this.plan.name !== this.active.name;
                }
            },
            methods: {
                setActivePlan: function() {
                    this.active = this.plan;
                }
            }
        }
    }

});
