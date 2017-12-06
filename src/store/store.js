import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
// import rootReducer from '../components/main/reducer';

//默认state
let ostate = {
  create: {
    directory:{
      123129: {
        id:123129,
        title: '出门前检查',
        list: ['带手机', '带钱包', '带钥匙', '带身份证', '带眼镜', '检查窗户关严', '检查煤气和水龙头', '拍张已锁门照片']
      },
      9292319: {
        id:9292319,
        title: '开会准备',
        list: ['保存手头处理文件', '准备开会用材料', '上厕所', '带水杯', '带笔和本', '手机静音']
      },
      152341123: {
        id:152341123,
        title: '上厕所准备',
        list: ['保存手头处理文件', '带手机', '带纸或检查厕所有纸']
      },
      12341234: {
        id:12341234,
        title: '外出旅行准备',
        list: ['雨伞', '身份证及护照', '湿巾纸', '充电器和充电宝', '压缩饼干或士力架', '药品', '塑料袋', '洗漱用具及拖鞋']
      },
      929215123319: {
        id:929215123319,
        title: '面试准备',
        list: ['个人简历', '身份证', '学历证书', '其他证书']
      },
      12354123: {
        id:12354123,
        title: '大一新生准备',
        list: ['录取通知书', '高考准考证', '现金', '党团组织关系证明', '身份证及复印件', '户口本']
      },
    }
  }
};

export default createStore(
  rootReducer,
  ostate,
  applyMiddleware(thunk)
);