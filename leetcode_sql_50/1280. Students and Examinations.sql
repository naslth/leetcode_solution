# Write your MySQL query statement below
select a.student_id, a.student_name, a.subject_name, IFNULL(b.attended_exams, 0) as attended_exams from (select * from students stu join subjects sub ) a left join (select *, count(*) as attended_exams from examinations group by student_id,subject_name) b on a.student_id = b.student_id and a.subject_name = b.subject_name order by student_id, subject_name;