use merge_project_db;

CREATE TABLE users(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(50) Not null,
e_password VARCHAR(50) NOT NULL,
salt varchar(10) NOT NULL,
activationcode 	VARCHAR(50) NOT NULL,
activationstatus TINYINT,
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

select * from users;

CREATE TABLE pagination(
id INT NOT NULL UNIQUE,
firstname VARCHAR(20) NOT NULL,
middlename VARCHAR(20) NOT NULL,
lastname VARCHAR(20) NOT NULL,
contact_no VARCHAR(10) NOT NULL,
email VARCHAR(50) NOT NULL,
address VARCHAR(100) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
country VARCHAR(50) NOT NULL
);

Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 1,'Etta','Dyche','Guildroy',999999999,'Etta.Guildroy@gmail.com','Cartagena.Malawi','Cartagena','Islamabad','Malawi' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 2,'Kerrin','Gunn','Wilkinson',1000000000,'Kerrin.Wilkinson@gmail.com','San Fernando.Montserrat','San Fernando','Denpasar','Montserrat' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 3,'Kellen','Carvey','Rona',999999999,'Kellen.Rona@gmail.com','Wonsan.Armenia','Wonsan','Phuket (city)','Armenia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 4,'Sindee','Cyrie','Chick',999999999,'Sindee.Chick@gmail.com','Sacramento.Zambia','Sacramento','Pelotas','Zambia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 5,'Allis','Bluh','Lorain',1000000000,'Allis.Lorain@gmail.com','Newcastle.Papua New Guinea','Newcastle','Tallinn','Papua New Guinea' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 6,'Rayna','Cressida','Ivens',999999999,'Rayna.Ivens@gmail.com','Surat.Cameroon','Surat','Kuala Lumpur','Cameroon' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 7,'Yvonne','Tomasina','Sothena',1000000000,'Yvonne.Sothena@gmail.com','Castries.Anguilla','Castries','Enugu','Anguilla' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 8,'Robinia','Teddman','Bultman',1000000000,'Robinia.Bultman@gmail.com','Naypyidaw.Slovenia','Naypyidaw','Whitehorse','Slovenia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 9,'Ezmeralda','Moseley','Noman',1000000000,'Ezmeralda.Noman@gmail.com','Multan.French Southern Territories','Multan','Zanzibar City','French Southern Territories' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 10,'Marylou','Kaja','Emerson',999999999,'Marylou.Emerson@gmail.com','Melbourne.French Polynesia','Melbourne','Brasília','French Polynesia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 11,'Cristabel','Melan','Gunn',999999999,'Cristabel.Gunn@gmail.com','Algiers.British Indian Ocean Territory','Algiers','Saipan','British Indian Ocean Territory' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 12,'Codie','Atcliffe','Constancy',1000000000,'Codie.Constancy@gmail.com','Durango.Cayman Islands','Durango','Zapopan','Cayman Islands' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 13,'Rosanne','Cloris','Lalitta',1000000000,'Rosanne.Lalitta@gmail.com','Taichung.Zimbabwe','Taichung','Kabul','Zimbabwe' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 14,'Leanna','Georas','Ricarda',999999999,'Leanna.Ricarda@gmail.com','Casablanca.Cuba','Casablanca','Cayenne','Cuba' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 15,'Emylee','Hoban','Curren',999999999,'Emylee.Curren@gmail.com','Hanoi.United Kingdom','Hanoi','Kolkata','United Kingdom' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 16,'Mary','Eldrid','Jary',999999999,'Mary.Jary@gmail.com','Dar es Salaam.Gibraltar','Dar es Salaam','Tampa','Gibraltar' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 17,'Vevay','Pyle','Cullin',999999999,'Vevay.Cullin@gmail.com','Memphis.Spain','Memphis','San Fernando','Spain' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 18,'Nerta','Oneida','Richers',1000000000,'Nerta.Richers@gmail.com','El Paso.Swaziland','El Paso','Baku','Swaziland' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 19,'Rayna','Maroney','Prober',1000000000,'Rayna.Prober@gmail.com','Fukuoka.Philippines','Fukuoka','Mexico City','Philippines' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 20,'Heida','Zenas','Obed',1000000000,'Heida.Obed@gmail.com','Sukhumi.AndorrA','Sukhumi','Jinan','AndorrA' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 21,'Caryl','Huggins','Angelis',1000000000,'Caryl.Angelis@gmail.com','Porto.Belgium','Porto','N''Djamena','Belgium' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 22,'Cam','Ricarda','Connelly',999999999,'Cam.Connelly@gmail.com','Hong Kong.Cuba','Hong Kong','Tripoli','Cuba' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 23,'Briney','McNully','Alva',1000000000,'Briney.Alva@gmail.com','Bratsk.Lithuania','Bratsk','Sucre','Lithuania' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 24,'Courtnay','Maryanne','Santoro',999999999,'Courtnay.Santoro@gmail.com','Denver.Finland','Denver','Puebla','Finland' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 25,'Basia','Pip','Goerke',1000000000,'Basia.Goerke@gmail.com','Tokyo.Virgin Islands, British','Tokyo','Hilo','Virgin Islands, British' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 26,'Glynnis','Lamoree','Weaks',999999999,'Glynnis.Weaks@gmail.com','Riverside.Netherlands Antilles','Riverside','Glasgow','Netherlands Antilles' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 27,'Silvana','Randene','Hubert',999999999,'Silvana.Hubert@gmail.com','Philadelphia.Guatemala','Philadelphia','Edinburgh','Guatemala' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 28,'Alia','Lay','Halla',1000000000,'Alia.Halla@gmail.com','Belize City.Monaco','Belize City','Bursa','Monaco' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 29,'Dyann','Narton','Tengdin',1000000000,'Dyann.Tengdin@gmail.com','Montevideo.Switzerland','Montevideo','Panama City','Switzerland' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 30,'Madelle','Bartlett','Zitvaa',999999999,'Madelle.Zitvaa@gmail.com','Lhasa.Brazil','Lhasa','Magadan','Brazil' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 31,'Mahalia','Gilmour','Hurley',1000000000,'Mahalia.Hurley@gmail.com','Abu Dhabi.Bahrain','Abu Dhabi','Tamale','Bahrain' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 32,'Cristine','Buttaro','Hourigan',999999999,'Cristine.Hourigan@gmail.com','Djibouti (city).Sao Tome and Principe','Djibouti (city)','Atlanta','Sao Tome and Principe' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 33,'Gusty','My','Dreda',999999999,'Gusty.Dreda@gmail.com','Kathmandu.Honduras','Kathmandu','Buffalo','Honduras' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 34,'Ana','Wildermuth','Hutchison',999999999,'Ana.Hutchison@gmail.com','Ushuaia.Lao People"S Democratic Republic','Ushuaia','Maracaibo','Lao People"S Democratic Republic' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 35,'Adelle','Reneta','Keily',999999999,'Adelle.Keily@gmail.com','Sri Jayawardenapura-Kotte.Cocos (Keeling) Islands','Sri Jayawardenapura-Kotte','Wonsan','Cocos (Keeling) Islands' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 36,'Lilith','Ilka','Odell',1000000000,'Lilith.Odell@gmail.com','Beirut.Australia','Beirut','São José dos Campos','Australia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 37,'Amalie','Kevon','Aldric',1000000000,'Amalie.Aldric@gmail.com','Bern.Iran, Islamic Republic Of','Bern','Jinan','Iran, Islamic Republic Of' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 38,'Aurore','Elephus','Eliathas',999999999,'Aurore.Eliathas@gmail.com','Longyearbyen.AndorrA','Longyearbyen','Douglas','AndorrA' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 39,'Anica','Kare','Gale',999999999,'Anica.Gale@gmail.com','Mendoza.Portugal','Mendoza','Monaco','Portugal' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 40,'Bibby','Pauly','Ferino',999999999,'Bibby.Ferino@gmail.com','Providence.Benin','Providence','Guwahati','Benin' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 41,'Kassey','Phaidra','Sibyls',999999999,'Kassey.Sibyls@gmail.com','Chengdu.Montserrat','Chengdu','Washington','Montserrat' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 42,'Jorry','Meter','Alabaster',999999999,'Jorry.Alabaster@gmail.com','Guatemala City.British Indian Ocean Territory','Guatemala City','Mandurah','British Indian Ocean Territory' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 43,'Shaine','Magnolia','Rosette',1000000000,'Shaine.Rosette@gmail.com','Luxor.Honduras','Luxor','Vancouver','Honduras' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 44,'Clementine','Rodmann','Rodmann',999999999,'Clementine.Rodmann@gmail.com','Weno.Cameroon','Weno','Kota Bharu','Cameroon' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 45,'June','Barbey','Magnolia',999999999,'June.Magnolia@gmail.com','Suva.Czech Republic','Suva','Luanda','Czech Republic' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 46,'Mara','Tamsky','Auberbach',999999999,'Mara.Auberbach@gmail.com','Kano.Singapore','Kano','Stanley','Singapore' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 47,'Tarra','Delacourt','Afton',1000000000,'Tarra.Afton@gmail.com','Nakhon Ratchasima.Cameroon','Nakhon Ratchasima','Lanzhou','Cameroon' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 48,'Gertrud','Middleton','Naor',1000000000,'Gertrud.Naor@gmail.com','Palikir.Guernsey','Palikir','Srinagar','Guernsey' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 49,'Sidoney','Valerio','Kiyoshi',999999999,'Sidoney.Kiyoshi@gmail.com','Medellín.Lithuania','Medellín','Hong Kong','Lithuania' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 50,'Blinni','Tremayne','Ariella',999999999,'Blinni.Ariella@gmail.com','Thimphu.Togo','Thimphu','Tampa','Togo' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 51,'Lauryn','Arne','Jena',999999999,'Lauryn.Jena@gmail.com','Ljubljana.Greece','Ljubljana','Kigali','Greece' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 52,'Monika','Colleen','Drisko',999999999,'Monika.Drisko@gmail.com','Horta (Azores).Belize','Horta (Azores)','Nouméa','Belize' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 53,'Raina','Dorcy','Pascia',1000000000,'Raina.Pascia@gmail.com','Hagåtña.Slovakia','Hagåtña','Anchorage','Slovakia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 54,'Frank','Sadowski','Sisile',999999999,'Frank.Sisile@gmail.com','Palma.Fiji','Palma','Abu Dhabi','Fiji' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 55,'Carree','Caitlin','Joseph',1000000000,'Carree.Joseph@gmail.com','Málaga.Saudi Arabia','Málaga','Murmansk','Saudi Arabia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 56,'Sheree','Lynn','Cornelia',999999999,'Sheree.Cornelia@gmail.com','Almaty.Burundi','Almaty','Mogadishu','Burundi' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 57,'Lyssa','Lymann','Chabot',999999999,'Lyssa.Chabot@gmail.com','Oklahoma City.Cape Verde','Oklahoma City','Punta Arenas','Cape Verde' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 58,'Roz','Edison','Wadell',999999999,'Roz.Wadell@gmail.com','San Juan.Virgin Islands, U.S.','San Juan','Miami','Virgin Islands, U.S.' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 59,'Aurelie','Jacinda','Redmond',1000000000,'Aurelie.Redmond@gmail.com','Denpasar.Costa Rica','Denpasar','Moroni','Costa Rica' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 60,'Kelly','Peonir','Gwenore',999999999,'Kelly.Gwenore@gmail.com','Rochester.Netherlands','Rochester','Sapporo','Netherlands' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 61,'Amalie','Hertzfeld','Lail',1000000000,'Amalie.Lail@gmail.com','Puebla.Netherlands','Puebla','Praia','Netherlands' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 62,'Chere','Israeli','Docilla',1000000000,'Chere.Docilla@gmail.com','Maputo.Belarus','Maputo','Rochester','Belarus' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 63,'Cathyleen','Bahr','Catie',999999999,'Cathyleen.Catie@gmail.com','Samara.Isle of Man','Samara','Anadyr (town)','Isle of Man' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 64,'Lucille','Mich','Kathie',1000000000,'Lucille.Kathie@gmail.com','Warsaw.Antarctica','Warsaw','Okinawa','Antarctica' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 65,'Celene','Girardo','Esmaria',999999999,'Celene.Esmaria@gmail.com','Las Palmas de Gran Canaria.Jordan','Las Palmas de Gran Canaria','Bergen','Jordan' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 66,'Jaime','Poppy','Odysseus',1000000000,'Jaime.Odysseus@gmail.com','El Aaiún.Indonesia','El Aaiún','Edmonton','Indonesia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 67,'Cherrita','Nelsen','Ethban',999999999,'Cherrita.Ethban@gmail.com','Pittsburgh.Liberia','Pittsburgh','Seoul','Liberia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 68,'Ingrid','Wind','Minetta',999999999,'Ingrid.Minetta@gmail.com','Gaborone.Colombia','Gaborone','Mérida','Colombia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 69,'Marjie','Daveta','Rudolph',1000000000,'Marjie.Rudolph@gmail.com','Hiroshima.Nepal','Hiroshima','Singapore','Nepal' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 70,'Atlanta','Othilia','Wesle',999999999,'Atlanta.Wesle@gmail.com','Charlottetown.Cape Verde','Charlottetown','Moscow','Cape Verde' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 71,'Morganica','Garbe','Zaslow',1000000000,'Morganica.Zaslow@gmail.com','Glasgow.Chad','Glasgow','Jaipur','Chad' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 72,'Isa','Voletta','Gaal',999999999,'Isa.Gaal@gmail.com','Ciudad del Este.Libyan Arab Jamahiriya','Ciudad del Este','Miri','Libyan Arab Jamahiriya' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 73,'Helena','Westphal','Infield',999999999,'Helena.Infield@gmail.com','Perth.Uganda','Perth','Pontianak','Uganda' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 74,'Lory','Desai','Hoban',1000000000,'Lory.Hoban@gmail.com','Córdoba.Lesotho','Córdoba','Turin','Lesotho' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 75,'Augustine','Connelly','Fontana',999999999,'Augustine.Fontana@gmail.com','Amsterdam.Bulgaria','Amsterdam','Tripoli','Bulgaria' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 76,'Bobbi','Dunkin','Dudley',999999999,'Bobbi.Dudley@gmail.com','Shillong.Angola','Shillong','Miami','Angola' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 77,'Tami','Stover','Shields',1000000000,'Tami.Shields@gmail.com','Djibouti (city).Korea, Democratic People"S Republic of','Djibouti (city)','Mwanza','Korea, Democratic People"S Republic of' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 78,'Quintina','Garrison','Thema',1000000000,'Quintina.Thema@gmail.com','Austin.Indonesia','Austin','Austin','Indonesia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 79,'Brynna','Earlie','Willie',1000000000,'Brynna.Willie@gmail.com','Miri.Angola','Miri','Apia','Angola' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 80,'Goldie','Stav','Phyllis',999999999,'Goldie.Phyllis@gmail.com','Marrakech.Cameroon','Marrakech','Odessa','Cameroon' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 81,'Glynnis','Emmaline','Center',999999999,'Glynnis.Center@gmail.com','Chuí.Jordan','Chuí','Astana','Jordan' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 82,'Mildrid','Bandeen','Israeli',1000000000,'Mildrid.Israeli@gmail.com','Montevideo.United Kingdom','Montevideo','Santa Cruz de Tenerife','United Kingdom' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 83,'Mahalia','Phyllis','Marlie',999999999,'Mahalia.Marlie@gmail.com','George Town.United States Minor Outlying Islands','George Town','Berlin','United States Minor Outlying Islands' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 84,'Roseline','Sheng','Merriott',1000000000,'Roseline.Merriott@gmail.com','Port Hedland.Slovakia','Port Hedland','Lanzhou','Slovakia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 85,'Zia','Lareena','Thomasina',999999999,'Zia.Thomasina@gmail.com','Tijuana.Algeria','Tijuana','Perm','Algeria' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 86,'Zsa Zsa','Moseley','Wooster',999999999,'Zsa Zsa.Wooster@gmail.com','Perm.Ghana','Perm','Minneapolis','Ghana' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 87,'Joceline','Rubie','Ovid',1000000000,'Joceline.Ovid@gmail.com','Basse-Terre.Qatar','Basse-Terre','Lhasa','Qatar' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 88,'Gusty','Aurelio','Cornelia',1000000000,'Gusty.Cornelia@gmail.com','Malacca Town.Finland','Malacca Town','Las Palmas de Gran Canaria','Finland' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 89,'Cathyleen','Fax','Santoro',999999999,'Cathyleen.Santoro@gmail.com','Saint-Denis.British Indian Ocean Territory','Saint-Denis','Surat','British Indian Ocean Territory' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 90,'Chandra','Pandolfi','Charity',999999999,'Chandra.Charity@gmail.com','Istanbul.Guam','Istanbul','San Antonio','Guam' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 91,'Justinn','Ball','Rossner',999999999,'Justinn.Rossner@gmail.com','Boston.Belize','Boston','İzmir','Belize' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 92,'Cyndie','Bach','Gaspard',999999999,'Cyndie.Gaspard@gmail.com','Cusco.Bolivia','Cusco','Adana','Bolivia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 93,'Goldie','Auberbach','Haerr',1000000000,'Goldie.Haerr@gmail.com','Pelotas.Syrian Arab Republic','Pelotas','Lobamba','Syrian Arab Republic' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 94,'Kathy','Randene','Miru',1000000000,'Kathy.Miru@gmail.com','Kaesong.Taiwan, Province of China','Kaesong','Livingstone','Taiwan, Province of China' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 95,'Janey','Norvol','Wiener',1000000000,'Janey.Wiener@gmail.com','Whitehorse.Tunisia','Whitehorse','Miami','Tunisia' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 96,'Melanie','Raychel','Fairweather',999999999,'Melanie.Fairweather@gmail.com','Miri.China','Miri','Malé','China' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 97,'Consuela','Primalia','Brady',999999999,'Consuela.Brady@gmail.com','Dunedin.Madagascar','Dunedin','Omdurman','Madagascar' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 98,'Lynnea','Odysseus','Pandolfi',999999999,'Lynnea.Pandolfi@gmail.com','Wonsan.Mozambique','Wonsan','Malé','Mozambique' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 99,'Estell','Firmin','Fry',999999999,'Estell.Fry@gmail.com','İzmir.Greenland','İzmir','Lima','Greenland' );
Insert Into pagination ( id, firstname, middlename, lastname, contact_no, email, address, city, state, country) Values ( 100,'Valera','Payson','Bluh',1000000000,'Valera.Bluh@gmail.com','Newcastle.Trinidad and Tobago','Newcastle','Tallinn','Trinidad and Tobago' );

select * from pagination;

CREATE TABLE student_master(
student_id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(40) NOT NULL,
Email VARCHAR(50) NOT NULL,
ContactNo VARCHAR(30) NOT NULL
);

Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 1,'Dominga','Dominga.@gmail.com',8687253292 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 2,'Rosene','Rosene.@gmail.com',8308960559 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 3,'Jolyn','Jolyn.@gmail.com',8234510534 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 4,'Linet','Linet.@gmail.com',8133123962 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 5,'Lorne','Lorne.@gmail.com',8167437834 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 6,'Meriel','Meriel.@gmail.com',6858923540 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 7,'Regina','Regina.@gmail.com',7000281403 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 8,'Barbi','Barbi.@gmail.com',8289852063 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 9,'Addia','Addia.@gmail.com',8721949627 );
Insert Into student_master ( student_id, Name, Email, ContactNo) Values ( 10,'Miquela','Miquela.@gmail.com',8077379011 );


