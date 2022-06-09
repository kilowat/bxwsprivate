<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  mounted(){
    setTimeout(()=>{
      this.socket.onmessage = function(event) {
        console.log("Получены данные " + event.data);
      };
    }, 1000)

  },
  computed: {
    socket() {
      return this.$store.state.app.ws;
    }
  },
}
</script>
