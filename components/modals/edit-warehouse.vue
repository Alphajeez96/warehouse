<template>
  <div>
    <b-modal id="edit-modal" hide-footer="true" :title="warehouse.name">
      <form @submit.prevent="updateWarehouse">
        <!-- Name heres -->
        <div class="form-group">
          <label for="warhouse_name">Name</label>
          <input
            type="text"
            class="form-control"
            id="warhouse_name"
            placeholder=""
            v-model="payload.name"
          />
        </div>

        <!-- City here -->
        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder=""
            v-model="payload.city"
          />
        </div>

        <!-- Type here -->
        <div class="form-group">
          <label for="type">Name</label>
          <input
            type="text"
            class="form-control"
            id="type"
            placeholder=""
            v-model="payload.type"
          />
        </div>

        <!-- Space here -->
        <div class="form-group">
          <label for="space">Space Available</label>
          <input
            type="text"
            pattern="^[0-9]*$"
            class="form-control"
            id="space"
            placeholder=""
            v-model="payload.space_available"
          />
        </div>

        <div class="row">
          <!-- registration_status here -->
          <div class="col-lg-6">
            <div class="form-group">
              <label for="registration_status">Registration Status</label>
              <el-select v-model="payload.is_registered" placeholder="Select">
                <el-option value="true"> True </el-option>

                <el-option value="false"> False </el-option>
              </el-select>
            </div>
          </div>

          <!-- live_status here -->
          <div class="col-lg-6">
            <div class="form-group">
              <label for="live_status">Registration Status</label>
              <el-select v-model="payload.is_live" placeholder="Select">
                <el-option value="true"> True </el-option>

                <el-option value="false"> False </el-option>
              </el-select>
            </div>
          </div>
        </div>
        
        <div class="text-right mt-3">
          <el-button @click="hideModal" type="info button">Cancel</el-button>
          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    warehouse: Object,
  },
  data() {
    return {
      loading: false,
      payload: {
        name: "",
        city: "",
        type: "",
        space_available: "",
        is_registerred: null,
        is_live: null,
      },
      secretKey: "$2b$10$Skf92OMDupQhWCHTmdBmP.XrCL90N0b2Xd5cH0VrzhDMH24TqLFMm",
    };
  },
  mounted() {
    this.payload = this.warehouse;
  },

  methods: {
    async updateWarehouse() {
      try {
        this.loading = true;
        const response = await axios.put(
          "https://api.jsonbin.io/b/5fa97d9b48818715939e40ff",
          this.payload,
          {
            headers: {
              "secret-key": this.secretKey,
            },
          }
        );
        if ((response.success = true)) {
          this.$toast.success("Warehouse Updated Successfully");
          this.hideModal();
        }
      } catch (error) {
        this.$toast.error(error);
      }
    },
    hideModal() {
      this.$bvModal.hide("edit-modal");
    },
  },
};
</script>

<style scoped>
label {
  font-weight: 600;
}

.form-control:focus {
  border: 1px solid #223744;
  border-color: #223744;
  box-shadow: none;
}
.modal-footer {
  display: none !important;
}
</style>