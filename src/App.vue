<template>
    <div 
        ref="container"
        class="container"
        :class="{ 'dark-theme' : theme == 'dark',
                  'light-theme' : theme == 'light' }"
    >
        <h1>Hello, I am Maciek</h1>
        <h2>Software developer</h2>
        <button @click="changeTheme();">Theme switch</button>
    </div>
    
</template>

<script>

export default {
    name: 'Portfolio',
    components: {

    },
    data() {
        return {
            theme: 'dark'
        }
    },
    methods: {
        changeTheme() {
            if (this.theme == 'dark') {
                this.$refs.container.classList.remove('dark-theme');
                this.$refs.container.classList.add('light-theme');
                this.theme = 'light';
            } else {
                this.$refs.container.classList.remove('light-theme');
                this.$refs.container.classList.add('dark-theme');
                this.theme = 'dark';
            }
        }
    }
}
</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';

#app {
    .container {
        min-height: 100vh;
    }

    .dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];
    }
        
    .light-theme {
        background-color: #light[background-color];
        color: #light[text-color];
    }
        
}
</style>
