<template>
  <div id="Projects">
    <div class="header"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Projects.
    </div>
    <div class="project-items"
         data-aos="fade-left"
         data-aos-duration="800"
         data-aos-easing="ease-in-out">
        <div v-for="project in projects"
              :key="project"
              class="project"
              @click="selectProject(project)">
          <span :class="labelStyle(project)"
                @click="selectProject()"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
            {{ project.name }}
          </span>
          <span v-if="selectedProject.name === project.name"
                class="project-details"
                data-aos="fade-down"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out">
            {{ project.description }}
          </span>
          <span v-if="selectedProject.name === project.name"
                class="tech-wrapper"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out">
            <span v-for="tech in project.tech" class="tech" :key="tech">
              {{ tech }}
            </span>
          </span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
      selectedProject: '',
      projects: [
        {
          id: 0,
          name: "This Personal Website",
          description: "As you can see there isn't too much to fill in this portfolio. In all honesty, this project is just another reason for me to play around with VueJS and try out different UI/UX designs.",
          tech: ["Vue", "Vuex", "Node.js", "Netlify"]
        },
        {
          id: 1,
          name: "I OWE YOU",
          description: "Built and deployed a favours and debt tracking web application using MERN technology stack. " +
              "Worked primarily as a front-end developer - designed, developed and implemented the client-side application for which I received an honourable mention from the professor for its exceptional UI/UX design.\n" +
              "Here I aim to practice writing clean, maintainable, and well-designed code as well as project management practices to ensure efficient delivery of the product.",
          tech: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          id: 2,
          name: "Analytics Dashboard",
          description: "Developed a responsive analytics dashboard for users to manage, monitor, and analyse data at a glance. Worked on the front-end development designing \n" +
              "the dashboard interface and implementing various widgets including charts, bars, cards, and tables",
          tech: ["Vue", "Vuex", "Node.js", "Chart.js"]
        },
        {
          id: 3,
          name: "Team Chat App",
          description: "Developed a team communication and project management platform with a team of 15 developers using Agile methodology and scrum framework.",
          tech: ["React", "Node.js", "Firebase"]
        },
        {
          id: 4,
          name: "Supervised Learning Project",
          description: "Implemented a machine learning classification algorithm to predict target values in a dataset. Iteratively evaluated and optimised the data pipeline to improve \n" +
              "efficiency, accuracy and performance. I employed a range of data mining, exploration, and machine learning practices to optimally solve the data analytics problem",
          tech: ["Python", "Scikit-learn", "PyCharm", "Pandas", "NumPy", "Seaborn"]
        },
        {
          id: 5,
          name: "Automated Data Pipeline",
          description: "Developed a data pipeline framework to automate previously laborious multi-step tasks. Implemented Direct Acyclic Graphs to schedule and monitor workflows\n" +
              " for various data processes. I created a comprehensive technical documentation so that it can be maintained for further business use-cases and big-data requirements.",
          tech: ["Python", "PyCharm", "Airflow", "Google Cloud Platform"]
        },
      ]
    }
  },
  methods: {
    selectProject(project) {
      if (this.selectedProject === project) {
        this.selectedProject = '';
      }
      else {
        this.selectedProject = project;
      }
    },
    labelStyle(project) {
      return [(this.selectedProject === project) ? 'selected-project' : 'not-selected-project']
    }
  },
}
</script>

<style lang="scss" scoped>
#Projects{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 0 0 30px;
  width: 600px;

  .header {
    font-family: "Bw Modelica Regular", serif;
    font-size: 20px;
    margin-bottom: 30px;
    color: var(--bone);
    opacity: 0.7;
  }
  .project-items{
    display: flex;
    flex-direction: column;

    .project{
      display: flex;
      flex-direction: column;
      margin-bottom: 23px;
      font-family: "Bw Modelica Bold", serif;
      font-size: 42px;

      .selected-project{
        color: #fcdd56;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .not-selected-project{
        color: white;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover{
          color: #e3d077;
          transform: translateX(30px);
          transition: ease-out 0.4s;
        }
      }
      .project-details{
        font-family: "Bw Modelica Thin", serif;
        color: white;
        font-size: 17px;
        line-height: 1.7;
        height: fit-content;
        margin-bottom: 20px;
      }
      .tech-wrapper {
        flex-direction: row;
        display: inline-block;
        margin-bottom: 20px;

        .tech {
          font-family: "Bw Modelica Bold", serif;
          color: white;
          border: 1.6px solid white;
          opacity: 1;
          border-radius: 20px;
          font-size: 12px;
          width: fit-content;
          padding: 7px 16px 7px 16px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>