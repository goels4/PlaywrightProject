const { expect } = require("@playwright/test");


class ClientUtilities{

   
     static async DoGet(context,APIBaseAddress, endpoint,  parametersDic ,parameterList) {
        var _response = await request.get(APIBaseAddress+endpoint, {
            params: {
                parametersDic
                }})
            return await _response;
      }
    
}