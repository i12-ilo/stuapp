<template>
  <div :class="flag ? (cls+' fix com') : (cls+' chang com')" v-if="show">{{msg}}</div>
</template>

<script>
export default {};
</script>

<style>
 .com {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 60px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .fix {
        top: 50px;
    }

    .chang {
        top: -100%;
        transition: .8s;
    }

    .correct {
        background-color: greenyellow;
    }

    .error {
        background-color: pink;
    }
</style>