
#How I created these endpoints

//First

To implement this, you would need to first create a POST endpoint in your Express.js server that accepts a JSON object containing the incident report data. This can be done using the app.post() method in Express.

Next, you would need to fetch the weather data for the specified city and country using the OpenWeatherMap API. This can be done using the fetch() method, which allows you to make HTTP requests to external APIs.

Once you have the weather data, you can store it in a table called "incidents" in a PostgreSQL database. You would need to create this table using SQL commands, and use a library like pg to execute the SQL commands and insert the data into the table.

Finally, you can create a GET endpoint using the app.get() method in Express, which retrieves all the incident reports from the "incidents" table and returns them in the response.

//Second

Creating the application on Linode server instance


To deploy a Node.js application on Linode, you will first need to create a Linode account and set up a Linux-based virtual server (also known as a "Linode") where your application will be hosted.

Once your Linode is set up, you can connect to it using SSH and install Node.js and any other necessary dependencies. You can then upload your application code to the Linode and run it using a Node.js process manager, such as PM2.

Here is a brief overview of the steps you will need to follow:

Sign up for a Linode account and create a new Linode.
Connect to your Linode using SSH.
Install Node.js and any necessary dependencies.
Upload your application code to the Linode.
Use a Node.js process manager to run your application.


//Third

To create a PostgreSQL database on AWS RDS (Amazon Relational Database Service), you will need to complete the following steps:

Sign up for an AWS account and log in to the AWS Management Console.
In the AWS Management Console, navigate to the RDS page and click on the "Create database" button.
On the "Create database" page, select "PostgreSQL" as the database engine and choose the desired configuration options for your database, such as the instance size and storage capacity.
Specify a name and password for the database's master user, and configure any additional security settings as needed.
Click on the "Create database" button to launch the database.
It may take several minutes for the database to be created and become available. Once it is ready, you can connect to it using any PostgreSQL client and begin using it to store and manage your data.

For more detailed instructions and additional options, you can refer to the AWS RDS documentation. It's also a good idea to familiarize yourself with the basics of AWS and database management before attempting to create a PostgreSQL database on RDS.


schema
CREATE TABLE incidents (
	client_id INT PRIMARY KEY NOT NULL,
	incident_desc VARCHAR ( 50 ) NOT NULL,
	city VARCHAR ( 50 ) NOT NULL,
	country VARCHAR ( 255 )  NOT NULL,
	date date NOT NULL,
    weather_report json NOT NULL
        
);



Thank you!!!!!!!








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
