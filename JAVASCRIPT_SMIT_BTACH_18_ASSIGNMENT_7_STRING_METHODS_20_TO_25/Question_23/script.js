var str = "The quick brown fox jumps over the lazy dog";
var lower = str.toLowerCase();
var count = (lower.match(/the/g) || []).length;
alert("Number of 'the': " + count);
