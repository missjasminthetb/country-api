const main = document.querySelector("main");
axios("https://restcountries.com/v3.1/all")
.then (request => request.data)
.then(data => data.forEach(element => {
  createHtml(element)
}))
// console.log(data)


function createHtml(element) {
  const  {name,capital,population,region,flags} = element
  console.log(element)
  const {common} = name
  const {png} = flags
  const populationOf = document.createElement("li");
  populationOf.innerHTML = `Population: ${population}`;
  populationOf.setAttribute("class", "pop");

  const regionOf = document.createElement("li");
  regionOf.innerHTML = `Region: ${region}`;
  regionOf.setAttribute("class", "reg");

  const capitalName = document.createElement("li");
  capitalName.innerHTML = `Capital: ${capital}`;
  capitalName.setAttribute("class", "capital");

  const info = document.createElement("ul");
  info.setAttribute("class", "things");
  info.append(populationOf, regionOf, capitalName);

  const countryName = document.createElement("h3");
  countryName.innerHTML = `${common}`;

  const text = document.createElement("div");
  text.setAttribute("class", "details");
  text.append(countryName, info);

  const flagPic = document.createElement("img");
  flagPic.setAttribute("src", `${png}`);
  const container = document.createElement("div");
  container.setAttribute("class", "pic");
  container.append(flagPic);

  const card = document.createElement("section");
  card.setAttribute("class", "box");

  card.append(container, text);

  main.append(card);
}
// createHtml();