SELECT * FROM student_master;

CREATE TABLE attendence(
student_id INT,
FOREIGN KEY(student_id) REFERENCES student_master(student_id),
date DATE NOT NULL,
attendence VARCHAR(10)
);

insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-2' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-3' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-7' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-8' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-9' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-15' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-18' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-20' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-21' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-23' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-24' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-27' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-29' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2023-12-31' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-1' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-2' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-3' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-7' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-11' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-13' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-14' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-15' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-18' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-22' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-25' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-27' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-28' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-29' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2023-12-31' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-1' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-2' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-3' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-5' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-17' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-18' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-19' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-20' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-25' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-26' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-27' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-30' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2023-12-31' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-1' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-2' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-3' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-4' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-5' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-6' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-10' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-13' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-16' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-18' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-23' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-24' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-25' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-28' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-29' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2023-12-31' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-2' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-3' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-8' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-9' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-15' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-18' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-21' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-22' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-26' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-27' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2023-12-31' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-2' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-3' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-7' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-8' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-14' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-18' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-21' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-22' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-23' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-24' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2023-12-31' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-1' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-2' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-3' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-6' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-10' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-11' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-17' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-18' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-19' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-20' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-29' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-30' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2023-12-31' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-2' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-3' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-4' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-6' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-8' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-11' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-12' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-18' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-19' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-23' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-26' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-28' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-30' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2023-12-31' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-2' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-3' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-5' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-6' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-7' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-9' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-10' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-12' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-13' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-17' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-18' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-20' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-26' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-28' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2023-12-31' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-1' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-2' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-3' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-4' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-5' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-6' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-7' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-8' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-9' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-10' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-11' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-12' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-13' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-14' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-15' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-16' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-17' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-18' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-19' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-20' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-21' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-22' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-23' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-24' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-25' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-26' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-27' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-28' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-29' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-30' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2023-12-31' , "A");

insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-2' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-3' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-7' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-8' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-9' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-15' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-18' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-20' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-21' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-23' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-24' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-27' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-29' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-01-31' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-1' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-2' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-3' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-7' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-11' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-13' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-14' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-15' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-18' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-22' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-25' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-27' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-28' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-29' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-01-31' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-1' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-2' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-3' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-5' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-17' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-18' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-19' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-20' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-25' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-26' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-27' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-30' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-01-31' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-1' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-2' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-3' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-4' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-5' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-6' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-10' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-13' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-16' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-18' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-23' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-24' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-25' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-28' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-29' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-01-31' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-2' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-3' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-8' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-9' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-15' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-18' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-21' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-22' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-26' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-27' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-01-31' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-2' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-3' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-7' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-8' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-14' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-18' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-21' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-22' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-23' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-24' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-01-31' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-1' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-2' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-3' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-6' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-10' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-11' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-17' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-18' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-19' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-20' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-29' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-30' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-01-31' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-2' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-3' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-4' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-6' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-8' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-11' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-12' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-18' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-19' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-23' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-26' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-28' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-30' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-01-31' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-2' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-3' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-5' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-6' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-7' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-9' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-10' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-12' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-13' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-17' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-18' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-20' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-26' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-28' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-01-31' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-1' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-2' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-3' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-4' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-5' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-6' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-7' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-8' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-9' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-10' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-11' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-12' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-13' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-14' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-15' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-16' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-17' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-18' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-19' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-20' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-21' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-22' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-23' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-24' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-25' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-26' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-27' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-28' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-29' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-30' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-01-31' , "A");

insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-2' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-3' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-4' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-5' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-6' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-8' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-9' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-10' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-11' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-13' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-15' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-17' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-18' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-19' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-20' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-21' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-22' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-23' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-24' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-28' , "P");
insert into attendence (student_id , date , attendence) values ( 1  , '2024-02-29' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-2' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-3' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-4' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-6' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-7' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-10' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-11' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-13' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-15' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-18' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-19' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-22' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-24' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-27' , "P");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-28' , "A");
insert into attendence (student_id , date , attendence) values ( 2  , '2024-02-29' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-1' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-2' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-3' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-4' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-6' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-10' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-13' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-15' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-16' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-17' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-18' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-19' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-20' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-21' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-22' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-23' , "P");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-24' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-28' , "A");
insert into attendence (student_id , date , attendence) values ( 3  , '2024-02-29' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-2' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-3' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-4' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-10' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-11' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-12' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-13' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-15' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-17' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-18' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-19' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-22' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-24' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-26' , "P");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-28' , "A");
insert into attendence (student_id , date , attendence) values ( 4  , '2024-02-29' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-2' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-3' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-4' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-6' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-7' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-9' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-10' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-13' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-15' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-18' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-19' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-22' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-23' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-24' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-26' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-28' , "P");
insert into attendence (student_id , date , attendence) values ( 5  , '2024-02-29' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-2' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-3' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-4' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-5' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-7' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-8' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-9' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-10' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-12' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-13' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-15' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-16' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-17' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-18' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-19' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-22' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-24' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-28' , "P");
insert into attendence (student_id , date , attendence) values ( 6  , '2024-02-29' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-2' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-3' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-4' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-5' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-9' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-10' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-13' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-15' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-16' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-18' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-19' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-22' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-23' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-24' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-26' , "P");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-28' , "A");
insert into attendence (student_id , date , attendence) values ( 7  , '2024-02-29' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-2' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-3' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-4' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-8' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-10' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-13' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-14' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-15' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-18' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-19' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-20' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-21' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-22' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-24' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-25' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-28' , "P");
insert into attendence (student_id , date , attendence) values ( 8  , '2024-02-29' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-1' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-2' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-3' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-4' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-5' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-7' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-8' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-10' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-11' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-12' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-13' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-14' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-15' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-18' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-19' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-21' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-22' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-24' , "P");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-25' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-26' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-27' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-28' , "A");
insert into attendence (student_id , date , attendence) values ( 9  , '2024-02-29' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-1' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-2' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-3' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-4' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-5' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-6' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-7' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-8' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-9' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-10' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-11' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-12' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-13' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-14' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-15' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-16' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-17' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-18' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-19' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-20' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-21' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-22' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-23' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-24' , "A");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-25' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-26' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-27' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-28' , "P");
insert into attendence (student_id , date , attendence) values ( 10  , '2024-02-29' , "A");

