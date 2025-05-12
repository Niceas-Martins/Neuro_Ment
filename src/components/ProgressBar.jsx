// src/components/ProgressBar.jsx
function ProgressBar({ percent }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
      <div style={{ height: '8px', backgroundColor: '#c8facc', width: '100%' }}>
        <div
          style={{
            height: '8px',
            backgroundColor: '#13678A',
            width: `${percent}%`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <div style={{
        textAlign: 'right',
        fontSize: '0.75rem',
        paddingRight: '12px',
        color: '#13678A',
        fontWeight: 'bold'
      }}>
        {percent}%
      </div>
    </div>
  );
}

export default ProgressBar;
