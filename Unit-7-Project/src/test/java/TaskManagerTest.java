import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TaskManagerTest {

    private TaskManager taskManager;

    // Setup the TaskManager before each test
    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
    }

    // Test case for adding tasks
    @Test
    public void testAddTask() {
        taskManager.addTask("Finish homework");
        assertEquals(1, taskManager.getTasks().size());
        assertTrue(taskManager.getTasks().contains("Finish homework"));
    }

    // Test case for removing tasks
    @Test
    public void testRemoveTask() {
        taskManager.addTask("Finish homework");
        taskManager.removeTask("Finish homework");
        assertEquals(0, taskManager.getTasks().size());
        assertFalse(taskManager.getTasks().contains("Finish homework"));
    }

    // Test case for removing a task that doesn't exist
    @Test
    public void testRemoveNonExistentTask() {
        taskManager.addTask("Finish homework");
        taskManager.removeTask("Go for a run");
        assertEquals(1, taskManager.getTasks().size()); // Task count should remain the same
    }

    // Test case for listing tasks
    @Test
    public void testListTasks() {
        taskManager.addTask("Finish homework");
        taskManager.addTask("Go to the gym");
        List<String> tasks = taskManager.getTasks();
        assertEquals(2, tasks.size());
        assertTrue(tasks.contains("Finish homework"));
        assertTrue(tasks.contains("Go to the gym"));
    }

    // Test case for empty task list
    @Test
    public void testEmptyTaskList() {
        List<String> tasks = taskManager.getTasks();
        assertTrue(tasks.isEmpty());
    }
}