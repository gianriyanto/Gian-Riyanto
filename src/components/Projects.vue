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
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
            {{ project.name }}
            <font-awesome-icon
                v-if="selectedProject.name === project.name"
                class="project-link"
                :icon="['fas', 'external-link-alt']"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                v-on:click="goToSite(project.link)">
            </font-awesome-icon>
          </span>
          <span v-if="selectedProject" class="project-content">
            <span v-if="selectedProject.name === project.name"
                  class="project-details"
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
              {{ project.description }}
            </span>
            <span v-if="selectedProject.name === project.name"
                  class="tech-wrapper"
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out">
              <span v-for="tech in project.tech" class="tech" :key="tech">
                {{ tech }}
              </span>
            </span>
          </span>
          <span v-else-if="!selectedProject">
            <!-- shows nothing when no project is selected -->
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
          link: "https://github.com/gianriyanto/Gian-Riyanto",
          description: "As you can see there isn't too much to fill in this portfolio. In all honesty, building this personal website is just another reason for me to play around with Vue.js and explore different UI/UX designs.",
          tech: ["Vue", "Vuex", "Node.js", "Netlify"]
        },
        {
          id: 1,
          name: "I OWE YOU",
          link: "https://ioweyou.netlify.app/",
          description: "Built and deployed a favours-tracking web application with a MERN stack. " +
              "Worked primarily as a front-end developer - designed, developed and implemented the client-side application for which the product received an honourable mention for its UI/UX design.\n" +
              "Here I learnt developing clean, maintainable, and well-designed code, as well as practiced effective product management skills to ensure optimal delivery of the web app.",
          tech: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          id: 2,
          name: "Analytics Dashboard",
          link: "https://github.com/davidbr4gg/analytic_dashboard",
          description: "Developed a responsive analytics dashboard for users to manage, monitor, and analyse data at a glance. Worked on the front-end development designing \n" +
              "the dashboard interface and implementing various widgets including charts, bars, cards, and tables.",
          tech: ["Vue", "Vuex", "Node.js", "Chart.js"]
        },
        {
          id: 3,
          name: "Team Chat App",
          link: "",
          description: "Developed a team communication and project management platform with a team of 15 developers using Agile methodology and scrum framework.",
          tech: ["React", "Node.js", "Firebase"]
        },
        {
          id: 4,
          name: "Supervised Learning Project",
          link: "https://github.com/gianriyanto/supervised-learning-project",
          description: "Implemented a machine learning classification algorithm to predict target values in a dataset. Iteratively evaluated and optimised the data pipeline to improve \n" +
              "efficiency, accuracy and performance. I employed a range of data mining, exploration, and machine learning practices to optimally solve the data analytics problem.",
          tech: ["Python", "Scikit-learn", "PyCharm", "Pandas", "NumPy", "Seaborn"]
        },
        {
          id: 5,
          name: "Automated Data Pipeline",
          link: "https://github.com/gianriyanto/Automated-Data-Pipeline",
          description: "Developed a data pipeline framework to automate previously laborious multi-step tasks. Programatically authored an implementation of Direct Acyclic Graphs to monitor and orchestrate workflows\n" +
              " for various big-data processes that is currently still maintained for expanding business use-cases. ",
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
    },
    goToSite(url) {
        window.open(url, '_blank');
    },
  }
}
</script>

<style lang="scss" scoped>

#Projects{
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 765px;
  transform: translate(60px, 60px);

  .header {
    font-family: "Bw Modelica Regular", serif;
    font-size: 20px;
    margin-bottom: 40px;
    color: var(--bone);
    opacity: 0.7;
  }
  .project-items{
    display: flex;
    flex-direction: column;

    .project{
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      font-family: "Bw Modelica Bold", serif;
      font-size: 48px;

      .selected-project{
        color: #fcdd56;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .not-selected-project{
        color: white;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all .35s ease-in-out;

        &:hover{
          color: #e3d077;
          transform: translateX(30px);
          transition: ease-out 0.35s;
        }
      }
      .project-link{
        margin-left: 20px;
        position: absolute;
        font-size: 1em;
        transition: all .35s ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }
      .project-content {
        position: relative;
        display: flex;
        flex-direction: column;

        .project-details {
          font-family: "Bw Modelica Light", serif;
          color: white;
          font-size: 16px;
          line-height: 1.9;
          height: fit-content;
          margin-bottom: 15px;
        }

        .tech-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;

          .tech {
            font-family: "Bw Modelica Regular", serif;
            color: #fcdd56;
            border: 2px solid #fcdd56;
            opacity: 1;
            border-radius: 20px;
            font-size: 12px;
            width: fit-content;
            padding: 8px 17px;
            margin-right: 12px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Projects{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75vw;
    padding: 0;
    margin: auto 0 auto 0;

    .header {
      font-family: "Bw Modelica Regular", serif;
      font-size: 20px;
      margin-bottom: 40px;
      color: var(--bone);
      opacity: 0.7;
    }
    .project-items{
      display: flex;
      flex-direction: column;

      .project{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        font-family: "Bw Modelica Bold", serif;
        font-size: 27px;

        .selected-project{
          color: #fcdd56;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .not-selected-project{
          color: white;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .project-link{
          margin-left: 20px;
          position: absolute;
          font-size: 1em;

          &:hover {
            opacity: 0.5;
          }
        }
        .project-content {
          position: relative;
          display: flex;
          flex-direction: column;

          .project-details {
            font-family: "Bw Modelica Light", serif;
            color: white;
            font-size: 16px;
            line-height: 1.9;
            height: fit-content;
            margin-bottom: 15px;
          }

          .tech-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;

            .tech {
              font-family: "Bw Modelica Regular", serif;
              color: #fcdd56;
              border: 2px solid #fcdd56;
              opacity: 1;
              border-radius: 20px;
              font-size: 12px;
              width: fit-content;
              padding: 8px 17px;
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
}
</style>