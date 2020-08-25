# Protect-Your-API
This project is a starting point for a TypeScript based React app that also has a local API server using express.

There are 2 different Webpack configurations. One for the server and one for the client.
<br />
<br />
<br />
<br />

## Configurations

#### ***Privileges***
create user 'auth_samp'@'localhost' identified by '(your password)';<br />
grant all privileges on auth_samp.* to 'auth_samp'@'localhost';
<br />
<br />
<br />
<br />

## DDLs

#### ***Blogs Table***

CREATE TABLE Blogs (
id int(11) NOT NULL AUTO_INCREMENT,
content longtext,
title varchar(60) DEFAULT NULL,
_created DATETIME NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `auth_samp`.`Blogs`
(`title`, `content`)
VALUES
('Messi',
"The 33-year-old has spent his entire career at Camp Nou, winning the Ballon d'Or on six occasions - but now looks set to leave
  Lionel Messi has demanded to leave Barcelona by activating a clause in his contract that would allow him to leave on a free transfer.
  
  The 33-year-old has sent a fax to Barcelona communicating his intention to leave behind the club he's played at for 20 years.
  
  Although his contract is set to expire at the end of the 2020-21 season, Messi and his legal team believe the clause will allow him to terminate his deal unilaterally.");
  
  INSERT INTO `auth_samp`.`Blogs`
  (`title`, `content`)
  VALUES
  ('England drop Maguire after Man Utd star found guilty in Greece',
  "The Manchester United defender will not take part in upcoming Nations League matches after initially being called in
   The FA has announced that Gareth Southgate has dropped Harry Maguire from the latest England squad after the Manchester United star was found guilty of charges of aggravated assault, resisting arrest, and repeated attempts of bribery on Tuesday.
   
   Maguire's sentencing came just hours after he was initially named to England's latest squad for September’s Nations League games against Iceland and Denmark, with Southgate explaining that he had spoken to Maguire and was working on what information he was presented.
   
   But Maguire was subsequently dropped after being handed a 21-month suspended prison sentence after an incident in Greece last week, with the defender, his brother Joe Maguire and their friend Christopher Sharman all found guilty after a trial in Syros, Greece.");
   
   INSERT INTO `auth_samp`.`Blogs`
     (`title`, `content`)
     VALUES
     ("Van Dijk facial injury 'no big problem' says Klopp",
     "The centre-back went off injured against the Austrian champions but the Reds manager is not concerned about his influential defender
      Liverpool boss Jurgen Klopp insists the injury sustained by Virgil van Dijk in Tuesday's friendly with Red Bull Salzburg is nothing to be concerned about.   
      The Netherlands international was forced off in the 55th minute of the Reds' 2-2 draw in Austria after suffering a cut to his head.    
      Klopp, though, confirmed after the game that the 29-year-old is not expected to suffer any lasting effects.");

<br />
<br />

#### ***Users Table***

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `role` varchar(25) DEFAULT 'guest',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
<br />
<br />


#### ***Accesstokens Table***

CREATE TABLE `accesstokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `token` text,
  `expires` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `accesstokens_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1


<br />
<br />
<br />
<br />


## Test Data

#### ***GET METHOD***
Test both of the get methods, with authentication.
<br />
<br />
#### ***PUT METHOD***
Test with any valid blog index the following in postman: <br />
 {
 "title": "Partyman",
 "content": "hey what's up?!?!"
 }
  {
  "content": "YOOOO"
  }
   {
   "title": "My_Title"
   }
<br />
<br />
#### ***GET METHOD***
Delete a Blog by specifying the index and id of the blog 
<br />
<br />



## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.
<br />
<br />
<br />
<br />


## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.
<br />
<br />
<br />
<br />


## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.
