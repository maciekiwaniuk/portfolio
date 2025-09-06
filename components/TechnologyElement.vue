<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';
import type { TechnologyType } from '~/types/TechnologyType';

const props = defineProps<{
    element: keyof TechnologiesType;
}>();

const themeStore = useThemeStore();

type TechnologyConfigType = {
    title?: string;
    titleKey?: string;
    icon: string;
    width: number;
};
type TechnologiesType = {
    [key in TechnologyType]: TechnologyConfigType;
};

const technologies: TechnologiesType = {
    php: {
        title: 'PHP',
        icon: 'logos:php',
        width: 30,
    },
    laravel: {
        title: 'Laravel',
        icon: 'logos:laravel',
        width: 35,
    },
    javascript: {
        title: 'JavaScript',
        icon: 'skill-icons:javascript',
        width: 32,
    },
    jquery: {
        title: 'jQuery',
        icon: 'mdi:jquery',
        width: 33,
    },
    sass: {
        title: 'Sass',
        icon: 'vscode-icons:file-type-sass',
        width: 41,
    },
    less: {
        title: 'less',
        icon: 'logos:less',
        width: 23,
    },
    bootstrap: {
        title: 'Bootstrap',
        icon: 'akar-icons:bootstrap-fill',
        width: 37,
    },
    mysql: {
        title: 'MySQL',
        icon: 'logos:mysql',
        width: 30,
    },
    postgresql: {
        title: 'PostgreSQL',
        icon: 'logos:postgresql',
        width: 34,
    },
    git: {
        title: 'Git',
        icon: 'bi:git',
        width: 34,
    },
    python: {
        title: 'Python',
        icon: 'logos:python',
        width: 30,
    },
    csharp: {
        title: 'C#',
        icon: 'vscode-icons:file-type-csharp2',
        width: 35,
    },
    vue: {
        title: 'Vue',
        icon: 'logos:vue',
        width: 29,
    },
    redis: {
        title: 'Redis',
        icon: 'logos:redis',
        width: 30,
    },
    pygame: {
        title: 'pygame',
        icon: 'noto:snake',
        width: 34,
    },
    pyqt5: {
        title: 'PyQt5',
        icon: 'logos:qt',
        width: 25,
    },
    css: {
        title: 'CSS',
        icon: 'logos:css-3',
        width: 36,
    },
    java: {
        title: 'Java',
        icon: 'logos:java',
        width: 32,
    },
    symfony: {
        title: 'Symfony',
        icon: 'logos:symfony',
        width: 36,
    },
    docker: {
        title: 'Docker',
        icon: 'logos:docker-icon',
        width: 32,
    },
    phpunit: {
        title: 'PHPUnit',
        icon: 'vscode-icons:file-type-phpunit',
        width: 35,
    },
    typescript: {
        title: 'TypeScript',
        icon: 'skill-icons:typescript',
        width: 32,
    },
    microservices: {
        titleKey: 'technologyElement.microservices',
        icon: 'carbon:microservices-1',
        width: 32,
    },
    rabbitmq: {
        title: 'RabbitMQ',
        icon: 'logos:rabbitmq-icon',
        width: 29,
    },
    tailwind: {
        title: 'Tailwind',
        icon: 'logos:tailwindcss-icon',
        width: 25,
    },
    c: {
        title: 'C',
        icon: 'logos:c',
        width: 30,
    },
    linux: {
        title: 'Linux',
        icon: 'flat-color-icons:linux',
        width: 37,
    },
    nuxt: {
        title: 'Nuxt',
        icon: 'logos:nuxt-icon',
        width: 26,
    },
    gcp: {
        title: 'GCP',
        icon: 'catppuccin:gcp',
        width: 34,
    },
    kubernetes: {
        title: 'Kubernetes',
        icon: 'logos:kubernetes',
        width: 33,
    },
    golang: {
        title: 'Golang',
        icon: 'devicon:go',
        width: 31,
    },
    keydb: {
        title: 'KeyDB',
        icon: 'logos:keydb-icon',
        width: 34,
    },
    oraclesql: {
        title: 'Oracle SQL',
        icon: 'devicon:sqldeveloper',
        width: 32,
    },
    cpp: {
        title: 'C++',
        icon: 'vscode-icons:file-type-cpp3',
        width: 35,
    },
    elasticsearch: {
        title: 'Elasticsearch',
        icon: 'devicon:elasticsearch',
        width: 33,
    },
    react: {
        title: 'React',
        icon: 'devicon:react',
        width: 35,
    },
    next: {
        title: 'Next.js',
        icon: 'devicon:nextjs',
        width: 35,
    },
};
</script>

<template>
    <div
        :class="[
            $style.technologyElement,
            { [$style.technologyElementDarkTheme]: themeStore.isDark,
              [$style.technologyElementLightTheme]: themeStore.isLight }
        ]"
    >
        <div :class="$style.icon">
            <Icon
                :name="technologies[props.element].icon"
                :size="technologies[props.element].width"
            />
        </div>

        <span
            v-if="technologies[props.element].title"
            :class="$style.title"
        >{{ technologies[props.element].title }}
        </span>
        <span
            v-else
            :class="$style.title"
        >{{ $t(technologies[props.element].titleKey) }}
        </span>
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.technologyElement {
    display: flex;
    align-items: center;
    min-height: 3.2rem;
    padding: 0.2rem;
    border: solid @blue-color 0.1rem;
    border-radius: 1rem;

    transition: background-color ease @theme-switch-time;

    .icon {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
    }
    .title {
        padding: 0.5rem;
    }
}

.technologyElementDarkTheme {
    color: #dark[text-color];
    background-color: #dark[background-color-on-element];
}

.technologyElementLightTheme {
    color: #light[text-color];
    background-color: #light[background-color-on-element];
}
</style>
