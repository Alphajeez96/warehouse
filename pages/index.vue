<template>
  <div class="main">
    <!-- Search Bar here -->
    <div class="border_bottom justify-content-center d-flex">
      <div class="form-group col-lg-6 mt-3">
        <input
          type="search"
          class="form-control"
          placeholder="search for a warehouse..."
              v-model="searchQuery"
        />
      </div>
    </div>
    <main class="container mt-4">
      <h2>Hi, Good{{ greeting }}</h2>

      <!-- Filter badges here -->
      <div class="row mt-4">
        <badge class="ml-2" text="City"></badge>
        <badge text="Cluster"></badge>
        <badge text="Space Available"></badge>
      </div>

      <!-- Cards here -->
      <transition name="el-fade-in">
        <div class="mt-4 row">
          <div
            class="col-lg-4 my-2 display_cards"
            v-for="warehouse in resultQuery"
            :key="warehouse.id"
            @click="handleTempWarehouse(warehouse)"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="header">{{ warehouse.name }}</span>
                <el-button style="float: right; padding: 3px 0" type="text">
                  <span
                    class="registered"
                    v-if="warehouse.is_registered === true"
                    >Registered</span
                  >
                  <span
                    class="not_registered"
                    v-if="warehouse.is_registered === false"
                    >Not Registered</span
                  >
                </el-button>
              </div>
              <div class="text item d-flex">
                <div>
                  <p>
                    Location: <span class="value">{{ warehouse.city }}</span>
                  </p>
                </div>
                <div class="ml-auto">
                  <p>
                    Cluster: <span class="value">{{ warehouse.cluster }}</span>
                  </p>
                </div>
              </div>

              <div class="text item d-flex">
                <div>
                  <p>
                    Type: <span class="value">{{ warehouse.type }}</span>
                  </p>
                </div>
                <div class="ml-auto">
                  <p>
                    Space Available:
                    <span class="value">{{ warehouse.space_available }}</span>
                  </p>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import badge from "~/components/generic/badge";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: {
    badge,
  },
  data() {
    return {
  searchQuery:"",
      greeting: "",
      warehouses: [],
      secretKey: "$2b$10$Skf92OMDupQhWCHTmdBmP.XrCL90N0b2Xd5cH0VrzhDMH24TqLFMm",
    };
  },
  computed:{
  resultQuery() {
      if (this.searchQuery) {
        return this.warehouses.filter((warehouse) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => warehouse.name.toLowerCase().includes(v));
            
        });
      } else {
        return this.warehouses;
      }
    }
  },
  created() {
    this.greet();
    this.fetchWarehouses();
  },
  methods: {
    ...mapActions("warehouse", ["handleTempWarehouse"]),
    greet() {
      let time = new Date().getHours();

      if (time < 10) {
        this.greeting = "morning";
      } else if (time < 20) {
        this.greeting = "day";
      } else {
        this.greeting = "evening";
      }
    },

    async fetchWarehouses() {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/b/5fa97d9b48818715939e40ff",
          {
            headers: {
              "secret-key": this.secretKey,
            },
          }
        );

        this.warehouses = response.data;     
   this.$store.commit('warehouse/SAVE_WAREHOUSES_MUTATION', response.data)
      } catch (error) {
        console.log(error);
      }
    },

    handleTempWarehouse(warehouse) {
      this.$store.commit('warehouse/SAVE_TEMP_WAREHOUSE_MUTATION', warehouse)
      this.$router.push(`/${warehouse.name}`);
      console.log("clicked");
    }, 

  },
};
</script>

<style scoped>

.form-control {
    background: rgba(196, 196, 196, 0.15);
    border-radius: 30px;
    border: none;
    padding: 1.375rem 1.75rem;
}

.form-control:focus {
    border: 1px solid #223744;
    border-color: #223744;
    box-shadow: none;
}

.main {
  background: #fbfbfd;
  height: calc(100vh - 72px);
  overflow-y: scroll;
}
.border_bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

</style>
