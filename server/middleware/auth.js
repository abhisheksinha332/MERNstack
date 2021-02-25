// import jwt from 'jsonwebtoken';

// const Auth = async(req,res, next)=>{
//     try {
//        const token = req.headers.authoeization.split("")[1];
//        const isCustomAuth = token.length <500;
//        let decodedData;
//        if(token && isCustomAuth){
//            decodedData = jwt.verify(token,'test');

//            req.userId= decodedData?.id;
//        } else{
//            decodedData = jwt.decode(token);

//            req.userId= decodedData?.sub;
//        }
//        nect();
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default Auth;

import jwt from "jsonwebtoken";

//const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;