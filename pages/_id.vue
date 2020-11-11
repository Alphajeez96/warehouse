<template>
  <div class="main">
    <!-- Modal here -->
    <div>
      <edit v-bind:warehouse="WAREHOUSE" />
    </div>

    <div class="container">
      <div class="mt-4">
        <nuxt-link to="/">
          <el-button type="primary" icon="el-icon-arrow-left" plain
            >Back</el-button
          >
        </nuxt-link>
      </div>

      <div class="row mt-4">
        <!-- Map region here -->
        <div class="col-lg-7">
          <h1>MAP SHOULD BE HERE</h1>
        </div>

        <div class="col-lg-5">
          <!-- Cards here -->
          <transition name="el-fade-in">
            <div class="row">
              <div class="my-2 w-100">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span class="header">{{ WAREHOUSE.name }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                      <span
                        class="registered"
                        v-if="WAREHOUSE.is_registered === true"
                        >Registered</span
                      >
                      <span
                        class="not_registered"
                        v-if="WAREHOUSE.is_registered === false"
                        >Not Registered</span
                      >
                    </el-button>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Location:
                        <span class="value">{{ WAREHOUSE.city }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Cluster:
                        <span class="value">{{ WAREHOUSE.cluster }}</span>
                      </p>
                    </div>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Type: <span class="value">{{ WAREHOUSE.type }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Space Available:
                        <span class="value">{{
                          WAREHOUSE.space_available
                        }}</span>
                      </p>
                    </div>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Live Status:
                        <span class="value">{{ WAREHOUSE.is_live }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Code:
                        <span class="value">{{ WAREHOUSE.code }}</span>
                      </p>
                    </div>
                  </div>

                  <div class="text-center">
                    <el-button @click="openModal" type="text"
                      >Edit {{ WAREHOUSE.name }}</el-button
                    >
                  </div>
                </el-card>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import edit from "~/components/modals/edit-warehouse";
export default {
  layout: "Default",
  data() {
    return {};
  },
  components: {
    edit,
  },
  computed: {
    ...mapGetters("warehouse", ["WAREHOUSE"]),
  },
  mounted() {
    console.log({ warehouseGetters: this.WAREHOUSE });
  },
  methods: {
    openModal() {
      this.$bvModal.show("edit-modal");
    },
  },
};
</script>

<style scoped>
.border_left {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

</style>