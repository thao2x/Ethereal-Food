<template>
  <div>
    <section>
      <div class="login">
        <div class="row align-items-center">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="login">
              <div class="login__title">
                <h3>Sign up</h3>
                <p>Sign up and hop on to the food journey!</p>
              </div>
              <div class="login__form">
                <form action="">
                  <div class="row">
                    <div class="col-md-12 form-group p-2">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Username"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-2">
                      <input
                        type="password"
                        placeholder="Password"
                        class="form-control border-0"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-2">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        class="form-control border-0"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-2">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control border-0"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-2">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        class="form-control border-0"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="checkbox">
                      <input
                        class="checkbox__tick"
                        type="checkbox"
                        name="sport"
                        value="Cầu lông"
                      />
                      <div class="checkbox__text">Owner</div>
                      <input
                        class="checkbox__tick"
                        type="checkbox"
                        name="sport"
                        value="Cầu lông"
                      />
                      <div class="checkbox__text">Customer</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-3">
                      <input
                        type="submit"
                        class="btn btn-block btn-login border-0"
                        value="Login"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group p-3">
                      <p>
                        Have an account?
                        <router-link :to="{ name: 'login'}"> <a href="#">Login</a></router-link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
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
  methods: {}
};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--primary-color);
}
section {
  background: #ffffff;
  padding: 40px 0px;
}
.login .login__title {
  padding-bottom: 30px;
}
.login .login__title h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  color: var(--primary-color);
}
.login .login__title p {
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: var(--primary-color);
}
.login__form input {
  background: #f0faf7;
  height: 50px;
}
.login__form .btn-login {
  background-color: var(--primary-color);
  color: var(--white-color);
}
.p-3 {
  padding: 8px !important;
}
.form-group a {
  color: #1ac073;
  font-style: italic;
}
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.checkbox {
  display: flex;
  gap: 15px;
  padding-left: 8px;
}
.checkbox__tick {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #f0faf7 !important;
}
.checkbox__text {
  display: flex;
  align-items: center;
  color: #1ac073;
}
</style>
