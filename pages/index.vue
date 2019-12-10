<template>
  <div class="container">
    <div>
      <h1 class="title">
        <span style="color: #526488;" class="title1">PyroCode</span
        ><span style="color: #E9524A;" class="title1">Software</span>
      </h1>
      <h2 class="subtitle">
        coding digital products with creative technologies
      </h2>
      <div class="links">
        <a
          href="https://instagram.com/pyrocodesoftware"
          target="_blank"
          class="button--green"
        >
          Instagram
        </a>
        <a
          href="https://github.com/pyro-code"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

span .title1 {
  color: #526488;
}

span .title1 {
  color: #5e3535;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
