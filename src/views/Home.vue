<template>
  <div class="home">
    <main class="flex-shrink-0">
      <navbar />
      <!-- Header-->
      <header class="bg-dark py-5">
        <div class="container">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <h1 class="display-5 fw-bolder text-white mb-2">
                  A fast and efficient intuitive bus ticket booking application
                </h1>
                <p class="lead fw-normal text-white-50 mb-4">
                  Save time during your future reservations it's fast, simple
                  and efficient
                </p>
                <div
                  class="
                    d-grid
                    gap-3
                    d-sm-flex
                    justify-content-sm-center justify-content-xl-start
                  "
                >
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                    >Get Started</a
                  >
                  <a class="btn btn-outline-light btn-lg px-4" href="#!"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                class="img-fluid rounded-3 my-5"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
      <!-- Features section-->
      <section class="py-5" id="features">
        <div class="container my-5">
          <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2 class="fw-bolder mb-0">A better way to start building.</h2>
            </div>
            <div class="col-lg-8">
              <div class="row gx-5 row-cols-1 row-cols-md-2">
                <div class="col mb-5 h-100">
                  <div
                    class="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                      p-1
                    "
                  >
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div
                    class="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                      p-1
                    "
                  >
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div
                    class="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                      p-1
                    "
                  >
                    <i class="bi bi-bell"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text. {{ $t('auth.login') }}
                  </p>
                </div>
                <div class="col h-100">
                  <div
                    class="
                      feature
                      bg-primary bg-gradient
                      text-white
                      rounded-3
                      mb-3
                      p-1
                    "
                  >
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import navbar from '../components/guest/Navbar'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>
