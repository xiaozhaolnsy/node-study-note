<template>
    <div>
        <div class = "block-panel">
                <div :id="forId(i)"
                :class ="[{' block activated ': (datalist.indexOf(i+1) >= 0)},
                {' block deactivated ': (datalist.indexOf(i+1) == -1)}] "
                v-for="(item,i) in block" :key="i" >
                    {{item}}
                </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      size: 5,
      block: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      datalist: [22, 21]
    }
  },
  methods: {
    forId (index) {
      return index
    },
    getUid () {
      this.uid = localStorage.getItem('uid')
    },
    getDatalist () {
      this.$http({
        url: this.$http.adornUrl(`/sta`),
        method: 'get',
        params: { u: `${this.uid}` }
      }).then(({ data }) => {
        if (data) {
          console.log(data.list)
          this.datalist = data.list
        }
      }
      )
    }
  },
  created () {
    this.getUid()
    this.getDatalist()
  }
}
</script>
<style>
  .block-panel{
      width: 370px;
  }
  .block{
    width: 40px;
    height: 40px;
    margin: 5px;
    float: left;
  }
  .activated{
    background:#6ABCFF
  }
  .deactivated{
    background:#ebedf0
  }
</style>
