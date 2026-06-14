REST API: 
* Principle on top of HTTP
* Helps in standardization of API


// Perfectly valid APIs
order
/createZomatoOrder

/createOrder



// Identify the resource: Order

GET        /orders

POST       /orders

DELETE     /orders

GET /getOrders


--------------------------------------------------------------
Design REST API for a course management service
- Getting a list of all courses
- Getting the details of a specific course
- Modify the information of the course with provided details
- Create a new course
- Gets a rating to a provided course


# Getting a list of all courses

GET /api/v1/courses 

# Getting the details of a specific course

GET /api/v1/courses/:courseId
GET /api/v1/courses/{courseId}

# Create a new course

POST /api/v1/courses 
body:{
    hello: world
}

# Modify the information of the course with provided details
- Changing Partial Information: PATCH
- Replacing the entire information: PUT

PATCH /api/v1/courses/:courseId
body:{
    hello: world
}


# Gets ratings to a provided course

GET /api/v1/courses/:courseId/ratings

GET /api/v1/ratings?courseId=:courseId
