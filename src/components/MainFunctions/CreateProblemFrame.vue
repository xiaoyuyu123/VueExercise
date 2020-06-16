<template>
    <div>
        <keep-alive>
            <component :is="probType" :handleClick="handleClick"></component>
        </keep-alive>
    </div>
</template>

<script>
    import CreateChoice from "@/components/MainFunctions/CreateChoice";
    import CreateInput from "@/components/MainFunctions/CreateInput";
    import CreateMulChoice from "@/components/MainFunctions/CreateMulChoice";
    import CreateNumberInput from "@/components/MainFunctions/CreateNumberInput";
    import CreateRate from "@/components/MainFunctions/CreateRate";
    export default {
        components:{
            CreateChoice,
            CreateInput,
            CreateMulChoice,
            CreateNumberInput,
            CreateRate,
        },
        name: "CreateProblemFrame",
        props: [
            'probType',
            'handleClick',
        ]
    }
</script>

<style scoped>

</style>