const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    // updatePassword,
    // updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole,
    deleteUser,
} = require("../controllers/userController"); s
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isUserAuthenticated, UpdateUserPassword);
router.route("/me").get(isUserAuthenticated, getUserDetails);
router.route("/me/update").put(isUserAuthenticated, UpdateUserProfile);


router.route("/admin/user/:id")
    .get(isUserAuthenticated, authorizeRoles("admin"), getSingleUser)
    .put(isUserAuthenticated, authorizeRoles("admin"), updateUserRole)
    .delete(isUserAuthenticated, authorizeRoles("admin"), deleteUser);

router.route("/admin/users").get(isUserAuthenticated, authorizeRoles("admin"), getAllUser)


module.exports = router;