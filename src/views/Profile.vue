<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="description">Имя</label>
        <small class="helper-text invalid"
               v-if="$v.name.$dirty && !$v.name.required"
        >Введите имя</small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    metaInfo() {
      return {
        title: this.$title('Профиль')
      }
    },
    name: 'profile',
    data: () => ({
      name: ''
    }),
    mounted(){
      this.name = this.info.name
      setTimeout(() => {
        M.updateTextFields()
      },0)
    },
    computed: {
      ...mapGetters(['info'])
    },
    methods: {
      ...mapActions(['updateInfo']),
      async submitHandler(){
        if(this.$v.$invalid){
          this.$v.$touch()
          return
        }

        try{
          await this.updateInfo({
            name: this.name
          })
        } catch (e) {}
      }
    },
    validations: {
      name: {required}
    }
  }
</script>
