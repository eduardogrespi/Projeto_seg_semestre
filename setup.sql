CREATE DATABASE projeto_clinica;

USE projeto_clinica;

CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(150),
  telefone VARCHAR(20),
  data_agendamento DATE,
  hora TIME,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE agendamentos 
ADD COLUMN tratamento VARCHAR(100) AFTER telefone;

select * from agendamentos;

show tables;

