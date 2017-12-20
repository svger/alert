import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import Icon from 'cefc-ui-icon';
import style from './style/index.less';

class Alert extends Component {
  getIconType = (type, withDesc) => {
    const Icons = {
      succ: 'success',
      info: 'prompt',
      warning: 'warning',
      error: 'error'
    };
    const iconType = withDesc ? Icons[type] : `${Icons[type]}_fill`;

    return iconType || 'success';
  }

  render() {
    let { description, type, prefixCls, message, showIcon, className = '' } = this.props;

    const alertCls = classname(prefixCls, className, {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-no-icon`]: !showIcon,
      [`${prefixCls}-with-description`]: !!description,
    });

    const withDesc = !!description;
    let iconType = this.getIconType(type, withDesc);

    return (
      <div className={alertCls}>
        { showIcon && <Icon type={iconType} className={`${prefixCls}-icon`} /> }
        <span className={`${prefixCls}-message`}>{message}</span>
        <span className={`${prefixCls}-description`}>{description}</span>
      </div>
    )
  }
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,       //提示的内容
  description: PropTypes.string,              //提示的详细描述
  type: PropTypes.string,                     //提示的类型,有succ、info、warning、error四种
  showIcon: PropTypes.bool,                   //是否显示Icon
  prefixCls: PropTypes.string,                //自定义类
  className: PropTypes.oneOfType([            //外部传入类
    PropTypes.string,
    PropTypes.object
  ]),
};

Alert.defaultProps = {
  type: 'succ',
  showIcon: true,
  prefixCls: 'cefc-alert'
};

export default Alert;