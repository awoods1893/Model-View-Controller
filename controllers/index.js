const router = require('express').Router();

const dashboardRoutes = require('./dashboard.js');
const homeRoutes = require('./home');
const apiRoutes = require("./api")

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;