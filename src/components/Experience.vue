<template>
  <div id="Experience"
       data-aos="fade"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <div class="header">
      Experience.
    </div>
    <div class="experience-items">
      <div class="experience-column-0">
        <div v-for="experience in experiences[0]"
             :key="experience"
             class="experience"
             @click="selectExperience(experience)">
          <span :class="labelStyle(experience)">
            {{ experience.position }}
          </span>
          <span class="experience-content">
            <span class="experience-detail">
              <span class="experience-company">{{ experience.company }} </span> <span class="experience-period"> {{ experience.period }} </span>
            </span>
          </span>
<!--          <span v-if="selectExperience" class="experience-content">-->
<!--          <span v-if="selectedExperience.position === experience.position"-->
<!--                class="experience-detail"-->
<!--                data-aos="fade"-->
<!--                data-aos-duration="900"-->
<!--                data-aos-easing="ease-in-out">-->
<!--            <span class="experience-company">{{ experience.company }} </span> <span class="experience-period"> {{ experience.period }} </span>-->
<!--          </span>-->
<!--          <span v-if="selectedExperience.position === experience.position"-->
<!--                class="description-wrapper"-->
<!--                data-aos="fade"-->
<!--                data-aos-duration="1000"-->
<!--                data-aos-easing="ease-in-out">-->
<!--              <ul class="description">-->
<!--                <li v-for="description in experience.description" :key="description"> {{ description }} </li>-->
<!--              </ul>-->
<!--          </span>-->
<!--        </span>-->
<!--          <span v-else-if="!selectExperience">-->
          <!-- shows nothing when no project is selected -->
<!--        </span>-->
        </div>
      </div>
      <div class="experience-column-1">
        <div v-for="experience in experiences[1]"
           :key="experience"
           class="experience"
           @click="selectExperience(experience)">
        <span :class="labelStyle(experience)">
          {{ experience.position }}
        </span>
        <span class="experience-content">
          <span class="experience-detail">
            <span class="experience-company">{{ experience.company }} </span> <span class="experience-period"> {{ experience.period }} </span>
          </span>
        </span>
