/* 与后台交互模块 */
import ajax from './ajax'

/**
 * 用户注册
*/
export const reqRegister = ({userInfo}) => ajax('url',{userInfo},'POST');

