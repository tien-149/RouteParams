export default {
    name: "Homepage",
    template: `
    <section>
        <h3>Welcome home  {{ this.$route.params.user }}!</h3>
    </section>
    `
}