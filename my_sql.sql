--  insert into products (name,owner) values('machine',5);
--insert into users (name) values('fattylee');
-- \d products
-- \d users
-- insert into products (name) values('rice');
-- delete from users where id =5;

select * from products;

-- select * from users;

select products.id as product_id, products.name as product_name, users.name as owner from products
inner join users
on products.owner = users.id;
