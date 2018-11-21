<center>
  <h1>
    <span style="font-size: 4rem;">👨🏼‍💻</span>
    <br/>
    <span>Web-App Coding Challenge</span>
  </h1>
</center>

## Aufgabe

Erstelle eine Single-Page-Application. Die SPA soll einem Benutzer alle Häuser aus Game of Thrones in einer Tabelle anzeigen.

Es soll möglich sein eines dieser Häuser aus der Tabelle auszuwählen. Durch Klick auf ein Haus soll dieses in einem Detail View angezeigt werden. Dort sollten mehr Information zu dem ausgewählten Haus ersichtlich sein.

## Solution
### Run the app in development mode 

`npm start`

### Build app for production 

` npm run build `

### Solution deployment

Production  build of the app is located in `build` directory

##### Static Server

The easiest way to deploy the app is to use ` serve `

` npm install -g serve `    

` serve -s build `