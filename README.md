### React Starter Pack using **Parcel Bundler** <br/> <br/>

> This project is integrated with Eslint and Prettier along with SCSS

- Clone the repo
  ```
  >git clone https://github.com/ashwin1014/react-parcel-starter.git
  ```
- Open repository from terminal
  ```
  >yarn install or npm install
  ```
- Build and Start development server

  ```
  >yarn start
  ```

  Browse http://localhost:1234 to view project

  - Build for Production

  ```
  yarn build
  ```
  - To generate page

  ```
  yarn generate page "page name"
  Example: yarn generate page "Home"
  ```

- To generate component
  ```
  yarn generate component "component name"
  Example: yarn generate component "Navbar"
  ```
- Importing Images

  ```
  For SVG:

  import mySvgImage from './SVGPath/myimage.svg';
  #this will allow to use image sprites for svg images
  <svg>
    <use xlinkHref={mySvgImage} />
  </svg>

  For PNG/JPG
  import myPngImage from './PNGPath/mypngimage.png';
  #do not give path directly in src. always import as parcel changes directory during build
  <img src={myPngImage} alt='logo' />
  ```
