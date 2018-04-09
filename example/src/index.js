import React from 'react';
import {render} from 'react-dom';
import {format, formatToJS, TreeInput} from '../../src';

import './index.scss';


const schema = [{
  "tag": 1,
  "fieldInfo": [{
    "tag": 1,
    "name": "uin",
    "documentation": "创建订单的uin\r",
    "label": "OPTIONAL",
    "type": "uint64",
    "value": "381802924"
  }, {
    "tag": 2,
    "name": "agency_id",
    "documentation": "机构id\r",
    "label": "OPTIONAL",
    "type": "uint64",
    "value": "15228"
  }, {"tag": 3, "name": "course_id", "documentation": "课程id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 4,
    "name": "term_id",
    "documentation": "班级id\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 5, "name": "package_id", "documentation": "课程包id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 6,
    "name": "cou_id",
    "documentation": "优惠券id\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 7, "name": "cou_price", "documentation": "优惠券价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 8,
    "name": "course_name",
    "documentation": "课程名称\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 9, "name": "course_price", "documentation": "课程价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 10,
    "name": "credit",
    "documentation": "红包支付金额\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 11, "name": "from", "documentation": "来源\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 12,
    "name": "nick_name",
    "documentation": "用户昵称\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 13, "name": "order_state", "documentation": "订单状态\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 14,
    "name": "cancel_reason",
    "documentation": "不知道有什么用的\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 15, "name": "passcard", "documentation": "班级通\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 16,
    "name": "pay_channel",
    "documentation": "支付渠道\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 17, "name": "pay_price", "documentation": "支付价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 18,
    "name": "platform",
    "documentation": "平台\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 19,
    "name": "reserve_flag",
    "documentation": "预约标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 20, "name": "small_term", "documentation": "小班标志\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 21,
    "name": "token",
    "documentation": "支付token\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 22, "name": "del_flag", "documentation": "删除标志\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 23,
    "name": "ios",
    "documentation": "ios标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 24,
    "name": "course_payid",
    "documentation": "课程付款类型 1,免费 2，付费\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 25, "name": "order_id", "documentation": "订单id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 26,
    "name": "pay_time",
    "documentation": "支付时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 27, "name": "create_time", "documentation": "创建时间\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 28,
    "name": "source",
    "documentation": "来源\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 29, "name": "billno", "documentation": "订单号\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 30,
    "name": "cft_order_id",
    "documentation": "财付通订单号\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {
    "tag": 31,
    "name": "pay_maintype",
    "documentation": "支付渠道类型\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 32, "name": "pay_subtype", "label": "OPTIONAL", "type": "string"}, {
    "tag": 33,
    "name": "pay_back_time",
    "documentation": "退款时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 34, "name": "uid_type", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 35,
    "name": "cycle_order",
    "documentation": "循环订单标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 36,
    "name": "cycle_end",
    "documentation": "循环课结束时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {
    "tag": 37,
    "name": "reject_reason",
    "documentation": "退款拒绝原因，在特殊活动中启用做特殊信息存储\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 38, "name": "address_id", "documentation": "订单绑定的用户地址id\r", "label": "OPTIONAL", "type": "uint64"}],
  "name": "order",
  "label": "OPTIONAL",
  "type": "message",
  "value": [{
    "tag": 1,
    "name": "uin",
    "documentation": "创建订单的uin\r",
    "label": "OPTIONAL",
    "type": "uint64",
    "value": "381802924"
  }, {
    "tag": 2,
    "name": "agency_id",
    "documentation": "机构id\r",
    "label": "OPTIONAL",
    "type": "uint64",
    "value": "15228"
  }, {"tag": 3, "name": "course_id", "documentation": "课程id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 4,
    "name": "term_id",
    "documentation": "班级id\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 5, "name": "package_id", "documentation": "课程包id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 6,
    "name": "cou_id",
    "documentation": "优惠券id\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 7, "name": "cou_price", "documentation": "优惠券价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 8,
    "name": "course_name",
    "documentation": "课程名称\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 9, "name": "course_price", "documentation": "课程价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 10,
    "name": "credit",
    "documentation": "红包支付金额\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 11, "name": "from", "documentation": "来源\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 12,
    "name": "nick_name",
    "documentation": "用户昵称\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 13, "name": "order_state", "documentation": "订单状态\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 14,
    "name": "cancel_reason",
    "documentation": "不知道有什么用的\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 15, "name": "passcard", "documentation": "班级通\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 16,
    "name": "pay_channel",
    "documentation": "支付渠道\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 17, "name": "pay_price", "documentation": "支付价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 18,
    "name": "platform",
    "documentation": "平台\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 19,
    "name": "reserve_flag",
    "documentation": "预约标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 20, "name": "small_term", "documentation": "小班标志\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 21,
    "name": "token",
    "documentation": "支付token\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 22, "name": "del_flag", "documentation": "删除标志\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 23,
    "name": "ios",
    "documentation": "ios标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 24,
    "name": "course_payid",
    "documentation": "课程付款类型 1,免费 2，付费\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 25, "name": "order_id", "documentation": "订单id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 26,
    "name": "pay_time",
    "documentation": "支付时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 27, "name": "create_time", "documentation": "创建时间\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 28,
    "name": "source",
    "documentation": "来源\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 29, "name": "billno", "documentation": "订单号\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 30,
    "name": "cft_order_id",
    "documentation": "财付通订单号\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {
    "tag": 31,
    "name": "pay_maintype",
    "documentation": "支付渠道类型\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 32, "name": "pay_subtype", "label": "OPTIONAL", "type": "string"}, {
    "tag": 33,
    "name": "pay_back_time",
    "documentation": "退款时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 34, "name": "uid_type", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 35,
    "name": "cycle_order",
    "documentation": "循环订单标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 36,
    "name": "cycle_end",
    "documentation": "循环课结束时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {
    "tag": 37,
    "name": "reject_reason",
    "documentation": "退款拒绝原因，在特殊活动中启用做特殊信息存储\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 38, "name": "address_id", "documentation": "订单绑定的用户地址id\r", "label": "OPTIONAL", "type": "uint64"}]
}, {"tag": 2, "name": "agency_id", "label": "OPTIONAL", "type": "uint64", "value": "15228"}, {
  "tag": 3,
  "fieldInfo": [{"tag": 1, "name": "ORDER_ID_ASC"}, {"tag": 2, "name": "ORDER_ID_DESC"}, {
    "tag": 3,
    "name": "PAY_TIME_ASC"
  }, {"tag": 4, "name": "PAY_TIME_DESC"}, {"tag": 5, "name": "CREATE_TIME_ASC"}, {
    "tag": 6,
    "name": "CREATE_TIME_DESC"
  }],
  "name": "order_by",
  "label": "OPTIONAL",
  "type": "enum",
  "value": [{"tag": 6, "name": "CREATE_TIME_DESC"}]
}, {"tag": 4, "name": "page", "documentation": "from 0\r", "label": "OPTIONAL", "type": "uint32"}, {
  "tag": 5,
  "name": "count",
  "documentation": "default 10\r",
  "label": "OPTIONAL",
  "type": "uint32"
}, {
  "tag": 6,
  "fieldInfo": [{
    "tag": 1,
    "fieldInfo": [{"tag": 1, "name": "PAY_TIME"}, {"tag": 2, "name": "CREATE_TIME"}, {
      "tag": 3,
      "name": "ORDER_ID"
    }, {"tag": 4, "name": "PAY_PRICE"}],
    "name": "type",
    "label": "REQUIRED",
    "type": "enum",
    "value": [{"tag": 2, "name": "CREATE_TIME"}]
  }, {"tag": 2, "name": "from", "label": "REQUIRED", "type": "uint64", "value": "1470009600"}, {
    "tag": 3,
    "name": "to",
    "label": "REQUIRED",
    "type": "uint64",
    "value": "1510358400"
  }],
  "name": "range",
  "label": "OPTIONAL",
  "type": "message",
  "value": [{
    "tag": 1,
    "fieldInfo": [{"tag": 1, "name": "PAY_TIME"}, {"tag": 2, "name": "CREATE_TIME"}, {
      "tag": 3,
      "name": "ORDER_ID"
    }, {"tag": 4, "name": "PAY_PRICE"}],
    "name": "type",
    "label": "REQUIRED",
    "type": "enum",
    "value": [{"tag": 2, "name": "CREATE_TIME"}]
  }, {"tag": 2, "name": "from", "label": "REQUIRED", "type": "uint64", "value": "1470009600"}, {
    "tag": 3,
    "name": "to",
    "label": "REQUIRED",
    "type": "uint64",
    "value": "1510358400"
  }]
}, {
  "tag": 7,
  "fieldInfo": [{"tag": 1, "name": "ALL", "documentation": "全部付款的\r"}, {
    "tag": 2,
    "name": "CASH",
    "documentation": "现金付款的\r"
  }, {"tag": 3, "name": "IOS", "documentation": "ios付款的\r"}, {
    "tag": 4,
    "name": "FENQILE",
    "documentation": "分期乐\r"
  }, {"tag": 5, "name": "INSTALLMENT", "documentation": "分期\r"}, {
    "tag": 6,
    "name": "JINGDONG",
    "documentation": "京东白条\r"
  }],
  "name": "payType",
  "label": "OPTIONAL",
  "type": "enum"
}, {"tag": 8, "name": "order_state", "label": "REPEATED", "type": "uint32"}, {
  "tag": 9,
  "name": "settle_lable",
  "label": "OPTIONAL",
  "type": "uint32"
}, {"tag": 10, "name": "uid", "label": "OPTIONAL", "type": "string"}];

const s = [{
  "tag": 1,
  "fieldInfo": [{
    "tag": 1,
    "name": "uin",
    "documentation": "创建订单的uin\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 2, "name": "agency_id", "documentation": "机构id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 3,
    "name": "course_id",
    "documentation": "课程id\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 4, "name": "term_id", "documentation": "班级id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 5,
    "name": "package_id",
    "documentation": "课程包id\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 6, "name": "cou_id", "documentation": "优惠券id\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 7,
    "name": "cou_price",
    "documentation": "优惠券价格\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 8, "name": "course_name", "documentation": "课程名称\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 9,
    "name": "course_price",
    "documentation": "课程价格\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 10, "name": "credit", "documentation": "红包支付金额\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 11,
    "name": "from",
    "documentation": "来源\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 12, "name": "nick_name", "documentation": "用户昵称\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 13,
    "name": "order_state",
    "documentation": "订单状态\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 14,
    "name": "cancel_reason",
    "documentation": "不知道有什么用的\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 15, "name": "passcard", "documentation": "班级通\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 16,
    "name": "pay_channel",
    "documentation": "支付渠道\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 17, "name": "pay_price", "documentation": "支付价格\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 18,
    "name": "platform",
    "documentation": "平台\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 19,
    "name": "reserve_flag",
    "documentation": "预约标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 20,
    "name": "small_term",
    "documentation": "小班标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 21, "name": "token", "documentation": "支付token\r", "label": "OPTIONAL", "type": "string"}, {
    "tag": 22,
    "name": "del_flag",
    "documentation": "删除标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 23, "name": "ios", "documentation": "ios标志\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 24,
    "name": "course_payid",
    "documentation": "课程付款类型 1,免费 2，付费\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 25, "name": "order_id", "documentation": "订单id\r", "label": "OPTIONAL", "type": "uint64"}, {
    "tag": 26,
    "name": "pay_time",
    "documentation": "支付时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {
    "tag": 27,
    "name": "create_time",
    "documentation": "创建时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 28, "name": "source", "documentation": "来源\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 29,
    "name": "billno",
    "documentation": "订单号\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {
    "tag": 30,
    "name": "cft_order_id",
    "documentation": "财付通订单号\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {
    "tag": 31,
    "name": "pay_maintype",
    "documentation": "支付渠道类型\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 32, "name": "pay_subtype", "label": "OPTIONAL", "type": "string"}, {
    "tag": 33,
    "name": "pay_back_time",
    "documentation": "退款时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {"tag": 34, "name": "uid_type", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 35,
    "name": "cycle_order",
    "documentation": "循环订单标志\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {
    "tag": 36,
    "name": "cycle_end",
    "documentation": "循环课结束时间\r",
    "label": "OPTIONAL",
    "type": "uint64"
  }, {
    "tag": 37,
    "name": "reject_reason",
    "documentation": "退款拒绝原因，在特殊活动中启用做特殊信息存储\r",
    "label": "OPTIONAL",
    "type": "string"
  }, {"tag": 38, "name": "address_id", "documentation": "订单绑定的用户地址id\r", "label": "OPTIONAL", "type": "uint64"}],
  "name": "order",
  "documentation": "请求参数\r",
  "label": "OPTIONAL",
  "type": "message"
}, {"tag": 2, "name": "uid_type", "documentation": "用户类型\r", "label": "OPTIONAL", "type": "uint32"}, {
  "tag": 3,
  "name": "show_del",
  "documentation": "是否需要修改被删除的订单\r",
  "label": "OPTIONAL",
  "type": "uint32"
}, {
  "tag": 4,
  "fieldInfo": [{"tag": 1, "name": "os", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 2,
    "name": "entrance",
    "documentation": "入口\r",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 3, "name": "scenes", "documentation": "场景\r", "label": "OPTIONAL", "type": "uint32"}, {
    "tag": 4,
    "name": "sub_scenes",
    "label": "OPTIONAL",
    "type": "uint32"
  }, {"tag": 5, "name": "extend", "documentation": "订单扩展信息\r", "label": "OPTIONAL", "type": "string"}],
  "name": "report",
  "documentation": "订单上报字段\r",
  "label": "OPTIONAL",
  "type": "message"
}];

function handleChange(e, rawValue) {
  // Filter empty value
  const filterEmpty = true;
  // format to json string
  console.log(format(rawValue, filterEmpty));
  // format to js object
  console.log(formatToJS(rawValue, filterEmpty));
}

const App = () => (
  <TreeInput
    schema={s}
    collapsed={2}
    onChange={handleChange}
    rootName="ROOT"
  />
);

const container = document.createElement('div');
document.body.appendChild(container);

render(<App/>, container);
