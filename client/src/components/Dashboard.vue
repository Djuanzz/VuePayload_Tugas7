<script>
export default {
  name: "Dashboard",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    async logout() {
      try {
        const req = await fetch("http://127.0.0.1:5000/api/accounts/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();
        console.log(data);
        if (req.ok) this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async itsme() {
      try {
        const req = await fetch("http://127.0.0.1:5000/api/accounts/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-start">
        <a href="">
          <h1 class="card-header">NotesApp</h1>
        </a>
        <!-- <a class="navbar-item">Ripple UI</a> -->
      </div>

      <div class="navbar-center">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">About</a>
        <a class="navbar-item">Contact</a>
      </div>

      <div class="navbar-end">
        <div class="form-control justify-between">
          <button @click="itsme" class="btn btn-solid-error">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
