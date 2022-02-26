Smogon Usage Stats Viewer
====================

This project is a **fork** of asanrom's [Smogon Usage Stats's Viewer](https://github.com/asanrom/Smogon-Stats-Viewer).

This project is a viewer of [Pokemon Usage Stats (Smogon)](http://www.smogon.com/stats/) made in HTML5, CSS3 and Javascript. You can use it to visualize Smogon stats in a more visual and sorted format. 

Check it out here: [https://asanrom.github.io/Smogon-Stats-Viewer/](https://asanrom.github.io/Smogon-Stats-Viewer/)

Requirements
------------

- Node.js

- The [smogon's pokemon-showdown repository](https://github.com/smogon/pokemon-showdown)

Installation
------------

In order to install dependencies, open a shell / terminal / cmd an run the command:
```
npm install
```

Usage
------------

Before running the following commands below, you have to update the `formats.js` file :

1. Go to the pokmon-showdown's cloned directory
2. Run the following command : `npm i && node build`
3. Copy the generated `formats.js` in `.config-dist` directory
4. Paste it into the `temp` directory of this project

If you want to update the usage stats using the default configuration (gets stats for the last 2 months), run the command:
```
npm start
```

In order to update the months list use:
```
node usage-stats update
```

In order to get stats of a month run:
```
node usage-stats get yyyy-mm
```

In order to test the client, use the following (You can use 8000 or the port you prefer).
```
node usage-stats test 8000
```

For more options:
```
node usage-stats --help
```
