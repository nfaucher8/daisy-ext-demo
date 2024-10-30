<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 id="basic" class="text-4xl font-bold pb-4">About</h1>
    <p>
      <b>daisy-ext</b>
      is a
      <b>
        <a class="link hover:text-primary-800-base-content" href="https://tailwindcss.com/">
          Tailwind</a
        ></b
      >
      plugin that extends the palette provided by
      <b>
        <a class="link hover:text-primary-800-base-content" href="https://daisyui.com//"
          >DaisyUI</a
        ></b
      >. It does this by leveraging
      <b>
        <a
          class="link hover:text-primary-800-base-content"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
        >
          color-mix</a
        ></b
      >
      to mix colors dynamically in the browser.
    </p>
    <br />
    <h1 class="text-4xl font-bold pb-4">Why?</h1>
    <h2 class="text-2xl font-bold pb-2">Opacity</h2>
    <p>
      <b>Tailwind</b>
      provides the ability to modify a color by adjusting its opacity. This can be useful when
      designing a component that has hover and active states but also has some shortcomings.
    </p>
    <br />
    <p>
      While
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">primary/75</code>
      and
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">primary-750</code>
      look similar with a
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">base-100</code>
      background when they have a complex background they look different.
    </p>
    <div class="flex gap-2 justify-center mx-auto py-4">
      <div class="grow flex gap-2 justify-center py-8 mx-auto rounded-btn">
        <div class="h-16 w-48 rounded-btn bg-primary/75 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary/75</code>
        </div>
        <div class="h-16 w-48 rounded-btn bg-primary-750 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary-750</code>
        </div>
      </div>
      <div class="grow flex gap-2 justify-center py-8 mx-auto bg-accent checkerboard rounded-btn">
        <div class="h-16 w-48 rounded-btn bg-primary/75 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary/75</code>
        </div>
        <div class="h-16 w-48 rounded-btn bg-primary-750 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary-750</code>
        </div>
      </div>
    </div>
    <p>
      Mixed colors provided by
      <b>daisy-ext</b>
      can also be used with opacity.
    </p>
    <div class="flex gap-2 justify-center mx-auto py-4">
      <div class="grow flex gap-2 justify-center py-8 mx-auto bg-accent checkerboard rounded-btn">
        <div class="h-16 w-48 rounded-btn bg-primary-750 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary-750</code>
        </div>
        <div class="h-16 w-48 rounded-btn bg-primary-750/75 relative">
          <code class="absolute bottom-0 start-4 text-primary-content">primary-750/75</code>
        </div>
      </div>
    </div>
    <h2 class="text-2xl font-bold pb-2">Contrast</h2>
    <p>
      By default <b>DaisyUI</b> mixes all buttons against <b>black</b>
      to generate its hover states. This is fine for light buttons like
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">accent</code>
    </p>
    <div class="flex gap-2 justify-center mx-auto my-4 py-4 rounded-btn" data-theme="light">
      <button class="btn btn-accent">Click Me</button>
    </div>
    <p>
      but it means dark buttons like
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">neutral</code>
      will have a low contrast between their default and hover states.
    </p>
    <div class="flex gap-2 justify-center mx-auto my-4 py-4 rounded-btn" data-theme="light">
      <button class="btn btn-neutral">Click Me</button>
    </div>
    <p>
      By adding
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm"
        >hover:bg-neutral/75</code
      >
      to the button we can provide more contrast to the button if the background is the opposite
      color to it.
    </p>
    <div class="flex gap-2 justify-center mx-auto my-4 py-4 rounded-btn" data-theme="light">
      <button class="btn btn-neutral hover:bg-neutral/75">Click Me</button>
    </div>
    <p>
      But if the background does not have much contrast with the button the hover state also won't
      have much contrast.
    </p>
    <div class="flex gap-2 justify-center mx-auto my-4 py-4 rounded-btn" data-theme="synthwave">
      <button class="btn btn-neutral border-4 hover:bg-neutral/75 hover:border-neutral/75">
        Click Me
      </button>
    </div>
    <p>
      <b>daisy-ext</b>
      can solve this by mixing
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">neutral</code>
      against
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm"
        >neutral-content</code
      >
      to create a hover state that always has sufficient contrast. The drawback of this is the
      classnames can get quite long:
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">
        hover:bg-neutral-750-neutral-content
      </code>
    </p>
    <br />
    <p>Try changing the theme to see how the different buttons react to different themes</p>
    <div class="flex gap-2 justify-center mx-auto my-4 py-4">
      <div class="flex-1 flex flex-col gap-2">
        <button class="btn btn-neutral">Click Me</button>
        <code>btn-neutral</code>
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <button class="btn btn-neutral hover:bg-neutral/75">Click Me</button>
        <code>hover:bg-neutral/75</code>
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <button class="btn btn-neutral hover:bg-neutral-750-neutral-content">Click Me</button>
        <code>hover:bg-neutral-750-neutral-content</code>
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
