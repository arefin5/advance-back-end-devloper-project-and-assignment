const client=(req, res) => {
    res.send(`
      <form method="POST" action="api/twonumber">
        <input type="text" name="start" placeholder="start">
        <input type="number" name="end" placeholder="end">
        <button type="submit">Submit</button>
      </form>
    `);
  }
  export default client;