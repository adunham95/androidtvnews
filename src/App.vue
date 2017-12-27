<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <font-awesome-icon :icon="['far', 'bars']" size="lg"></font-awesome-icon>
        </md-button>
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <font-awesome-icon :icon="['far', 'envelope']" size="lg"></font-awesome-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <font-awesome-icon :icon="['far', 'reply']" size="lg"></font-awesome-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <font-awesome-icon :icon="['far', 'trash']" size="lg"></font-awesome-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <font-awesome-icon :icon="['far', 'trash-alt']" size="lg"></font-awesome-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="content">
        <router-view class="main"></router-view>
        <sidebar class="sidebar"></sidebar>
      </md-app-content>
    </md-app>

  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {Sidebar, FontAwesomeIcon},
  name: 'AndroidTV.News',
  created(){
    this.$http.get('http://ashleytlee.com/wp-json/wp/v2/posts').then(response => {
      this.side_posts = response.body;
//        console.log(this.blog_posts)
    }, response => {});
  },
  data: function () {
    return {
      title: 'AndroidTV.News',
      menuVisible: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  text-align: center;
  margin-top: 20px;
  display: flex;

}

.main{
  flex-grow: 2;
}
.sidebar{
  flex-basis: 25%;
}
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
