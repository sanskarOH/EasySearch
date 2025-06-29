const dorkMap = {
  Book: 'filetype:pdf OR intitle:index.of books',
  Video: 'filetype:mp4 OR filetype:mkv OR intitle:index.of video',
  Song: 'filetype:mp3 OR intitle:index.of music',
  'Zip/Archive': 'filetype:zip OR filetype:rar OR intitle:index.of',
  File: 'filetype:doc OR filetype:xls OR filetype:pdf',
};

export function generateDork(query, selectedTypes = []) {
  console.log("[generateDork] query:", query);
  const dorkParts = selectedTypes
    .map((type) => dorkMap[type])
    .filter(Boolean); // remove any undefined types

  const fullDork = `"${query}" (${dorkParts.join(' OR ')})`;
  return fullDork;
}
