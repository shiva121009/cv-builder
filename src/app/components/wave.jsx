export default function Wave() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 320"
        style={{
          display: 'block',
          width: '100%',
          height: '380px',
        }}
      >
        <path
          fill="#1b1360"
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
}
