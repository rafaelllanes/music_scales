<template>
  <div class="container">
    <div class="row">
      <div class="col s2 offset-s4 input-field">
        <form>
          <select></select>
        </form>
      </div>
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
      <div id="note1" class="col s1 offset-s2 black white-text center-align mrg">*</div>
      <div id="note2" class="col s1 black white-text center-align mrg">*</div>
      <div id="note3" class="col s1 black white-text center-align mrg">*</div>
      <div id="note4" class="col s1 black white-text center-align mrg">*</div>
      <div id="note5" class="col s1 black white-text center-align mrg">*</div>
      <div id="note6" class="col s1 black white-text center-align mrg">*</div>
      <div id="note7" class="col s1 black white-text center-align mrg">*</div>
      <div id="note8" class="col s1 black white-text center-align">*</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allNotes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    }
  }
}
</script>

<style scoped>
.mrg {
    margin-right: 1px;
}
</style>