# SP23-Context-Awareness-BackgroundSound-Alerts

# About

A senior group project, this SPA was designed to administer a scientific experiment to participants and aggregate data in a mongo database. Notification sound effects were played randomly over 3 different background noise contexts, users were asked to click a button when they heard a notification sound. We then calculated a hit rate to investigate how different sound effect and background sound pairings performed. Data analysis done in Juypter Notebook with pandas

# Requirements
* nodejs 19.3.0

# Run Instructions 
Install node dependencies and run the app locally in dev mode with:
`./bin/run.sh init && ./bin/run.sh dev`

A more detailed document of the run script is [here](docs/run.md)

# Debug Mode
In the upper left corner of the app there is a debug switch, this is used to display data as it is aggregated throughout the app and allows page navigation that would not be allowed to a general user. This was hidden in the 'deployed' version of the app.

# General Architecture
This App has a simple React Single Page front-end in directory `client/` with an express back-end in directory `server/`. The back-end serves up the audio files used in the experiment and is configured for CORS since the front-end and back-end are different servers. The back-end also interfaces with the mongodb database. The database credential was added to the .gitignore, this App functions without it for demonstration purposes but does not aggregate data like it did in 'production'.

# Data Results
The data was all analyzed automatically with python in a juypter notebook in directory `tools/`. The scripts would grab the data from the database with the database credentials. Since those credentials are not available publicly, this won't work. Here are some of the visualizations of the data we captured:

![hit-thresholds.png](data%2Fimgs%2Fhit-thresholds.png)
![hit-stats.png](data%2Fimgs%2Fhit-stats.png)
![age-performance-scatter.png](data%2Fimgs%2Fage-performance-scatter.png)

The final raw data can be found [here](data%2Ffinal-data.csv).

And our final report on the experiment can be found [here](final-deliverable%2FCASA_Final_Paper.pdf)