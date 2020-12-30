<template>
  <div id="Skills">
    <span class="header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Skills.
    </span>
    <span v-for="skill in skills" :key="skill" class="skills-wrapper">
      <span class="sub-header"
            data-aos="fade"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out">
        {{ skill.skillType }}
      </span>
      <span class="skill-items"
            data-aos="fade"
            data-aos-duration="1500"
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
          skillItems: ['React', 'Vue', 'Vuex', 'Node.js', 'HTML', '(S)CSS', 'Node.js', 'Express']
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
          skillItems: ['Git', 'Netlify', 'Confluence', 'Trello', 'JIRA', 'Jupyter']
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
  color: white;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 40px;
    margin-bottom: 20px;
    padding-left: 5px;
  }

  .skills-wrapper{
    display: flex;
    flex-direction: column;

    .sub-header{
      font-family: "Bw Modelica Regular", serif;
      color: #eacd50;
      font-size: 15px;
      padding-left: 6px;
      margin-bottom: 1vh;
      opacity: 1;
    }

    .skill-items{
      display: flex;
      flex-direction: row;
      margin-bottom: 4vh;
      font-family: "Bw Modelica Regular", serif;
      font-size: 13px;

      .item{
        border: 1.9px solid white;
        opacity: 1;
        border-radius: 20px;
        width: fit-content;
        padding: 7px 1vw;
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
    height: fit-content;
    width: 70vw;
    display: flex;
    flex-direction: column;
    padding: 0;
    color: white;

    .header{
      font-size: 20px;
      margin-bottom: 30px;
      padding: 0;
      color: var(--bone);
      opacity: 0.7;
      font-family: "Bw Modelica Regular", serif;
    }

    .skills-wrapper{
      display: flex;
      flex-direction: column;

      .sub-header{
        font-family: "Bw Modelica Bold", serif;
        font-size: 19px;
        margin-bottom: 8px;
        opacity: 0.7;
        color: #fcdd56;
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
          border: thin solid white;
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