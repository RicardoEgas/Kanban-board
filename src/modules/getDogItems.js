
const fetchDogs = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breed/akita/images/random');
      const data = await response.json();
      return data.message;
    } catch (error) {
      return 'something went wrong';
    }
  };

export default fetchDogs;