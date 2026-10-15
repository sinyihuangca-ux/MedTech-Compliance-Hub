import React from 'react';

function StatusBadge({ status }) {
  const normalizedStatus = status?.toLowerCase() || 'unknown';

  return (
    <span className={`status-badge status-${normalizedStatus.replace(/\s+/g, '-')}`}>
      {status || 'Unknown'}
    </span>
  );
}

export default StatusBadge;