select * from attendence;

CREATE TABLE subject_master(
subject_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
subject_name VARCHAR(50) NOT NULL
);

INSERT INTO subject_master(subject_id,subject_name) VALUES(1,"TOC"), (2,"Operating system"), (3, "compiler design"), (4,"Web Design"), (5,"Advance Java"),(6,"node js");
SELECT * FROM subject_master;

CREATE TABLE exam(
exam_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
exam_name VARCHAR(50) NOT NULL
);

INSERT INTO exam(exam_id, exam_name) VALUES(1,"prelim"), (2, "terminal"), (3,"final");
SELECT * FROM exam;

CREATE TABLE result(
student_id INT ,
subject_id INT,
exam_id INT,
FOREIGN KEY(student_id) REFERENCES student_master(student_id),
FOREIGN KEY(subject_id) REFERENCES subject_master(subject_id),
FOREIGN KEY(exam_id) REFERENCES exam(exam_id),
theory_exam_marks INT NOT NULL,
practical_exam_marks INT NOT NULL
);

Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,1,1,11,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,1,2,6,18);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,1,3,18,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,2,1,19,13);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,2,2,24,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,2,3,50,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,3,1,28,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,3,2,17,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,3,3,61,30);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,4,1,27,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,4,2,24,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,4,3,66,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,5,1,0,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,5,2,16,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,5,3,38,24);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,6,1,5,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,6,2,18,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (1,6,3,69,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,1,1,11,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,1,2,26,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,1,3,70,28);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,2,1,28,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,2,2,15,10);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,2,3,25,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,3,1,22,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,3,2,0,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,3,3,51,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,4,1,23,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,4,2,11,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,4,3,48,1);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,5,1,4,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,5,2,7,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,5,3,54,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,6,1,21,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,6,2,26,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (2,6,3,51,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,1,1,5,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,1,2,14,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,1,3,27,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,2,1,27,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,2,2,3,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,2,3,22,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,3,1,22,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,3,2,24,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,3,3,26,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,4,1,4,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,4,2,3,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,4,3,44,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,5,1,28,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,5,2,0,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,5,3,47,23);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,6,1,18,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,6,2,26,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (3,6,3,34,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,1,1,23,10);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,1,2,23,20);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,1,3,49,10);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,2,1,21,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,2,2,21,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,2,3,39,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,3,1,22,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,3,2,7,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,3,3,0,24);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,4,1,14,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,4,2,11,2);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,4,3,69,2);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,5,1,27,20);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,5,2,18,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,5,3,2,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,6,1,14,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,6,2,18,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (4,6,3,55,22);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,1,1,27,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,1,2,12,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,1,3,7,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,2,1,14,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,2,2,17,18);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,2,3,22,28);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,3,1,22,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,3,2,12,1);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,3,3,3,25);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,4,1,10,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,4,2,15,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,4,3,29,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,5,1,15,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,5,2,21,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,5,3,42,13);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,6,1,24,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,6,2,6,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (5,6,3,68,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,1,1,0,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,1,2,0,1);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,1,3,9,27);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,2,1,0,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,2,2,4,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,2,3,13,13);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,3,1,17,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,3,2,24,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,3,3,30,29);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,4,1,20,2);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,4,2,12,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,4,3,24,27);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,5,1,26,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,5,2,11,20);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,5,3,70,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,6,1,5,20);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,6,2,9,18);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (6,6,3,58,29);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,1,1,28,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,1,2,24,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,1,3,8,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,2,1,27,18);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,2,2,15,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,2,3,27,23);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,3,1,29,6);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,3,2,7,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,3,3,38,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,4,1,26,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,4,2,23,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,4,3,52,26);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,5,1,1,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,5,2,10,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,5,3,22,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,6,1,26,19);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,6,2,9,10);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (7,6,3,6,30);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,1,1,29,2);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,1,2,2,13);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,1,3,4,30);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,2,1,17,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,2,2,17,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,2,3,12,24);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,3,1,0,1);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,3,2,12,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,3,3,62,26);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,4,1,5,13);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,4,2,18,15);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,4,3,22,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,5,1,19,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,5,2,9,2);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,5,3,2,22);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,6,1,7,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,6,2,20,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (8,6,3,46,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,1,1,8,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,1,2,20,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,1,3,27,25);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,2,1,4,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,2,2,5,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,2,3,9,10);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,3,1,1,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,3,2,26,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,3,3,9,24);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,4,1,18,0);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,4,2,24,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,4,3,11,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,5,1,27,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,5,2,1,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,5,3,67,1);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,6,1,30,9);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,6,2,7,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (9,6,3,33,25);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,1,1,8,14);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,1,2,21,4);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,1,3,14,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,2,1,2,11);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,2,2,22,16);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,2,3,53,23);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,3,1,20,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,3,2,13,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,3,3,47,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,4,1,28,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,4,2,7,3);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,4,3,61,5);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,5,1,2,8);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,5,2,2,12);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,5,3,42,21);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,6,1,16,17);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,6,2,24,7);
Insert into result (student_id, subject_id, exam_id,theory_exam_marks,practical_exam_marks) Values (10,6,3,66,5);

