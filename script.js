const byteSize = (str) => {
  // write your code here
	// Encoding the string to UTF-8
  const utf8Bytes = new TextEncoder().encode(str);
  // Returning the size of the UTF-8 encoded bytes
  return utf8Bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
