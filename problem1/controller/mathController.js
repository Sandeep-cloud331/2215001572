const axios = require('axios');

let previousNumbers = [];

const getNumbers = async (req, res) => {
  const numberId = req.params.id;
  const url = `http://20.244.56.144/evaluation-service/${numberId}`;

  try {
    const response = await axios.get(url);
    const currentNumbers = response.data.numbers || [];

    if (!Array.isArray(currentNumbers)) {
      return res.status(400).json({ error: 'invalid data' });
    }

    const average = currentNumbers.length
      ? currentNumbers.reduce((sum, num) => sum + num, 0) / currentNumbers.length
      : 0;

    res.json({
      previous_numbers: previousNumbers,
      current_numbers: currentNumbers,
      average: average.toFixed(2),
    });

    previousNumbers = currentNumbers;

  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    res.status(500).json({ error: 'Failed to fetch numbers from server ' });
  }
};

module.exports = { getNumbers };
