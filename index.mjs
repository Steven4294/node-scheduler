 
import cron from 'node-cron';
import fetch from 'node-fetch';
import express from 'express';


const app = express();

// Define the task to be executed on schedule
const task = () => {
  console.log('Task executed!');

  // Make an HTTP request using fetch
  // fetch('https://example.com/api')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Response:', data);
  //     // Add your task logic here with the fetched data
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

    const HEROKU_API_TOKEN = '6f9c7ac3-b685-4186-9156-df6021893b2f'
  const HEROKU_APP_ID = 'kings-scraper'
  console.log("Restarting dynos")
  const response = fetch(`https://api.heroku.com/apps/${HEROKU_APP_ID}/dynos`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.heroku+json; version=3',
          'Authorization': `Bearer ${HEROKU_API_TOKEN}`
      }
  });
};

// Schedule the task to run every minute (change the schedule as needed)
cron.schedule('* * * * *', task);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});