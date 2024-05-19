# Write your MySQL query statement below
select substr(trans_date,1,7) as month,country,count(*) as trans_count, sum(if(state = "approved",1,0)) as approved_count, sum(if(state = "approved",amount,0)) as trans_total_amount,sum(amount) as approved_total_amount from transactions group by month, country;