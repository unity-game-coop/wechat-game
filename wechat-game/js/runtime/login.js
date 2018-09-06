

export function login () {
  // 预授权获取用户信息，调用后在后面调用 getUserInfo 是不用用户确认授权，在目前 getUserInfo 调整阶段调用 getUserInfo 才不会报错
  wx.authorize({
    scope: 'scope.userInfo',
    fail: function (res) {
      // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
      if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
        util.showModel('授权', '取消了授权')
      }
    }
  })

  wx.login({
    success: function (loginResult) {
      wx.getUserInfo({
        success: function (userResult) {
          console.log('登录成功',userResult)
          // callback(null, {
          //   code: loginResult.code,
          //   encryptedData: userResult.encryptedData,
          //   iv: userResult.iv,
          //   userInfo: userResult.userInfo,
          // });
        },

        fail: function (userError) {
          // var error = new LoginError(constants.ERR_WX_GET_USER_INFO, '获取微信用户信息失败，请检查网络状态');
          // error.detail = userError;
          // callback(error, null);
        },
      });
    },

    fail: function (loginError) {
      // var error = new LoginError(constants.ERR_WX_LOGIN_FAILED, '微信登录失败，请检查网络状态');
      // error.detail = loginError;
      // callback(error, null);
    },
  })
}