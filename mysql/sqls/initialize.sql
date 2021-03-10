drop database if exists myapp;

create database myapp;
use myapp;

create table lists(
  id integer auto_increment,
  value text,
  primary key (id)
);
