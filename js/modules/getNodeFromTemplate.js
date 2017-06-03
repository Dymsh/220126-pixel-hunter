const getNodeFromTemplate = (template) => {
  const tempContainer = document.createElement(`div`);
  tempContainer.innerHTML = template;
  return tempContainer;
};
/*
const getNodeFromTemplate = (template) => {
  const tempContainer = document.createElement(`template`);
  tempContainer.innerHTML = template;
  return tempContainer.content;
};
*/
export default getNodeFromTemplate;
