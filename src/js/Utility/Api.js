const getStories = (actions) => {
  fetch(`/api${window.location.pathname}`)
    .then((response) => response.json())
    .then((response) => {
      actions.setStoryTags(response);
      actions.setStoryAction(response);
    });
};

export default getStories;
