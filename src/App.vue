<template>
  <div class="p-10">
    <div class="text-3xl font-extrabold">
      Dad Jokes Website 😀
    </div>
    <div class="container mx-auto">
      <nav class="text-sm leading-6 font-semibold text-gray-700">
        <ul class="flex justify-center">
          <li>
            <router-link to="/" class="p-2 hover:text-sky-500">Random joke</router-link>
          </li>
          <li>
            <router-link to="/about" class="p-2 hover:text-sky-500">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
