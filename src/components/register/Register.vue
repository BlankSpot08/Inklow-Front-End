<template>
  <b-container>
    <RegisterLabel/>

    <b-form @submit.prevent="handleRegister">
      <b-row align-h="center">
        <b-col class="" cols="12" md="6">
          <div class="py-4">
            <b-progress class="" :value="progress" variant="success"></b-progress>
          </div>
        </b-col>
      </b-row>

      <b-container v-if="this.current_step===1" class="">
        <b-row align-h="center">
          <b-col cols="12" md="6" class="body">
            <b-form-group>
              <b-form-input name="firstName" v-model="user.firstName" type="text" size="lg" placeholder="First Name" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input name="lastName" v-model="user.lastName" type="text" size="lg" placeholder="Last Name" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-radio-group size="lg" required>
                <b-form-radio name="male" v-model="user.gender" value="Male" required>
                  Male
                </b-form-radio>
                <b-form-radio name="female" v-model="user.gender" value="Female" required>
                  Female
                </b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group>
              <b-form-datepicker name="birthDate" size="lg" v-model="user.birthDate" required>
              </b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="" align-h="center">
          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="button" size="lg" variant="" @click="onClickCancel" squared>Cancel</b-button>
            </b-form-group>
          </b-col>

          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="submit" size="lg" variant="" @click="onClickNext" squared>Next</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

      <b-container v-if="this.current_step===2" class="">
        <b-row align-h="center">
          <b-col cols="12" md="6" class="body">
            <b-form-group>
              <b-form-input name="username" v-model="user.username" size="lg"  type="text" placeholder="Username" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input name="password" v-model="user.password" size="lg" type="password" placeholder="Password" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input name="email" v-model="user.email" size="lg" type="email" placeholder="Email" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input name="phoneNumber" v-model="user.phoneNumber" size="lg" type="text" placeholder="Phone Number" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="" align-h="center">
          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="button" size="lg" variant="" @click="onClickBack" squared>Back</b-button>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="button" size="lg" variant="" @click="onClickNext" squared>Next</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

      <b-container v-if="this.current_step===3">
        <b-row align-h="center">
          <b-col cols="12" md="6" class="body">
            <b-form-checkbox name="termsAndAgreement" size="lg" required >
              I accept the terms and user
            </b-form-checkbox>

            <b-form-textarea
                size="lg"
                rows="4"
                readonly
                no-resize
                no-auto-shrink
                :value="termsAndAgreement"
            >
            </b-form-textarea>

            <b-form-checkbox name="privacy" size="lg" required>
              I accept the privacy agreement
            </b-form-checkbox>
            <b-form-textarea
                size="lg"
                rows="4"
                readonly
                no-resize
                no-auto-shrink
            >
            </b-form-textarea>

            <b-form-checkbox name="subscription" size="lg">
              I accept
            </b-form-checkbox>
            <b-form-textarea
                size="lg"
                rows="4"
                readonly
                no-resize
                no-auto-shrink
            >
            </b-form-textarea>
          </b-col>
        </b-row>

        <b-row class="" align-h="center">
          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="button" size="lg" variant="" @click="onClickBack" squared>Back</b-button>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="3">
            <b-form-group>
              <b-button class="w-100" type="submit" size="lg" variant="" squared>Register</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

    </b-form>
  </b-container>
</template>

<script>
import RegisterLabel from '@/components/register/RegisterLabel'

import User from '@/models/User'
import AuthService from '@/services/auth.service'

export default {
  name: "Register",
  components: {
    RegisterLabel
  },
  data() {
    return {
      user: new User(),
      max_step: 3,
      current_step: 1,
      termsAndAgreement: 'null at the moment'
    }
  },
  computed: {
    progress: function() {
      return (100 / this.max_step) * this.current_step;
    }
  },
  methods: {
    onClickCancel: function() {
      this.$router.push('/')
    },
    onClickNext: function() {
      this.current_step++;
    },
    onClickBack: function() {
      this.current_step--;
    },
    handleRegister: async function() {
      const user = await AuthService.user_registration(this.user)

      if (user) {
        console.log(user)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
  .body {
    min-height: 525px;
  }
</style>
