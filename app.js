import express from 'express';
import router from './routes';
import pool from './config/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

const sql = `
create table if not exists users(
    id serial primary key, 
    name varchar(30) not null unique
    );
create table if not exists products(
    id serial primary key, 
    name varchar(30) not null, 
    owner int,
    foreign key(owner) references users(id)
    );
`;
pool.query(sql).then(() => console.log('connected to database'));

export default app;
