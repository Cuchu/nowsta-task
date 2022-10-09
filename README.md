# BACKEND express + sequelize - graphql 

 
## Data Models, Schemas and Resolvers

> **All models are defined in src/db**

## Getting Set Up

  
1. Start by cloning this repository.
2. In root directory, run `npm install`.
3. Create local `debelopment` and `test` databases.
4. Add your database config in `config`.
4. Next, `npm run db:initialize` will seed the local PSQL database. **Warning: This will drop the database if it exists**.
5. Then run `npm start` which should start the server.
6. On `http://localhost:3001/graphql` the graphql should be running for post actions, or you can test it using `https://studio.apollographql.com/sandbox/explorer`.

![studio-apollo-graphql](https://i.ibb.co/ZHbw2C1/cap-00.png)
![postman](https://i.ibb.co/1MJwr23/cap-01.png)

Easy way to test if everything is working, go to `http://localhost:3001/posts`
![posts-test-request](https://i.ibb.co/fnmfp34/cap-02.png)

