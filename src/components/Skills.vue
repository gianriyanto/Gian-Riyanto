<template>
  <div id="Skills">
    <span class="header"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out">
      Skills.
    </span>
    <span v-for="skill in skills" :key="skill" class="skills-wrapper">
      <span class="sub-header"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
        {{ skill.skillType }}
      </span>
      <span class="skill-items"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
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
          skillType: "Web",
          skillItems: ['React', 'Vue', 'Vuex', 'Node', 'HTML', '(S)CSS', 'Node.js', 'Express']
        },
        {
          skillType: "Languages",
          skillItems: ['JavaScript', 'Python', 'Java']
        },
        {
          skillType: "Data",
          skillItems: ['MongoDB', 'SQL', 'NoSQL', 'Airflow', 'Pandas', 'NumPy', 'Scikit-learn']
        },
        {
          skillType: "Tools",
          skillItems: ['Git', 'Netlify', 'Confluence', 'Trello', 'JIRA', 'Jupyter Notebook']
        },
        {
          skillType: "Knowledge",
          skillItems: ['UI/UX Design', 'Agile/Scrum', 'Technology Consulting', 'Data Analytics', 'Machine Learning']
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
  font-family: "Bw Modelica Bold", serif;
  color: white;

  .header{
    font-size: 45px;
    margin-bottom: 20px;
    padding-left: 5px;
  }

  .skills-wrapper{
    display: flex;
    flex-direction: column;

    .sub-header{
      font-family: "Bw Modelica Light", serif;
      font-size: 14px;
      padding-left: 6px;
      margin-bottom: 10px;
      opacity: 0.7;
    }

    .skill-items{
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      font-family: "Bw Modelica Regular", serif;
      font-size: 13px;

      .item{
        border: 2px solid white;
        opacity: 1;
        border-radius: 17px;
        width: fit-content;
        padding: 7px 17px 7px 17px;
        margin-right: 12px;

        &:hover{
          color: #efeb6d;
          border: 1.9px solid #efeb6d;
          opacity: 0.7;
          transition: opacity 0.2s;
          box-shadow: 0 0 10px 2px #5b52ae;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Skills{
    border: thin solid lightseagreen;
    height: 100vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    padding: 0;

    font-family: "Bw Modelica Bold", serif;
    color: white;

    .header{
      font-size: 20px;
      margin-bottom: 20px;
      padding-left: 5px;
    }

    .skills-wrapper{
      display: inline-block;
      flex-direction: column;

      .sub-header{
        font-family: "Bw Modelica Light", serif;
        font-size: 14px;
        padding-left: 6px;
        margin-bottom: 10px;
        opacity: 0.7;
      }

      .skill-items{
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        font-family: "Bw Modelica Regular", serif;
        font-size: 10px;

        .item{
          border: thin solid white;
          opacity: 1;
          border-radius: 17px;
          width: fit-content;
          padding: 7px 17px 7px 17px;
          margin-right: 12px;

          &:hover{
            color: #efeb6d;
            border: 1.9px solid #efeb6d;
            opacity: 0.7;
            transition: opacity 0.2s;
            box-shadow: 0 0 10px 2px #5b52ae;
          }
        }
      }
    }
  }
}

</style>