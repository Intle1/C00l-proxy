document.getElementById('proxy-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('url').value;
  try {
    const response = await fetch(`/proxy?url=${url}`);
    const data = await response.text();
    document.getElementById('content').innerHTML = data;
  } catch (error) {
    console.error(error);
    document.getElementById('content').innerHTML = 'Error occurred';
  }
});
