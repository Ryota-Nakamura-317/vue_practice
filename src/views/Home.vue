<template>
  <div>
    <!-- task追加用のテキストボックス -->
    <TodoAdd :tasks="tasks"></TodoAdd>
    <TodoList :tasks="tasks"></TodoList>
  </div>
</template>

<script lang="ts">
import TodoList, { Task } from "@/components/TodoList.vue";
import TodoAdd from "@/components/TodoAdd.vue";
import { ref, reactive, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: { TodoList, TodoAdd },
  setup() {
    // dataを書き換え
    // constにrefをつけることでvalueでのリアクティブな更新ができる。
    // letでデータ更新してもリアクティブにはならない。
    // reactiveをつけないと、更新されない。
    // プロパティオブジェクトの場合は、toRefs()で変換が必要。
    const tasks: Task[] = reactive([
      {
        id: 1,
        title: "起きる",
        done: false,
      },
      {
        id: 2,
        title: "着替える",
        done: false,
      },
    ]);

    // templateで使うdataやmethodはreturnに追加する。
    return { tasks };
  },
});
</script>
