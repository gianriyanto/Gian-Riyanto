<template>
  <div id="Experience">
    <span class="header"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Experience.
    </span>
    <div class="experience-items"
         data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">
      <div v-for="experience in experiences"
           :key="experience"
           class="experience"
           @click="selectExperience(experience)">
        <span :class="labelStyle(experience)">
          {{ experience.position }}
        </span>
        <span v-if="selectExperience">
          <span v-if="selectedExperience.position === experience.position"
                class="experience-detail"
                data-aos="fade"
                data-aos-duration="900"
                data-aos-easing="ease-in-out">
            <span class="experience-company">{{ experience.company }} </span> <span class="experience-period"> {{ experience.period }} </span>
          </span>
          <span v-if="selectedExperience.position === experience.position"
                class="description-wrapper"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
              <ul v-for="description in experience.description" class="description" :key="description">
                <li> {{ description }} </li>
              </ul>
          </span>
        </span>
        <span v-else-if="!selectExperience">
          <!-- shows nothing when no project is selected -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      selectedExperience: '',
      experiences: [
        {
          id: 0,
          position: "Big Data Engineer",
          company: "LinkAja",
          period: "Dec 2019 - Mar 2020",
          description: [
            "Proposed and developed an automated data pipeline frameworks using Apache Airflow for improved efficiency and scalability.",
            "Implemented Direct Acyclic Graphs to schedule and monitor workflows - replacing previously manual and multi-step process.",
            "Implemented data infrastructure processes to monitor data quality, ensuring production data is accurate and available for key stakeholders and business processes.",
          ],
        },
        {
          id: 1,
          position: "SAP Junior Consultant",
          company: "Daya Dimensi Global | HR Path",
          period: "Nov 2018 - Jun 2019",
          description: [
            "Configured SAP SuccessFactors cloud systems by uncovering user pain-points, problems, and business process.",
            "Gathered, analysed and transformed client requirements into tailored solutions that based on Human Capital Management best practices.",
            "Planned, designed, and executed system integration testing to ensure the the product satisfies client's expectation.",
          ],
        },
        {
          id: 2,
          position: "Product and Sales Analyst",
          company: "EuroSoil",
          period: "Jun 2019 - Aug 2019",
          description: [
            "Conducted and prepared product and customer research analysis for Southeast Asian market expansion.",
            "Collaboratively delivered exceptional customer satisfaction through a well orchestrated end-to-end delivery of client Purchase Orders.",
            "Participated in client sales meetings and delivered customer service duties throughout business delivery process.",
          ],
        },
        {
          id: 3,
          position: "Programming Teacher Assistant",
          company: "CodeCamp",
          period: "Nov 2017 - Nov 2018",
          description: [
            "Reinforced lesson plans delivered by the head teacher by providing tailored support to students understanding programming concepts and skills",
            "Communicated technical concepts to students in a way that is easy to understand and digest."
          ],
        },
      ]
    }
  },
  methods: {
    selectExperience(experience) {
      if (this.selectedExperience === experience) {
        this.selectedExperience = '';
      }
      else {
        this.selectedExperience = experience;
      }
    },
    labelStyle(project) {
      return [(this.selectedExperience === project) ? 'selected-experience' : 'not-selected-experience']
    }
  }
}
</script>

<style lang="scss" scoped>
#Experience{
  display: flex;
  flex-direction: column;
  margin: auto;
  transform: translate(20px, 70px);
  width: 728px;

  .header {
    font-family: "Bw Modelica Regular", serif;
    font-size: 20px;
    color: var(--bone);
    opacity: 0.7;
    margin-bottom: 40px;
  }
  .experience-items {
    display: flex;
    flex-direction: column;

    .experience{
      display: flex;
      flex-direction: column;
      margin-bottom: 44px;
      font-family: "Bw Modelica Bold", serif;
      color: white;
      font-size: 54px;

      .selected-experience {
        color: #fcdd56;
        cursor: pointer;
        transition: all 0s, opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0.7;
          transition: ease-out 0.2s;
        }
      }

      .not-selected-experience {
      color: white;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        color: #eacd50;
        transform: translateX(30px);
        transition: ease-out 0.4s;
      }
      }

      .experience-detail{
        font-size: 20px;
        margin-bottom: 10px;

        .experience-company{
          color: #fcdd56;
          font-family: "Bw Modelica Bold", serif;
        }
        .experience-period{
          font-family: "Bw Modelica Hairline", serif;
        }
      }
      .description-wrapper{
        display: flex;
        flex-direction: column;

        .description {
          font-family: "Bw Modelica Regular", serif;
          font-size: 16px;
          line-height: 2;
        }
      }
    }
  }
  ul, li {
    margin: 0 0 0 -12px;
    padding: 0 0 0 -10px;
  }
}

@media only screen and (max-width: 768px) {
  #Experience{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: fit-content;
    width: 80vw;
    padding: 0;

    .header {
      font-family: "Bw Modelica Regular", serif;
      font-size: 20px;
      color: var(--bone);
      opacity: 0.7;
      margin-bottom: 40px;
    }
    .experience-items {
      display: flex;
      flex-direction: column;

      .experience{
        display: flex;
        flex-direction: column;
        margin-bottom: 44px;
        font-family: "Bw Modelica Bold", serif;
        color: white;
        font-size: 30px;
        width: 80vw;

        .selected-experience {
          color: #fcdd56;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .not-selected-experience {
          color: white;
          margin-bottom: 10px;
        }

        .experience-detail{
          width: 70vw;
          position: relative;
          font-size: 14px;
          margin-bottom: 15px;
          height: fit-content;
          display: flex;
          flex-direction: column;

          .experience-company{
            font-size: 18px;
            color: #fcdd56;
            font-family: "Bw Modelica Bold", serif;
          }
          .experience-period{
            font-size: 18px;
            font-family: "Bw Modelica Hairline", serif;
          }
        }
        .description-wrapper{
          display: flex;
          flex-direction: column;

          .description {
            font-family: "Bw Modelica Regular", serif;
            font-size: 14px;
            line-height: 2.2;
          }
        }
      }
    }
    ul, li {
      margin: 0 0 0 -12px;
      padding: 0 0 0 -10px;
    }
  }
}
</style>