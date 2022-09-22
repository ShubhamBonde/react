# You can directly include react in your html page using
<script   script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    copy this and just simply add it in your head tags


# Building react for development
Command : npx parcel build <_entryPoint_to_your_app> </br>
remove "main": "index.js" from package.json </br>
As soon as you run above command dist folder will have built files which you can now serve using following command </br>
> npx serve dist

# Strict Mode
import {StrictMode} from "react";
Helps you future proof your react app </br>
It will give you additional warnings for the things you shouldn't be doing. It warns you about legacy features or soon to be depricated features or things. wrap your jsx with</br>
<StrictMode>
    <MyJsx/>
</StrictMode>
</br>
# Link
Untill you are doing internal links to your website just do Links instead of a tag. Also anytime you'll be using Link tag it has to be inside the BrowserRouter tag. </br>
