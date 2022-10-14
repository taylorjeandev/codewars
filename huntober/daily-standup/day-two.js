// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

// str -> always lowercase, always a string, always a valid url
// console.log -> a str that is only the domain name
//example of this could be "github", or "replit" or "zapier"

function domainName(str) {
    let string = str.replace(/www./g, "").replace(/http/, "").replace("s", "").replace(/\//g, "").replace(':', "").split(".")
    return string[0]
is}
  
  
  
  console.log(domainName("http://github.com/carbonfive/raygun"))
  console.log(domainName("http://www.zombie-bites.com"))
  console.log(domainName("https://www.cnet.com"))