const userService = require('./user.service.js');

const add = async (req, res) => {
  const response = {
    setting: {
      success: 0,
      message: 'something went wrong',
    },
    data: {},
  };

  await userService.addMysql(req.body);
  await userService.addMongo(req.body);

  response.setting.success = 1;
  response.setting.message = 'User added successfully';

  res.json(response);
};

module.exports = { add };
