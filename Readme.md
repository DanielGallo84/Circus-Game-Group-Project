# Vite Project Base

## Organización de trabajo

Nombres de archivos y sass:

Camel Case

Nombres de las ramas

Para features:

kebab-case

feature/home-feature


feature/homeFeature

Para otras cosas:

refactoring 
fix
etc

## Fonts Usage

Para poner las fuentas usen las siguientes reglas:

font-family: 'Luckiest Guy', cursive;
font-family: 'Jolly Lodger';

## Dev Dependencies
- Vite [https://vitejs.dev/]
- Sass [https://sass-lang.com/]
- Typescript [https://www.typescriptlang.org/]
- Scss Reset [https://www.npmjs.com/package/scss-reset]

## Installation
```
npm install
npm run dev
```

## Production
```
npm run build
npm run preview
```

## Project Folder Organization

<b>Src is the Root</b> of the project.

<b>Style.scss</b> in the root folder <b>is the main SCSS archive</b>. Here we import all the general SCSS modules that are applicable for every page.

Index.html in the Root is the Main page.

Every page has its' own folder (game, results). Inside those folders are <b>subfolders</b> that contain modules that are <b>specific only for that page</b>.

The <b>assets</b> folder contains all the assets for the project, <b>including images and general modules</b>.