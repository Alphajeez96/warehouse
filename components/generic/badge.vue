<template>
  <div>
    <el-badge class="item mx-2" >
      <el-button size="small">{{ text }}</el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>