<!--        <span v-if="selectExperience" class="experience-content">-->
<!--          <span v-if="selectedExperience.position === experience.position"-->
<!--                class="experience-detail"-->
<!--                data-aos="fade"-->
<!--                data-aos-duration="900"-->
<!--                data-aos-easing="ease-in-out">-->
<!--            <span class="experience-company">{{ experience.company }} </span> <span class="experience-period"> {{ experience.period }} </span>-->
<!--          </span>-->
<!--          <span v-if="selectedExperience.position === experience.position"-->
<!--                class="description-wrapper"-->
<!--                data-aos="fade"-->
<!--                data-aos-duration="1000"-->
<!--                data-aos-easing="ease-in-out">-->
<!--              <ul class="description">-->
<!--                <li v-for="description in experience.description" :key="description"> {{ description }} </li>-->
<!--              </ul>-->
<!--          </span>-->
<!--        </span>-->
<!--        <span v-else-if="!selectExperience">-->
<!--          &lt;!&ndash; shows nothing when no project is selected &ndash;&gt;-->
<!--        </span>-->
      </div>
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
        [
          {
            position: "Software Engineer",
            company: "HelloFresh",
            period: "Jan 2021 - Present",
            description: [],
          },
          {
            position: "Web Developer",
            company: "Freelance",
            period: "Oct 2020 - Jul 2021",
            description: [],
          },
          {
            position: "Software Engineer",
            company: "LinkAja",
            period: "Dec 2019 - Mar 2020",
            description: [
              "Proposed and developed an automated data pipeline frameworks using Apache Airflow to orchestrate big-data processes, improving overall efficiency and scalability.",
              "Implemented Direct Acyclic Graphs to schedule and monitor workflows - replacing previously manual and multi-step process.",
              "Implemented data infrastructure processes to monitor data quality, ensuring production data is accurate and available for key stakeholders and business processes.",
            ],
          }
        ],
        [
          {
            position: "Technology Consultant",
            company: "HR Path",
            period: "Nov 2018 - Jun 2019",
            description: [
              "Configured SAP SuccessFactors cloud systems by uncovering user pain-points, problems, and business process.",
              "Gathered, analysed and transformed client requirements into tailored solutions that based on Human Capital Management best practices.",
              "Planned, designed, and executed system integration testing to ensure the the product satisfies client's expectation.",
            ],
          },
          {
            position: "Product Analyst",
            company: "EuroSoil",
            period: "Jun 2019 - Aug 2019",
            description: [
              "Conducted and presented product and customer research analysis to support Southeast Asian market expansion.",
              "Delivered end-to-end process of client Purchase Orders, ensuring a high-quality customer experience",
              "Prepared, participated, and consulted in client meetings to gather product needs and requirements",
            ],
          },
          {
            position: "Programming Teacher Assistant",
            company: "CodeCamp",
            period: "Nov 2017 - Nov 2018",
            description: [
              "Reinforced lesson plans delivered by the head teacher by providing tailored support to students understanding programming concepts and skills",
              "Communicated technical concepts to students in a way that is easy to understand and digest."
            ],
          },
        ],
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
  transform: translate(30px, 50px);

  .header {
    font-family: "Bw Modelica Bold", serif;
    font-size: 20px;
    margin-bottom: 40px;
    color: #b3b3b3;
  }
  .experience-items {
    display: flex;
    flex-direction: row;

    .experience-column-0 .experience-column-1{
      display: flex;
      width: 30%;
      flex-direction: column;
    }

    .experience{
      display: flex;
      flex-direction: column;
      margin-bottom: 4vh;
      font-family: "Bw Modelica Bold", serif;
      color: #1f1f1f;
      font-size: 2.6vw;
      width: 37vw;

      .selected-experience {
        color: #404040;
        cursor: pointer;
        transition: all 0s, opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0.7;
          transition: ease-out 0.2s;
        }
      }

      .not-selected-experience {
        color: #1f1f1f;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
          color: #404040;
          transform: translateX(5px);
          transition: ease-out 0.2s;
        }
      }

      .experience-content {
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        .experience-detail{
          font-size: 18px;
          margin-bottom: 10px;

          .experience-company{
            color: #929292;
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
            font-size: 12px;
            line-height: 1.9;
          }
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
    min-height: 100vh;
    height: fit-content;
    transform: translate(0,0);
    width: 70vw;
    margin: 0 auto 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;

    .header {
      font-family: "Bw Modelica Bold", serif;
      font-size: 20px;
      color: #7e7e7e;
      opacity: 0.7;
      margin-bottom: 50px;
    }
    .experience-items {
      display: flex;
      flex-direction: column;
      max-width: 70vw;

      .experience{
        display: flex;
        flex-direction: column;
        margin-bottom: 5vh;
        font-family: "Bw Modelica Bold", serif;
        font-size: 32px;
        width: 70vw;

        .selected-experience {
          color: #404040;
          margin-bottom: 20px;
          width: 70vw;
        }

        .not-selected-experience {
          width: 70vw;
          color: #404040;
          margin-bottom: 10px;

          &:hover {
            transform: translateX(0);
          }
        }

        .experience-content{
          width: 70vw;
          position: sticky;
          height: fit-content;
          display: flex;
          flex-direction: column;

          .experience-detail{
            width: 70vw;
            height: fit-content;
            margin-bottom: 15px;
            display: flex;
            flex-direction: row;

            .experience-company{
              font-size: 16px;
              color: #404040;
              font-family: "Bw Modelica Bold", serif;
              margin-right: 5px;
            }
            .experience-period{
              font-size: 16px;
              font-family: "Bw Modelica Hairline", serif;
            }
          }
          .description-wrapper{
            display: flex;
            flex-direction: column;
            width: 70vw;

            .description {
              font-family: "Bw Modelica Regular", serif;
              font-size: 14px;
              line-height: 2.2;
            }
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