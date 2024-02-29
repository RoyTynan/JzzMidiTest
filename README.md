## A simple JazzSoft, Electron , React, Typescript application

The main purpose of this app is to create the packaging of Electron and JazzSoft into an executable application.<br>
It just reads the available midi devices, it does not send or receive midi

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/RoyTynan/JzzMidiTest.git your-project-name
cd your-project-name
npm install
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm run start
```

or<br><br>
If you are using Visual Studio Code you can run this app via launch.json from Debug<br>

## Packaging for Production

Electron via Electron React Boilerplate under development, the dev server loads packages from node_modules as normal.<br>
When Electron is packaged for release with Electron React Boilerplate it creates a folder in the project named 'release'.<br>
In the folder release are all the build artifacts etc. In a sub-folder named 'app' there is another node_modules and another  package.json file.<br>
Within this package.json is a "dependencies".
So add  "jzz": "^1.7.7".<br>
Then run  'npm run rebuild'<br>


```bash
npm run rebuild
```

To package apps for the local platform:

```bash
npm run package
```

## Docs

The framework for this Electron app is the excellent Electron Boiler Plate (https://electron-react-boilerplate.js.org)



