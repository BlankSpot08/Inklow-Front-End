<template>
  <b-container class="">
    <b-row class="">
      <b-col cols="12" md="12" class="">
        <b-list-group>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  First Name
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.firstName"></b-form-input>
              <template #append>
                <b-button squared>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Last Name
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.lastName"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Gender
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.gender"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Birth Date
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.birthDate"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Username
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.username"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Password
                </b-input-group-text>
              </template>
              <b-form-input disabled placeholder="Private"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Email
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.email"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

          <b-list-group-item>
            <b-input-group>
              <template #prepend>
                <b-input-group-text>
                  Phone Number
                </b-input-group-text>
              </template>
              <b-form-input disabled v-bind:value="user.phoneNumber"></b-form-input>
              <template #append>
                <b-button>
                  Change
                </b-button>
              </template>
            </b-input-group>
          </b-list-group-item>

        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import User from '@/models/User'

export default {
  name: "Home",
  data() {
    return {
      user: new User()
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'))

    this.user = new User(user.firstName, user.lastName, user.gender, user.birthDate, user.username, user.password, user.email, user.phoneNumber)
  }

}
</script>

<style scoped>

</style>