import { computed } from 'vue';
import { filterStatus, tasks } from './TaskList.vue';

export const filteredTasks = computed(() => {
if (!filterStatus || filterStatus === 'Todos') {
return tasks.value;
} else {
return tasks.value.filter(task => task.status.toLowerCase() === filterStatus.toLowerCase());
}
});
