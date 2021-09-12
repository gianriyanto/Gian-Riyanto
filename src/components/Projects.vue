<template>
  <div id="Projects"
       data-aos="fade"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <div class="header">
      Projects.
    </div>
    <div class="project-items">
      <div class="project-column-0">
        <div v-for="project in projects[0]"
             :key="project"
             class="project"
             @click="selectProject(project)">
        <span :class="labelStyle(project)"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">
          {{ project.name }}
<!--          <span v-if="selectedProject.imageFile">-->
<!--            <a class="project-image" :href="`${publicPath}`+ project.imageFile" target="_blank">-->
<!--              <font-awesome-icon-->
<!--                  v-if="selectedProject.name === project.name"-->
<!--                  class="image"-->
<!--                  :icon="['fas', 'image']"-->
<!--                  data-aos="fade"-->
<!--                  data-aos-duration="1000"-->
<!--                  data-aos-easing="ease-in-out">-->
<!--              </font-awesome-icon>-->
<!--            </a>-->
<!--          </span>-->
        </span>
<!--          <span v-if="selectedProject" class="project-content"-->
<!--                data-aos="fade"-->
<!--                data-aos-duration="1000"-->
<!--                data-aos-easing="ease-in-out">-->
<!--          <span v-if="selectedProject.name === project.name"-->
<!--                class="project-details">-->
<!--            {{ project.description }}-->
<!--          </span>-->
<!--          <span v-if="selectedProject.name === project.name" class="tech-wrapper">-->
<!--            <span v-for="tech in project.tech" class="tech" :key="tech">-->
<!--              {{ tech }}-->
<!--            </span>-->
<!--            <font-awesome-icon-->
<!--                v-if="selectedProject.name === project.name"-->
<!--                class="project-link"-->
<!--                :icon="['fas', 'external-link-alt']"-->
<!--                v-on:click="goToSite(project.githubLink)">-->
<!--          </font-awesome-icon>-->
<!--          </span>-->
<!--        </span>-->
<!--          <span v-else-if="!selectedProject">-->
<!--          &lt;!&ndash; shows nothing when no project is selected &ndash;&gt;-->
<!--        </span>-->
        </div>
      </div>
      <div class="project-column-1">
        <div v-for="project in projects[1]"
           :key="project"
           class="project">
<!--           @click="selectProject(project)">-->
          <span :class="labelStyle(project)"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out">
            {{ project.name }}
<!--            <span v-if="selectedProject.imageFile">-->
<!--              <a class="project-image" :href="`${publicPath}`+ project.imageFile" target="_blank">-->
<!--                <font-awesome-icon-->
<!--                    v-if="selectedProject.name === project.name"-->
<!--                    class="image"-->
<!--                    :icon="['fas', 'image']"-->
<!--                    data-aos="fade"-->
<!--                    data-aos-duration="1000"-->
<!--                    data-aos-easing="ease-in-out">-->
<!--                </font-awesome-icon>-->
<!--              </a>-->
<!--            </span>-->
          </span>
