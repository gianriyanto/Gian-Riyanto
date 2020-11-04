<template>
  <div id="Projects">
    <span class="header"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Projects.
    </span>
    <span class="project-items"
         data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">
      <span v-for="project in projects" :key="project" class="project">
        {{ project.name }}
      </span>
    </span>
  </div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
      isModalVisible: false,
      modalData: null,
      projects: [
        {
          name: "This Personal Website",
          description: "",
          tech: ["Vue", "Vuex", "Node", "Netlify"]
        },
        {
          name: "I OWE YOU",
          description: "Built and deployed a favours and debt tracking web application using MERN technology stack.",
          tech: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          name: "Analytics Dashboard",
          description: "",
          tech: [""]
        },
        {
          name: "Chat App",
          description: "Developed a team communciation and project management platform using ReactJS, Node, and Firebase NoSQL database.",
          tech: ["React", "Node.js"]
        },
        {
          name: "Automated Data Pipeline",
          description: "",
          tech: [""]
        },
        {
          name: "Supervised Learning Project",
          description: "",
          tech: [""]
        }
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
#Projects{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 50px;
  width: 680px;

  .header {
    font-family: "Bw Modelica Regular", serif;
    font-size: 20px;
    margin-bottom: 25px;
    color: var(--bone);
    opacity: 0.7;
  }

  .project-items{
    display: flex;
    flex-direction: column;

    .project{
      font-family: "Bw Modelica Bold", serif;
      color: white;
      font-size: 45px;
      margin-bottom: 25px;
      cursor: pointer;

      &:hover {
        color: #efeb6d;
        transform: translateX(30px);
        transition: ease-out 0.4s;
      }
    }
  }
}
</style>