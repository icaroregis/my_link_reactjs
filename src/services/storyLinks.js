export async function getLinkSalve(key) {
  const myLinks = await localStorage.getItem(key);
  let linksSaves = JSON.parse(myLinks) || [];
  return linksSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinkSalve(key);
  const hasLink = linksStored.some((item) => {
    return item.id === newLink.id;
  });

  if (hasLink) {
    console.log('Esse link já existe');
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
  return myLinks;
}
