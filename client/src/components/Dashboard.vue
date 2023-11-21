<script>
import { ref } from "vue";
import Notes from "./Notes.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      // msg: "Welcome to Your Vue.js App",
      username: ref(""),
    };
  },
  methods: {
    async logout() {
      try {
        const req = await fetch("http://localhost:5000/api/accounts/logout", {
          credentials: "include",
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
        const req = await fetch("http://localhost:5000/api/accounts/me", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();
        if (data.user == null) this.$router.push("/");
        if (req.ok) this.username = data.user.username;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.itsme();
  },
  components: { Notes },
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
        <div class="dropdown-container">
          <div class="dropdown">
            <div class="btn btn-gray flex cursor-pointer" tabindex="0">
              <h1>{{ username }}</h1>
              <i class="fa-regular fa-user ms-3"></i>
            </div>

            <div class="dropdown-menu dropdown-menu-bottom-left mt-3">
              <a class="dropdown-item text-sm">Profile</a>
              <a tabindex="-1" class="dropdown-item text-sm"
                >Account settings</a
              >
              <button
                tabindex="-1"
                class="font-bold dropdown-item text-sm text-red-500"
                @click="logout">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="flex flex-wrap">
      <Notes />
    </section>
  </div>
</template>
