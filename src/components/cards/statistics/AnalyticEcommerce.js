import React from 'react';
import PropTypes from 'prop-types';

const AnalyticEcommerce = ({ title, count, percentage, extra }) => {
  const containerStyle = {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '262px',
    height: '162px'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'regular',
    marginBottom: '8px',
    color: '#5F6980'
  };

  const countStyle = {
    fontSize: '26px',
    marginTop: '8px',
    color: '#282828'
  };

  const percentageStyle = {
    fontSize: '12px',
    padding: '2px 10px 2px 10px',
    marginBottom: '4px',
    borderRadius: '100px',
    backgroundColor: '#DCFFF5',
    color: '#20C997',
    fontWeight: 'semibold',
    textAlign: 'center'
  };

  const extraStyle = {
    fontSize: '12px',
    fontWeight: 'semibold',
    color: '#9D9FA1'
  };
  const downinfo = {
    display: 'flex',
    width: 'full',
    alignItems: 'baseline',
    gap: '10px'
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>{title}</p>
      <h3 style={countStyle}>{count}</h3>
      <div style={downinfo}>
        <div style={percentageStyle}>{percentage}</div>
        <p style={extraStyle}>{extra}</p>
      </div>
    </div>
  );
};

AnalyticEcommerce.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.number,

  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default AnalyticEcommerce;
