<template>
  <v-list class="mt-10 ml-16">
    <!-- divでtasksをループで出力する。templateは使えない。 -->
    <div v-for="task in tasks" :key="task.id">
      <!-- クリックしたら、背景色を変更し、tasksを更新するイベントを追加 -->
      <v-list-item @click="doneTask(task.id)" :class="{ 'blue lighten-5': task.done }">
        <template>
          <!-- タイトル、チェックボックスをtasksと連動させる -->
          <v-list-item-action>
            <v-checkbox :input-value="task.done"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <!-- タスクが完了したら取り消し線にする。 -->
            <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{
              task.title
            }}</v-list-item-title>
          </v-list-item-content>
          <!-- deleteアイコンに変更し、tasksを削除するイベント追加 -->
          <v-list-item-icon>
            <v-icon color="primary" @click="deleteTask(task.id)"> mdi-delete </v-icon>
          </v-list-item-icon>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "@vue/composition-api";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default defineComponent({
  // 名前変更
  name: "TaskList",
  // dataを削除し、代わりにデータ参照用にpropsを追加
  props: {
    tasks: {
      // 型定義、Composition-APIはPropTypeが使えない。
      type: Array as () => Task[],
      // 必須項目、必須ではない場合はdefaultを設定しておくとよい。
      required: true,
    },
  },
  setup(props) {
    // taskを検索し、フラグを更新する。
    const doneTask = (id: number) => {
      let task = props.tasks.find((t) => t.id === id);
      if (task !== undefined) {
        task.done = !task.done;
      }
    };
    // taskを削除する。
    const deleteTask = (id: number) => {
      props.tasks.forEach((task, index) => {
        if (task.id == id) props.tasks.splice(index, 1);
      });
    };
    // 不要な定義を削除
    return { doneTask, deleteTask };
  },
});
</script>
