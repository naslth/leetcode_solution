# Write your MySQL query statement below
select name from (select managerId, count(managerId) as c from employee group by managerId) t join employee e on t.managerId = e.id where t.c >= 5