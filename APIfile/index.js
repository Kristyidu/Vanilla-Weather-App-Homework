function showResult(response) {
  alert(response.data.answer);
}

let apiKey = "8abadf7ae1834fobb53bf70t75fb8311"; 
let prompt = "Who is the first female president in the entire world?";
let context = "Be very precise please";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Waiting ....");
axios.get(apiUrl).then(showResult);



// PlugIN codesandbox link
// https://codesandbox.io/p/devbox/js-plugins-challenge-forked-yv3swk?file=%2Fsrc%2Findex.js%3A9%2C11&workspaceId=ws_XcRi5dgweYu3vjX2eEm43d
// My weekly task link oct 13. // https://codesandbox.io/p/devbox/joke-generator-challenge-forked-qjmq8r?file=%2Fsrc%2Findex.js&workspaceId=ws_XcRi5dgweYu3vjX2eEm43d
// https://codesandbox.io/p/sandbox/joke-generator-solution-ypdl66?file=%2Fsrc%2Findex.js