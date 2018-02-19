<template lang="html">
  <div class="row">
    <h3>Blue 1</h3>
    <div class="wrapper">
      <div class="card">
        <table v-for="table in tables" class="table">
          <tr v-for="row in table.rows">
            <td v-for="number in row.numbers" :class="[ number.data == '' ? color : '' ]">
              <span @click="number.crossed = !number.crossed "
                :class="{'crossed': number.crossed}"
              >{{number.data}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'Brown1',
      color: 'colorBrown',
      tables: [
          {
            rows: [
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 13, crossed: false },
                  { data: 22, crossed: false },
                  { data: '', crossed: false },
                  { data: 41, crossed: false },
                  { data: '', crossed: false },
                  { data: 61, crossed: false },
                  { data: '', crossed: false },
                  { data: 86, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 3, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 24, crossed: false },
                  { data: 34, crossed: false },
                  { data: '', crossed: false },
                  { data: 52, crossed: false },
                  { data: '', crossed: false },
                  { data: 71, crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 1, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 35, crossed: false },
                  { data: '', crossed: false },
                  { data: 56, crossed: false },
                  { data: 64, crossed: false },
                  { data: '', crossed: false },
                  { data: 83, crossed: false }
                ]
              } // end of row 3
            ]
          },  // x3 rows in table one

          {
            rows: [
              {
                numbers: [
                  { data: 7, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 23, crossed: false },
                  { data: 36, crossed: false },
                  { data: '', crossed: false },
                  { data: 53, crossed: false },
                  { data: '', crossed: false },
                  { data: 75, crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 5, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 48, crossed: false },
                  { data: 59, crossed: false },
                  { data: '', crossed: false },
                  { data: 72, crossed: false },
                  { data: 84, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 14, crossed: false },
                  { data: 28, crossed: false },
                  { data: '', crossed: false },
                  { data: 42, crossed: false },
                  { data: '', crossed: false },
                  { data: 60, crossed: false },
                  { data: '', crossed: false },
                  { data: 87, crossed: false }
                ]
              } // end of row 3
            ]
          },  // x3 rows in table one

          {
            rows: [
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 26, crossed: false },
                  { data: '', crossed: false },
                  { data: 47, crossed: false },
                  { data: 50, crossed: false },
                  { data: '', crossed: false },
                  { data: 79, crossed: false },
                  { data: 89, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 4, crossed: false }, // x9 numbers, can be empty
                  { data: 10, crossed: false },
                  { data: '', crossed: false },
                  { data: 30, crossed: false },
                  { data: 49, crossed: false },
                  { data: '', crossed: false },
                  { data: 66, crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 15, crossed: false },
                  { data: 25, crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 51, crossed: false },
                  { data: '', crossed: false },
                  { data: 76, crossed: false },
                  { data: 81, crossed: false }
                ]
              } // end of row 3
            ]
          },  // x3 rows in table one
        ],  // end of One
    }
  }
}
</script>

<style lang="css">
</style>
