<template>
  <article class="item">
    <h4>{{ category.nombre_cat }}</h4>
    <div class="item-icons">
      <Modal
        title="Actualizar categoría"
        image="edit"
        :idModal="`${category.nombre_cat}-${category.cod_cat}`"
      >
        <Form
          @get-categories="$emit('get-categories')"
          :idModal="`${category.nombre_cat}-${category.cod_cat}`"
          :nombre_cat="category.nombre_cat"
          :cod_cat="category.cod_cat"
        />
      </Modal>
      <img
        src="@/assets/trash-solid.svg"
        height="20px"
        @click="handlerDeleteCategory()"
      />
    </div>
    <Alert ref="alert"></Alert>
    <Confirm ref="confirm" @taken-decision="executeAction($event,deleteCategory)"></Confirm>
  </article>
</template>

<script>
import Form from "@/components/product-category/Form.vue";
import Modal from "@/components/Modal.vue";
import Alert from "@/components/Alert.vue";
import Confirm from "@/components/Confirm.vue"

export default {
  name: "categoryItem",
  props: ["category"],
  components: {
    Form,
    Modal,
    Alert,
    Confirm
  },
  methods: {
    async handlerDeleteCategory() {
      this.confirm("¿Seguro que quiere eliminar esta categoría?", "confirm");
    },
    async deleteCategory() {
      try {
        await this.$http.delete(`categories/${this.category.cod_cat}`);
        this.$emit("get-categories");
      } catch (error) {
        this.alert("warning", "Esta categoría tiene productos asignados, elimine o edite los productos para poder borrar satisfactoriamente la categoría");
      }
    },
    alert(alertType, alertMessage){
      this.$refs.alert.showAlert(alertType, alertMessage);
    },
    confirm(confirmMessage, confirmRefId){
      this.$refs[confirmRefId].showConfirm(confirmMessage);  
    },
    executeAction(takenDecision, functionToExecute){
      if(takenDecision){
        functionToExecute();
      }
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin: 1rem;
}

.item h4 {
  margin: 0;
  margin-left: 3rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.item-icons {
  display: flex;
  align-items: center;
}

.item-icons img {
  margin-right: 2rem;
  margin-left: 3rem;
}
</style>
