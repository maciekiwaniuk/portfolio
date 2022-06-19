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
import { ref } from '@vue/reactivity';

export default {
    name: 'Portfolio',
    setup() {
        let theme = ref('dark');

        const container = ref(null);

        const changeTheme = () => {
            if (theme.value == 'dark') {
                container.value.classList.remove('dark-theme');
                container.value.classList.add('light-theme');
                theme.value = 'light'
            } else {
                container.value.classList.remove('light-theme');
                container.value.classList.add('dark-theme');
                theme.value = 'dark'
            }
        }

        return { 
            container,
            theme,
            changeTheme 
        };
    }
}
</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';

#app {
    .container {
        min-height: 100vh;

        transition: background-color ease 1s,
                    color ease 1s;
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
