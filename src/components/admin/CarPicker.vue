<template>
  <div id="car-picker">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Vehicle setup</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="row modal-body">
            <div class="setup col-4">
              <form>
                <div class="form-group">
                  <font-awesome-icon
                    class="d-flex justify-content-start mb-2"
                    icon="file-signature"
                  />
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="name"
                    v-model="name"
                    aria-describedby="name Help"
                    placeholder="Name"
                    autocomplete="off"
                  />
                  <font-awesome-icon
                    class="d-flex justify-content-start mb-2"
                    icon="layer-group"
                  />
                  <div class="custom-number">
                    <input
                      type="number"
                      min="1"
                      max="2"
                      class="custom-number-input mb-2"
                      v-model="floor"
                      placeholder="Floor"
                      disabled
                    />
                    <button
                      class="custom-number-botton"
                      @click.prevent="updateCarFloor('add')"
                    >
                      <font-awesome-icon icon="sort-up" />
                    </button>
                    <button
                      class="custom-number-botton-down"
                      @click.prevent="updateCarFloor('del')"
                    >
                      <font-awesome-icon icon="caret-down" />
                    </button>
                  </div>
                  <font-awesome-icon
                    class="d-flex justify-content-start mb-2"
                    icon="grip-lines"
                  />
                  <div class="custom-number">
                    <input
                      type="number"
                      min="2"
                      max="15"
                      class="custom-number-input mb-2"
                      v-model="rows"
                      placeholder="Rows"
                      disabled
                    />
                    <button
                      class="custom-number-botton"
                      @click.prevent="updateRowsOfSeats('add')"
                    >
                      <font-awesome-icon icon="sort-up" />
                    </button>
                    <button
                      class="custom-number-botton-down"
                      @click.prevent="updateRowsOfSeats('del')"
                    >
                      <font-awesome-icon icon="caret-down" />
                    </button>
                  </div>
                  <font-awesome-icon
                    class="d-flex justify-content-start mb-2"
                    icon="grip-lines-vertical"
                  />
                  <div class="custom-number">
                    <input
                      type="number"
                      min="3"
                      max="6"
                      class="custom-number-input mb-2"
                      v-model="columns"
                      placeholder="Columns"
                      disabled
                    />
                    <button
                      class="custom-number-botton"
                      @click.prevent="updateColumnOfSeats('add')"
                    >
                      <font-awesome-icon icon="sort-up" />
                    </button>
                    <button
                      class="custom-number-botton-down"
                      @click.prevent="updateColumnOfSeats('del')"
                    >
                      <font-awesome-icon icon="caret-down" />
                    </button>
                  </div>
                  <select
                    v-model="seatType"
                    class="form-select mb-100"
                    aria-label="seat-type"
                  >
                    <option disabled value="">Seat type</option>
                    <option>DRIVER</option>
                    <option>SPACE</option>
                    <option>EXTENTION</option>
                  </select>
                </div>
              </form>
              <div class="legend d-flex justify-content-start">
                <span class="icon"></span> Driver
              </div>
            </div>
            <div class="car-global" :class="changeColSize">
              <img class="col-12 bus-front" src="/img/seats/bus_front.png" />
              <div class="car">
                <div class="row g-0 seat-car d-flex justify-content-center">
                  <span
                    v-for="(place, index) in seatPlaces"
                    :key="index"
                    class="col position-relative"
                  >
                    <img
                      class="seat"
                      :src="place.url"
                      @click.prevent="setPlace(index)"
                      :id="index"
                    />
                    <!-- <span class="position-absolute translate-middle">
                      <span class="">{{ index }}</span>
                    </span> -->
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'car-picker',
  data() {
    return {
      seatPlaces: [],
      rows: 15,
      columns: 6,
      floor: 1,
      seatType: '',
      name: ''
    }
  },
  mounted() {
    for (let i = 0; i < 90; i++) {
      this.seatPlaces.push({
        indice: i,
        url: '/img/seats/seat_free.svg',
        type: 'FREE'
      })
    }
  },
  methods: {
    updateRowsOfSeats(action) {
      if (action == 'add') {
        if (this.rows >= 2 && this.rows < 15) {
          this.rows++
          for (let i = 0; i < this.columns; i++) {
            this.seatPlaces.push({
              indice: i,
              url: '/img/seats/seat_free.svg',
              type: 'FREE'
            })
          }
        }
      } else {
        if (this.rows > 2) {
          this.rows--
          this.seatPlaces.splice(
            this.seatPlaces.length - this.columns,
            this.columns
          )
        }
      }
    },
    updateColumnOfSeats(action) {
      if (action == 'add') {
        if (this.columns >= 3 && this.columns < 6) {
          this.columns++
          for (let i = 0; i < this.rows; i++) {
            this.seatPlaces.push({
              indice: i,
              url: '/img/seats/seat_free.svg',
              type: 'FREE'
            })
          }
        }
      } else {
        if (this.columns > 3) {
          this.columns--
          this.seatPlaces.splice(this.seatPlaces.length - this.rows, this.rows)
        }
      }
    },
    updateCarFloor(action) {
      alert('Floor')
      console.log(action)
    },
    setPlace(index) {
      switch (this.seatType) {
        case 'DRIVER':
          if (index != 0) {
            alert('This place is not a driver place')
            return false
          }
          for (let i = 0; i < this.seatPlaces.length; i++) {
            if (this.seatPlaces[i].type == 'DRIVER' && index != i) {
              alert('driver')
              return false
            }
          }
          if (this.seatPlaces[index].type == 'FREE') {
            this.seatPlaces[index].url = '/img/seats/seat_driver.svg'
            this.seatPlaces[index].type = 'DRIVER'
          } else if (this.seatPlaces[index].type == 'DRIVER') {
            this.seatPlaces[index].url = '/img/seats/seat_free.svg'
            this.seatPlaces[index].type = 'FREE'
          }
          break
        case 'SPACE':
          if (index == 0) {
            alert("The first seat can't be empty")
            return false
          }
          if (this.seatPlaces[index].type == 'SPACE') {
            this.seatPlaces[index].url = '/img/seats/seat_free.svg'
            this.seatPlaces[index].type = 'FREE'
          } else {
            this.seatPlaces[index].url = '/img/seats/seat_space.svg'
            this.seatPlaces[index].type = 'SPACE'
          }
          break
        case 'EXTENTION':
          if (index == 0) {
            alert("The first seat can't be extention")
            return false
          }
          if (this.seatPlaces[index].type == 'EXTENTION') {
            this.seatPlaces[index].url = '/img/seats/seat_free.svg'
            this.seatPlaces[index].type = 'FREE'
          } else {
            this.seatPlaces[index].url = '/img/seats/seat_extention.svg'
            this.seatPlaces[index].type = 'EXTENTION'
          }
          break

        default:
          alert('Please chose type of seat')
          break
      }
    }
  },
  computed: {
    changeColSize() {
      switch (this.columns) {
        case 5:
          return 'col-7'
        case 4:
          return 'col-6'
        case 3:
          return 'col-5'
        default:
          return 'col-8'
      }
    }
  }
}
</script>
