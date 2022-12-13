To implement this, you would need to first create a POST endpoint in your Express.js server that accepts a JSON object containing the incident report data. This can be done using the app.post() method in Express.

Next, you would need to fetch the weather data for the specified city and country using the OpenWeatherMap API. This can be done using the fetch() method, which allows you to make HTTP requests to external APIs.

Once you have the weather data, you can store it in a table called "incidents" in a PostgreSQL database. You would need to create this table using SQL commands, and use a library like pg to execute the SQL commands and insert the data into the table.

Finally, you can create a GET endpoint using the app.get() method in Express, which retrieves all the incident reports from the "incidents" table and returns them in the response.

Here is an example implementation of the POST endpoint: