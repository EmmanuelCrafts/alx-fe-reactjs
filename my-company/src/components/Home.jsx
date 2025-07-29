function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Company</h1>
      <p style={styles.paragraph}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: 1.6,
  },
};

export default Home;
