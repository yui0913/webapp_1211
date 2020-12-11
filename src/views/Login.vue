<template>
  <div class="home">
    <div class="logo"><img alt="logoa" src="../img/logo.png"></div>
    <div class="in">
    　<div class="kanriid">
      <p style="display:inline">ユーザー名</p>
      <input type="text" v-model="userid" size="15">
      </div>
      <div class="password">
      <p style="display:inline"><br>パスワード</p>
      <input type="password" v-model="password" size="15">
      </div>
    </div>
    <div class="btna"><router-link to="/kanri">ログイン</router-link></div> 
  </div>
</template>

<style>
.userid{
    margin:10px auto;
}

</style>