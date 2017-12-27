<template>
  <div id="sidebar">
    <md-list class="md-double-line">
      <md-subheader>Social Media</md-subheader>

      <md-list-item v-for="social in socialMedia">
        <font-awesome-icon :icon="['fab', social.icon]" size="lg"></font-awesome-icon>

        <div class="md-list-item-text">
          <span>{{social.name}}</span>
        </div>
      </md-list-item>

      <md-divider></md-divider>
    </md-list>
  </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome/";

    export default {
      components: {FontAwesomeIcon},
        name: "sidebar",
        data: function () {
          return {
            socialMedia: [
              {name: 'Facebook', icon: 'twitter'},
              {name: 'Twitter', icon: "twitter"},
              {name: 'Google+', icon: 'google-plus-g'},
              {name: 'YouTube', icon: 'youtube'},
              {name: 'Twitch', icon: 'twitch'},
              {name: 'RSS', icon: 'rss'},
            ]
          }
        }
    }
</script>

<style scoped>
#sidebar{

}
</style>
