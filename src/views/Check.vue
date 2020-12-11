<template> 
  <div class="home check">
    <div class="logo"><img alt="logoa" src="../img/logo.png"></div>
    <p>入力ありがとうございます。<br>グラフで皆の体調を確認しましょう。</p>
    <div class="btn"><router-link to="/index">グラフ確認</router-link></div> 
  </div>
</template>

<style>
.check{
    margin:auto 0;
}
.logoa img{
    height: 20%;
    width: 20%;
    margin: 50px 0 0 0;
};
</style>