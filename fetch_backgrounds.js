const https = require('https');
const urls = {
  hero: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Q4MzBiNWY5NGNlZDRhZDk5ZTA2MzdiYWFjYTA1MWMwEgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086",
  about: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Y0NWY1NDA4ZmMwMzRmNDQ4NWQ4NmRjYzA4MjUzYTQ2EgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086",
  skills: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzhhNWQ3MWQ1Nzk2NjRhY2I5MjAwZTRiMDA3YzViZThhEgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086",
  experience: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzliNzY0NTg0NTc2ODQ1NjJiNWU3NmVkNDVhYWQ3NDNmEgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086",
  projects: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzczZjg5MDg5NDNiYzQ0MGI4ZWRiYmNkNzYwZDcxMWM5EgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086",
  education: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzE3NzM0NTM3ODRkNjQzZDNhNDE1MGYyZTYyMjhhZTZjEgsSBxD0pbCitAcYAZIBIwoKcHJvamVjdF9pZBIVQhMxMTI3ODA3NTk2NTkyNzk2Mjc4&filename=&opi=89354086"
};

Object.entries(urls).forEach(([key, url]) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const bgMatch = data.match(/background-image:\s*[^;]+;/);
      console.log(`--- ${key} ---`);
      if (bgMatch) {
         console.log(bgMatch[0]);
      } else {
         console.log("No background-image found");
      }
    });
  });
});
