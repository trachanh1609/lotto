<template lang="html">
  <div class="row">
    <h3>Blue 1</h3>
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
</template>

<script>
export default {
  data(){
    return {
      name: 'Blue1',
      color: 'colorBlue',
      tables: [
          {
            rows: [
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 11, crossed: false },
                  { data: '', crossed: false },
                  { data: 35, crossed: false },
                  { data: '', crossed: false },
                  { data: 59, crossed: false },
                  { data: 68, crossed: false },
                  { data: '', crossed: false },
                  { data: 80, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 17, crossed: false },
                  { data: 24, crossed: false },
                  { data: '', crossed: false },
                  { data: 42, crossed: false },
                  { data: 57, crossed: false },
                  { data: '', crossed: false },
                  { data: 76, crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 1, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 27, crossed: false },
                  { data: '', crossed: false },
                  { data: 48, crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 79, crossed: false },
                  { data: 81, crossed: false }
                ]
              } // end of row 3
            ]
          },  // x3 rows in table one

          {
            rows: [
              {
                numbers: [
                  { data: 7, crossed: false }, // x9 numbers, can be empty
                  { data: 16, crossed: false },
                  { data: '', crossed: false },
                  { data: 31, crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 65, crossed: false },
                  { data: 77, crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 23, crossed: false },
                  { data: '', crossed: false },
                  { data: 44, crossed: false },
                  { data: 50, crossed: false },
                  { data: '', crossed: false },
                  { data: 71, crossed: false },
                  { data: 85, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 14, crossed: false },
                  { data: '', crossed: false },
                  { data: 37, crossed: false },
                  { data: 49, crossed: false },
                  { data: '', crossed: false },
                  { data: 63, crossed: false },
                  { data: '', crossed: false },
                  { data: 88, crossed: false }
                ]
              } // end of row 3
            ]
          },  // x3 rows in table one

          {
            rows: [
              {
                numbers: [
                  { data: 3, crossed: false }, // x9 numbers, can be empty
                  { data: '', crossed: false },
                  { data: 20, crossed: false },
                  { data: '', crossed: false },
                  { data: 46, crossed: false },
                  { data: '', crossed: false },
                  { data: 67, crossed: false },
                  { data: 73, crossed: false },
                  { data: '', crossed: false }
                ]
              },
              {
                numbers: [
                  { data: 8, crossed: false }, // x9 numbers, can be empty
                  { data: 12, crossed: false },
                  { data: '', crossed: false },
                  { data: 34, crossed: false },
                  { data: 45, crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: '', crossed: false },
                  { data: 87, crossed: false }
                ]
              },
              {
                numbers: [
                  { data: '', crossed: false }, // x9 numbers, can be empty
                  { data: 19, crossed: false },
                  { data: '', crossed: false },
                  { data: 39, crossed: false },
                  { data: '', crossed: false },
                  { data: 55, crossed: false },
                  { data: 60, crossed: false },
                  { data: '', crossed: false },
                  { data: 89, crossed: false }
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
