const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  
} else {
    console.error('Error:', xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error('Request failed');
};

xhr.send();
