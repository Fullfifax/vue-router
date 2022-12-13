<template>
    <div class="exp" v-for="experience in experiences">
        <h2>Experiences</h2>
        <h3>
            {{ experience.period }} {{ experience.year }}: {{ experience.occupation }} {{ experience.place }}
        </h3>
        <p>{{ experience.details }}</p>
        <div class="tech-used">
            <h4>Technologies used: </h4>
            <p v-for="tech in experience.technologies">
                {{ tech }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                { 
                    details: 'I was an internship who integrated customer web pages.', 
                    id: 1, 
                    occupation: 'Web developer', 
                    period: 'June - March',
                    place: 'TEKO',
                    technologies: ['HTML5', 'CSS3', 'Javascript', 'PHP', 'Prestashop', 'MySQL'],
                    year: 2022
                }
                /*
                { 
                    details: 'I will be an internship at Chingu.', 
                    id: 2, 
                    occupation: 'Web developer', 
                    period: 'January - February', 
                    place: 'Full-Remote',
                    technologies: [],
                    year: 2023
                } 
                */     
            ]
        }
    }
}
</script>

<style>
.tech-used {
    align-items: center;
    display: flex;
    margin: -1.2em 0;
}
.tech-used p {
    margin: 0 0.4em;
}
.exp {
    margin: 0 2em;
}
</style>