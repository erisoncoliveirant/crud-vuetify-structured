<template>
  <v-container>
    <v-dialog
      v-model="showDialog"
      hide-overlay
      transition="dialog-bottom-transition"
      @click:outside="$emit('onClose')"
    >
      <task-form
        :task="task"
        :loading="loading"
        @onSave="updateTask"
        @onClose="$emit('onClose')"
      ></task-form>
    </v-dialog>
  </v-container>
</template>
<script>
import TasksApi from '@/api/tasks.api.js'
import ApiResponseMixin from '@/mixins/ApiResponseMixin'
import TaskForm from '@/components/TaskForm'

export default {
  props: ['showDialog', 'task'],
  data: () => ({
    loading: false
  }),
  mixins: [ApiResponseMixin],
  components: {
    TaskForm
  },
  methods: {
    updateTask (task) {
      this.loading = true
      TasksApi.update(task.id, task.title, task.dueTo)
        .then(() => {
          this.$emit('onUpdated')
        })
        .catch((error) => {
          this.$emit('onError', this.extractErrorFromResponse(error))
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
