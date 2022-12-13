To implement this, you would need to first create a POST endpoint in your Express.js server that accepts a JSON object containing the incident report data. This can be done using the app.post() method in Express.

Next, you would need to fetch the weather data for the specified city and country using the OpenWeatherMap API. This can be done using the fetch() method, which allows you to make HTTP requests to external APIs.

Once you have the weather data, you can store it in a table called "incidents" in a PostgreSQL database. You would need to create this table using SQL commands, and use a library like pg to execute the SQL commands and insert the data into the table.

Finally, you can create a GET endpoint using the app.get() method in Express, which retrieves all the incident reports from the "incidents" table and returns them in the response.


//Creating the database with the table on Linode server instance

CREATE USER postgres WITH PASSWORD '8omktnpost'
CREATE DATABASE RelloDb;
GRANT ALL PRIVILEGES ON DATABASE RelloDb TO postgres;

psql -d RelloDb -U postgres -W 8omktnpost


CREATE TABLE incidents (
	client_id INT PRIMARY KEY NOT NULL,
	incident_desc VARCHAR ( 50 ) NOT NULL,
	city VARCHAR ( 50 ) NOT NULL,
	country VARCHAR ( 255 )  NOT NULL,
	date date NOT NULL,
    weather_report json NOT NULL
        
);


Server configuration for PostgreSQL .env 
PORT=2000
PGUSER=postgres
PGHOST=74.207.229.54
PGPASSWORD=8omktnpost
PGDATABASE=RelloDb
PGPORT=5432
ApiUrl= "https://api.openweathermap.org/data/2.5/weather"
ApiKey ="76c6c002ca4341f041228ef68abfd1bd"