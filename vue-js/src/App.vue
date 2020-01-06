<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="col s2 offset-s4 input-field">
            <select v-model="scaleOf" ref="scaleOfSelect">
              <option v-for="(note, index) in allNotes" v-bind:key="index">{{ note }}</option>
            </select>
        </div>
        <div class="col s2 input-field">
            <select v-model="scaleType" ref="scaleTypeSelect">
              <option v-for="(type, index) in scaleTypes" v-bind:key="index">{{ type }}</option>
            </select>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s1 offset-s2 teal white-text center-align mrg">I</div>
      <div class="col s1 teal white-text center-align mrg">II</div>
      <div class="col s1 teal white-text center-align mrg">III</div>
      <div class="col s1 teal white-text center-align mrg">IV</div>
      <div class="col s1 teal white-text center-align mrg">V</div>
      <div class="col s1 teal white-text center-align mrg">VI</div>
      <div class="col s1 teal white-text center-align mrg">VII</div>
      <div class="col s1 teal white-text center-align">VIII</div>
    </div>
    <div id="scale" class="row">
      <div id="spacer" class="col s2 white white-text center-align mrg"></div>
      <div class="col s1 black white-text center-align mrg">C</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allNotes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
      scaleTypes: ['Major', 'Minor'],
      majorSteps: [0, 2, 4, 5, 7, 9, 11, 12],
      minorSteps: [0, 2, 3, 5, 7, 8, 10, 12],
      scaleOf: 'C',
      scaleType: 'Major',
      majorScale: [],
      minorScale: [],
      startAt: 0,
    }
  },
  methods: {
    displayScale: function() {
      return null
    }
  }
}
</script>

<style scoped>
.mrg {
    margin-right: 1px;
}
</style>