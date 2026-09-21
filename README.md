# Weather App (Classic Version)

This is a Weather App shows weather information calling APIs.

Font Awesome Icons are used here.

Step 1: Install the PackagesRun the following command in your terminal to install the Font Awesome SVG core, the React component, and the free icon packages:

bash code
```
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```
Use code with caution.(If you use Yarn, replace npm i --save with yarn add.)

Step 2: Use the Icons in Your ComponentImport the FontAwesomeIcon component alongside whichever specific icon you want to use. Font Awesome uses camelCase naming for icons in React (e.g., faHouse, faReact).

jsx code
```
import React from 'react';
// 1. Import the component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 2. Import the specific icons you need
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // The React Logo icon

function MyComponent() {
  return (
    <div>
      {/* 3. Render the component and pass the icon as a prop */}
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} /> 
    </div>
  );
}

export default MyComponent;

```
