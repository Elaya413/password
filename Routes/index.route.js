const {signUpController,resetPasswordRequestController,resetPasswordController,} = require("../Controllers/auth.controller");
  
  const router = express.Router()
  
  router.post("/auth/signup", signUpController);
  router.post("/auth/requestResetPassword", resetPasswordRequestController);
  router.post("/auth/resetPassword", resetPasswordController);
  
  module.exports = router;