\c trips;

DROP TABLE IF EXISTS trips;

-- Holds the primary trip data
CREATE TABLE trips(
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT,
  location TEXT,
  mapPic TEXT
);

-- Holds the cities and it"s details
DROP TABLE IF EXISTS cities;
CREATE TABLE cities(
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT,
  top INTEGER,
  "left" INTEGER
);

-- Holds the schedules of each activity
DROP TABLE IF EXISTS schedules;
CREATE TABLE schedules(
  trip_id INTEGER REFERENCES trips(id),
  activity TEXT,
  city_id INTEGER REFERENCES cities(id),
  hotel TEXT,
  meal TEXT,
  description TEXT
);

-- Holds the optional activities for each trip
DROP TABLE IF EXISTS optionals;
CREATE TABLE optionals(
  trip_id INTEGER REFERENCES trips(id),
  title TEXT,
  price TEXT,
  description TEXT,
  "day" INTEGER
);

\c postgres;