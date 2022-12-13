To implement this, you would need to first create a POST endpoint in your Express.js server that accepts a JSON object containing the incident report data. This can be done using the app.post() method in Express.

Next, you would need to fetch the weather data for the specified city and country using the OpenWeatherMap API. This can be done using the fetch() method, which allows you to make HTTP requests to external APIs.

Once you have the weather data, you can store it in a table called "incidents" in a PostgreSQL database. You would need to create this table using SQL commands, and use a library like pg to execute the SQL commands and insert the data into the table.

Finally, you can create a GET endpoint using the app.get() method in Express, which retrieves all the incident reports from the "incidents" table and returns them in the response.


//Creating the database with the table on Linode server instance

CREATE USER admin WITH PASSWORD '8omktnpost'
CREATE DATABASE RelloDb;
GRANT ALL PRIVILEGES ON DATABASE RelloDb TO postgres;

psql -d rellodb -U postgres -W 8omktnpost


CREATE TABLE incidents (
	client_id INT PRIMARY KEY NOT NULL,
	incident_desc VARCHAR ( 50 ) NOT NULL,
	city VARCHAR ( 50 ) NOT NULL,
	country VARCHAR ( 255 )  NOT NULL,
	date date NOT NULL,
    weather_report json NOT NULL
        
);










DB instance identifierInfo
Type a name for your DB instance. The name must be unique across all DB instances owned by your AWS account in the current AWS Region.
database-1
The DB instance identifier is case-insensitive, but is stored as all lowercase (as in "mydbinstance"). Constraints: 1 to 60 alphanumeric characters or hyphens. First character must be a letter. Can't contain two consecutive hyphens. Can't end with a hyphen.
Credentials Settings
Master usernameInfo
Type a login ID for the master user of your DB instance.
postgres
1 to 16 alphanumeric characters. First character must be a letter.

Auto generate a password
Amazon RDS can generate a password for you, or you can specify your own password.
Master passwordInfo
Constraints: At least 8 printable ASCII characters. Can't contain any of the following: / (slash), '(single quote), "(double quote) and @ (at sign).