select * from result;

CREATE TABLE delimiter_search(
id INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
firstname VARCHAR(40),
lastname VARCHAR(40),
email VARCHAR(50),
Age VARCHAR(50),
ContactNo VARCHAR(30),
City VARCHAR(100)
);

Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 1,'Nickie','Jenness','Nickie.Jenness@gmail.com',66,8506490636,'Hanoi' );
Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 2,'Mireielle','Randene','Mireielle.Randene@gmail.com',84,8706553962,'Saint Petersburg' );
Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 3,'Lila','Neils','Lila.Neils@gmail.com',45,7434426582,'Omsk' );
Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 4,'Arlina','Kenwood','Arlina.Kenwood@gmail.com',98,8815319554,'Cayenne' );
Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 5,'Darci','Hessler','Darci.Hessler@gmail.com',59,6863121038,'Perm' );
Insert Into delimiter_search ( id, firstname, lastname, email, Age, ContactNo, City) Values ( 7,'Chere','Yam','Chere.Yam@gmail.com',24,8303295115,'Puerto Williams' );

select * from delimiter_search;

CREATE TABLE basic_detail(
Eid INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
Fname VARCHAR(35) NOT NULL,
Lname VARCHAR(35) NOT NULL,
Designation VARCHAR(40) NOT NULL,
Email VARCHAR(40) NOT NULL,
Phone_No VARCHAR(10) NOT NULL,
Address_1 VARCHAR(100) NOT NULL,
Address_2 VARCHAR(100),
State VARCHAR(50) NOT NULL,
City VARCHAR(30) NOT NULL,
Gender VARCHAR(10) NOT NULL,
Zip_code VARCHAR(20) NOT NULL,
DoB DATE NOT NULL 
);

