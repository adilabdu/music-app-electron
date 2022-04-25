<template>

  <ContentPage page-title="Listen Now">

    <AlbumCarousel title="Recently Played">
      <AlbumCard :track-info="{ artwork: 'static/artworks/Fleetwood-Mac-Rumours-1-1.webp', artist: 'Fleetwood Mac', title: 'Rumors' }" />
      <AlbumCard :track-info="{ artwork: 'static/artworks/Kendrick-Lamar-To-Pimp-a-Butterfly.webp', artist: 'Kendrick Lamar', title: 'To Pimp a Butterfly' }" />
      <AlbumCard :track-info="{ artwork: 'static/artworks/Taylor-Swift-1989.webp', artist: 'Taylor Swift', title: '1989' }" />
      <AlbumCard class="" :track-info="{ artwork: 'static/artworks/Kanye-West-Yeezus.webp', artist: 'Kanye West', title: 'Yeezus' }" />
      <AlbumCard class="xl:inline lg:hidden" :track-info="{ artwork: 'static/artworks/The-Beatles-Abbey-Road-Album-cover-web-optimised-820.webp', artist: 'The Beatles', title: 'Abbey Road' }" />
      <AlbumCard class="2xl:inline lg:hidden" :track-info="{ artwork: 'static/artworks/Parliament-Mothership-Connection-album.webp', artist: 'Parliament', title: 'Mothership Connection' }" />
    </AlbumCarousel>

    <AlbumCarousel title="Favorites">
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2022/03/4.-The-Notorious-B.I.G.-%E2%80%98Ready-to-Die-1994-album-art-billboard-1240.jpg?w=1065', artist: 'The Notorious B.I.G.', title: 'Ready to Die' }" />
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg?w=1024', artist: 'Cardi B', title: 'Invasion of Privacy' }" />
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2022/03/42.-Nicki-Minaj-%E2%80%98The-Pinkprint-2014-album-art-billboard-1240.jpg?w=1024', artist: 'Nicki Minaj', title: 'The Pinkprint' }" />
      <AlbumCard class="" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2022/03/40.-Beyonce-%E2%80%98Beyonce-2013-album-art-billboard-1240.jpg?w=1024', artist: 'Beyonce', title: 'Beyonce' }" />
      <AlbumCard class="xl:inline lg:hidden" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2020/12/tame-impala-the-slow-rush-cover-billboard-1240-1607121696.jpg', artist: 'Tame Impala', title: 'The Slow Rush' }" />
      <AlbumCard class="2xl:inline lg:hidden" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/media/ariana-grande-sweetner-album-art-2018-billboard-1240.jpg?w=1024', artist: 'Ariana Grande', title: 'The Sweetener' }" />
    </AlbumCarousel>

    <AlbumCarousel title="New Releases">
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2021/12/Vince-Staples-Vince-Staples-album-art-2021-billboard-1240.jpg?w=1024', artist: 'Vince Staples', title: 'Vince Staples' }" />
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2021/05/J-Cole-The-Off-Season-album-art-2021-billboard-1240-1622132104.jpg?w=1024', artist: 'J. Cole', title: 'The Off Season' }" />
      <AlbumCard :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/media/Taylor-Swift-Lover-album-art-2019-billboard-1240.jpg?w=1024', artist: 'Taylor Swift', title: 'Lover' }" />
      <AlbumCard class="" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2021/12/Kanye-West-Donda-album-art-2021-billboard-1240.jpg?w=1024', artist: 'Ye', title: 'Donda' }" />
      <AlbumCard class="xl:inline lg:hidden" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/2021/12/Justin-Bieber-Justice-album-art-2021-billboard-1240.jpg?w=1024', artist: 'Justin Bieber', title: 'Justice' }" />
      <AlbumCard class="2xl:inline lg:hidden" :track-info="{ artwork: 'https://www.billboard.com/wp-content/uploads/media/maggie-rogers-heard-it-in-a-past-life-album-art-2019-billboard-1240.jpg?w=1024', artist: 'Maggie Rogers', title: 'Heard it in a Past Life' }" />
    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import ContentPage from '../components/ContentPage.vue';
  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";

</script>

<style scoped>

</style>