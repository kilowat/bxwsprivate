export const actions = {
  async nuxtServerInit ( context ) {
    return Promise.all([
      //context.dispatch('app/fetchPolconfig'),
    ]);
  }
}
//     this.$store.dispatch('app/fetchPolconfig')