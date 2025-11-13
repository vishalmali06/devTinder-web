# DevTinder

- Create a Vite + React application 
- Remove unnecessary code and create a Hello Word App
- Install tailwind css
- Install Daisy UI
- Add NavBar componet to App.jsx
- Create a NavBar.jsx separate component
- Install react router dom
- Create BrowserRouter > Routes > Rout=/ Body > RouteChildren
- Created the footer
- Create a Login Page
- Insatll axios 
- CORS - install cors in backend => add the middleware to app with configuration: origin, credential : true
- Wheever you are making API call so pass asios => {withCredentials: ture}
- install react-redux + @reduxjs/toolkit =>  https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome 
- Login and see if your data is comming properly in the store 
- NavBar should update as soon as user loged in 
- Refactor our code to add constant file + create a componet folder
- You should not be able access other routes without login 
- If token is not present redirect user to login page
- Logout feature
- Get the feed and add the feed in the store 
- Build the user card in the feed
- Edit Profile featurte 
- Show toast message on save of profile
- New Page - See all my connections
- New Page - See all my connection requests 
- Feature to accept reject connection request 
- Accept/Ignore the user card from Feed 
- Signup New User

Remaining:
- E2E Testing  


Body
    NavBar
    Route=/ => Feed
    Route=/login => Login 
    Route=/connection => Connections
    Router=/profile => Profile

# Deployment 
-  Signup on AWS
- Launch instance 
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-201-230-41.ap-south-1.compute.amazonaws.com
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
- Close and again do ssh cammnad for below steps
- Install correct node version 22.11.0 
- Git clone https://github.com/vishalmali06/devTinder.git
- Git clone https://github.com/vishalmali06/devTinder-web.git

# Frontend
    - npm install -> it install the dependencies 
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html
    - sudo scp -r dist/* /var/www/html
    - Enable port 80 of your instance 

# Backend
    - npm install
    - updated DB password 
    - npm run start
    - allow ec2 instance public IP on mangodb server
    - npm install pm2 -g
    - pm2 start npm -- start
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs || Very helpfull cammand 
    - pm2 flush <name>
    - pm2 list 
    - pm2 stop
    - pm2 delete <name>
    - config nginx - sudo nano /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx 
    - modify the BASE_URL in frontend project to "/api"

# Ngnix Config: 
    Frontend = http://13.204.67.36
    Backend = http://13.204.67.36:7777

    Domain name = devtinder.com => 13.204.67.36

    Frontend = devtinder.com
    Backend = devtinder.com:7777 => devtinder.com/api

        server_name 13.204.67.36;

        location /api/ {
            proxy_pass http://localhost:7777/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }   
