

curl -X POST http://localhost:3001/api/user \
-H "Content-Type: application/json" \
-d '{
    "name": "getrude",
    "surname": "marks",
    "idNumber": "344567890154",
    "email": "marks@gmail.com",
    "password": "123456",
    "role": "admin",
    "designation": "Project Manager",
    "joining_date": "2024-11-29",
    "salary": 75000,
    "phone": "1234567890",
    "address": "123 Main Street, Cityville",
    "active": true
}'

curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "athur@gmail.com",
    "password": "123456"
   
}'

curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "marks@gmail.com",
    "password": "123456"
   
}'
