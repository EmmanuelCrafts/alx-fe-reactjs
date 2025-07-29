function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Our company has been providing top-notch services since 1990. We specialize in various
        fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#555',
  },
};

export default About;
