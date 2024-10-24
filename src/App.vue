<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

<!--  <button class="ring-2  ring-neutral-350-secondary ring-offset-neutral-650-secondary ring-offset-4">-->
<!--    Create account-->
<!--  </button>-->

  <button class="bg-neutral shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-950-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-900-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-850-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-800-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-750-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-700-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-650-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-600-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-550-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-500-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-450-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-400-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-350-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-300-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-250-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-200-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-150-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-100-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-neutral-50-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>

  <br/>

  <button class="bg-neutral shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-primary shadow-lg text-neutral-850/50">
    Create account
  </button><button class="bg-secondary shadow-lg text-neutral-850/50">
    Create account
  </button>
  <button class="bg-primary-500-secondary text-primary-content shadow-lg">
    Create account
  </button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
