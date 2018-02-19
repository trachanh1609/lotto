<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@media screen and (min-width: 760px) {
  .wrapper {
    width: 50%;
    margin: 0 auto;
  }
}

.card {
  border: 1px solid black;
  padding: 0.2em;
}

.table {
  border: 0.5px solid black;
  width: 100%;
  text-align: center;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
}

.table td {
  border: 0.5px solid black;
  width: 11% !important;
  font-weight : bold;
  font-size: 20pt;
  height: 1.2em !important;
}

.table td span {
  float: left;
  width: 100%;
}

.colorBlue {
  background: blue;
}
.colorBrown {
  background: brown;
}
.crossed {
  background: green;
  opacity: 0.7;
}

/*.ball {
  display: inline-block;
  width: 2em;
  height: 2em;
  border: 0.5px solid red;
  text-align: center;
  font-size: 2em;

}*/

.gameNumber {
  float: left;
  width: 100%;
  margin-top: 0.3em;
}
.buttonWrapper {
  margin: 0 auto;
}
.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}



.circle {
  font-weight: bold;
  font-size: 20pt;
  padding-left: 1em;
  padding-top: 1em;
  color: white;
  display: inline-block;
  background: black;
  border-radius: 100%;
  height: 2em;
  width: 2em;
  margin: 0;
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);
}
.stage{
  display: inline-block;
}

.circleBig {
  font-weight: bold;
  font-size: 40pt;
  padding-left: 1em;
  padding-top: 1em;
  color: white;
  display: inline-block;
  background: black;
  border-radius: 100%;
  height: 2em;
  width: 2em;
  margin: 0;
  background: radial-gradient(circle at 100px 100px, #5cff5e, #000);
}

.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