SELECT * FROM  basic_detail;	

CREATE TABLE educational_detail(
edu_id INT AUTO_INCREMENT NOT NULL UNIQUE,
id INT NOT NULL,
board_name VARCHAR(50) NOT NULL,
year YEAR,
percentage FLOAT
);

select * from educational_detail;

CREATE TABLE work_experience(
id INT NOT NULL,
company1_Name VARCHAR(50),
company1_Designation VARCHAR(50),
company1_Joiningdate DATE,
company1_Leavingdate DATE
);

SELECT * FROM work_experience;

CREATE TABLE languages(
id INT NOT NULL,
`language` VARCHAR(50),
L_read VARCHAR(20) NOT NULL,
L_write VARCHAR(20) NOT NULL,
L_speak VARCHAR(20) NOT NULL
);

select * from languages;

CREATE TABLE technologies_known(
id INT NOT NULL,
tech_name VARCHAR(20),
tech_level VARCHAR(20)
);

SELECT * FROM technologies_known;

CREATE TABLE reference_contact(
id INT NOT NULL,
person_name VARCHAR(30),
person_contactNo VARCHAR(10),
person_relation VARCHAR(20)
);
select * from reference_contact;

CREATE TABLE preferences(
id INT NOT NULL,
Prefered_location VARCHAR(100) NOT NULL,
Notice_period VARCHAR(50) ,
Expected_CTC VARCHAR(50) NOT NULL,
Current_CTC VARCHAR(50) ,
Department VARCHAR(50) NOT NULL
);
select * from preferences;

