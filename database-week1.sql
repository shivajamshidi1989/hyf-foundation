--exercise 1
SELECT COUNT(*) AS task_count
FROM task;

--exercise 2
SELECT COUNT(*) AS missing_due_date_count
FROM task
WHERE due_date IS NULL;

--exercise 3
SELECT *
FROM task
WHERE status_id = 3;

--exercise 4
SELECT *
FROM task
WHERE status_id != 3;

--exercise 5
SELECT *
FROM task
ORDER BY created DESC;

--exercise 6
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

--exercise 7
SELECT title, due_date
FROM task
WHERE title LIKE '%database%'
   OR description LIKE '%database%';

--exercise 8
SELECT task.title, status.name AS status
FROM task
JOIN status ON task.status_id = status.id;

--exercise 9
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.id, status.name;

--exercise 10
SELECT status.name
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.id, status.name
ORDER BY COUNT(task.id) DESC;

