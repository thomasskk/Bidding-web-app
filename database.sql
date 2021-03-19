CREATE TABLE CATEGORY
(
    categoryId INTEGER IDENTITY(1,1) NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)

CREATE TABLE USERS
(
    userId INTEGER IDENTITY(1,1) NOT NULL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    street VARCHAR(30) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL,
    credit INTEGER NOT NULL,
)


CREATE TABLE ITEMS
(
    itemId INTEGER IDENTITY(1,1) NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    biddingOpeningDate DATE NOT NULL,
    biddingEndingDate DATE NOT NULL,
    initialPrice INTEGER,
    sellPrice INTEGER,
    userId INTEGER NOT NULL FOREIGN KEY REFERENCES USERS ( userId ),
    categoryId INTEGER NOT NULL FOREIGN KEY REFERENCES CATEGORY ( categoryId)
)

CREATE TABLE USERS_BOOKMARK
(
    userId INTEGER NOT NULL FOREIGN KEY REFERENCES USERS (userId),
    itemId INTEGER FOREIGN KEY REFERENCES ITEMS ( itemId ),

)

CREATE TABLE BIDDING
(
    bidId INTEGER IDENTITY(1,1) NOT NULL PRIMARY KEY,
    bidData datetime NOT NULL,
    bidPrice INTEGER NOT NULL,
    itemId INTEGER NOT NULL FOREIGN KEY REFERENCES ITEMS ( itemId ) ON DELETE CASCADE,
    userId INTEGER NOT NULL FOREIGN KEY REFERENCES USERS ( userId ) ON DELETE CASCADE
)


