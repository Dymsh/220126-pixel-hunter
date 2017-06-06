const getNodeFromTemplate = (template) => {
  const tempContainer = document.createElement(`div`);
  tempContainer.innerHTML = template;
  return tempContainer;
};

export default getNodeFromTemplate;
