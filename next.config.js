
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['f3ve4G5Q8WfUid6kmhfYQP'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  