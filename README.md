# Simple CMS

## Quick start

```shell
# cloing the repo
git clone git@github.com:Shobhit-Mishra-02/vahan-task.git
cd vahan-task

# install the dependencies
cd backend/
npm install

cd ../frontend
npm install

# now add .env file inside backend folder
cd backend/
touch .env
cat .env.example >> .env # after this you need to add database url in .env file

# now start the backend server
npm run dev

# then, finally start the frontend
cd frontend/
npm run dev
```
