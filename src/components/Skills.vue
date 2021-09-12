<template>
  <div id="Skills"
       data-aos="fade"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <div class="wrapper">
      <span class="header">
      Skills.
    </span>
      <span class="skills-container">
      <span class="row">
        <span v-for="skill in skillsIndex1" :key="skill" class="skills-wrapper">
          <span class="sub-header">
            {{ skill.skillType }}
          </span>
          <span class="skill-items">
          <span v-for="item in skill.skillItems" class="item" :key="item">
            {{ item }}
          </span>
        </span>
        </span>
      </span>
      <span class="row">
        <span v-for="skill in skillsIndex2" :key="skill" class="skills-wrapper">
          <span class="sub-header">
            {{ skill.skillType }}
          </span>
          <span class="skill-items">
            <span v-for="item in skill.skillItems" class="item" :key="item">
              {{ item }}
            </span>
          </span>
        </span>
      </span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillsIndex1: [
        {
          skillType: "Technologies",
          skillItems: ['JavaScript', 'Python', 'Java', 'React', 'React Hooks', 'Vue', 'Vuex', 'HTML', '(S)CSS', 'Git', 'PyTest', 'Flask', 'FastAPI', 'Peewee', 'NPM', 'REST']
        },
        {
          skillType: "Data",
          skillItems: ['Postgres', 'MySQL', 'Database Design', 'ORM', 'SQL', 'NoSQL', 'MongoDB', 'Airflow', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning']
        }
      ],
      skillsIndex2: [
        {
          skillType: "Knowledge",
          skillItems: ['Domain Driven Design', 'Microservice', 'Object Oriented Design', 'SOLID', 'Test Driven Development', 'System Design', 'UI/UX Design', 'Agile Development', 'Observability', 'Technical Documentation', 'Testing', 'Debugging', 'Feature Flags']
        },
        {
          skillType: "Tools",
          skillItems: ['Amazon Web Services', 'Kubernetes', 'LaunchDarkly', 'HoneyComb', 'Github', 'Figma', 'Netlify', 'JIRA', 'Google Cloud Platform', 'Confluence', 'Jupyter', 'Postman', 'CI Concourse']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Skills {
    display: flex;
    flex-direction: column;
    margin: auto;
    transform: translate(40px, -20px);
    color: #1f1f1f;

    .wrapper{
      display: flex;
      flex-direction: column;
      width: 78%;
      margin: auto;

      .header {
        font-family: "Bw Modelica Bold", serif;
        font-size: 20px;
        color: #b3b3b3;
        margin-bottom: 20px;
      }

      .skills-container{
        display: flex;
        flex-direction: column;

        .row{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 13px;

          .skills-wrapper {
            display: flex;
            flex-direction: column;
            width: 49%;

            .sub-header {
              font-family: "Bw Modelica Bold", serif;
              color: #1f1f1f;
              letter-spacing: -1px;
              font-size: 28px;
              padding-left: 0;
              margin-bottom: 2vh;
              opacity: 1;
            }

            .skill-items {
              display: flex;
              //flex-direction: row;
              margin-bottom: 3vh;
              flex-wrap: wrap;
              font-family: "Bw Modelica Bold", serif;
              font-size: 12px;

              .item {
                border: thin solid #1f1f1f;
                //background-color: #1f1f1f;
                opacity: 1;
                border-radius: 20px;
                width: fit-content;
                padding: 8px 1.1vw;
                margin-right: 12px;
                margin-bottom: 15px;
                transition: ease-in-out 0.3s;

                &:hover {
                  color: white;
                  background-color: #1f1f1f;
                  border: thin solid #404040;
                  opacity: 0.7;
                  transition: ease-in-out 0.3s;
                }
              }
            }
          }
        }
      }

    }
  }
}

@media only screen and (max-width: 768px) {
  #Skills{
    margin: 0 auto;
    height: fit-content;
    width: 70vw;
    display: flex;
    flex-direction: column;
    color: #1f1f1f;

    .wrapper{
      display: flex;
      flex-direction: column;

      .header{
        font-family: "Bw Modelica Bold", serif;
        font-size: 20px;
        color: #7e7e7e;
        opacity: 0.7;
        margin-bottom: 50px;
      }

      .skills-container{
        display: flex;
        flex-direction: column;

        .row{
          display: flex;
          flex-direction: column;

          .skills-wrapper {
            display: flex;
            flex-direction: column;

            .sub-header {
              font-family: "Bw Modelica Bold", serif;
              color: #1f1f1f;
              letter-spacing: -1px;
              font-size: 28px;
              padding-left: 0;
              margin-bottom: 2vh;
              opacity: 1;
            }

            .skill-items {
              display: flex;
              margin-bottom: 3vh;
              flex-wrap: wrap;
              font-family: "Bw Modelica Bold", serif;
              font-size: 11px;
              color: #1f1f1f;

              .item {
                border: thin solid #1f1f1f;
                opacity: 1;
                border-radius: 20px;
                width: fit-content;
                padding: 8px 3.6vw;
                margin-right: 8px;
                margin-bottom: 12px;
              }
            }
          }
        }
      }
    }

  }
}

</style>