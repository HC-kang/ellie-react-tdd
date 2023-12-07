const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

describe('UserService', () => {
  let userService;
  let userClient;

  const login = jest.fn(async (data) => data);
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    userClient = new UserClient();
    userService = new UserService(userClient);
  });

  it('should login', async () => {
    await userService.login('id', 'password');
    expect(login).toHaveBeenCalledWith('id', 'password');
  });

  it('should not call login() on UserClient if already logged in', async () => {
    await userService.login('id', 'password');
    await userService.login('id', 'password');

    expect(login).toHaveBeenCalledTimes(1);
  })
});
