<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold pb-4">Examples</h1>
    <p>
      This page contains a couple examples of different ways
      <b>daisy-ext</b>
      can be used to customize components.
    </p>
    <br />
    <h2 class="text-2xl font-bold">Non Transparent Outline Button</h2>
    <div class="flex gap-2 justify-center mx-auto py-4">
      <div class="grow flex gap-2 justify-center py-8 mx-auto rounded-btn checkerboard">
        <button
          class="btn btn-sm bg-base-100 ring-1 text-primary ring-primary hover:bg-primary-100 active:bg-primary-200 active:text-primary-800-primary-content"
        >
          Click Me
        </button>
      </div>
    </div>
    <br />
    <h2 class="text-2xl font-bold">Alert with color shades</h2>
    <div class="flex gap-2 justify-center mx-auto pt-4">
      <div class="grow flex gap-2 justify-center p-8 mx-auto rounded-btn">
        <div
          role="alert"
          class="alert bg-success-400 text-success-400-base-content border-success-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
        <div role="alert" class="alert bg-error-400 text-error-400-base-content border-error-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span> Error! Task failed successfully.</span>
        </div>
      </div>
    </div>
    <br />
    <h2 class="text-2xl font-bold">Custom Menu</h2>
    <div class="flex gap-2 justify-center mx-auto py-4">
      <div class="grow flex gap-2 justify-center py-8 mx-auto rounded-btn checkerboard">
        <ul class="menu bg-primary text-primary-content rounded-box w-56">
          <li class="hover:bg-primary-800-primary-content rounded-btn"><a>Item 1</a></li>
          <li class="hover:bg-primary-800-primary-content rounded-btn"><a>Item 2</a></li>
          <li class="hover:bg-primary-800-primary-content rounded-btn"><a>Item 3</a></li>
        </ul>
      </div>
    </div>
    <br />
    <h2 class="text-2xl font-bold">Error Placeholder</h2>
    <div class="flex gap-2 justify-center mx-auto py-4">
      <div class="grow flex gap-2 justify-center py-8 mx-auto rounded-btn">
        <div>
          <input
            type="text"
            placeholder="Username"
            class="input input-bordered input-error w-full max-w-xs placeholder:text-error-600"
          />
          <label class="text-error-800-base-content font-bold">Required</label>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.checkerboard {
  background: conic-gradient(
    color-mix(
        in oklab,
        var(--fallback-b1, oklch(var(--b1))) 80%,
        var(--fallback-bc, oklch(var(--bc)))
      )
      90deg,
    color-mix(
        in oklab,
        var(--fallback-b1, oklch(var(--b1))) 60%,
        var(--fallback-bc, oklch(var(--bc)))
      )
      90deg 180deg,
    color-mix(
        in oklab,
        var(--fallback-b1, oklch(var(--b1))) 80%,
        var(--fallback-bc, oklch(var(--bc)))
      )
      180deg 270deg,
    color-mix(
        in oklab,
        var(--fallback-b1, oklch(var(--b1))) 60%,
        var(--fallback-bc, oklch(var(--bc)))
      )
      270deg
  );
  background-repeat: repeat;
  background-size: 60px 60px;
  background-position: top left;
}
</style>
<script setup lang="ts"></script>
