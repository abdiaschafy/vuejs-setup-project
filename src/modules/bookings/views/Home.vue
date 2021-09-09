<template>
  <GuestLayout>
    <div class="booking">
      <header class="bg-dark py-5">
        <div class="container">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <span class="fw-bolder text-white mb-2">
                  <div class="card">
                    <div class="card-body">
                      <div class="panel col-lg-6">
                        <ul
                          class="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link active"
                              id="pills-one-way-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-one-way"
                              type="button"
                              role="tab"
                              aria-controls="pills-one-way"
                              aria-selected="true"
                            >
                              One way
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link"
                              id="pills-return-trip-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-return-trip"
                              type="button"
                              role="tab"
                              aria-controls="pills-return-trip"
                              aria-selected="false"
                            >
                              Return trip
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="pills-one-way"
                            role="tabpanel"
                            aria-labelledby="pills-one-way-tab"
                          >
                            Allé simple
                          </div>
                          <div
                            class="tab-pane fade"
                            id="pills-return-trip"
                            role="tabpanel"
                            aria-labelledby="pills-return-trip-tab"
                          >
                            Allé retour
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from '../../../layouts/GuestLayout.vue'

export default {
  name: 'one-way',
  components: {
    GuestLayout
  }
}
</script>
