const getNodeFromTemplate = (template) => {
  const tempContainer = document.createElement(`template`);
  tempContainer.innerHTML = template;
  return tempContainer.content;
};

export default getNodeFromTemplate;
