<script lang="ts" setup>
import { LinkIcon } from '@heroicons/vue/outline'
</script>
<template>
  <div class="content">
    <h2>Works</h2>
    <div>
      <h3>Jomon v2</h3>
      <ul>
        <li>概要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 部費管理サービスのversion2を制作中（バックエンドは７割ほど、フロントエンドは５割ほど完成）</li>
        <li>自分が行ったこと : バックエンド開発、フロントエンド開発、設計、デザイン</li>
        <li>backend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Golang, ent(ORM from facebook), Docker, CohoHa(Iaas), Swift(object storage)</li>
        <li>frontend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Vue, TypeScript, pinia(store), windi-css, </li>
        <!-- <li>team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: バックエンド、フロントエンド共に２人ずつ</li> -->
        <li><a href="https://github.com/traPtitech/Jomon">github</a></li>
      </ul>
    </div>
    <div>
      <h3>KnoQ</h3>
      <ul>
        <li>概要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 部内イベント、開催場所管理サービスの機能改善</li>
        <li>自分が行ったこと　: バックエンドのいくつかの機能改善</li>
        <li>backend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Golang, gorm(ORM), Docker, ConoHa(Iaas)</li>
        <!-- <li>team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: バックエンド、フロントエンド共に３名ずつ</li> -->
        <li><a href="https://github.com/traPtitech/knoQ">github</a></li>
      </ul>
    </div>
    <div>
      <a href="https://frontend-opal-delta-19.vercel.app/">
        <h3>Palamo</h3>
        <LinkIcon class="icon"/>
      </a>
      <ul>
        <li>概要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 場所記憶法援助、共有アプリを部内ハッカソンで作成</li>
        <li>自分が行ったこと : 設計、バックエンド開発のほぼ全て</li>
        <li>backend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Golang, sqlx, Docker, AWS, Google Oauth(openID connect)</li>
        <!-- <li>team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: バックエンド２名、フロントエンド３名</li> -->
        <li><a href="https://github.com/hackathon-21-winter-18/backend">github</a></li>
      </ul>
    </div>
    <div>
      <h3>ISUCON11予選の練習</h3>
      <ul>
        <li>概要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ISUCON11の予選問題を練習として解いた</li>
        <li>行ったこと : 計測ツールを用いたボトルネックの発見。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N+1問題解決、テーブル構造改善, index付与, bulk insert等のperformance tuning</li>
        <li>skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Virtual Box, Golang, Mysql, Nginx, pprof, slow-log, kataribe, top</li>
        <li><a href="https://github.com/shota-aa/isucon11-qualifier">github</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
.icon {
  width: 15px;
}
</style>