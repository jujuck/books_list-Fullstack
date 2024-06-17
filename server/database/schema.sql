create table style (
  id int primary key auto_increment not null,
  label varchar(255) not null
);

INSERT INTO style(label) VALUES ('Fantastique'), ('Policier');

create table book (
  id int primary key auto_increment not null,
  title varchar(255) not null,
  description longtext not null,
  author varchar(255),
  release_date varchar(255),
  style_id int not null,
  status_id int not null,
  FOREIGN KEY(style_id) REFERENCES style(id)
);


INSERT INTO book(title,description,author,release_date, style_id, status_id) VALUES ('Les Annales de la Compagnie Noire','On dit que les mercenaires n''ont pas d''âme, mais ils ont une mémoire. La nôtre, celle de la dernière des compagnies franches de Khatovar, vous la tenez entre vos mains. Ce sont nos entrailles, chaudes et puantes, étalées là devant vous. Vous qui lisez ces annales, ne perdez pas votre temps à nous maudire, car nous le sommes déjà...','Glen Cook','1984-2000', 1, 1);
INSERT INTO book(title,description,author,release_date, style_id, status_id) VALUES ('Le seigneur des anneaux','Une contrée paisible où vivent les Hobbits. Un anneau magique à la puissance infinie. Sauron, son créateur, prêt à dévaster le monde entier pour récupérer son bien. Frodon, jeune Hobbit, détenteur de l''Anneau malgré lui. Gandalf, le Magicien, venu avertir Frodon du danger. Et voilà déjà les Cavaliers Noirs qui approchent... C''est ainsi que tout commence en Terre du Milieu entre le Comté et Mordor. C''est ainsi que la plus grande légende est née.','J.R.R. TOLKIEN','1954-1955', 1, 1);
INSERT INTO book(title,description,author,release_date, style_id, status_id) VALUES ('Shutter Island','Dans un hôpital psychiatrique les marshals Teddy Daniels et Chuck Aule enquêtent sur la disparition d''une patiente.','Dennis Lehane','2003', 2, 1);
INSERT INTO book(title,description,author,release_date, style_id, status_id) VALUES ('Le Mystère de la chambre jaune','Comment l''assassin de Mlle Stangerson a-t-il pu s''enfuir d''une chambre fermée de l''intérieur ? Le journaliste Joseph Rouletabille mène l''enquête.','Gaston Leroux','1907', 2, 1);


create table status (
  id int primary key auto_increment not null,
  label varchar(255) not null
);

INSERT INTO status(label) VALUES ('A lire'), ('En cours'), ('Lu');


ALTER TABLE book ADD FOREIGN KEY(status_id) REFERENCES status(id);