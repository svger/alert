'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style/index.less';
import classname from 'classnames';

import succ from './style/images/succ.png';
import fail from './style/images/fail.png';
import waring from './style/images/waring.png';
import error from './style/images/error.png';

const ICONOBJ = {
  'succ': succ,
  'fail': fail,
  'waring':waring,
  'error': error
};

const defaultPrefixCls = 'cefc-mesTemp'

class MsgTemplate extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  getStyle = () => {
    const { status } = this.props;
    let prefixCls = this.props.prefixCls;
    let wrapStyle = `pb30 pt30 ${prefixCls}-${status}`;
    let imgStyle = 'w50';
    let resultStyle = 'f16d';
    let rsCauseStyle = 'f12d';

    if(this.props.status.toLowerCase() === 'error'){
      wrapStyle = `pb14 pt14 ${prefixCls}-${status}`;
      imgStyle = 'w16';
      resultStyle = 'f16r';
      rsCauseStyle = 'f14r';
    }
    return {wrapStyle, imgStyle, resultStyle, rsCauseStyle}
  }

  render() {
    let { status, msgResult, resuCause ,prefixCls} = this.props;
    status = status.toLowerCase();
    let { wrapStyle, imgStyle, resultStyle, rsCauseStyle } = this.getStyle();
    wrapStyle = classname(wrapStyle, 'plr15');
    rsCauseStyle = classname(rsCauseStyle, 'mt8', `${prefixCls}-lineClamp`);

    return (
      <div>
        <div className={wrapStyle}>
          <div className={`${prefixCls}-flexWrap`}>
            <div className={`${prefixCls}-iconWrap mr10`}>
              <div className={imgStyle}>
                <img src={ICONOBJ[status]}  />
              </div>
            </div>
            <div className={`${prefixCls}-flexItem`}>
              { msgResult ? <div className={resultStyle}>{msgResult}</div> : ''}
              { resuCause ? <div className={rsCauseStyle}>{resuCause}</div> : ''}
            </div>
          </div>
        </div>
      </div>)
  }
}

MsgTemplate.propTypes = {
  prefixCls: PropTypes.string.isRequired,   //自定义类
  status: PropTypes.string.isRequired,      //消息状态 succ/fail/waring/error
  msgResult: PropTypes.string,              //消息结果
  resuCause: PropTypes.string,              //结果原因
};

MsgTemplate.defaultProps = {
  prefixCls: defaultPrefixCls,
  status: '',
  msgResult: '',
  resuCause: ''
};

export default MsgTemplate;
