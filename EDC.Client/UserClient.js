const { expect } = require("@playwright/test");
const ClientUtilities = require('../EDC.Utilities/ClientUtilities.js');


 class UserClient{  
     
   
       async GetUsers(context, userId )  {

        const BaseAddress = baseURL;
        const  endpoint = RoutePrefix + "users";
        const parameters={ id: userId};
        const _response=await ClientUtilities.DoGet(context,APIBaseAddress,endpoint,parameters);
        if (_response == null) {
            throw new Error('Get Users API is not working!')
          } 
          if (await _response.statusText()=='OK' &&  await _response.status()==200)
          {
              return await _response.json();
          }
     }
   }