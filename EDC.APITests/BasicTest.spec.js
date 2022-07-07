const { test, expect } = require('@playwright/test');
const UserClient = require('../EDC.Client/UserClient.js');


//Get 
test('Get a response', async ({request, baseURL}) => {

    const dict={
        id: "3866",
        sysparm_fields: "name, email"
        };
    const _response = await request.get(`${baseURL}users`, {
    params: {
        dict
        }})
    console.log(await _response.json())
    expect(_response.ok()).toBeTruthy()
        
});

// test('Get Users',async ()=>{
//     var CU= new UserClient();    
//     var testVar= await CU.GetUsers('',4024);
//     console.log(await testVar);    
// });


