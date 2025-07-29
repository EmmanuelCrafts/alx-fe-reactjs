function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Technology Consulting</li>
        <li style={styles.listItem}>Market Analysis</li>
        <li style={styles.listItem}>Product Development</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    color: '#555',
    fontSize: '1.1rem',
  },
  listItem: {
    marginBottom: '0.75rem',
  },
};

export default Services;