<!--        <span v-if="selectedProject" class="project-content"-->
<!--              data-aos="fade"-->
<!--              data-aos-duration="1000"-->
<!--              data-aos-easing="ease-in-out">-->
<!--            <span v-if="selectedProject.name === project.name"-->
<!--                  class="project-details">-->
<!--              {{ project.description }}-->
<!--            </span>-->
<!--            <span v-if="selectedProject.name === project.name" class="tech-wrapper">-->
<!--              <span v-for="tech in project.tech" class="tech" :key="tech">-->
<!--                {{ tech }}-->
<!--              </span>-->
<!--              <font-awesome-icon-->
<!--                  v-if="selectedProject.name === project.name"-->
<!--                  class="project-link"-->
<!--                  :icon="['fas', 'external-link-alt']"-->
<!--                  v-on:click="goToSite(project.githubLink)">-->
<!--            </font-awesome-icon>-->
<!--            </span>-->
<!--          </span>-->
<!--        <span v-else-if="!selectedProject">-->
<!--            &lt;!&ndash; shows nothing when no project is selected &ndash;&gt;-->
<!--          </span>-->
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      selectedProject: '',
      projects: [
        [
          {
            id: 0,
            name: "Consultgianti.com",
            githubLink: "",
            description: "",
            tech: ["Vue", "Vuex", "npm", "Netlify"],
          },
          {
            id: 0,
            name: "Consultchen.com",
            githubLink: "",
            description: "",
            tech: ["Vue", "Vuex", "npm", "Netlify"],
          },
          {
            id: 0,
            name: "Aspectama Web App",
            githubLink: "",
            description: "",
            tech: ["Vue", "Vuex", "npm", "Netlify"],
          },
          {
            id: 0,
            name: "Interactive Login Page",
            githubLink: "",
            description: "",
            tech: ["Vue"],
          },
          {
            id: 1,
            name: "I OWE YOU",
            githubLink: "https://ioweyou.netlify.app/",
            description: "Built and deployed a favours-tracking web application with a MERN stack. " +
                "Designed, developed and implemented the client-side application for which the product received an honourable mention for its UI/UX design.\n" +
                "Here I learnt developing clean, maintainable, and well-designed code, as well as practiced effective product management to ensure efficient delivery of product. (Unfortunately, this website is not yet mobile responsive)",
            tech: ["React.js", "Node.js", "MongoDB", "Express"],
            imageFile: "I-OWE-YOU.pdf",
          },
        ],
        [
          {
            id: 0,
            name: "This Personal Website",
            githubLink: "https://github.com/gianriyanto/Gian-Riyanto",
            description: "Building this personal website was just another reason for me to learn Vue.js and explore with some UI/UX designs I had in mind. \n" +
                "I'm always looking at ways to translate my designs into code, all whilst tinkering with new technologies.",
            tech: ["Vue", "Vuex", "npm", "Netlify"],
          },
          {
            id: 3,
            name: "Team Chat Platform",
            githubLink: "https://github.com/davidbr4gg/teams-ui",
            description: "Developed a team communication and project management platform where users can create group and subgroup chat channels. Collaborated with a team of 15 people following the agile methodology and scrum framework practices",
            tech: ["React.js", "Node.js", "Firebase"],
          },
          {
            id: 0,
            name: "Cryptocurrency Dashboard",
            githubLink: "",
            description: "",
            tech: ["Vue", "Vuex", "npm"],
          },
          {
            id: 2,
            name: "Analytics Dashboard",
            githubLink: "https://github.com/davidbr4gg/analytic_dashboard",
            description: "Developed a responsive analytics dashboard for users to manage, monitor, and analyse data at a glance. Worked as a front-end developer designing \n" +
                "the dashboard interface and implementing various dynamic widgets such as line charts, bar charts, statistical cards, and tables.",
            tech: ["Vue", "Vuex", "Node.js", "Chart.js"],
            imageFile: "AnalyticsDashboard.pdf",
          },
          {
            id: 4,
            name: "Supervised Learning Project",
            githubLink: "https://github.com/gianriyanto/supervised-learning-project",
            description: "Implemented a machine learning classification algorithm to predict target values in a dataset. Iteratively evaluated and optimised the data pipeline to improve \n" +
                "efficiency, accuracy and performance. I employed a range of data mining, exploration, and machine learning practices to optimally solve the data analytics problem.",
            tech: ["Python", "Scikit-learn", "PyCharm", "Pandas", "NumPy"],
          },
        ]
      ],
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
    labelStyle() {
      return 'not-selected-project'
      // return [(this.selectedProject === project) ? 'selected-project' : 'not-selected-project']
    },
    goToSite(url) {
        window.open(url, '_blank');
    },
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #Projects {
    display: flex;
    flex-direction: column;
    margin: auto;
    transform: translate(40px, -10px);

    .header {
      font-family: "Bw Modelica Bold", serif;
      font-size: 20px;
      margin-bottom: 40px;
      color: #b3b3b3;
    }

    .project-items {
      display: flex;
      flex-direction: row;

      .project-column-0, .project-column-1 {
        display: flex;
        flex-direction: column;
        width: 35vw;
      }

      .project {
        display: flex;
        flex-direction: column;
        margin-bottom: 4.3vh;
        letter-spacing: -1px;
        font-family: "Bw Modelica Bold", serif;
        font-size: 2.5vw;
        width: 43vw;

        .selected-project {
          color: #404040;
          cursor: pointer;
          margin-bottom: 15px;
          transition: all 0s, opacity 0.3s ease-in-out;
        }

        .not-selected-project {
          color: #1f1f1f;
          cursor: pointer;
          transition: all .35s ease-in-out;

          &:hover {
            color: #404040;
            transform: translateX(15px);
            transition: ease-out 0.2s;
          }
        }

        .project-image {
          margin-left: 10px;
          position: absolute;
          font-size: 1em;
          transition: all .35s ease-in-out;
          color: #404040;

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
            color: #1f1f1f;
            font-size: 12px;
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
              color: #404040;
              border: thin solid #404040;
              opacity: 1;
              border-radius: 20px;
              font-size: 11px;
              width: fit-content;
              padding: 5px 13px;
              margin-right: 12px;
            }

            .project-link {
              color: #404040;
              margin-left: 5px;
              position: sticky;
              font-size: 0.5em;
              transition: all .35s ease-in-out;

              &:hover {
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }

}
a {
  color: #1f1f1f;
  a:visited {
    text-decoration: none;
    color: #1f1f1f;
  }
}

@media only screen and (max-width: 768px) {

  #Projects{
    display: none;
    flex-direction: column;
    transform: translate(15vw, 0);
    margin: 0 auto 0 auto;
    width: 70vw;
    margin-left: 0 !important;
    padding: 0;

    .header {
      font-family: "Bw Modelica Bold", serif;
      font-size: 20px;
      color: #7e7e7e;
      opacity: 0.7;
      margin-bottom: 50px;
    }
    .project-items{
      display: flex;
      flex-direction: column;

      .project{
        display: flex;
        flex-direction: column;
        margin-bottom: 3vh;
        font-family: "Bw Modelica Bold", serif;
        font-size: 26px;
        letter-spacing: -1px;
        width: 70vw;

        .selected-project{
          color: #1f1f1f;
          margin-bottom: 15px;
          width: 70vw;
        }
        .not-selected-project{
          color: #1f1f1f;
          margin-bottom: 10px;

          &:hover {
            transform: translateX(0);
          }
        }
        .project-image{
          margin-left: 10px;
          position: absolute;
          font-size: 1em;
          color: #1f1f1f;
        }
        .project-content {
          width: 70vw;
          position: sticky;
          height: fit-content;
          display: flex;
          flex-direction: column;

          .project-details {
            font-family: "Bw Modelica Light", serif;
            color: #1f1f1f;
            font-size: 14px;
            line-height: 1.9;
            height: fit-content;
            margin-bottom: 12px;
          }

          .tech-wrapper {
            display: block;
            clear: both;
            font-family: "Bw Modelica Regular", serif;
            font-size: 11px;
            line-height: 4.2;

            .tech {
              font-family: "Bw Modelica Regular", serif;
              color: #1f1f1f;
              border: thin solid #1f1f1f;
              opacity: 1;
              border-radius: 20px;
              font-size: 11px;
              width: 70vw;;
              padding: 7px 14px;
              margin-right: 12px;
            }
            .project-link {
              color: #1f1f1f;
              margin-left: 5px;
              position: sticky;
              font-size: 2em;
            }
          }
        }
      }
    }
  }
}
</style>