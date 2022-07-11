<template>
  <div>
    <section>
      <div class="banner">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 title">
            <h1>
              Authentic local<br />
              food in Ethereal
            </h1>
            <p class="w-75">
              Ethereal is a courier service in which authentic home cook food is
              delived to a customer
            </p>
            <form class="form-inline">
              <input
                class="form-control mr-sm-0 rounded-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-warning my-sm-0 text-white rounded-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style scoped>
section {
  background: var(--primary-color);
}
.banner {
  height: 600px;
  background-image: url("../../assets/images/pic_banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  max-width: 1400px;
  display: block;
  margin: 0px auto;
}
.banner .title h1 {
  font-style: italic;
  font-weight: 400;
  font-size: 70px;
  line-height: 83px;
  text-align: left;
}
.banner .title p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  letter-spacing: -0.012em;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
</style>
