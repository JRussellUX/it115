import java.util.ArrayList;
import java.util.List;

public class TaskManager {
    
    private List<String> tasks;

    public TaskManager() {
        tasks = new ArrayList<>();
    }

    // Adds a task to the list
    public void addTask(String task) {
        tasks.add(task);
    }

    // Removes a task from the list
    public void removeTask(String task) {
        tasks.remove(task);
    }

    // Returns a list of tasks
    public List<String> getTasks() {
        return tasks;
    }
}