CREATE TABLE select_master(
Id INT NOT NULL UNIQUE PRIMARY KEY,
Select_name VARCHAR(50) NOT NULL,
Select_key VARCHAR(50) NOT NULL,
multivalue VARCHAR(5) NOT NULL,
select_type VARCHAR(20)
);

CREATE TABLE option_master1(
option_Id INT NOT NULL PRIMARY KEY,
Id INT NOT NULL,
FOREIGN KEY(Id) REFERENCES select_master(Id),
option_key VARCHAR(50),
option_value VARCHAR(50)
);


INSERT INTO select_master(Id, Select_name, Select_key, multivalue, select_type)
VALUES(1, "languages", "l_name", "yes", "checkbox"),
(2, "technologies", "t_name", "yes", "checkbox_radio"),
(3 , "gender", "g_name", "no", "radio"),
(4 , "location", "location_name", "no", "drop-down"),
(5 , "department", "d_name", "no", "drop-down"),
(6, "Relationship", "r_name", "no", "drop-down");

SELECT * FROM select_master;

INSERT INTO option_master1(option_Id, Id, option_key, option_value)
VALUES(1,1, "Hindi" , "Hindi"),
(2,1, "Gujarati", "Gujarati"),
(3, 1, "English", "English"),
(4, 2, "PHP" , "PHP"),
(5, 2, "mysql", "mysql"),
(6,2, "larave", "larave"),
(7, 2, "oracle", "oracle"),
(8, 3, "male" , "male"),
(9, 3, "female" , "female"),
(10, 3, "other" , "other"),
(11, 4 , "gujarat", "gujarat"),
(12, 4, "maharashtra", "maharashtra"),
(13,4 ,"Delhi","delhi"),
(14,5 , "Design", "Design"),
(15, 5, "Marketing", "Marketing"),
(16, 6, "single" , "single"),
(17, 6, "married" , "married");

select * from option_master1;

CREATE TABLE `country_state_city` (
  `id` int(11) NOT NULL,
  `country` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL
);

INSERT INTO `country_state_city` (`id`, `country`, `state`, `city`) VALUES
(1, 'USA', 'New York', 'New York city'),
(2, 'USA', 'New York', 'Buffalo'),
(3, 'USA', 'New York', 'Albany'),
(4, 'USA', 'Alabama', 'Birmingham'),
(5, 'USA', 'Alabama', 'Montgomery'),
(6, 'USA', 'Alabama', 'Huntsville'),
(7, 'USA', 'California', 'Los Angeles'),
(8, 'USA', 'California', 'San Francisco'),
(9, 'USA', 'California', 'San Diego'),
(10, 'Canada', 'Ontario', 'Toronto'),
(11, 'Canada', 'Ontario', 'Ottawa'),
(12, 'Canada', 'British Columbia', 'Vancouver'),
(13, 'Canada', 'British Columbia', 'Victoria'),
(14, 'Australia', 'New South Wales', 'Sydney'),
(15, 'Australia', 'New South Wales', 'Newcastle'),
(16, 'Australia', 'Queensland', 'City of Brisbane'),
(17, 'Australia', 'Queensland', 'Gold Coast\r\n');

SELECT * FROM country_state_city;







