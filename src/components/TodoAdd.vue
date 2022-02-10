<template>
  <v-text-field
    v-model="newTaskTitle"
    class="mt-10 ml-16"
    label="Add Task"
    @keyup.enter="addTask"
    clearable
    hide-details
    counter
    maxlength="20"
    prepend-icon="mdi-plus"
  ></v-text-field>
</template>

<script lang="ts">
import { Task } from "@/components/TodoList.vue";
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TaskAdd",
  // dataを削除し、代わりにデータ参照用にpropsを追加
  props: {
    tasks: {
      type: Array as () => Task[],
      required: true,
    },
  },
  setup(props) {
    const newTaskTitle = ref("");
    // taskを追加する。
    const addTask = () => {
      if (newTaskTitle.value.length > 0) {
        let newTask: Task = {
          id: Date.now(),
          title: newTaskTitle.value,
          done: false,
        };
        props.tasks.push(newTask);
        newTaskTitle.value = "";
      }
    };
    // 不要な定義を削除
    return { newTaskTitle, addTask };
  },
});
</script>
