<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold pb-4">Install</h1>
    <p>
      Installing <b>daisy-ext</b>
      is easy! Add
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">daisy-ext</code>
      as a package to your project
    </p>
    <br />
    <div class="mockup-code">
      <pre><code>npm i -D daisy-ext</code></pre>
    </div>
    <br />
    <p>
      Then add
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">daisy-ext</code>
      before
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">daisyui</code>
      in your projects
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm"
        >tailwind.config.js</code
      >
    </p>
    <br />
    <div class="mockup-code">
      <pre><code>module.exports = {</code></pre>
      <pre><code>  //...</code></pre>
      <pre><code>  plugins: [</code></pre>
      <pre>    <code class="badge badge-lg">require('daisy-ext'),</code></pre>
      <pre><code>    require('daisyui'),</code></pre>
      <pre><code>  ],</code></pre>
      <pre><code>}</code></pre>
    </div>
    <br />
    <p>
      <b>daisy-ext</b>
      should now be installed. The colors can be used the same way any other
      <b>DaisyUI</b>
      color. You can preview some of the colors added
      <b>
        <RouterLink to="/colors/basic" class="link hover:text-primary-800-base-content">
          here
        </RouterLink>
      </b>
    </p>
  </div>
</template>
<style scoped>
.mockup-code::before {
  content: none;
}
</style>
<script setup lang="ts"></script>
