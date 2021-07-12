<template>
  <div id="Skills"
       data-aos="fade"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <span class="header">
      Skills.
    </span>
    <span v-for="skill in skills" :key="skill" class="skills-wrapper">
      <span class="sub-header">
        {{ skill.skillType }}
      </span>
      <span class="skill-items">
        <span v-for="item in skill.skillItems" class="item" :key="item">
          {{ item }}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          skillType: "Languages",
          skillItems: ['JavaScript', 'Python', 'Java']
        },
        {
          skillType: "Web",
          skillItems: ['React', 'Vue', 'Vuex', 'Flask', 'Fast API', 'HTML', '(S)CSS', 'Express']
        },
        {
          skillType: "Data",
          skillItems: ['Postgres', 'MongoDB', 'SQL', 'NoSQL', 'Airflow', 'Pandas', 'NumPy', 'Scikit-learn']
        },
        {
          skillType: "Tools",
          skillItems: ['Google Cloud Platform', 'Postman', 'AWS', 'Git', 'Github', 'Figma', 'Netlify', 'Confluence', 'Trello', 'JIRA', 'Confluence', 'Jupyter']
        },
        {
          skillType: "Knowledge",
          skillItems: ['Domain Driven Design', 'Microservices', 'UI/UX Design', 'Agile/Scrum', 'Technology Consulting', 'Data Analytics', 'Machine Learning']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#Skills{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 70px 0 0 40px;
  color: #1f1f1f;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 20px;
    color: #b3b3b3;
    margin-bottom: 30px;
  }

  .skills-wrapper{
    display: flex;
    flex-direction: column;

    .sub-header{
      font-family: "Bw Modelica Bold", serif;
      color: #404040;
      font-size: 13px;
      padding-left: 0;
      margin-bottom: 2vh;
      opacity: 1;
    }

    .skill-items{
      display: flex;
      flex-direction: row;
      margin-bottom: 3vh;
      font-family: "Bw Modelica Regular", serif;
      font-size: 12px;

      .item{
        border: thin solid #1f1f1f;
        opacity: 1;
        border-radius: 20px;
        width: fit-content;
        padding: 7px 1vw;
        margin-right: 12px;

        &:hover{
          color: #404040;
          border: thin solid #404040;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Skills{
    height: fit-content;
    width: 70vw;
    display: flex;
    flex-direction: column;
    padding: 0;
    color: #1f1f1f;

    .header{
      font-family: "Bw Modelica Bold", serif;
      font-size: 20px;
      color: #7e7e7e;
      opacity: 0.7;
      margin-bottom: 50px;
    }

    .skills-wrapper{
      display: flex;
      flex-direction: column;

      .sub-header{
        font-family: "Bw Modelica Bold", serif;
        font-size: 19px;
        margin-bottom: 8px;
        opacity: 0.7;
        color: #404040;
        padding: 0;
      }

      .skill-items{
        display: inline;
        margin-bottom: 30px;
        font-family: "Bw Modelica Regular", serif;
        font-size: 11px;
        line-height: 4.5;
        width: 73vw;

        .item{
          border: thin solid #404040;
          opacity: 1;
          border-radius: 17px;
          width: fit-content;
          padding: 8px 17px;
          margin-right: 12px;

        }
      }
    }
  }
}

</style>