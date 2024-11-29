

curl -X POST http://localhost:3001/api/user \
-H "Content-Type: application/json" \
-d '{
    "name": "zack",
    "surname": "monga",
    "idNumber": "34456668890154",
    "email": "monga@gmail.com",
    "password": "123456",
    "role": "user",
    "designation": "Developer",
    "joining_date": "2024-11-29",
    "salary": 76000,
    "phone": "1234567890",
    "address": "123 Main Street, Pretoria",
    "active": true
}'

curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "athur@gmail.com",
    "password": "123456"
   
}'

//getrude is admin

curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "marks@gmail.com",
    "password": "123456"
   
}'
 //user
curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "makau@gmail.com",
    "password": "123456"
   
}'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ5YmE5OTQxZWZmNTc3OWVjZDk0NDIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzI4ODY3NDIsImV4cCI6MTczMjg5MDM0Mn0.FNhDA2tmXIb0PSCkk76O6Ley1Xf-ME-01OFALP0xmjI