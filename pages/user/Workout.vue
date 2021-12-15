<template>
  <div>
    <app-workout />
  </div>
</template>
<script>
import Workout from '@/components/Dashboard/Workouts/Workouts.vue'

export default {
  components: {
    'app-workout': Workout
  }
}
</script>
