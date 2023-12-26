<template>
  <section class="app">
    <h1 class="title">{{ title }}</h1>  
    <div class="task">
      <input v-model="task" type="" placeholder="New Task">
      <button @click="Submit(id++)">Submit</button>
      <p></p>
      <!-- <p>{{ task }}</p> -->
      <div v-for="(task, i) in tasks" :key="task.id">
        <p>
          <span class="task__id">{{ i + 1 }}. </span>
          <span class="task__text" :class="{ task__text_isShow: task.isCompleted }" @dblclick="removeTask(i)"> {{ task.text }}</span>
          <input class="task__check" type="checkbox" v-model="task.isCompleted">

        </p>
      </div>
      <hr />
      <p>Tasks: {{ tasks.length }}</p>
    </div>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      title: "#ToDo-List",
      task: "",
      tasks: [],
      isDone: false,
      id: 0
    };
  },
  methods: {
    Submit() {
      this.tasks.push({
        id: this.id,
        text: this.task,
        isCompleted: this.isDone
      })
      this.task = "";
    },
    removeTask(index){
      console.log(index);
      this.tasks.splice(index, 1);
    }
  }
};
</script>
  
<style scoped lang="scss">

.app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.task {
  width: 300px;
  height: 300px;
  background-color: #c4ebe3;
  padding-top: 30px;
  outline: 1px solid #000;

  &__id {
    color: #2085cf;
    font-weight: bold;
  }

  &__text {
    font-weight: 15px;
    color: #444;
    text-transform: capitalize;

    &_isShow {
      color: #000;
      text-decoration: line-through;
    }
  }

  &__check {
    display: inline-block;
  }
}
</style>
  